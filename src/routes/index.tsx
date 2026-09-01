import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Subsystems } from "@/components/sections/Subsystems";
import { Projects } from "@/components/sections/Projects";
import { Sponsors } from "@/components/sections/Sponsors";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAIA — Mobilidade Aplicada à Inteligência Artificial" },
      {
        name: "description",
        content:
          "Equipe MAIA da Facens: mobilidade, inteligência artificial, robótica e inovação. Conheça nossos subsistemas, projetos e patrocinadores.",
      },
      { property: "og:title", content: "MAIA — Mobilidade Aplicada à Inteligência Artificial" },
      {
        property: "og:description",
        content: "Equipe universitária de tecnologia: mobilidade, IA, robótica e engenharia.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Subsystems />
      <Projects />
      <Sponsors />
    </>
  );
}

