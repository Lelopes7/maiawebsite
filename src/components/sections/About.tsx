import { Brain, Code2, Users, Lightbulb } from "lucide-react";

const features = [
  { icon: Brain, title: "Inteligência Artificial", desc: "Pesquisa aplicada em ML, visão computacional e NLP." },
  { icon: Code2, title: "Desenvolvimento", desc: "Construímos soluções reais com Python, TensorFlow e PyTorch." },
  { icon: Users, title: "Comunidade", desc: "Estudantes, professores e parceiros compartilhando conhecimento." },
  { icon: Lightbulb, title: "Inovação", desc: "Do laboratório ao mercado — transformando ideias em impacto." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// sobre nós</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-deep tracking-tight">
            Onde <span className="text-gradient">algoritmos</span> encontram propósito.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            O <strong>MAIA — Machine Learning &amp; AI</strong> é um grupo de estudos e pesquisa da
            Facens dedicado a explorar, ensinar e aplicar Inteligência Artificial.
            Promovemos workshops, hackathons e projetos colaborativos para preparar
            a próxima geração de pesquisadores e engenheiros de IA.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group relative p-6 rounded-2xl bg-card border border-border hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-turquoise/15 to-aqua/15 grid place-items-center text-turquoise group-hover:scale-110 transition">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-deep">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
