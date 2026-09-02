import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/historia')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/historia"!</div>
}

import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, Medal, Plus, Trophy } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { awards, photos } from "@/lib/history";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "História — Equipe MAIA Facens" },
      {
        name: "description",
        content:
          "Conheça a trajetória da equipe MAIA — Mobilidade Aplicada à Inteligência Artificial. Prêmios, competições e momentos marcantes.",
      },
      { property: "og:title", content: "História — Equipe MAIA Facens" },
      {
        property: "og:description",
        content: "Trajetória, conquistas e galeria de fotos da equipe MAIA da Facens.",
      },
    ],
  }),
  component: HistoriaPage,
});

function HistoriaPage() {
  return (
    <section className="pt-28 pb-24 grid-bg">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// história</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-deep tracking-tight">
              A trajetória da <span className="text-gradient">MAIA</span>.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Nossa história começou na Facens e segue sendo escrita a cada projeto, competição e
              conquista. Aqui registramos os marcos que nos trouxeram até aqui.
            </p>
          </div>
        </Reveal>

        {/* Awards timeline */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-turquoise/15 to-aqua/15 grid place-items-center text-turquoise">
                <Trophy className="h-5 w-5" />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-deep">Prêmios e competições</h2>
            </div>
          </Reveal>

          <div className="mt-10 relative">
            {/* vertical line */}
            <div className="absolute left-[19px] md:left-[27px] top-3 bottom-3 w-px bg-border" />

            {awards.length === 0 ? (
              <div className="space-y-6">
                {[0, 1, 2].map((i) => (
                  <Reveal key={i} delay={i * 100}>
                    <article className="relative pl-14 md:pl-20">
                      <div className="absolute left-0 top-0 h-10 w-10 md:h-14 md:w-14 rounded-full border border-dashed border-border bg-card grid place-items-center text-muted-foreground">
                        <Medal className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="rounded-2xl border border-dashed border-border bg-card/70 p-6">
                        <div className="flex items-center gap-2 font-mono text-xs text-turquoise">
                          <Plus className="h-3.5 w-3.5" /> espaço reservado
                        </div>
                        <h3 className="mt-3 font-bold text-deep">Conquista a ser adicionada</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Ano, título, competição e descrição serão preenchidos pela equipe.
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {awards.map((a, i) => (
                  <Reveal key={a.id} delay={i * 100}>
                    <article className="relative pl-14 md:pl-20 group">
                      <div className="absolute left-0 top-0 h-10 w-10 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-turquoise to-aqua text-white grid place-items-center shadow-[var(--shadow-soft)]">
                        <Medal className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="rounded-2xl border border-border bg-card p-6 hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] transition-all">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-turquoise/10 text-turquoise font-mono text-[11px]">
                          {a.year}
                        </span>
                        <h3 className="mt-3 font-bold text-lg text-deep">{a.title}</h3>
                        <p className="mt-1 text-sm font-medium text-aqua">{a.competition}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-turquoise/15 to-aqua/15 grid place-items-center text-turquoise">
                <ImageIcon className="h-5 w-5" />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-deep">Galeria de fotos</h2>
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.length === 0
              ? [0, 1, 2, 3, 4, 5].map((i) => (
                  <Reveal key={i} delay={i * 60}>
                    <article className="aspect-[4/3] rounded-2xl border border-dashed border-border bg-card/70 grid place-items-center text-muted-foreground">
                      <div className="text-center">
                        <ImageIcon className="h-8 w-8 mx-auto" />
                        <p className="mt-2 font-mono text-[11px]">foto a ser adicionada</p>
                      </div>
                    </article>
                  </Reveal>
                ))
              : photos.map((p, i) => (
                  <Reveal key={p.id} delay={i * 60}>
                    <figure className="group relative aspect-[4/3] rounded-2xl border border-border bg-card overflow-hidden">
                      {p.src ? (
                        <img
                          src={p.src}
                          alt={p.caption}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      ) : (
                        <div className="w-full h-full grid place-items-center text-muted-foreground">
                          <ImageIcon className="h-8 w-8" />
                        </div>
                      )}
                      {p.caption && (
                        <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-deep/80 to-transparent text-white text-sm font-medium">
                          {p.caption}
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
