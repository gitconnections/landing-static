"use client";

import { Reveal } from '@/components/reactbits/Reveal';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="text-[#07cedc] mb-4 text-5xl flex justify-center items-center w-16 h-16 rounded-full bg-[#07cedc]/10 mx-auto">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold font-poppins mb-3 text-[#000000]">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#ffffff]">
      <div className="container mx-auto px-4 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-[#000000] leading-tight">
            Nuestros proyectos: seguridad, confiabilidad y respaldo
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Nuestros proyectos están diseñados para satisfacer tus necesidades y superar tus expectativas. Cada uno de
            nuestros proyectos cuenta con las siguientes características:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Reveal delay={0.3}>
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 21v-7.5m6 7.5v-7.5M18 10.5H5.25a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25H18a2.25 2.25 0 002.25-2.25V12.75a2.25 2.25 0 00-2.25-2.25z"
                  />
                </svg>
              }
              title="Revisión documental minuciosa"
              description="Garantiza la seguridad y confiabilidad de tu inversión."
            />
          </Reveal>
          <Reveal delay={0.4}>
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.75c0-.621-.503-1.125-1.125-1.125H5.625c-.621 0-1.125.503-1.125 1.125v2.25c0 .621.503 1.125 1.125 1.125h11.25c.621 0 1.125-.503 1.125-1.125v-2.25zM15.75 10.5h.007v.008h-.007V10.5zm-4.72 1.206a.75.75 0 10-.958-1.19l-1.684 1.053a.75.75 0 00-.595.63L7.5 21h9l-3.628-8.428a.75.75 0 00-.595-.63l-1.684-1.052zM12 2.25a.75.75 0 00-1.079 0l-7.142 7.142A4.5 4.5 0 001.5 12.75v3.003h12.75V12.75a4.5 4.5 0 00-3.375-4.383L12 2.25z"
                  />
                </svg>
              }
              title="Equipo multidisciplinario"
              description="Asegura la ejecución y entrega de proyectos de alta calidad."
            />
          </Reveal>
          <Reveal delay={0.5}>
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.104c1.452.233 2.842-.56 3.121-1.902.493-2.363-1.064-4.881-5.34-10.5Zm18.231-8.715a60.007 60.007 0 00-14.953-2.933m.305 12.248h.008v.008h-.008Zm2.5-8.625h.008v.008h-.008Zm-10.619-5.174h.008v.008h-.008ZM12 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0Z"
                  />
                </svg>
              }
              title="Planes de pago personalizados y flexibles"
              description="Se adapta a tus necesidades y presupuesto."
            />
          </Reveal>
          <Reveal delay={0.6}>
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.01-0.22 1.98-0.61 2.85L17.25 21H6.75L3.61 14.85A10.023 10.023 0 013 12c0-5.523 4.477-10 10-10s10 4.477 10 10z"
                  />
                </svg>
              }
              title="Garantía de satisfacción y respaldo"
              description="Brinda tranquilidad y confianza en tu inversión."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
