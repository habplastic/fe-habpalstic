"use client";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const Contact = () => {
  return (
    <section className="content">
      {/* 
        <iframe
          src="https://embedsocial.com/api/pro_hashtag/b8634eb4d01dc6d73a3b07457994683710e48f29"
          width="100%"
          height="540px"
        /> 
      */}

      <div className=" md:grid md:grid-cols-4 md:gap-4 my-10">
        <div className="col-span-2 flex flex-col gap-6 mb-10 md:mb-0">
          <div className="flex flex-col gap-2 text-center md:text-justify">
            <h3 className="text-3xl font-bold">Endereço</h3>
            <p className="flex items-center gap-1">
              <HiOutlineLocationMarker className="hidden md:block" />

              <span className="lg:text-sm xl:text-base">
                R.Nhandeara, 144, Chácara da Barra, Campinas - SP, 13090-650
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-justify">
            <h3 className="text-3xl font-bold">Email</h3>
            <p className="flex items-center gap-1 w-ful">
              <FaRegEnvelope className="hidden md:block" />

              <span className="w-full lg:text-sm xl:text-base">
                contato@habplastic.com.br
              </span>
            </p>
          </div>

          <div className="w-full flex items-center justify-center md:justify-normal gap-8 mt-4 text-7xl">
            <a href="https://www.instagram.com/hab.plastic/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/habplastic" target="_blank">
              <FaFacebookSquare />
            </a>
          </div>
        </div>

        <iframe
          className="col-span-2"
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5559685509465!2d-47.04210248733811!3d-22.892855637290268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cfa3edc2b45d%3A0x21fd8a8caab38ef5!2sR.%20Nhandeara%2C%20144%20-%20Ch%C3%A1cara%20da%20Barra%2C%20Campinas%20-%20SP%2C%2013090-650!5e0!3m2!1spt-BR!2sbr!4v1730582098741!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
};
