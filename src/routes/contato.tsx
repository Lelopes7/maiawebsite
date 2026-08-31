import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Equipe MAIA Facens" },
      {
        name: "description",
        content:
          "Fale com a equipe MAIA — Mobilidade Aplicada à Inteligência Artificial. Instagram, LinkedIn, e-mail e formulário de contato.",
      },
      { property: "og:title", content: "Contato — Equipe MAIA Facens" },
      { property: "og:description", content: "Entre em contato com a equipe MAIA da Facens." },
    ],
  }),
  component: ContatoPage,
});

const channels = [
  { icon: Instagram, label: "Instagram", value: "@ a definir", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Perfil a definir", href: "#" },
  { icon: Mail, label: "E-mail", value: "e-mail a definir", href: "#" },
  { icon: MapPin, label: "Instituição", value: "Facens — Sorocaba, SP", href: "#" },
];

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field = "w-full h-12 px-4 rounded-xl border border-border bg-card text-deep placeholder:text-muted-foreground focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition";

  return (
    <section className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// contato</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-deep tracking-tight">
              Vamos <span className="text-gradient">conversar</span>.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Parcerias, dúvidas ou interesse em fazer parte da equipe — envie sua mensagem.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 70}>
                <a
                  href={c.href}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] transition-all"
                >
                  <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-turquoise/15 to-aqua/15 grid place-items-center text-turquoise">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block font-semibold text-deep">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="p-7 rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className={field}
                  placeholder="Nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                />
                <input
                  className={field}
                  type="email"
                  placeholder="E-mail"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <input
                className={field}
                placeholder="Assunto"
                required
                value={form.assunto}
                onChange={(e) => setForm({ ...form, assunto: e.target.value })}
              />
              <textarea
                className="w-full min-h-32 p-4 rounded-xl border border-border bg-card text-deep placeholder:text-muted-foreground focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 transition"
                placeholder="Mensagem"
                required
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-turquoise to-aqua text-white font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
              >
                Enviar <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="font-mono text-xs text-turquoise">
                  // mensagem registrada — o envio será conectado ao e-mail oficial da equipe
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
