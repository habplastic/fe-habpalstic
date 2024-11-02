import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";

export const Header = () => (
  <header className="relative h-[70vh] bg-hero bg-center bg-cover">
    <nav className="fixed top-0 flex items-center justify-between w-full pt-2 px-10 pb-40 bg-gradient-to-b from-white z-10">
      <div className="flex items-end gap-2">
        <Image src="/icons/logo.svg" alt="logo" width={36} height={36} />
        <div className="flex flex-col items-center uppercase select-none">
          <p className="text-primary font-black">hab plastic</p>
          <p className="text-[8px] text-secondary font-semibold">
            distribuidora de móveis
          </p>
        </div>
      </div>

      <ul className="flex items-center gap-4 text-secondary font-bold">
        <li>Produtos</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>

    <a
      href="https://wa.me/19974045888"
      target="_blank"
      className="absolute left-10 bottom-60 flex items-center justify-center gap-2 w-96 h-32 rounded-full bg-secondary hover:bg-primary"
    >
      <FaWhatsapp className="size-10 text-white" />
      <p className="text-2xl text-white font-bold">Entrar em contato</p>
    </a>
  </header>
);
