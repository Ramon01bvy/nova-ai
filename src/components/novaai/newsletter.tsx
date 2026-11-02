"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { contactSchema, makeEmailDraft } from "@/lib/contact-schema";

const schema = z.object({ email: z.string().trim().email("Vul een geldig e-mailadres in.") });

export function Newsletter() {
  const [sent, setSent] = useState(false);
  const [draft, setDraft] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });
  const submit = handleSubmit(async ({ email }) => {
    const data = contactSchema.parse({ kind: "newsletter", email });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) {
        setDraft(makeEmailDraft(data));
        toast.error(result.error || "Verzenden is niet gelukt.");
        return;
      }
      setSent(true);
      toast.success("Je nieuwsbriefaanvraag is verstuurd.");
    } catch {
      setDraft(makeEmailDraft(data));
      toast.error("Geen verbinding. Je aanvraag is niet verzonden.");
    }
  });
  if (sent) return <p role="status" className="text-xs text-green-400">Je nieuwsbriefaanvraag is verstuurd.</p>;
  return (
    <form className="flex flex-col gap-2" onSubmit={submit} noValidate>
      <Input {...register("email")} type="email" placeholder="jouw@email.com" aria-label="E-mailadres voor de nieuwsbrief" aria-invalid={!!errors.email} aria-describedby={errors.email ? "newsletter-error" : undefined} className="h-auto rounded border-white/20 bg-white/10 px-2 py-1.5 text-xs placeholder:text-white/40" />
      {errors.email && <p id="newsletter-error" role="alert" className="text-xs text-red-300">{errors.email.message}</p>}
      <Button type="submit" disabled={isSubmitting} aria-label="Aanmelden voor de nieuwsbrief" title="Aanmelden" variant="ghost" className="h-auto rounded border border-white/20 bg-white/20 px-2 py-1.5 text-white/80 hover:bg-white/30 hover:text-white">{isSubmitting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Mail className="h-3 w-3" />}</Button>
      {draft && <a href={draft} className="text-xs text-purple-300 underline">Open aanvraag in je e-mailapp</a>}
    </form>
  );
}
