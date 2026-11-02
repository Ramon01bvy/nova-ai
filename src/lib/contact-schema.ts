import { z } from "zod";

export const contactSchema = z.object({
  kind: z.enum(["contact", "demo", "interest", "newsletter"]),
  name: z.string().trim().max(150).default(""),
  company: z.string().trim().max(150).default(""),
  email: z.string().trim().email("Vul een geldig e-mailadres in.").max(254),
  topic: z.string().trim().max(100).default("Enterprise-plan"),
  message: z.string().trim().max(5000, "Gebruik maximaal 5.000 tekens.").default(""),
  team: z.string().max(100).default("1–5 personen"),
  slot: z.string().max(100).default("Ochtend (09–12)"),
  plan: z.string().max(50).default("Pro"),
  billing: z.enum(["Maandelijks", "Jaarlijks"]).default("Maandelijks"),
  website: z.string().max(0).default(""),
}).superRefine((data, context) => {
  if (data.kind !== "newsletter") {
    for (const field of ["name", "company"] as const) {
      if (!data[field]) context.addIssue({ code: "custom", path: [field], message: "Dit veld is verplicht." });
    }
  }
  if (data.kind === "contact" && !data.message) {
    context.addIssue({ code: "custom", path: ["message"], message: "Vul je bericht in." });
  }
});

export type ContactData = z.infer<typeof contactSchema>;

export function makeEmailDraft(data: ContactData) {
  const subject = data.kind === "demo" ? "Demo aanvragen" : data.kind === "interest" ? `Interesse in ${data.plan}` : data.kind === "newsletter" ? "Nieuwsbrief aanvragen" : data.topic;
  const body = [`Naam: ${data.name}`, `Bedrijf: ${data.company}`, `E-mail: ${data.email}`, `Teamgrootte: ${data.team}`, `Voorkeursmoment: ${data.slot}`, `Plan: ${data.plan} · ${data.billing}`, "", data.message].join("\n");
  return `mailto:hallo@nova.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
