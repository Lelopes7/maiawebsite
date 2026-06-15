import heroAi from "@/assets/hero-ai.jpg";
import logoMaia from "@/assets/logomaia.asset.json";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-20 overflow-hidden grid-bg">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 30%, color-mix(in oklab, var(--turquoise) 30%, transparent), transparent 50%), radial-gradient(circle at 10% 80%, color-mix(in oklab, var(--aqua) 30%, transparent), transparent 50%)",
        }}
      />
      <img
        src={heroAi}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply"
      />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-turquoise/30 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-turquoise" />
            <span className="font-mono text-xs text-deep">Machine Learning &amp; AI · Facens</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-deep leading-[0.95]">
            Inteligência <br />
            <span className="text-gradient">que aprende</span> <br />
            com você.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            O MAIA é o grupo de pesquisa e desenvolvimento em Inteligência Artificial
            da Facens — onde estudantes constroem o futuro da tecnologia.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-turquoise to-aqua text-white font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.02] transition">
              Ver projetos <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#sobre" className="inline-flex items-center h-12 px-6 rounded-xl border border-border bg-white/80 backdrop-blur font-semibold text-deep hover:bg-white transition">
              Sobre o MAIA
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 font-mono text-xs text-muted-foreground">
            <div><span className="text-turquoise text-2xl font-bold block font-display">50+</span>membros</div>
            <div><span className="text-turquoise text-2xl font-bold block font-display">20+</span>projetos</div>
            <div><span className="text-turquoise text-2xl font-bold block font-display">5</span>anos de história</div>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-turquoise/30 to-aqua/30 blur-3xl rounded-full" />
          <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[var(--shadow-glow)] p-12 grid place-items-center">
            <img src={logoMaia.url} alt="Logo MAIA Facens" className="w-full h-full object-contain" />
          </div>
          {/* floating code chips */}
          <div className="hidden md:block absolute -top-4 -left-4 font-mono text-xs bg-white border border-border rounded-lg px-3 py-2 shadow-lg">
            <span className="text-turquoise">model</span>.train()
          </div>
          <div className="hidden md:block absolute -bottom-4 -right-4 font-mono text-xs bg-white border border-border rounded-lg px-3 py-2 shadow-lg">
            <span className="text-aqua">accuracy</span>: 98.7%
          </div>
        </div>
      </div>
    </section>
  );
}
