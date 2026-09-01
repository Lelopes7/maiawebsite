import { Link } from "@tanstack/react-router";
import { Building2, ExternalLink, Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { sponsors } from "@/lib/sponsors";

export function Sponsors() {
  return (
    <section id="patrocinadores" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise flex items-center gap-2">
              <Handshake className="h-4 w-4" /> // patrocinadores
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-deep tracking-tight">
              Quem <span className="text-gradient">apoia</span> o MAIA.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Empresas e instituições que acreditam no nosso trabalho e fazem parte da
              construção de soluções em mobilidade e inteligência artificial.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.length === 0
            ? [0, 1, 2, 3].map((i) => (
                <Reveal key={i} delay={i * 80}>
                  <article className="h-full rounded-2xl border border-dashed border-border bg-card/70 p-8 flex flex-col items-center text-center hover:border-turquoise/40 transition">
                    <div className="h-20 w-20 rounded-full border border-dashed border-border bg-secondary/60 grid place-items-center text-muted-foreground">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-bold text-deep">Patrocinador a definir</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Logo, nome e link do apoiador serão adicionados em breve.
                    </p>
                  </article>
                </Reveal>
              ))
            : sponsors.map((s, i) => (
                <Reveal key={s.id} delay={i * 80}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-8 flex flex-col items-center text-center hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
                    <div className="h-20 w-20 rounded-full bg-secondary/60 grid place-items-center overflow-hidden">
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt={s.name}
                          loading="lazy"
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <Building2 className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className="mt-6 font-bold text-deep">{s.name}</h3>
                    {s.tier && (
                      <span className="mt-2 px-2.5 py-1 rounded-full bg-turquoise/10 text-turquoise font-mono text-[11px]">
                        {s.tier}
                      </span>
                    )}
                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-deep hover:text-turquoise transition"
                      >
                        Visitar site <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <p className="text-muted-foreground">
              Quer apoiar projetos de mobilidade e inteligência artificial?
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-turquoise to-aqua px-6 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] hover:scale-105 transition"
            >
              Seja um patrocinador
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
