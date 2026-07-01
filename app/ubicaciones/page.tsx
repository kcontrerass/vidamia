"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const LOCATIONS = [
  {
    id: 1,
    slug: "san-martin",
    name: "San Martín",
    address: "Carretera Panamericana Km. 15.5 Local Mini Ancla1. Centro Comercial El Encuentro San Martin, San Martin, San Salvador.",
    phone: "2258-0942",
    weekdayHours: "6am - 8pm",
    weekendHours: "7am - 7pm",
    image: "/assets/location-san-martin.jpg",
  },
  {
    id: 2,
    slug: "valle-dulce",
    name: "Valle Dulce",
    address: "Centro Comercial El Encuentro Valle Dulce, Local Mini Ancla 07, Porción 1 Hacienda El Ángel, Apopa, San Salvador",
    phone: "2249-2151",
    weekdayHours: "6am - 8pm",
    weekendHours: "7am - 7pm",
    image: "/assets/location-valle-dulce.jpg",
  },
  {
    id: 3,
    slug: "paseo-venecia",
    name: "Paseo Venecia",
    address: "Carretera de Oro Km 21, Local 24. Centro Comercial Paseo Venecia, Modulo D. Soyapango, San Salvador",
    phone: "2254-4556",
    weekdayHours: "6am - 8pm",
    weekendHours: "7am - 7pm",
    image: "/assets/location-paseo-venecia.jpg",
  },
  {
    id: 4,
    slug: "chalatenango",
    name: "Chalatenango",
    address: "6ta Calle Poniente, Barrio El Chile #A5-35, Chalatenango, Chalatenango",
    phone: "2301-2829",
    weekdayHours: "6am - 8pm",
    weekendHours: "7am - 7pm",
    image: "/assets/location-chalatenango.jpg",
  },
  {
    id: 5,
    slug: "aguilares",
    name: "El Encuentro Aguilares",
    address: "Calle a Suchitoto, Carretera Troncal del Norte, Local 36-37 Centro Comercial El Encuentro Aguilares, Aguilares, San Salvador",
    phone: "2398-8852",
    weekdayHours: "6am - 8pm",
    weekendHours: "7am - 7pm",
    image: "/assets/location-aguilares.jpg",
  },
  {
    id: 6,
    slug: "opico",
    name: "El Encuentro Ópico",
    address: "Carretera Panamericana Local Mini Ancla 5, Centro Comercial El Encuentro Ópico, San Juan Ópico, La Libertad",
    phone: "2389-4700",
    weekdayHours: "6am - 8pm",
    weekendHours: "7am - 7pm",
    image: "/assets/location-opico.jpg",
  },
];

