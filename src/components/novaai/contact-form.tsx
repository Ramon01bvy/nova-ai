"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, ContactData, makeEmailDraft } from "@/lib/contact-schema";

export type RequestKind = "contact" | "demo" | "interest";

export function ContactForm({ kind, plan, billing, onClose }: { kind: RequestKind; plan: string; billing: "Maandelijks" | "Jaarlijks"; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.input<typeof contactSchema>, unknown, ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { kind, plan, billing, name: "", company: "", email: "", message: "", topic: "Enterprise-plan", team: "1–5 personen", slot: "Ochtend (09–12)", website: "" },
  });
  const submit = handleSubmit(async (data) => {
    setError("");
    setDraft("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Verzenden is niet gelukt. Je bericht is niet verzonden.");
        setDraft(makeEmailDraft(data));
        return;
      }
      setSent(true);
    } catch {
      setError("Geen verbinding met de e-maildienst. Je bericht is niet verzonden.");
      setDraft(makeEmailDraft(data));
    }
  });

  if (sent) return (
    <div className="py-4 text-center" role="status">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-400/40 bg-green-400/10 text-green-400"><Check /></div>
      <h3 className="mb-2 text-xl font-semibold">{kind === "demo" ? "Demo aangevraagd" : "Aanvraag verstuurd"}</h3>
      <p className="text-sm leading-relaxed text-white/60">Bedankt! De e-maildienst heeft je aanvraag geaccepteerd. Ons team neemt contact met je op via het ingevulde e-mailadres.</p>
      <Button onClick={onClose} className="mt-5 rounded-full bg-white text-black hover:bg-white/90">Sluiten</Button>
    </div>
  );

  const fields = [
    { name: "name" as const, label: "Naam", placeholder: "Sanne de Vries", autoComplete: "name", type: "text" },
    { name: "company" as const, label: "Bedrijfsnaam", placeholder: "Bedrijf B.V.", autoComplete: "organization", type: "text" },
    { name: "email" as const, label: "Zakelijk e-mailadres", placeholder: "sanne@bedrijf.nl", autoComplete: "email", type: "email" },
  ];
  const controlClass = "h-auto rounded-[11px] border-white/15 bg-white/[.045] px-[13px] py-[11px] text-[13.5px] text-white placeholder:text-white/30 focus-visible:ring-purple-400";
  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 min-[460px]:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.name === "email" ? "col-span-full space-y-1.5" : "space-y-1.5"}>
            <Label htmlFor={`contact-${field.name}`} className="text-xs font-medium text-white/60">{field.label}</Label>
            <Input id={`contact-${field.name}`} {...register(field.name)} type={field.type} autoComplete={field.autoComplete} placeholder={field.placeholder} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `error-${field.name}` : undefined} className={controlClass} />
            {errors[field.name] && <p id={`error-${field.name}`} className="text-xs text-red-300">{errors[field.name]?.message}</p>}
          </div>
        ))}
      </div>
      {kind === "contact" ? (
        <div className="space-y-1.5">
          <Label htmlFor="contact-topic" className="text-xs text-white/60">Onderwerp</Label>
          <select id="contact-topic" {...register("topic")} className={`w-full ${controlClass}`}>
            {["Enterprise-plan", "SSO / SAML", "Data residency (EU)", "Security & audit", "Partnership", "Iets anders"].map((topic) => <option key={topic} className="bg-[#151019]">{topic}</option>)}
          </select>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 min-[460px]:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="contact-team" className="text-xs text-white/60">Teamgrootte</Label>
            <select id="contact-team" {...register("team")} className={`w-full ${controlClass}`}>
              {["1–5 personen", "6–20 personen", "21–50 personen", "51–200 personen", "200+ personen"].map((team) => <option key={team} className="bg-[#151019]">{team}</option>)}
            </select>
          </div>
          {kind === "demo" && <div className="space-y-1.5"><Label htmlFor="contact-slot" className="text-xs text-white/60">Voorkeursmoment</Label><select id="contact-slot" {...register("slot")} className={`w-full ${controlClass}`}>{["Ochtend (09–12)", "Middag (12–17)", "Einde dag (17–19)"].map((slot) => <option key={slot} className="bg-[#151019]">{slot}</option>)}</select></div>}
        </div>
      )}
      <div className="space-y-1.5">
        <Label htmlFor="contact-message" className="text-xs text-white/60">{kind === "demo" ? "Welke tools wil je koppelen?" : "Bericht"}</Label>
        <Textarea id="contact-message" {...register("message")} placeholder={kind === "demo" ? "Bijv. HubSpot, Slack, Google Sheets…" : "Waar kunnen we je mee helpen?"} aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined} className={`min-h-[88px] ${controlClass}`} />
        {errors.message && <p id="error-message" className="text-xs text-red-300">{errors.message.message}</p>}
      </div>
      <input {...register("website")} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {kind === "interest" && <p className="text-xs text-white/50">Geselecteerd: <strong className="text-white">{plan}</strong> · {plan === "Gratis" ? "$0" : billing === "Jaarlijks" ? "$31" : "$39"} / maand · {billing.toLowerCase()}. Dit is een interesseaanvraag; er wordt geen account of abonnement aangemaakt.</p>}
      {error && <div role="alert" className="rounded-lg border border-red-400/25 bg-red-400/5 p-3 text-xs leading-relaxed text-red-200">{error}</div>}
      <Button type="submit" disabled={isSubmitting} className="mt-1 h-auto w-full rounded-full bg-white px-[18px] py-3 text-sm font-semibold text-black hover:bg-white/90">{isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Even geduld…</> : <>{kind === "demo" ? "Demo aanvragen" : kind === "interest" ? "Interesse versturen" : "Bericht versturen"}<ArrowRight className="h-4 w-4" /></>}</Button>
      {draft && <Button asChild variant="outline" className="h-auto rounded-full border-purple-300/30 bg-transparent py-3 text-purple-200 hover:bg-purple-500/10"><a href={draft}><Mail className="h-4 w-4" /> Open e-mailconcept</a></Button>}
      <p className="mt-1 text-[11px] leading-relaxed text-white/40">Je gegevens worden alleen gebruikt om je aanvraag te behandelen. Een e-mailconcept opent in je eigen e-mailapp en moet je daar zelf verzenden.</p>
    </form>
  );
}
