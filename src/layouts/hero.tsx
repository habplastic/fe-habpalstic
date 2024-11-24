"use client";

import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { EmailForm } from "@/components/emailForm";

export const Hero = () => {
  return (
    <section className="full-width relative min-h-[70vh] md:h-[60vh] pt-24 pb-4 bg-hero bg-bottom bg-cover mix-blend-multiply">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 m-auto">
        <div className="flex flex-col gap-4 w-full md:w-10/12 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Transporte sem complicação
          </h1>

          <p className="text-lg md:text-xl">
            Sua escolha para jogos de mesas e cadeiras de plástico de qualidade
          </p>

          <p>
            Solicite sua cotação preenchendo o formulário ao lado ou pelo
            WhatsApp, em breve entraremos em contato.
          </p>

          <Button className="w-full md:w-1/2">
            <a
              href="https://wa.me/19974045888"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaWhatsapp className="" />
              <p className="text-xs">Entre em contato</p>
            </a>
          </Button>
        </div>

        <EmailForm />
      </div>
    </section>
  );
};
