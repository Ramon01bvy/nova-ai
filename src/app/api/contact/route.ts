import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Deze aanvraag is niet toegestaan." }, { status: 403 });
  }
  const raw = await request.text();
  if (raw.length > 20000) return NextResponse.json({ error: "Je bericht is te groot." }, { status: 413 });
  let payload: unknown;
  try { payload = JSON.parse(raw); } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }
  const result = contactSchema.safeParse(payload);
  if (!result.success) return NextResponse.json({ error: "Controleer de ingevulde velden." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json({ error: "De e-maildienst is nog niet ingesteld. Je bericht is niet verzonden. Je kunt hieronder een e-mailconcept openen." }, { status: 503 });
  }
  const data = result.data;
  const subjects = { demo: "Demo aanvragen", contact: "Contactaanvraag", interest: "Interesse in NovaAI", newsletter: "Nieuwsbrief aanvragen" };
  const text = [
    `Aanvraag: ${subjects[data.kind]}`, `Naam: ${data.name}`, `Bedrijf: ${data.company}`,
    `E-mailadres: ${data.email}`, `Onderwerp: ${data.topic}`, `Teamgrootte: ${data.team}`,
    `Voorkeursmoment: ${data.slot}`, `Plan: ${data.plan} (${data.billing})`, "", data.message,
  ].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: sender, to: [recipient], reply_to: data.email, subject: `NovaAI · ${subjects[data.kind]}`, text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return NextResponse.json({ error: "Verzenden is niet gelukt. Probeer het later opnieuw of open een e-mailconcept." }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "De e-maildienst is niet bereikbaar. Probeer opnieuw of open een e-mailconcept." }, { status: 502 });
  }
}
