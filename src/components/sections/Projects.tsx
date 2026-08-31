import { ArrowUpRight, ImageIcon, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// projetos</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-deep tracking-tight">
              O que a MAIA <span className="text-gradient">desenvolve</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Projetos da equipe apresentados em cards — imagem, descrição e tecnologias utilizadas.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0
            ? [0, 1, 2].map((i) => (
                <Reveal key={i} delay={i * 80}>
                  <article className="h-full rounded-2xl border border-dashed border-border bg-card/60 overflow-hidden">
                    <div className="aspect-[4/3] grid place-items-center bg-secondary/60 text-muted-foreground">
                      <ImageIcon className="h-8 w-8" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 font-mono text-xs text-turquoise">
                        <Plus className="h-3.5 w-3.5" /> espaço reservado
                      </div>
                      <h3 className="mt-3 font-bold text-deep">Projeto a ser adicionado</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Nome, descrição, imagem e tecnologias serão preenchidos pela equipe.
                      </p>
                      <div className="mt-4 flex gap-2">
                        {[0, 1, 2].map((t) => (
                          <span key={t} className="h-6 w-16 rounded-full bg-secondary" />
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))
            : projects.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-[4/3] bg-secondary/60 grid place-items-center overflow-hidden">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      ) : (
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-deep">{p.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                      {p.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full bg-turquoise/10 text-turquoise font-mono text-[11px]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-deep hover:text-turquoise transition"
                        >
                          Saber mais <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
