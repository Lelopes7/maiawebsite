import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react";
import logoMaia from "@/assets/logomaia.asset.json";
import logoFacens from "@/assets/logofacens.asset.json";

export function Footer() {
  return (
    <footer id="contato" className="relative bg-deep text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl">
              <img src={logoMaia.url} alt="MAIA" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <div className="text-2xl font-bold">MAIA</div>
              <div className="text-xs uppercase tracking-[0.2em] text-aqua">Facens</div>
            </div>
          </div>
          <p className="mt-6 text-white/70 max-w-md">
            Grupo de pesquisa e desenvolvimento em Inteligência Artificial da Facens.
            Construindo o futuro, uma linha de código por vez.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full border border-white/20 hover:bg-turquoise hover:border-turquoise transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-aqua">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-turquoise flex-shrink-0" />
              <a href="mailto:maia@facens.br" className="hover:text-white">maia@facens.br</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-turquoise flex-shrink-0" />
              <a href="tel:+5515999999999" className="hover:text-white">+55 (15) 99999-9999</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-turquoise flex-shrink-0" />
              <span>Facens — Sorocaba, SP<br />Rod. Senador José Ermírio de Moraes, 1425</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-aqua">Apoio</h4>
          <div className="mt-4 inline-flex items-center gap-3 p-3 rounded-xl bg-white">
            <img src={logoFacens.url} alt="Facens" className="h-10 w-10 object-contain" />
            <div className="text-deep">
              <div className="font-bold text-sm">Facens</div>
              <div className="text-xs text-muted-foreground">Centro Universitário</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50 font-mono">
          <div>© {new Date().getFullYear()} MAIA Facens · Todos os direitos reservados</div>
          <div>{"<built with /> love & python"}</div>
        </div>
      </div>
    </footer>
  );
}
