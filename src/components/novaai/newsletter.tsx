"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactSchema, makeEmailDraft } from "@/lib/contact-schema";

const schema = z.object({ email: z.string().trim().email("Vul een geldig e-mailadres in.") });

export function Newsletter() {
  const [draft, setDraft] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });
  const submit = handleSubmit(({ email }) => {
    const data = contactSchema.parse({ kind: "newsletter", email });
    const emailDraft = makeEmailDraft(data);
    setDraft(emailDraft);
    window.location.assign(emailDraft);
  });
  return (
    <form className="flex flex-col gap-2" onSubmit={submit} onChange={() => setDraft("")} noValidate>
      <Input {...register("email")} type="email" placeholder="jouw@email.com" aria-label="E-mailadres voor de nieuwsbrief" aria-invalid={!!errors.email} aria-describedby={errors.email ? "newsletter-error" : undefined} className="h-auto rounded border-white/20 bg-white/10 px-2 py-1.5 text-xs placeholder:text-white/40" />
      {errors.email && <p id="newsletter-error" role="alert" className="text-xs text-red-300">{errors.email.message}</p>}
      <Button type="submit" disabled={isSubmitting} aria-label="Open e-mailconcept voor een nieuwsbriefaanvraag" title="Open e-mailconcept" variant="ghost" className="h-auto rounded border border-white/20 bg-white/20 px-2 py-1.5 text-white/80 hover:bg-white/30 hover:text-white">{isSubmitting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Mail className="h-3 w-3" />}</Button>
      <p className="text-[11px] leading-relaxed text-white/40">Opent een concept in je eigen e-mailapp. Verzend het zelf om een aanvraag te doen; je wordt niet automatisch aangemeld.</p>
      {draft && <div role="status" className="space-y-1 text-xs text-purple-300"><p>Je concept is klaar, maar nog niet verzonden.</p><a href={draft} className="inline-block underline">E-mailconcept opnieuw openen</a></div>}
    </form>
  );
}
