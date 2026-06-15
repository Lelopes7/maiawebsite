import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";

const slides = [
  { img: p1, title: "Robótica Inteligente", tag: "Computer Vision", desc: "Sistemas autônomos para navegação em ambientes dinâmicos." },
  { img: p2, title: "NLP em Português", tag: "Deep Learning", desc: "Modelos de linguagem treinados para entender contexto brasileiro." },
  { img: p3, title: "Drones com IA", tag: "Edge AI", desc: "Detecção em tempo real para mapeamento e monitoramento." },
  { img: p4, title: "Analytics Preditivo", tag: "Data Science", desc: "Dashboards que transformam dados em decisões estratégicas." },
];

export function Projects() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section id="projetos" className="py-24 bg-gradient-to-b from-background to-secondary/40">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// projetos</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-deep tracking-tight">
              O que estamos <span className="text-gradient">construindo</span>.
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} className="h-11 w-11 rounded-full border border-border bg-white grid place-items-center hover:bg-turquoise hover:text-white hover:border-turquoise transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} className="h-11 w-11 rounded-full border border-border bg-white grid place-items-center hover:bg-turquoise hover:text-white hover:border-turquoise transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-[var(--shadow-soft)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s) => (
              <div key={s.title} className="min-w-full grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-turquoise/10 text-turquoise font-mono text-xs">
                    {s.tag}
                  </span>
                  <h3 className="mt-4 text-3xl md:text-4xl font-bold text-deep tracking-tight">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground text-lg">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-turquoise" : "w-2 bg-border"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
