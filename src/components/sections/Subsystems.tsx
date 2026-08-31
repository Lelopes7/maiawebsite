import { Megaphone, CircuitBoard, Code2, Ruler } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const subsystems = [
  {
    icon: Megaphone,
    title: "Gestão e Marketing",
    desc: "Responsável pela organização da equipe, comunicação, divulgação, planejamento, eventos, parcerias e gestão dos projetos.",
  },
  {
    icon: CircuitBoard,
    title: "Hardware",
    desc: "Responsável pelo desenvolvimento eletrônico e físico dos projetos, incluindo circuitos, sensores, placas, sistemas embarcados e integração dos componentes.",
  },
  {
    icon: Code2,
    title: "Software",
    desc: "Responsável pela programação, inteligência artificial, visão computacional, sistemas, algoritmos e desenvolvimento das soluções digitais.",
  },
  {
    icon: Ruler,
    title: "Desenho Técnico",
    desc: "Responsável pela modelagem, desenho, documentação técnica e desenvolvimento das estruturas e peças dos projetos.",
  },
];

export function Subsystems() {
  return (
    <section id="equipe" className="py-24 bg-gradient-to-b from-background to-secondary/40">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// organização da equipe</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-deep tracking-tight">
              Quatro <span className="text-gradient">subsistemas</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              A equipe é dividida em quatro frentes que trabalham de forma integrada.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {subsystems.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full p-7 rounded-2xl bg-card border border-border hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-turquoise/15 to-aqua/15 grid place-items-center text-turquoise group-hover:scale-110 transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
