import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="content-grid w-full fixed bg-background z-50 border-b">
      <div className="full-width lg:content flex items-center justify-between p-4 md:px-0">
        <div className="flex items-end gap-2">
          <Image src="/icons/logo.svg" alt="logo" width={36} height={36} />

          <div className="flex flex-col items-center uppercase select-none">
            <p className="text-primary font-black">hab plastic</p>
            <p className="text-[8px] text-secondary font-semibold">
              distribuidora de móveis
            </p>
          </div>
        </div>

        <Button className="w-16 sm:w-auto">
          <a
            href="https://wa.me/19974045888"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaWhatsapp className="" />
            <p className="hidden sm:block text-xs">Entre em contato</p>
          </a>
        </Button>
      </div>
    </header>
  );
};
