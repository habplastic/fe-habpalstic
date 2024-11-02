import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="content-grid w-full shadow-lg shadow-white z-50">
      <div className="content flex items-center justify-between py-4">
        <div className="flex items-end gap-2">
          <Image src="/icons/logo.svg" alt="logo" width={36} height={36} />

          <div className="flex flex-col items-center uppercase select-none">
            <p className="text-primary font-black">hab plastic</p>
            <p className="text-[8px] text-secondary font-semibold">
              distribuidora de móveis
            </p>
          </div>
        </div>

        <div>
          <p>Endereço</p>
        </div>
      </div>
    </footer>
  );
};
