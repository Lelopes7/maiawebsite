import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Shop } from "@/components/sections/Shop";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAIA Facens — Machine Learning & AI" },
      { name: "description", content: "Grupo de pesquisa em Inteligência Artificial da Facens. Projetos, loja oficial e comunidade de estudantes apaixonados por IA." },
      { property: "og:title", content: "MAIA Facens — Machine Learning & AI" },
      { property: "og:description", content: "Onde algoritmos encontram propósito. Conheça os projetos, a loja e a comunidade MAIA." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Shop />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