export default function UbicacionesPage() {
  return (
    <div className="relative min-h-screen bg-white text-[#7a4737] overflow-x-hidden font-quicksand">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] sm:h-[550px] lg:h-[627px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/location-hero-bg.png"
            alt="Vida Mía Bistro Interior"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(65,86,169,0.4)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[355px] bg-gradient-to-t from-black/80 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-2">
            <span 
              className="text-white text-[28px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-none select-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Conoce
            </span>
            <div className="w-[60px] sm:w-[100px] md:w-[140px] lg:w-[162px] h-[1px] bg-white opacity-80" />
            <span 
              className="text-white text-[28px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-none select-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              nuestras
            </span>
          </div>
          
          <h1 
            className="text-white text-[36px] sm:text-[60px] md:text-[85px] lg:text-[105px] leading-none uppercase select-none mb-6 sm:mb-8"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3px' }}
          >
            UBICACIONES
          </h1>

          <a
            href="#locations"
            className="backdrop-blur-[2px] bg-black/15 border-[0.5px] border-white w-[180px] sm:w-[200px] md:w-[228px] h-[48px] sm:h-[54px] flex items-center justify-center tracking-[2px] sm:tracking-[3px] font-semibold text-[13px] sm:text-[15px] uppercase text-white hover:bg-white hover:text-[#9c4c35] transition-all duration-300 active:scale-95 shadow-md"
          >
            ¡RESERVA AQUÍ!
          </a>
        </div>
      </section>

      {/* Locations List */}
      <section id="locations" className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
            {LOCATIONS.map((location) => (
              <div
                key={location.id}
                className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-0"
              >
                {/* Polaroid Image Container */}
                <div className="relative w-full max-w-[380px] lg:w-[420px] lg:min-w-[420px] shrink-0 flex items-center justify-center lg:mr-[-50px] z-10">
                  <div className="relative">
                    {/* Shadow layer - rotated background */}
                    <div 
                      className="absolute top-4 left-4 bg-[#de9582] w-[260px] sm:w-[290px] h-[290px] sm:h-[320px]"
                      style={{ transform: 'rotate(8deg)' }}
                    />
                    {/* White frame - slightly rotated */}
                    <div 
                      className="relative bg-white p-[8px] shadow-[0px_4px_24px_rgba(0,0,0,0.55)]"
                      style={{ transform: 'rotate(1deg)' }}
                    >
                      <div className="relative w-[260px] sm:w-[290px] h-[280px] sm:h-[310px] overflow-hidden">
                        <Image
                          src={location.image}
                          alt={`Vida Mía ${location.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Info Card */}
                <div className="flex-grow w-full lg:max-w-[863px] bg-[rgba(184,115,77,0.13)] rounded-[6px] p-5 sm:p-6 lg:p-8 lg:pl-[80px] relative min-h-[280px] sm:min-h-[279px]">
                  {/* Reserva Button - positioned top right on desktop, inline on mobile */}
                  <Link
                    href={`/reservaciones?sucursal=${location.slug}`}
                    className="hidden md:flex absolute top-6 right-6 bg-[#4156a9] text-white px-5 py-3 font-quicksand font-semibold text-[15px] tracking-[3px] uppercase hover:bg-[#3a4d96] transition-colors backdrop-blur-[2px] items-center justify-center"
                  >
                    REALIZAR RESERVA
                  </Link>

                  {/* Title */}
                  <h3 className="font-montserrat text-[16px] sm:text-[20px] lg:text-[23px] text-[#6e3f31] tracking-[-1.15px] mb-3 md:pr-[200px]">
                    Vida Mía bistro café | <strong className="font-bold">{location.name}</strong>
                  </h3>

                  {/* Mobile Reserva Button */}
                  <Link
                    href={`/reservaciones?sucursal=${location.slug}`}
                    className="md:hidden inline-flex mb-4 bg-[#4156a9] text-white px-4 py-2.5 font-quicksand font-semibold text-[12px] tracking-[2px] uppercase hover:bg-[#3a4d96] transition-colors"
                  >
                    REALIZAR RESERVA
                  </Link>

                  {/* Address */}
                  <p className="font-montserrat text-[13px] sm:text-[16px] text-[#7a4737] opacity-80 leading-[20px] sm:leading-[21px] tracking-[-0.48px] mb-5 sm:mb-6 max-w-[461px]">
                    {location.address}
                  </p>

                  {/* Hours and Phone */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 lg:gap-20">
                    {/* Hours */}
                    <div className="flex items-start gap-2">
                      <svg className="w-6 h-6 shrink-0 text-[#7a4737]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <div>
                        <p className="font-montserrat font-medium text-[16px] sm:text-[18px] text-[#7a4737] tracking-[-0.9px] mb-1">
                          Horarios
                        </p>
                        <p className="font-montserrat text-[14px] sm:text-[16px] text-[#7a4737] tracking-[-0.16px]">
                          Lunes - Viernes: <strong className="font-bold">{location.weekdayHours}</strong>
                        </p>
                        <p className="font-montserrat text-[14px] sm:text-[16px] text-[#7a4737]">
                          Sábados y Domingos: <strong className="font-bold">{location.weekendHours}</strong>
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#7a4737]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div>
                        <p className="font-montserrat font-medium text-[16px] sm:text-[18px] text-[#7a4737] tracking-[-0.9px] mb-1">
                          Teléfono
                        </p>
                        <a
                          href={`tel:+503${location.phone.replace('-', '')}`}
                          className="font-montserrat text-[16px] sm:text-[18px] text-[#7a4737] underline tracking-[3px] hover:text-[#4156a9] transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-10 sm:mt-16 w-full">
        <div 
          className="relative w-full bg-[#8f4027] text-white"
          style={{
            clipPath: 'ellipse(85% 100% at 50% 100%)',
            paddingTop: '60px',
          }}
        >
          <div 
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '600px',
              height: '150px',
              background: 'radial-gradient(ellipse at center, #c35f3e 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center pb-10 sm:pb-16">
            <div className="relative mb-3 sm:mb-4 h-[40px] w-[180px] sm:h-[50px] sm:w-[220px] md:h-[60px] md:w-[260px]">
              <Image
                src="/assets/vida-mia-logo-footer.svg"
                alt="Vida Mía Logo"
                fill
                className="object-contain"
              />
            </div>

            <span 
              className="text-[20px] sm:text-[26px] md:text-[32px] leading-none tracking-normal text-white"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Más que café una
            </span>
            
            <h3 
              className="mt-1 text-[32px] sm:text-[42px] md:text-[60px] lg:text-[72px] uppercase leading-none text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-2px' }}
            >
              experiencia
            </h3>

            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center gap-6 sm:gap-8 sm:flex-row sm:items-start md:gap-[70px]">
              <div className="relative text-left">
                <div className="absolute left-0 top-[1px] h-5 w-5">
                  <Image
                    src="/assets/5ffd90a8f0a372d2321bffd9dba6a2f94bbc65a0.svg"
                    alt=""
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <p className="pl-[21px] font-montserrat text-[16px] font-medium tracking-[-0.9px] text-white">
                  Teléfono
                </p>
                <a
                  href="tel:+50325119609"
                  className="mt-1 block pl-[21px] font-montserrat text-[16px] font-normal tracking-[3px] text-white hover:opacity-80 transition-opacity"
                >
                  2511-9609
                </a>
              </div>

              <div className="text-left">
                <p className="font-montserrat text-[16px] font-medium tracking-[-0.9px] text-white">
                  ¡Síguenos en!
                </p>
                <div className="relative mt-4 h-[28px] w-[110px]">
                  <Image src="/assets/e36456f60cf6a6ff2b091416446046b00687e7a4.svg" alt="Redes sociales" fill className="object-contain" />
                  <a href="https://www.facebook.com/share/14g6nA8Z4oi/" target="_blank" rel="noopener noreferrer" className="absolute left-0 top-0 h-full w-1/3" aria-label="Facebook" />
                  <a href="https://www.instagram.com/vidamiabistrocafe" target="_blank" rel="noopener noreferrer" className="absolute left-1/3 top-0 h-full w-1/3" aria-label="Instagram" />
                  <a href="https://www.tiktok.com/@vidamiabistrocafe" target="_blank" rel="noopener noreferrer" className="absolute left-2/3 top-0 h-full w-1/3" aria-label="TikTok" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[70px] w-full items-center justify-center bg-[#823016] px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] leading-[20px] tracking-[-0.12px] text-white">
            <span className="font-montserrat font-medium">Powered by Aumenta</span>
            <span className="font-montserrat font-normal">
              Copyright <strong className="font-bold">2026</strong>
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/50325119609"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[93px] lg:h-[93px] bg-[#d4a58c] hover:bg-[#c4917a] rounded-full flex items-center justify-center shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 active:scale-95"
        title="Chatea con nosotros"
      >
        <svg className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]" viewBox="0 0 37 37" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.3333 0C8.20783 0 0 8.20783 0 18.3333C0 21.7983 0.9625 25.0433 2.63633 27.808L1.001 33.3667C0.907105 33.6858 0.900927 34.0244 0.983115 34.3467C1.0653 34.6691 1.23282 34.9634 1.46806 35.1986C1.7033 35.4338 1.99757 35.6014 2.31993 35.6836C2.6423 35.7657 2.98085 35.7596 3.3 35.6657L8.85867 34.0303C11.7162 35.7593 14.9934 36.6712 18.3333 36.6667C28.4588 36.6667 36.6667 28.4588 36.6667 18.3333C36.6667 8.20783 28.4588 0 18.3333 0ZM14.1863 22.4822C17.8952 26.1892 21.4353 26.6787 22.6857 26.7245C24.5868 26.7942 26.4385 25.3422 27.159 23.6573C27.25 23.4477 27.283 23.2176 27.2546 22.9909C27.2262 22.7641 27.1375 22.5492 26.9977 22.3685C25.993 21.0852 24.6345 20.163 23.3072 19.2463C23.03 19.0547 22.6895 18.9778 22.3569 19.0319C22.0243 19.0859 21.7256 19.2665 21.5233 19.536L20.4233 21.2135C20.3655 21.3037 20.2754 21.3683 20.1714 21.3943C20.0675 21.4202 19.9576 21.4053 19.8642 21.3528C19.118 20.9257 18.0308 20.1997 17.2498 19.4187C16.4688 18.6377 15.7868 17.6 15.4037 16.9015C15.3562 16.8128 15.3424 16.7098 15.365 16.6117C15.3876 16.5136 15.445 16.427 15.5265 16.368L17.2205 15.1103C17.4623 14.9001 17.6183 14.6084 17.6588 14.2906C17.6994 13.9728 17.6217 13.6512 17.4405 13.387C16.6192 12.1843 15.6622 10.6553 14.2743 9.6415C14.0952 9.51171 13.8854 9.43078 13.6655 9.40667C13.4457 9.38256 13.2233 9.4161 13.0203 9.504C11.3337 10.2263 9.87433 12.078 9.944 13.9828C9.98983 15.2332 10.4793 18.7733 14.1863 22.4822Z" fill="white"/>
        </svg>
      </a>
    </div>
  );
}
