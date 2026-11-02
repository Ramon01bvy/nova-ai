"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent, type KeyboardEvent } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, SlidersHorizontal, Sparkles } from "lucide-react";
import { ContactForm, type RequestKind } from "./contact-form";
import legal from "@/data/legal.json";

type Modal = RequestKind | "login" | "tour" | "docs" | keyof typeof legal;
const links = [["features", "Functies"], ["how-it-works", "Hoe het werkt"], ["pricing", "Prijzen"], ["testimonials", "Ervaringen"], ["faq", "FAQ"]];
const legalLinks: Record<string, keyof typeof legal> = { Privacy: "privacy", Voorwaarden: "terms", Toegankelijkheid: "accessibility", Restitutiebeleid: "refund" };

export function NovaInteractions({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<Modal | null>(null);
  const [plan, setPlan] = useState("Pro");
  const [billing, setBilling] = useState<"Maandelijks" | "Jaarlijks">("Maandelijks");
  const tabClasses = useRef({ on: "", off: "" });
  const billingClasses = useRef({ on: "", off: "" });

  function selectTab(index: number, focus = false) {
    const tabs = root.current?.querySelectorAll<HTMLButtonElement>('#features [role="tab"]');
    const panes = root.current?.querySelectorAll<HTMLElement>("#features [data-pane]");
    tabs?.forEach((tab, i) => {
      tab.className = i === index ? tabClasses.current.on : tabClasses.current.off;
      tab.setAttribute("aria-selected", String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      if (focus && i === index) tab.focus();
    });
    panes?.forEach((pane, i) => { pane.hidden = i !== index; });
  }

  function open(kind: Modal, trigger?: HTMLElement, selectedPlan = "Pro") {
    returnFocus.current = trigger || (document.activeElement as HTMLElement);
    setPlan(selectedPlan);
    setMenuOpen(false);
    setModal(kind);
  }

  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const nav = page.querySelector("nav");
    const tabs = page.querySelectorAll<HTMLButtonElement>('#features [role="tab"]');
    if (tabs.length) {
      tabClasses.current = { on: tabs[0].className, off: tabs[1].className };
      tabs.forEach((tab, i) => {
        tab.id = `feature-tab-${i}`;
        tab.setAttribute("aria-controls", `feature-panel-${i}`);
        tab.setAttribute("aria-label", ["AI-intelligentie", "Realtime analyses", "Workflowbouwer"][i]);
      });
      page.querySelectorAll<HTMLElement>("#features [data-pane]").forEach((pane, i) => {
        pane.id = `feature-panel-${i}`;
        pane.setAttribute("aria-labelledby", `feature-tab-${i}`);
        pane.tabIndex = 0;
      });
    }
    page.querySelectorAll<HTMLButtonElement>("[data-faq-question]").forEach((question, i) => {
      question.id = `faq-question-${i}`;
      document.getElementById(question.getAttribute("aria-controls") || "")?.setAttribute("aria-labelledby", question.id);
    });
    const buttons = [...page.querySelectorAll<HTMLButtonElement>("#pricing button")].filter((b) => /Maandelijks|Jaarlijks/.test(b.textContent || ""));
    if (buttons.length === 2) {
      billingClasses.current = { on: buttons[0].className, off: buttons[1].className };
      buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(i === 0)));
    }
    const carousel = page.querySelector<HTMLElement>("#testimonials .overflow-x-auto");
    if (carousel) {
      carousel.tabIndex = 0;
      carousel.setAttribute("role", "region");
      carousel.setAttribute("aria-label", "Ervaringen van teams; scroll horizontaal of gebruik de pijltjestoetsen.");
    }
    const scroll = () => {
      if (nav) nav.setAttribute("data-scrolled", String(window.scrollY > 24));
      let active = "";
      links.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < 160) active = id;
      });
      page.querySelectorAll<HTMLAnchorElement>("nav a").forEach((anchor) => {
        const selected = anchor.getAttribute("href") === `#${active}`;
        if (selected) anchor.setAttribute("aria-current", "location");
        else anchor.removeAttribute("aria-current");
      });
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    const button = root.current?.querySelector<HTMLButtonElement>('nav button[aria-controls="mm"]');
    button?.setAttribute("aria-expanded", String(menuOpen));
    button?.setAttribute("aria-label", menuOpen ? "Menu sluiten" : "Menu");
    if (!menuOpen) return;
    const dismiss = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#mm, nav button[aria-controls="mm"]')) setMenuOpen(false);
    };
    const key = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); button?.focus(); }
    };
    document.addEventListener("click", dismiss);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("click", dismiss); document.removeEventListener("keydown", key); };
  }, [menuOpen]);

  function click(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (!root.current?.contains(target)) return;
    const button = target.closest<HTMLButtonElement>("button");
    const anchor = target.closest<HTMLAnchorElement>("a");
    const element = button || anchor;
    if (!element) return;
    const text = element.textContent?.replace(/\s+/g, " ").trim() || "";
    if (element.matches('nav button[aria-controls="mm"]')) { setMenuOpen((value) => !value); return; }
    if (element.hasAttribute("data-faq-question")) {
      const expanded = element.getAttribute("aria-expanded") !== "true";
      element.setAttribute("aria-expanded", String(expanded));
      const answer = document.getElementById(element.getAttribute("aria-controls") || "");
      if (answer) answer.hidden = !expanded;
      element.querySelector("b")?.classList.toggle("rotate-45", expanded);
      return;
    }
    if (element.getAttribute("role") === "tab") {
      selectTab([...root.current.querySelectorAll('#features [role="tab"]')].indexOf(element));
      return;
    }
    if (button?.closest("#pricing") && /Maandelijks|Jaarlijks/.test(text)) {
      const yearly = text.includes("Jaarlijks");
      setBilling(yearly ? "Jaarlijks" : "Maandelijks");
      const buttons = [...root.current.querySelectorAll<HTMLButtonElement>("#pricing button")].filter((b) => /Maandelijks|Jaarlijks/.test(b.textContent || ""));
      buttons.forEach((b, i) => {
        const selected = i === (yearly ? 1 : 0);
        b.className = selected ? billingClasses.current.on : billingClasses.current.off;
        b.setAttribute("aria-pressed", String(selected));
      });
      const price = root.current.querySelector("#price-pro");
      if (price) price.textContent = yearly ? "$31" : "$39";
      return;
    }
    if (text === "Boek een demo") { event.preventDefault(); open("demo", element); return; }
    if (text === "Neem contact op") { event.preventDefault(); open("contact", element); return; }
    if (text === "Inloggen") { event.preventDefault(); open("login", element); return; }
    if (["Gratis beginnen", "Start Pro-proefperiode", "Probeer NovaAI gratis"].includes(text)) {
      event.preventDefault(); open("interest", element, text === "Gratis beginnen" ? "Gratis" : "Pro"); return;
    }
    if (legalLinks[text]) { event.preventDefault(); open(legalLinks[text], element); return; }
    if (text === "Documentatie") { event.preventDefault(); open("docs", element); return; }
    if (["Toepassen", "Bekijken", "Gebruiken"].includes(text) || element.getAttribute("aria-label") === "Bekijk het NovaAI-dashboard") {
      event.preventDefault(); open("tour", element); return;
    }
    if (anchor?.getAttribute("href")?.startsWith("#")) {
      const href = anchor.getAttribute("href")!;
      if (href === "#") { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }
      setMenuOpen(false);
    }
  }

  function keydown(event: KeyboardEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.getAttribute("role") === "tab") {
      const tabs = [...(root.current?.querySelectorAll('#features [role="tab"]') || [])];
      const i = tabs.indexOf(target);
      const next = event.key === "ArrowRight" ? (i + 1) % tabs.length : event.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1;
      if (next >= 0) { event.preventDefault(); selectTab(next, true); }
    }
    if (target.matches("#testimonials .overflow-x-auto") && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault(); target.scrollBy({ left: event.key === "ArrowRight" ? 380 : -380, behavior: "smooth" });
    }
  }

  const isLegal = modal !== null && modal in legal;
  const legalContent = isLegal ? legal[modal as keyof typeof legal] : null;
  const isForm = modal === "contact" || modal === "demo" || modal === "interest";
  const title = legalContent?.title || (modal === "demo" ? "Boek een demo van 30 minuten" : modal === "contact" ? "Neem contact op" : modal === "interest" ? plan === "Gratis" ? "Begin gratis" : "Start je Pro-proefperiode" : modal === "docs" ? "Aan de slag met NovaAI" : modal === "tour" ? "Zo werkt het dashboard" : "Inloggen bij NovaAI");
  const description = modal === "demo" ? "Een productspecialist laat je live zien hoe NovaAI jouw processen automatiseert — afgestemd op jouw stack." : modal === "contact" ? "Voor organisaties met specifieke eisen op het gebied van schaal, security of compliance." : modal === "interest" ? "14 dagen gratis proberen. Geen creditcard nodig, altijd maandelijks opzegbaar. Laat weten dat je interesse hebt." : modal === "login" ? "Dit is de NovaAI-marketingwebsite. Gebruikersaccounts en het workflowplatform zijn hier niet aangesloten." : modal === "docs" ? "De belangrijkste gidsen om je eerste workflows live te zetten." : modal === "tour" ? "Een overzicht van de functies uit de productdemonstratie." : "Juridische informatie uit het aangeleverde ontwerp.";

  return (
    <div ref={root} onClick={click} onKeyDown={keydown}>
      <a href="#main-content" className="sr-only z-[300] rounded-b-lg bg-white px-4 py-3 text-black focus:not-sr-only focus:absolute focus:left-0 focus:top-0">Direct naar de inhoud</a>
      {children}
      <nav id="mm" hidden={!menuOpen} aria-label="Mobiele navigatie" className="fixed left-3 right-3 top-[72px] z-[60] flex flex-col rounded-2xl border border-white/15 bg-black/95 p-2.5 backdrop-blur-md xl:hidden">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-lg px-4 py-3.5 text-sm text-white/75 hover:bg-white/5">{label}</a>)}
        <button onClick={(event) => open("login", event.currentTarget)} className="border-t border-white/10 px-4 py-3 text-left text-sm">Inloggen</button>
        <Button onClick={(event) => open("interest", event.currentTarget)} className="mt-1 rounded-lg bg-white text-black hover:bg-white/90">Aan de slag</Button>
      </nav>
      <Dialog open={modal !== null} onOpenChange={(value) => { if (!value) setModal(null); }}>
        <DialogContent onCloseAutoFocus={(event) => { event.preventDefault(); const burger = root.current?.querySelector<HTMLElement>('nav button[aria-controls="mm"]'); if (returnFocus.current?.closest("#mm")) burger?.focus({ preventScroll: true }); else returnFocus.current?.focus({ preventScroll: true }); }} className={`max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] gap-3 overflow-y-auto rounded-[22px] border-white/15 bg-[linear-gradient(160deg,#141019_0%,#0a080d_60%,#08070a_100%)] p-7 text-white shadow-2xl ${isLegal ? "max-w-[640px]" : "max-w-[480px]"}`}>
          <span className="mb-1 flex items-center gap-2 text-[10.5px] uppercase tracking-[.18em] text-purple-300"><i className="h-1.5 w-1.5 rounded-full bg-purple-500" />{isLegal ? "Juridisch" : modal === "demo" ? "Persoonlijke demo" : modal === "contact" ? "Enterprise" : modal === "docs" ? "Documentatie" : modal === "tour" ? "Producttour" : modal === "login" ? "Welkom terug" : "Start met NovaAI"}</span>
          <DialogTitle className="pr-7 text-[23px] leading-tight">{title}</DialogTitle>
          <DialogDescription className="mb-2 text-[13.5px] leading-relaxed text-white/60">{description}</DialogDescription>
          {isForm && <ContactForm key={`${modal}-${plan}`} kind={modal as RequestKind} plan={plan} billing={billing} onClose={() => setModal(null)} />}
          {modal === "login" && <div className="space-y-4"><p className="text-sm leading-relaxed text-white/60">Er worden geen inloggegevens gevraagd of opgeslagen. Wil je het platform bekijken? Vraag een persoonlijke demo aan.</p><Button onClick={() => setModal("demo")} className="w-full rounded-full bg-white text-black hover:bg-white/90">Boek een demo <ArrowRight className="h-4 w-4" /></Button></div>}
          {legalContent && <div className="space-y-2 text-[13px] leading-relaxed text-white/60">{legalContent.blocks.map((block, i) => block.type === "h3" ? <h3 key={i} className="pt-3 font-semibold text-white">{block.text}</h3> : <p key={i} className={block.type === "li" ? "pl-3" : ""}>{block.type === "li" ? "• " : ""}{block.text}</p>)}<a href="mailto:hallo@nova.ai" className="inline-block pt-2 text-purple-300 underline">hallo@nova.ai</a></div>}
          {modal === "docs" && <div className="space-y-2">{[["how-it-works", "Quickstart: je eerste workflow in 10 minuten", "Gids"], ["features", "Integraties koppelen (200+ tools)", "Gids"], ["features", "AI-suggesties en auto-optimalisatie", "Gids"], ["pricing", "Plannen, limieten en facturatie", "Referentie"], ["faq", "Veelgestelde vragen", "FAQ"]].map(([id, label, type]) => <a key={label} href={`#${id}`} onClick={() => setModal(null)} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.03] px-3.5 py-3 text-[13px] hover:bg-purple-500/10">{label}<span className="text-[11px] text-white/40">{type}</span></a>)}<p className="pt-3 text-[11px] text-white/40">Dit is een demo-omgeving. De volledige API-referentie verschijnt bij de publieke launch.</p></div>}
          {modal === "tour" && <div className="space-y-4">{[[Database, "Koppel je data", "Koppel je CRM’s, databases en spreadsheets op één plek."], [SlidersHorizontal, "Stel je parameters in", "Bepaal de doelen voor je workflow en ontvang AI-suggesties."], [Sparkles, "Krijg inzichten", "Volg doorlooptijd, foutpercentage en tijdsbesparing in realtime."]].map(([Icon, heading, text]) => { const TourIcon = Icon as typeof Database; return <div key={String(heading)} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4"><TourIcon className="h-5 w-5 shrink-0 text-purple-300" /><div><h3 className="mb-1 text-sm font-semibold">{heading as string}</h3><p className="text-xs leading-relaxed text-white/60">{text as string}</p></div></div>; })}<p className="text-[11px] text-white/40">Dit is een visuele productdemonstratie, geen aangesloten AI-workflow.</p><Button onClick={() => setModal("demo")} className="w-full rounded-full bg-white text-black hover:bg-white/90">Vraag een persoonlijke demo aan</Button></div>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
