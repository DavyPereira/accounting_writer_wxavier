"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Calculator,
  CheckCircle2,
  FileText,
  Landmark,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Abertura de empresa",
    description:
      "Orientação completa para abrir sua empresa com o enquadramento correto desde o início.",
  },
  {
    icon: Calculator,
    title: "Planejamento tributário",
    description:
      "Análise estratégica para reduzir riscos e identificar oportunidades de economia fiscal.",
  },
  {
    icon: Users,
    title: "Departamento pessoal",
    description:
      "Gestão de folha, admissões, férias, encargos e rotinas trabalhistas com segurança.",
  },
  {
    icon: FileText,
    title: "Obrigações fiscais",
    description:
      "Entrega de declarações, apurações e acompanhamento das obrigações da sua empresa.",
  },
];

const steps = [
  "Entendemos o momento da sua empresa",
  "Analisamos documentos, regime e necessidades",
  "Criamos um plano contábil personalizado",
  "Acompanhamos sua operação com clareza",
];

const faqs = [
  {
    question: "Vocês atendem MEI e pequenas empresas?",
    answer:
      "Sim. Atendemos MEIs, microempresas, empresas do Simples Nacional e negócios em fase de crescimento.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim. Todo o processo pode ser feito de forma digital, com reuniões, envio de documentos e acompanhamento remoto.",
  },
  {
    question: "Ajudam na escolha do melhor regime tributário?",
    answer:
      "Sim. Analisamos atividade, faturamento, despesas, folha e projeções para indicar o caminho mais adequado.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <section className="relative bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_30%),linear-gradient(135deg,#07111f,#0f172a,#111827)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c8a96a] text-slate-950 shadow-lg shadow-[#c8a96a]/20">
              <Landmark size={22} />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">
                W Xavier Contabilidade
              </p>
              <p className="text-xs text-slate-300">
                Contabilidade estratégica
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#servicos" className="transition hover:text-white">
              Serviços
            </a>
            <a href="#sobre" className="transition hover:text-white">
              Sobre
            </a>
            <a href="#assistente" className="transition hover:text-white">
              Assistente IA
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#c8a96a] md:inline-flex"
          >
            Falar com especialista
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-14 lg:grid-cols-2 lg:pb-32 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              <Sparkles size={16} className="text-[#c8a96a]" />
              Assessoria contábil moderna para empresas
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Contabilidade estratégica para empresas que querem crescer com
              segurança.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Soluções contábeis, fiscais e trabalhistas para negócios que
              buscam organização, economia tributária e decisões mais
              inteligentes.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8a96a] px-7 py-4 font-semibold text-slate-950 shadow-xl shadow-[#c8a96a]/20 transition hover:-translate-y-0.5 hover:bg-[#d8bb7a]"
              >
                Falar com especialista
                <ArrowRight size={18} />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Conhecer serviços
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
  <div>
    <p className="text-3xl font-bold text-white">98%</p>
    <p className="mt-1 text-sm text-slate-400">
      Processos digitais
    </p>
  </div>
  <div>
    <p className="text-3xl font-bold text-white">+12</p>
    <p className="mt-1 text-sm text-slate-400">
      Rotinas atendidas
    </p>
  </div>
  <div>
    <p className="text-3xl font-bold text-white">24h</p>
    <p className="mt-1 text-sm text-slate-400">
      Resposta inicial
    </p>
  </div>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#c8a96a]/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-sm text-slate-500">Painel consultivo</p>
                    <h2 className="text-xl font-bold">Resumo financeiro</h2>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                    <BarChart3 />
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {[
                    ["Obrigações em dia", "100%", "text-emerald-600"],
                    ["Economia tributária estimada", "R$ 8.420", "text-slate-950"],
                    ["Pendências críticas", "0", "text-emerald-600"],
                  ].map(([label, value, color]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <p className="text-sm text-slate-500">{label}</p>
                      <p className={`mt-2 text-2xl font-bold ${color}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#07111f] p-5 text-white">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 text-[#c8a96a]" />
                    <div>
                      <p className="font-semibold">Diagnóstico estratégico</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Acompanhamento fiscal, trabalhista e contábil com foco
                        em previsibilidade e segurança.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold text-[#a6823d]">Serviços</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Soluções contábeis para cada etapa da sua empresa.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Da abertura do CNPJ à gestão mensal, oferecemos suporte para manter
            sua empresa organizada, regular e preparada para crescer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-950 text-[#c8a96a] transition group-hover:bg-[#c8a96a] group-hover:text-slate-950">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="sobre" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-[#a6823d]">Sobre o escritório</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Contabilidade com visão consultiva, tecnologia e proximidade.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              A W Xavier Contabilidade foi pensada para empresas que querem mais do
              que apenas cumprir obrigações. Nosso foco é transformar dados
              contábeis em informações úteis para tomada de decisão.
            </p>
            <p>
              Atuamos com processos digitais, comunicação clara e acompanhamento
              próximo, ajudando empreendedores a manterem suas empresas
              regulares, eficientes e preparadas para novos desafios.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Atendimento consultivo", "Processos digitais", "Visão tributária", "Gestão segura"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" />
                    <span className="font-semibold text-slate-900">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="assistente" className="relative overflow-hidden bg-[#07111f] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
              Em breve no site
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Assistente Contábil Inteligente para tirar dúvidas com rapidez.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Uma experiência pensada para ajudar visitantes a entenderem temas
              como abertura de empresa, MEI, regime tributário, folha de
              pagamento e obrigações fiscais.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                "Respostas simples para dúvidas frequentes",
                "Direcionamento para atendimento especializado",
                "Experiência moderna para captação de clientes",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <BadgeCheck className="text-[#c8a96a]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="rounded-2xl bg-[#07111f] p-3 text-[#c8a96a]">
                  <Bot />
                </div>
                <div>
                  <p className="font-bold">Assistente Nexcont</p>
                  <p className="text-sm text-slate-500">Online para dúvidas iniciais</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="max-w-[85%] rounded-2xl bg-slate-100 p-4 text-sm leading-6">
                  Quero abrir uma empresa. Por onde começo?
                </div>
                <div className="ml-auto max-w-[88%] rounded-2xl bg-[#07111f] p-4 text-sm leading-6 text-white">
                  O primeiro passo é entender sua atividade, faturamento
                  estimado e formato de operação. Com isso, avaliamos o melhor
                  tipo de empresa e regime tributário.
                </div>
              </div>

              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c8a96a] px-6 py-4 font-semibold text-slate-950">
                Conversar com a IA
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-[#a6823d]">Como funciona</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Um processo simples para organizar sua contabilidade.
            </h2>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 font-bold text-[#c8a96a]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold">{step}</h3>
                  <p className="mt-2 text-slate-600">
                    Atendimento estruturado para entender necessidades e propor
                    soluções adequadas ao momento do negócio.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-semibold text-[#a6823d]">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-[2rem] bg-[#07111f] p-8 text-white md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Pronto para organizar a contabilidade da sua empresa?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Fale com um especialista e entenda como podemos ajudar sua
                empresa a crescer com mais segurança e clareza.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8a96a] px-7 py-4 font-semibold text-slate-950 transition hover:bg-[#d8bb7a]"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:contato@nexcont.com.br"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold">W Xavuer Contabilidade</p>
            <p className="mt-1 text-sm text-slate-500">
              Contabilidade estratégica para empresas modernas.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 W Xavier Contabilidade. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}