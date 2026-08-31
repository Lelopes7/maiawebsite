import heroAi from "@/assets/hero-ai.jpg";
import logoMaia from "@/assets/logomaia.asset.json";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden grid-bg">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 25%, color-mix(in oklab, var(--turquoise) 28%, transparent), transparent 55%), radial-gradient(circle at 5% 85%, color-mix(in oklab, var(--aqua) 26%, transparent), transparent 55%)",
        }}
      />
      <img
        src={heroAi}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-multiply pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-turquoise/30 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-turquoise" />
            <span className="font-mono text-xs text-deep">Equipe de tecnologia · Facens</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-deep leading-[1.02]">
            Mobilidade <span className="text-gradient">Aplicada</span> à Inteligência Artificial
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            A MAIA é uma equipe universitária dedicada à mobilidade, tecnologia,
            inteligência artificial, robótica e ao desenvolvimento de soluções inovadoras.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-turquoise to-aqua text-white font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
            >
              Ver projetos <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center h-12 px-6 rounded-xl border border-border bg-card/80 backdrop-blur font-semibold text-deep hover:bg-card transition"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-turquoise/25 to-aqua/25 blur-3xl rounded-full" />
          <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-card/70 backdrop-blur-xl border border-border shadow-[var(--shadow-glow)] p-12 grid place-items-center">
            <img src={logoMaia.url} alt="Logo MAIA" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
