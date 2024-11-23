"use client";

import { BiSolidBadgeDollar, BiRecycle } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";

export const Info = () => (
  <section className="content py-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-center mb-6">
        <TbTargetArrow className="size-14 text-secondary mb-6" />

        <p className="text-center text-lg font-medium lg:m-0 [&>b]:text-primary">
          Nossa <b>missão</b> é oferecer produtos de alta qualidade, duráveis e
          acessíveis, atendendo às necessidades de nossos clientes.
        </p>
      </div>

      <div className="flex flex-col items-center ">
        <BiSolidBadgeDollar className="size-14 text-secondary mb-6" />

        <p className="text-center text-lg font-medium lg:m-0 [&>b]:text-primary">
          Trabalhamos diretamente com a fábrica, sem intermediários e oferecendo{" "}
          <b>preços competitivos</b>.
        </p>
      </div>

      <div className="flex flex-col items-center ">
        <LuPackage className="size-14 text-secondary mb-6" />

        <p className="text-center text-lg font-medium lg:m-0 [&>b]:text-primary">
          Nossos <b>produtos</b> são projetados para atender às necessidades do
          dia a dia, seja para uso residencial, comercial ou em eventos.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <BiRecycle className="size-14 text-secondary mb-6" />

        <p className="text-center text-lg font-medium lg:m-0 [&>b]:text-primary">
          Estamos comprometidos em reduzir o impacto ambiental. Nossos produtos
          são feitos de <b>plástico reciclável</b>, minimizando assim o
          desperdício e a poluição.
        </p>
      </div>
    </div>
  </section>
);
