import { Reveal } from "@/components/Reveal";

const acronym = [
  { letter: "M", word: "Mobilidade" },
  { letter: "A", word: "Aplicada" },
  { letter: "I", word: "à Inteligência" },
  { letter: "A", word: "Artificial" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// sobre nós</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-deep tracking-tight">
              Uma equipe de <span className="text-gradient">engenharia e inovação</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg text-justify">
              O MAIA é a frente do LINCE dedicada à Inteligência Artificial aplicada à mobilidade.
              Na equipe, os alunos desenvolvem competências práticas em robótica, visão
              computacional e programação de sistemas autônomos. O foco é integrar a pesquisa
              acadêmica ao desenvolvimento de protótipos funcionais, criando veículos e
              soluções inteligentes para os desafios da locomoção moderna.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {acronym.map((a, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-card hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div className="text-5xl font-bold text-gradient leading-none">{a.letter}</div>
                <div className="mt-3 text-sm font-medium text-deep">{a.word}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
