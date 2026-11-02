import { Newsletter } from "./newsletter";

export function OriginalPage() {
return (
<div id="root">
<div className="min-h-screen bg-black text-white overflow-x-hidden">
<nav className="data-[scrolled=true]:bg-black/75 data-[scrolled=true]:backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent" >
<div className="px-6 py-4 flex items-center justify-between relative">
<a href="#" className="flex items-center" aria-label="NovaAI – naar boven">
<span className="[display:inline-flex] [align-items:center] [gap:10px]" >
<img className="[width:32px] [height:32px] [border-radius:8px] [object-fit:cover] [box-shadow:0_0_14px_rgba(138,43,255,.45)]" src="/assets/novaai-logo.svg" alt="NOVA AI logo" width="32" height="32"  />
<span className="[font-weight:700] [letter-spacing:.2em] [font-size:14px] [color:#fff] [font-family:var(--font-body)]" >NOVA.AI</span>
</span>
</a>
<div className="hidden xl:flex items-center gap-1 px-1 py-1 rounded-full backdrop-blur-md absolute left-1/2 -translate-x-1/2 transition-colors duration-300 bg-white/10">
<a href="#features" className="px-4 py-2 text-sm transition-colors duration-300 rounded-full tracking-wide font-body text-white/60 hover:text-white hover:bg-white/5">Functies</a>
<a href="#how-it-works" className="px-4 py-2 text-sm transition-colors duration-300 rounded-full tracking-wide font-body text-white/60 hover:text-white hover:bg-white/5">Hoe het werkt</a>
<a href="#pricing" className="px-4 py-2 text-sm transition-colors duration-300 rounded-full tracking-wide font-body text-white/60 hover:text-white hover:bg-white/5">Prijzen</a>
<a href="#testimonials" className="px-4 py-2 text-sm transition-colors duration-300 rounded-full tracking-wide font-body text-white/60 hover:text-white hover:bg-white/5">Ervaringen</a>
<a href="#faq" className="px-4 py-2 text-sm transition-colors duration-300 rounded-full tracking-wide font-body text-white/60 hover:text-white hover:bg-white/5">FAQ</a>
</div>
<div className="hidden xl:flex items-center gap-3">
<button className="px-5 py-2.5 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide bg-transparent border-none cursor-pointer">Inloggen</button>
<a href="#pricing" className="group relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full tracking-wide overflow-hidden bg-white text-black transition-colors duration-300 hover:text-white">
<span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full [background:linear-gradient(135deg,rgb(233,213,255)_0%,rgb(216,180,254)_25%,rgb(196,181,253)_50%,rgb(221,214,254)_75%,rgb(233,213,255)_100%)_0%_0%/400%_400%] animate-organic-gradient" >
</span>
<span className="relative z-10 text-black">Aan de slag</span>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right relative z-10 w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform">
<path d="M5 12h14">
</path>
<path d="m12 5 7 7-7 7">
</path>
</svg>
</a>
</div>
<button className="xl:hidden text-white/80 hover:text-white" aria-label="Menu" aria-expanded="false" aria-controls="mm">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
<line x1="4" x2="20" y1="12" y2="12">
</line>
<line x1="4" x2="20" y1="6" y2="6">
</line>
<line x1="4" x2="20" y1="18" y2="18">
</line>
</svg>
</button>
</div>
</nav>
<main id="main-content" tabIndex={-1}>
<section className="relative h-[100svh] min-h-[560px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 w-full h-full opacity-80 [background:url(/assets/hero-background.svg)_center/cover_no-repeat]" >
</div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30">
</div>
<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none">
</div>
<div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
<div className="flex flex-col items-center gap-2">
<div >
<div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm mb-8 w-fit">
<svg aria-hidden={true} className="pointer-events-none absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 32" preserveAspectRatio="none">
<defs>
<linearGradient id="shimmer-grad" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" stopColor="rgba(255,255,255,0)">
</stop>
<stop offset="15%" stopColor="rgba(255,255,255,0.13)">
</stop>
<stop offset="50%" stopColor="rgba(255,255,255,0.13)">
</stop>
<stop offset="85%" stopColor="rgba(255,255,255,0.13)">
</stop>
<stop offset="100%" stopColor="rgba(255,255,255,0)">
</stop>
</linearGradient>
<linearGradient id="shimmer-fade" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" stopColor="white" stopOpacity="0">
</stop>
<stop offset="12%" stopColor="white" stopOpacity="1">
</stop>
<stop offset="88%" stopColor="white" stopOpacity="1">
</stop>
<stop offset="100%" stopColor="white" stopOpacity="0">
</stop>
</linearGradient>
<mask id="shimmer-mask">
<rect x="0" y="0" width="300" height="32" fill="url(#shimmer-fade)">
</rect>
</mask>
</defs>
<rect className="[stroke:rgba(255,255,255,.10)]" x="0.5" y="0.5" width="299" height="31" rx="16" ry="16" fill="none" strokeWidth="1" stroke="url(#shimmer-grad)">
</rect>
<g mask="url(#shimmer-mask)">
<rect className="[stroke-dasharray:50_610] animate-border-shimmer [filter:blur(3px)]" x="0.5" y="0.5" width="299" height="31" rx="16" ry="16" fill="none" stroke="rgba(200,180,255,0.10)" strokeWidth="5" strokeLinecap="round" >
</rect>
<rect className="[stroke-dasharray:50_610] animate-border-shimmer" x="0.5" y="0.5" width="299" height="31" rx="16" ry="16" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1" strokeLinecap="round">
</rect>
</g>
</svg>
<div className="w-2 h-2 rounded-full bg-violet animate-pulse">
</div>
<span className="text-xs text-white/70 tracking-wider font-body uppercase">Nu in openbare bèta — 14 dagen gratis</span>
</div>
</div>
<h1 className="font-heading text-[34px] sm:text-[48px] md:text-[54px] lg:text-[64px] font-semibold leading-[1.08] bg-[linear-gradient(135deg,#fff_0%,#fff_20%,#e9d5ff_40%,#d8b4fe_50%,#e9d5ff_60%,#fff_80%,#fff_100%)] bg-[length:400%_400%] bg-clip-text text-transparent animate-organic-gradient pb-2 sm:pb-4 [letter-spacing:-0.02em] [mix-blend-mode:screen] [filter:brightness(1.1)]" >Geautomatiseerde workflows,<br />aangedreven door AI</h1>
</div>
<p className="font-body text-sm sm:text-base text-white/80 mb-6 sm:mb-10 mt-3 sm:mt-4 leading-relaxed max-w-lg font-medium" >Automatiseer je workflows. Lever sneller op. <br className="md:hidden" />Maak minder fouten.</p>
<div >
<a href="#pricing" className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:bg-white/90 transition-all duration-300 tracking-wide shadow-lg shadow-white/10">Boek een demo<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform">
<path d="M5 12h14">
</path>
<path d="m12 5 7 7-7 7">
</path>
</svg>
</a>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2" >
<div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
<div className="w-1 h-2 rounded-full bg-white/40" >
</div>
</div>
</div>
</section>
<section className="relative py-12 md:py-20 px-4 md:px-6">
<div className="max-w-6xl mx-auto">
<div className="relative w-full max-w-4xl mx-auto" >
<div className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl p-1 shadow-2xl shadow-black/50 aspect-square md:aspect-[16/9] overflow-hidden group">
<div className="absolute -inset-32 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 blur-3xl pointer-events-none" >
</div>
<div className="relative rounded-2xl bg-gradient-to-br from-black/80 via-black/90 to-black/95 overflow-hidden h-full flex flex-col border border-white/5">
<div className="flex items-center gap-2 px-3 md:px-5 py-2.5 md:py-4 border-b border-white/5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500" >
</div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500">
</div>
<span className="ml-4 text-xs text-white/40 font-body tracking-wide">NovaAI-dashboard</span>
</div>
<div className="p-3 md:p-6 flex-1 flex flex-col gap-3 md:gap-5 overflow-hidden">
<div className="grid grid-cols-3 gap-2 md:gap-3" >
<div className="col-span-2 h-7 md:h-10 rounded-lg bg-gradient-to-r from-primary/40 via-primary/25 to-accent/35 border border-white/5" >
</div>
<div className="h-7 md:h-10 rounded-lg bg-gradient-to-br from-accent/50 to-primary/35 border border-white/5" >
</div>
</div>
<div className="grid grid-cols-4 gap-2 md:gap-3" >
<div className="relative h-10 md:h-20 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 flex flex-col items-center justify-center gap-1 md:gap-2 overflow-hidden" >
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/80 to-accent/60">
</div>
<div className="w-[65%] h-1.5 rounded-full bg-white/30">
</div>
</div>
<div className="relative h-10 md:h-20 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 flex flex-col items-center justify-center gap-1 md:gap-2 overflow-hidden" >
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/80 to-accent/60">
</div>
<div className="w-[65%] h-1.5 rounded-full bg-white/30">
</div>
</div>
<div className="relative h-10 md:h-20 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 flex flex-col items-center justify-center gap-1 md:gap-2 overflow-hidden" >
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/80 to-accent/60">
</div>
<div className="w-[65%] h-1.5 rounded-full bg-white/30">
</div>
</div>
<div className="relative h-10 md:h-20 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 flex flex-col items-center justify-center gap-1 md:gap-2 overflow-hidden" >
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/80 to-accent/60">
</div>
<div className="w-[65%] h-1.5 rounded-full bg-white/30">
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 md:gap-4 flex-1 min-h-0" >
<div className="col-span-2 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 p-2 md:p-5 flex flex-col" >
<div className="flex gap-1 md:gap-1.5 items-end flex-1">
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:40%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:65%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:45.0064%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:79.8834%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:54.6065%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:72.0938%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:84.173%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:61.1174%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:75%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:85%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:60.5198%]" >
</div>
<div className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent opacity-80 [height:69.7383%]" >
</div>
</div>
</div>
<div className="rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 p-2 md:p-4 flex flex-col justify-between" >
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-primary/80" >
</div>
<div className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-white/25 to-white/10">
</div>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-primary/80" >
</div>
<div className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-white/25 to-white/10">
</div>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-primary/80" >
</div>
<div className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-white/25 to-white/10">
</div>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-primary/80" >
</div>
<div className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-white/25 to-white/10">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-2/3 h-28 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent blur-3xl rounded-full pointer-events-none" >
</div>
</div>
</div>
</section>
<section className="relative py-16 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center" >
<p className="text-sm text-white/50 tracking-widest uppercase font-body mb-3">Vertrouwd door 5.000+ teams wereldwijd</p>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<span className="text-xs text-white/60 ml-1.5">4,9/5 op G2</span>
</div>
</div>
</div>
</section>
<section className="relative py-16 md:py-28 overflow-hidden">
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-16" >
<span className="tracking-widest uppercase text-violet font-body mb-4 block text-sm">HET PROBLEEM</span>
<h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-normal mb-4">Je team verdient beter</h2>
<p className="text-white/50 max-w-xl mx-auto [font-family:'Vend_Sans',_sans-serif]">Handmatige processen sluipen stilletjes het potentieel van je team leeg.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-20">
<div className="p-6 rounded-2xl border border-white/[0.10] bg-white/[0.02] backdrop-blur-sm hover:border-red-500/20 transition-colors group" >
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-red-400/80">
<circle cx="12" cy="12" r="10">
</circle>
<polyline points="12 6 12 12 16 14">
</polyline>
</svg>
</div>
<h3 className="font-heading text-lg font-semibold text-white mb-2">Uren handmatig werk</h3>
<p className="text-sm text-white/50 font-body leading-relaxed">Teams verspillen wekelijks 15+ uur aan repetitieve taken die geautomatiseerd kunnen worden.</p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.10] bg-white/[0.02] backdrop-blur-sm hover:border-red-500/20 transition-colors group" >
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shuffle w-5 h-5 text-red-400/80">
<path d="m18 14 4 4-4 4">
</path>
<path d="m18 2 4 4-4 4">
</path>
<path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22">
</path>
<path d="M2 6h1.972a4 4 0 0 1 3.6 2.2">
</path>
<path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45">
</path>
</svg>
</div>
<h3 className="font-heading text-lg font-semibold text-white mb-2">Versnipperde databronnen</h3>
<p className="text-sm text-white/50 font-body leading-relaxed">Cruciale inzichten staan in 10 verschillende tools en zijn niet samen te brengen.</p>
</div>
<div className="p-6 rounded-2xl border border-white/[0.10] bg-white/[0.02] backdrop-blur-sm hover:border-red-500/20 transition-colors group" >
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-5 h-5 text-red-400/80">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3">
</path>
<path d="M12 9v4">
</path>
<path d="M12 17h.01">
</path>
</svg>
</div>
<h3 className="font-heading text-lg font-semibold text-white mb-2">Kostbare menselijke fouten</h3>
<p className="text-sm text-white/50 font-body leading-relaxed">Handmatige overdrachten veroorzaken fouten die duizenden euro’s kosten aan herstelwerk en misgelopen deals.</p>
</div>
</div>
<div className="flex justify-center mb-20">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet/20 to-electric-blue/20 border border-white/20 flex items-center justify-center" >
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6 text-violet rotate-90">
<path d="M5 12h14">
</path>
<path d="m12 5 7 7-7 7">
</path>
</svg>
</div>
</div>
<div className="relative">
<h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center">Eén platform. Nul handmatig werk.</h3>
<div className="relative p-8 md:p-12 rounded-3xl border border-violet/40 bg-gradient-to-br from-violet/[0.15] to-electric-blue/[0.10] overflow-hidden" >
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet/15 to-transparent pointer-events-none">
</div>
<div className="relative z-10 grid md:grid-cols-3 gap-8 items-start">
<div className="md:col-span-1 space-y-4">
<div className="p-3 rounded-2xl bg-violet/20 border border-violet/30" >
<p className="text-sm text-white font-body leading-relaxed">Een compleet overzicht van je taken, deadlines en prioriteiten, allemaal op één plek.</p>
</div>
<div className="w-12 h-12 rounded-lg bg-orange-500/80 flex items-center justify-center" >
<svg aria-hidden={true} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2891 2.66058C18.7885 -0.886861 24.4554 -0.886861 27.955 2.66058C31.4545 6.20803 31.4545 11.9526 27.955 15.5L15.2891 2.66058Z" fill="white">
</path>
<path d="M27.955 15.5C31.4545 19.0474 31.4545 24.7919 27.955 28.3395C24.4554 31.8868 18.7885 31.8868 15.2891 28.3395L27.955 15.5Z" fill="white">
</path>
<path d="M15.2905 28.3395C11.791 31.8868 6.12413 31.8868 2.62463 28.3395C-0.874876 24.7919 -0.874876 19.0474 2.62463 15.5L15.2905 28.3395Z" fill="white">
</path>
<path d="M2.62463 15.5C-0.874876 11.9526 -0.874876 6.20803 2.62463 2.66058C6.12413 -0.886861 11.791 -0.886861 15.2905 2.66058L2.62463 15.5Z" fill="white">
</path>
</svg>
</div>
</div>
<div className="md:col-span-1" >
<a aria-label="Bekijk het NovaAI-dashboard" className="relative mx-auto max-w-xs rounded-2xl border border-violet/30 bg-white/[0.08] backdrop-blur-sm p-2 shadow-2xl shadow-violet/20 block hover:shadow-violet/40 transition-shadow duration-300" href="#pricing">
<div className="rounded-xl bg-gradient-to-br from-black via-black/90 to-black/85 overflow-hidden">
<div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
<div className="w-2 h-2 rounded-full bg-red-500">
</div>
<div className="w-2 h-2 rounded-full bg-yellow-500">
</div>
<div className="w-2 h-2 rounded-full bg-green-500">
</div>
<span className="ml-2 text-xs text-white/40 font-body">Dashboard</span>
</div>
<div className="p-4 min-h-[200px] space-y-3">
<div className="space-y-2">
<div className="h-4 rounded bg-white/20 w-3/4">
</div>
<div className="h-3 rounded bg-violet/30 w-1/2">
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="h-12 rounded-lg bg-white/[0.15] border border-white/25">
</div>
<div className="h-12 rounded-lg bg-white/[0.15] border border-white/25">
</div>
<div className="h-12 rounded-lg bg-white/[0.15] border border-white/25">
</div>
<div className="h-12 rounded-lg bg-white/[0.15] border border-white/25">
</div>
</div>
<div className="h-20 rounded-lg bg-white/[0.12] border border-white/25">
</div>
</div>
</div>
</a>
</div>
<div className="md:col-span-1 space-y-4">
<div className="p-5 rounded-2xl bg-electric-blue/20 border border-electric-blue/30" >
<p className="text-sm text-white font-body leading-relaxed">Realtime samenwerking en direct teamcontact in één naadloze interface.</p>
</div>
<div className="flex gap-2" >
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet/40 to-electric-blue/40 border border-white/10">
</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet/40 to-electric-blue/40 border border-white/10">
</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet/40 to-electric-blue/40 border border-white/10">
</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet/40 to-electric-blue/40 border border-white/10">
</div>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10" >
<p className="font-body leading-relaxed text-center max-w-lg mx-auto text-[hsl(var(--foreground))]">NovaAI verbindt al je databronnen, automatiseert repetitieve workflows en levert realtime inzichten — dat scheelt wekelijks 15+ uur handmatig werk en voorkomt kostbare fouten in je hele pipeline.</p>
</div>
</div>
</div>
</div>
</section>
<section id="features" className="relative py-16 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16" >
<span className="text-xs tracking-widest uppercase text-violet font-body mb-4 block">Functies</span>
<h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Alles wat je nodig hebt <br className="md:hidden" />om te groeien</h2>
<p className="text-gray-600 max-w-xl mx-auto font-body">Drie krachtige toolsets, één naadloze ervaring.</p>
</div>
<div className="flex justify-center mb-12">
<div className="inline-flex p-1 rounded-full border border-gray-300 bg-gray-100 backdrop-blur-sm" role="tablist">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 tracking-wide bg-white text-black shadow-lg border border-gray-200" role="tab" aria-selected="true" tabIndex={0}>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-4 h-4">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
</path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
</path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4">
</path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375">
</path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5">
</path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396">
</path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396">
</path>
<path d="M6 18a4 4 0 0 1-1.967-.516">
</path>
<path d="M19.967 17.484A4 4 0 0 1 18 18">
</path>
</svg>
<span className="hidden sm:inline">AI-intelligentie</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 tracking-wide text-gray-600 hover:text-gray-800" role="tab" aria-selected="false" tabIndex={-1}>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-4 h-4">
<path d="M3 3v16a2 2 0 0 0 2 2h16">
</path>
<path d="M18 17V9">
</path>
<path d="M13 17V5">
</path>
<path d="M8 17v-3">
</path>
</svg>
<span className="hidden sm:inline">Realtime analyses</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 tracking-wide text-gray-600 hover:text-gray-800" role="tab" aria-selected="false" tabIndex={-1}>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow w-4 h-4">
<rect width="8" height="8" x="3" y="3" rx="2">
</rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4">
</path>
<rect width="8" height="8" x="13" y="13" rx="2">
</rect>
</svg>
<span className="hidden sm:inline">Workflowbouwer</span>
</button>
</div>
</div>
<div data-pane="0" role="tabpanel">
<div className="grid md:grid-cols-2 gap-10 items-center" >
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/30 mb-6">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3 h-3 text-violet">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
<span className="text-xs text-violet font-medium tracking-wider">Bespaart 4 uur per week</span>
</div>
<h3 className="font-heading text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Slimme automatisering die leert</h3>
<p className="text-gray-700 font-body leading-relaxed mb-8">Onze modellen herkennen je patronen en stellen proactief optimalisaties voor — dat scheelt je team wekelijks 4+ uur op terugkerende taken.</p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-violet">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
</div>
<span className="text-sm text-gray-700 font-body">Zelfoptimaliserende pipelines</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4 text-violet">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
</svg>
</div>
<span className="text-sm text-gray-700 font-body">Ingebouwde anomaliedetectie</span>
</div>
</div>
</div>
<div>
<div className="rounded-2xl border border-gray-300 bg-gray-100 p-6 backdrop-blur-sm">
<div className="space-y-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-300">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet/20 to-violet/10 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-5 h-5 text-violet">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
</path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
</path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4">
</path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375">
</path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5">
</path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396">
</path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396">
</path>
<path d="M6 18a4 4 0 0 1-1.967-.516">
</path>
<path d="M19.967 17.484A4 4 0 0 1 18 18">
</path>
</svg>
</div>
<div className="flex-1">
<div className="text-xs text-gray-600 mb-1">AI-suggestie</div>
<div className="text-sm text-gray-900">“Voeg stap 3-5 samen: 12 min/run bespaard”</div>
</div>
<div className="px-3 py-1 rounded-full bg-violet/10 text-xs text-violet border border-violet/20">Toepassen</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Patroonmatch</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Anomaliescan</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Auto-optimalisatie</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Voorspellen</div>
</div>
</div>
<div className="h-2 rounded-full bg-gray-300 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-violet to-electric-blue [width:78%]" >
</div>
</div>
<div className="text-xs text-gray-600 text-right">Optimalisatiescore: 78%</div>
</div>
</div>
</div>
</div>
</div>
<div data-pane="1" hidden={true} role="tabpanel">
<div className="grid md:grid-cols-2 gap-10 items-center" >
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/30 mb-6">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3 h-3 text-violet">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
<span className="text-xs text-violet font-medium tracking-wider">Altijd actueel inzicht</span>
</div>
<h3 className="font-heading text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Dashboards die live meebewegen</h3>
<p className="text-gray-700 font-body leading-relaxed mb-8">Zie precies wat er gebeurt in je workflows, terwijl het gebeurt. Geen exports meer en geen verouderde rapporten.</p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-violet">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
</div>
<span className="text-sm text-gray-700 font-body">Realtime data uit al je tools</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4 text-violet">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
</svg>
</div>
<span className="text-sm text-gray-700 font-body">Meldingen bij afwijkingen</span>
</div>
</div>
</div>
<div>
<div className="rounded-2xl border border-gray-300 bg-gray-100 p-6 backdrop-blur-sm">
<div className="space-y-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-300">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet/20 to-violet/10 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-5 h-5 text-violet">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
</path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
</path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4">
</path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375">
</path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5">
</path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396">
</path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396">
</path>
<path d="M6 18a4 4 0 0 1-1.967-.516">
</path>
<path d="M19.967 17.484A4 4 0 0 1 18 18">
</path>
</svg>
</div>
<div className="flex-1">
<div className="text-xs text-gray-600 mb-1">AI-suggestie</div>
<div className="text-sm text-gray-900">“Doorlooptijd +18% deze week: stap 4 vertraagt”</div>
</div>
<div className="px-3 py-1 rounded-full bg-violet/10 text-xs text-violet border border-violet/20">Bekijken</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Doorlooptijd</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Foutpercentage</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Acties per uur</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Tijdsbesparing</div>
</div>
</div>
<div className="h-2 rounded-full bg-gray-300 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-violet to-electric-blue [width:64%]" >
</div>
</div>
<div className="text-xs text-gray-600 text-right">Teamefficiëntie: 64%</div>
</div>
</div>
</div>
</div>
</div>
<div data-pane="2" hidden={true} role="tabpanel">
<div className="grid md:grid-cols-2 gap-10 items-center" >
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/30 mb-6">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3 h-3 text-violet">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
<span className="text-xs text-violet font-medium tracking-wider">Geen code nodig</span>
</div>
<h3 className="font-heading text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Bouw workflows in minuten</h3>
<p className="text-gray-700 font-body leading-relaxed mb-8">Sleep, koppel en klaar. Met de visuele workflowbouwer zet je ook complexe processen op zonder een regel code.</p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-violet">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
</div>
<span className="text-sm text-gray-700 font-body">Visuele drag-and-drop editor</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4 text-violet">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
</svg>
</div>
<span className="text-sm text-gray-700 font-body">200+ kant-en-klare integraties</span>
</div>
</div>
</div>
<div>
<div className="rounded-2xl border border-gray-300 bg-gray-100 p-6 backdrop-blur-sm">
<div className="space-y-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-300">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet/20 to-violet/10 flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-5 h-5 text-violet">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
</path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
</path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4">
</path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375">
</path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5">
</path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396">
</path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396">
</path>
<path d="M6 18a4 4 0 0 1-1.967-.516">
</path>
<path d="M19.967 17.484A4 4 0 0 1 18 18">
</path>
</svg>
</div>
<div className="flex-1">
<div className="text-xs text-gray-600 mb-1">AI-suggestie</div>
<div className="text-sm text-gray-900">“Nieuwe lead → CRM → welkomstmail”</div>
</div>
<div className="px-3 py-1 rounded-full bg-violet/10 text-xs text-violet border border-violet/20">Gebruiken</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Triggers</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Voorwaarden</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Acties</div>
</div>
<div className="p-3 rounded-lg bg-white border border-gray-300 text-center">
<div className="w-6 h-6 rounded-full bg-violet/10 mx-auto mb-2">
</div>
<div className="text-xs text-gray-700">Testen</div>
</div>
</div>
<div className="h-2 rounded-full bg-gray-300 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-violet to-electric-blue [width:92%]" >
</div>
</div>
<div className="text-xs text-gray-600 text-right">Workflow gereed: 92%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section id="how-it-works" className="relative py-16 md:py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20" >
<span className="text-xs tracking-widest uppercase text-violet font-body mb-4 block">Hoe het werkt</span>
<h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-normal mb-4">Binnen enkele minuten aan de slag</h2>
<p className="text-white/50 max-w-xl mx-auto font-body">Drie eenvoudige stappen om je hele workflow te transformeren.</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-px">
<div className="w-full h-full bg-gradient-to-r from-transparent via-violet/30 to-transparent">
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12">
<div className="text-center relative group" >
<div className="relative w-20 h-20 mx-auto mb-8">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet/20 to-electric-blue/10 border border-violet/50 group-hover:border-violet/80 transition-colors">
</div>
<div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-7 h-7 text-violet">
<ellipse cx="12" cy="5" rx="9" ry="3">
</ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5">
</path>
<path d="M3 12A9 3 0 0 0 21 12">
</path>
</svg>
</div>
<div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-violet to-electric-blue flex items-center justify-center">
<span className="text-[10px] font-bold text-white">01</span>
</div>
</div>
<h3 className="font-heading text-xl font-semibold text-white mb-3">Koppel je data</h3>
<p className="text-sm text-white/50 font-body leading-relaxed max-w-xs mx-auto">Koppel je bestaande tools met één klik — CRM’s, databases, spreadsheets en 200+ integraties.</p>
</div>
<div className="text-center relative group" >
<div className="relative w-20 h-20 mx-auto mb-8">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet/20 to-electric-blue/10 border border-violet/50 group-hover:border-violet/80 transition-colors">
</div>
<div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal w-7 h-7 text-violet">
<line x1="21" x2="14" y1="4" y2="4">
</line>
<line x1="10" x2="3" y1="4" y2="4">
</line>
<line x1="21" x2="12" y1="12" y2="12">
</line>
<line x1="8" x2="3" y1="12" y2="12">
</line>
<line x1="21" x2="16" y1="20" y2="20">
</line>
<line x1="12" x2="3" y1="20" y2="20">
</line>
<line x1="14" x2="14" y1="2" y2="6">
</line>
<line x1="8" x2="8" y1="10" y2="14">
</line>
<line x1="16" x2="16" y1="18" y2="22">
</line>
</svg>
</div>
<div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-violet to-electric-blue flex items-center justify-center">
<span className="text-[10px] font-bold text-white">02</span>
</div>
</div>
<h3 className="font-heading text-xl font-semibold text-white mb-3">Stel je parameters in</h3>
<p className="text-sm text-white/50 font-body leading-relaxed max-w-xs mx-auto">Bepaal je doelen en laat NovaAI de optimale automatiseringsstrategie voor je workflow instellen.</p>
</div>
<div className="text-center relative group" >
<div className="relative w-20 h-20 mx-auto mb-8">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet/20 to-electric-blue/10 border border-violet/50 group-hover:border-violet/80 transition-colors">
</div>
<div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-7 h-7 text-violet">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
</path>
<path d="M20 3v4">
</path>
<path d="M22 5h-4">
</path>
<path d="M4 17v2">
</path>
<path d="M5 18H3">
</path>
</svg>
</div>
<div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-violet to-electric-blue flex items-center justify-center">
<span className="text-[10px] font-bold text-white">03</span>
</div>
</div>
<h3 className="font-heading text-xl font-semibold text-white mb-3">Krijg inzichten op automatische piloot</h3>
<p className="text-sm text-white/50 font-body leading-relaxed max-w-xs mx-auto">Zie realtime dashboards vollopen terwijl AI-gestuurde pipelines het zware werk doen.</p>
</div>
</div>
</div>
</div>
</section>
<section id="pricing" className="relative py-16 md:py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16" >
<span className="text-xs tracking-widest uppercase text-violet font-body mb-4 block">Prijzen</span>
<h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Eenvoudige, transparante prijzen</h2>
<p className="text-white/50 max-w-xl mx-auto font-body mb-8">Begin gratis, upgrade wanneer je er klaar voor bent. Geen verborgen kosten.</p>
<div className="inline-flex items-center gap-3 p-1 rounded-full border border-white/20 bg-white/[0.03]">
<button className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white text-black" aria-pressed="true">Maandelijks</button>
<button className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/50 hover:text-white/80" aria-pressed="false">Jaarlijks<span className="text-xs px-2 py-0.5 rounded-full bg-violet text-white">Bespaar 20%</span>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="relative rounded-2xl p-8 transition-all duration-300 border border-white/[0.20] bg-white/[0.02] hover:border-white/10" >
<div className="mb-6">
<h3 className="font-heading text-xl font-semibold text-white mb-2">Gratis</h3>
<p className="text-sm text-white/50 font-body">Voor particulieren die AI-automatisering verkennen.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="font-heading text-5xl font-bold text-white">$0</span>
<span className="text-white/50 text-sm">/maand</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 tracking-wide mb-8 group disabled:opacity-50 disabled:cursor-not-allowed border border-white/15 text-white/80 hover:bg-white/5 hover:text-white">Gratis beginnen<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
<path d="M5 12h14">
</path>
<path d="m12 5 7 7-7 7">
</path>
</svg>
</button>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Tot 3 workflows</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">500 AI-acties per maand</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Basisanalyses</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Communitysupport</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">1 teamlid</span>
</div>
</div>
</div>
<div className="relative rounded-2xl p-8 transition-all duration-300 border-2 border-violet/40 bg-gradient-to-b from-violet/[0.08] to-transparent scale-[1.02] md:scale-105 shadow-xl shadow-violet/10" >
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
<div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-violet to-electric-blue text-xs font-semibold text-white tracking-wider">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-3 h-3">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
</path>
<path d="M20 3v4">
</path>
<path d="M22 5h-4">
</path>
<path d="M4 17v2">
</path>
<path d="M5 18H3">
</path>
</svg>Populairst</div>
</div>
<div className="mb-6">
<h3 className="font-heading text-xl font-semibold text-white mb-2">Pro</h3>
<p className="text-sm text-white/50 font-body">Voor groeiende teams die krachtige automatisering nodig hebben.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="font-heading text-5xl font-bold text-white">
<span id="price-pro">$39</span>
</span>
<span className="text-white/50 text-sm">/maand</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 tracking-wide mb-8 group disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10">Start Pro-proefperiode<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
<path d="M5 12h14">
</path>
<path d="m12 5 7 7-7 7">
</path>
</svg>
</button>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-violet/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-violet">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Onbeperkt workflows</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-violet/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-violet">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">25.000 AI-acties per maand</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-violet/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-violet">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Geavanceerde analyses &amp; rapporten</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-violet/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-violet">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Prioriteitssupport</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-violet/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-violet">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Tot 25 teamleden</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-violet/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-violet">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Maatwerkintegraties</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-violet/20">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-violet">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">API-toegang</span>
</div>
</div>
</div>
<div className="relative rounded-2xl p-8 transition-all duration-300 border border-white/[0.20] bg-white/[0.02] hover:border-white/10" >
<div className="mb-6">
<h3 className="font-heading text-xl font-semibold text-white mb-2">Enterprise</h3>
<p className="text-sm text-white/50 font-body">Voor organisaties met specifieke wensen.</p>
</div>
<div className="mb-8">
<div className="font-heading text-3xl font-bold text-white">Op maat</div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 tracking-wide mb-8 group border border-white/15 text-white/80 hover:bg-white/5 hover:text-white">Neem contact op<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
<path d="M5 12h14">
</path>
<path d="m12 5 7 7-7 7">
</path>
</svg>
</button>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Alles uit Pro</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Onbeperkte acties</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Persoonlijke accountmanager</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Maatwerk SLA</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">SSO &amp; SAML</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">Auditlogs</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white/50">
<path d="M20 6 9 17l-5-5">
</path>
</svg>
</div>
<span className="text-sm text-white/50 font-body">On-premise implementatie</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section id="testimonials" className="relative py-16 md:py-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16">
<div className="text-center" >
<span className="text-xs tracking-widest uppercase text-violet font-body mb-4 block">Ervaringen</span>
<h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Geliefd bij teams overal</h2>
<p className="text-white/50 max-w-xl mx-auto font-body">Lees wat de teams zeggen die met NovaAI de toekomst bouwen.</p>
</div>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10">
</div>
<div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10">
</div>
<div className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab touch-pan-x">
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“Onze pipelinefouten met 94% verminderd”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">NovaAI verving 6 verschillende tools en 20 uur handmatig werk per week. Ons engineeringteam richt zich eindelijk op bouwen, niet op het bewaken van scripts.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-purple-600 flex items-center justify-center text-xs font-bold text-white">SC</div>
<div>
<div className="text-sm font-medium text-white">Sarah Chen</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“ROI binnen de eerste week”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">We waren sceptisch over weer een AI-tool, maar de resultaten spraken voor zich. 3x snellere dataverwerking en nul configuratie van onze kant.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-blue-600 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div>
<div className="text-sm font-medium text-white">Marcus Rivera</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“Het automatiseringsplatform dat we altijd nodig hadden”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">Ons team van 8 werkt nu met de efficiëntie van 30. De workflowbouwer van NovaAI is intuïtief en de AI-suggesties zijn echt bruikbaar.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet flex items-center justify-center text-xs font-bold text-white">EW</div>
<div>
<div className="text-sm font-medium text-white">Emily Watkins</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“Enterprise-kwaliteit, startup-snelheid”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">Veiligheid was onze grootste zorg. De SOC 2-certificering en on-prem-optie van NovaAI maakten het makkelijk te verkopen aan onze board. De snelheid was mooi meegenomen.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-electric-blue flex items-center justify-center text-xs font-bold text-white">DP</div>
<div>
<div className="text-sm font-medium text-white">David Park</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“Onze pipelinefouten met 94% verminderd”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">NovaAI verving 6 verschillende tools en 20 uur handmatig werk per week. Ons engineeringteam richt zich eindelijk op bouwen, niet op het bewaken van scripts.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-purple-600 flex items-center justify-center text-xs font-bold text-white">SC</div>
<div>
<div className="text-sm font-medium text-white">Sarah Chen</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“ROI binnen de eerste week”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">We waren sceptisch over weer een AI-tool, maar de resultaten spraken voor zich. 3x snellere dataverwerking en nul configuratie van onze kant.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-blue-600 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div>
<div className="text-sm font-medium text-white">Marcus Rivera</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“Het automatiseringsplatform dat we altijd nodig hadden”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">Ons team van 8 werkt nu met de efficiëntie van 30. De workflowbouwer van NovaAI is intuïtief en de AI-suggesties zijn echt bruikbaar.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet flex items-center justify-center text-xs font-bold text-white">EW</div>
<div>
<div className="text-sm font-medium text-white">Emily Watkins</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-[280px] md:w-[380px] p-6 rounded-2xl border border-violet/40 bg-transparent hover:border-violet/60 transition-colors duration-500" >
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-yellow-400 text-yellow-400">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
<p className="font-heading text-base font-semibold text-white mb-3">“Enterprise-kwaliteit, startup-snelheid”</p>
<p className="text-sm text-white/50 font-body leading-relaxed mb-6">Veiligheid was onze grootste zorg. De SOC 2-certificering en on-prem-optie van NovaAI maakten het makkelijk te verkopen aan onze board. De snelheid was mooi meegenomen.</p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-electric-blue flex items-center justify-center text-xs font-bold text-white">DP</div>
<div>
<div className="text-sm font-medium text-white">David Park</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section id="faq" className="bg-black text-white px-6 py-24 [&_h2]:text-center [&_h2]:text-[clamp(30px,5vw,48px)] [&_h2]:font-bold [&_h2]:tracking-[-.02em] [&_h2]:mb-12">
<div className="max-w-[700px] mx-auto">
<span className="block text-center text-xs tracking-[.2em] uppercase text-violet mb-3.5">FAQ</span>
<h2>Veelgestelde vragen</h2>
<div className="border-b border-white/[.12]">
<button data-faq-question="true" type="button" className="w-full flex justify-between items-center gap-4 text-white font-semibold text-base text-left py-[22px] px-1 [&_b]:text-[22px] [&_b]:font-normal [&_b]:text-violet [&_b]:transition-transform" aria-expanded="false" aria-controls="fq-a-0">
<span>Is er echt een gratis versie?</span>
<b>+</b>
</button>
<div hidden={true} className="text-white/60 text-[15px] leading-relaxed [&_p]:px-1 [&_p]:pb-[22px]" id="fq-a-0" role="region">
<p>Ja! Het Gratis-plan is permanent beschikbaar met 3 workflows en 500 AI-acties per maand. Geen creditcard vereist.</p>
</div>
</div>
<div className="border-b border-white/[.12]">
<button data-faq-question="true" type="button" className="w-full flex justify-between items-center gap-4 text-white font-semibold text-base text-left py-[22px] px-1 [&_b]:text-[22px] [&_b]:font-normal [&_b]:text-violet [&_b]:transition-transform" aria-expanded="false" aria-controls="fq-a-1">
<span>Welke tools kan ik koppelen?</span>
<b>+</b>
</button>
<div hidden={true} className="text-white/60 text-[15px] leading-relaxed [&_p]:px-1 [&_p]:pb-[22px]" id="fq-a-1" role="region">
<p>NovaAI ondersteunt 200+ integraties, waaronder Salesforce, HubSpot, Slack, Notion, Google Sheets, Postgres — en via API en Zapier duizenden andere tools.</p>
</div>
</div>
<div className="border-b border-white/[.12]">
<button data-faq-question="true" type="button" className="w-full flex justify-between items-center gap-4 text-white font-semibold text-base text-left py-[22px] px-1 [&_b]:text-[22px] [&_b]:font-normal [&_b]:text-violet [&_b]:transition-transform" aria-expanded="false" aria-controls="fq-a-2">
<span>Waar wordt mijn data opgeslagen?</span>
<b>+</b>
</button>
<div hidden={true} className="text-white/60 text-[15px] leading-relaxed [&_p]:px-1 [&_p]:pb-[22px]" id="fq-a-2" role="region">
<p>Standaard in EU-datacenters, volledig AVG-conform met dagelijkse versleutelde back-ups. Enterprise-klanten kunnen kiezen voor on-premise implementatie.</p>
</div>
</div>
<div className="border-b border-white/[.12]">
<button data-faq-question="true" type="button" className="w-full flex justify-between items-center gap-4 text-white font-semibold text-base text-left py-[22px] px-1 [&_b]:text-[22px] [&_b]:font-normal [&_b]:text-violet [&_b]:transition-transform" aria-expanded="false" aria-controls="fq-a-3">
<span>Kan ik maandelijks opzeggen?</span>
<b>+</b>
</button>
<div hidden={true} className="text-white/60 text-[15px] leading-relaxed [&_p]:px-1 [&_p]:pb-[22px]" id="fq-a-3" role="region">
<p>Ja, alle abonnementen zijn maandelijks opzegbaar. Bij jaarlijks betalen krijg je 20% korting, maar behoud je dezelfde flexibiliteit.</p>
</div>
</div>
</div>
</section>
<section className="relative py-16 md:py-28 overflow-hidden">
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div >
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/20 bg-violet/5 mb-8">
<div className="w-2 h-2 rounded-full bg-violet animate-pulse">
</div>
<span className="text-xs text-violet tracking-wider font-body uppercase">Klaar om je workflow te transformeren?</span>
</div>
<h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-normal mb-6 leading-tight">Stop met beheren. <br />
<span className="bg-[linear-gradient(135deg,#a855f7,#818cf8,#7c3aed,#c084fc,#60a5fa,#a855f7)] bg-[length:400%_400%] bg-clip-text text-transparent animate-organic-gradient">Begin met automatiseren.</span>
</h2>
<p className="text-base text-white/50 font-body max-w-xl mx-auto mb-10">Je concurrenten automatiseren al. Bespaar wekelijks 15+ uur. Begin nu gratis — geen creditcard nodig.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a href="#pricing" className="group flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full text-base font-semibold hover:bg-white/90 transition-all duration-300 tracking-wide shadow-lg shadow-white/10">Probeer NovaAI gratis<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform">
<path d="M5 12h14">
</path>
<path d="m12 5 7 7-7 7">
</path>
</svg>
</a>
</div>
</div>
</div>
</section>
</main>
<footer className="py-10 md:pb-20">
<div className="px-6 flex flex-col h-full">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-32 mb-12 flex-1">
<div className="flex flex-col flex-shrink-0 md:w-[280px]">
<div className="mb-3">
<span className="[display:inline-flex] [align-items:center] [gap:10px]" >
<img className="[width:32px] [height:32px] [border-radius:8px] [object-fit:cover] [box-shadow:0_0_14px_rgba(138,43,255,.45)]" src="/assets/novaai-logo.svg" alt="NOVA AI logo" width="32" height="32"  />
<span className="[font-weight:700] [letter-spacing:.2em] [font-size:14px] [color:#fff] [font-family:var(--font-body)]" >NOVA.AI</span>
</span>
</div>
<p className="text-sm text-white/50 font-body">Automatiseer je workflows met slimme AI.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-auto">
<div className="flex flex-col gap-4">
<h3 className="text-sm font-semibold text-white/80 tracking-wide uppercase font-body">Product</h3>
<div className="flex flex-col gap-3 text-sm text-white/50 font-body">
<a href="#features" className="hover:text-white/80 transition-colors">Functies</a>
<a href="#pricing" className="hover:text-white/80 transition-colors">Prijzen</a>
<a href="#faq" className="hover:text-white/80 transition-colors">FAQ</a>
<a href="#documentatie" className="hover:text-white/80 transition-colors">Documentatie</a>
</div>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-sm font-semibold text-white/80 tracking-wide uppercase font-body">Juridisch</h3>
<div className="flex flex-col gap-3 text-sm text-white/50 font-body">
<a href="#privacy" className="hover:text-white/80 transition-colors">Privacy</a>
<a href="#terms" className="hover:text-white/80 transition-colors">Voorwaarden</a>
<a href="#accessibility" className="hover:text-white/80 transition-colors">Toegankelijkheid</a>
<a href="#refund" className="hover:text-white/80 transition-colors">Restitutiebeleid</a>
</div>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-sm font-semibold text-white/80 tracking-wide uppercase font-body">Social</h3>
<div className="flex flex-col gap-3">
<a href="https://x.com/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors font-body" target="_blank" rel="noopener noreferrer" aria-label="Twitter (opent in nieuw tabblad)">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-4 h-4">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg>Twitter</a>
<a href="https://www.linkedin.com/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors font-body" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opent in nieuw tabblad)">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-4 h-4">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
</path>
<rect width="4" height="12" x="2" y="9">
</rect>
<circle cx="4" cy="4" r="2">
</circle>
</svg>LinkedIn</a>
<a href="https://www.instagram.com/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors font-body" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opent in nieuw tabblad)">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4 h-4">
<rect width="20" height="20" x="2" y="2" rx="5" ry="5">
</rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
</path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5">
</line>
</svg>Instagram</a>
<a href="https://github.com/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors font-body" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opent in nieuw tabblad)">
<svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-4 h-4">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
</path>
<path d="M9 18c-4.51 2-5-2-7-2">
</path>
</svg>GitHub</a>
</div>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-sm font-semibold text-white/80 tracking-wide uppercase font-body">Nieuwsbrief</h3>
<div className="flex flex-col gap-3">
<p className="text-xs text-white/50 font-body">Ontvang de laatste updates in je inbox.</p>
<Newsletter />
</div>
</div>
</div>
</div>
<p className="text-xs text-white/50 font-body text-left mt-auto pt-8 border-t border-white/10">© 2026 NovaAI. Alle rechten voorbehouden.</p>
</div>
</footer>
</div>
</div>
);
}
