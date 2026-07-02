"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";

const assets = {
  heroBg: "/assets/reservations-hero-bg.jpg",
  phoneIcon: "/assets/5ffd90a8f0a372d2321bffd9dba6a2f94bbc65a0.svg",
  socialsIcon: "/assets/e36456f60cf6a6ff2b091416446046b00687e7a4.svg",
  logoWhite: "/assets/vida-mia-logo-white.png",
  // Gallery images - interior bistro photos
  gallery1: "/assets/gallery-1.jpg",
  gallery2: "/assets/gallery-2.jpg",
  gallery3: "/assets/gallery-3.jpg",
  gallery4: "/assets/gallery-4.jpg",
  gallery5: "/assets/gallery-5.jpg",
};

const LOCATIONS = [
  { id: "san-martin", name: "Vida Mía | San Martín" },
  { id: "valle-dulce", name: "Vida Mía | Valle Dulce" },
  { id: "paseo-venecia", name: "Vida Mía | Paseo Venecia" },
  { id: "chalatenango", name: "Vida Mía | Chalatenango" },
  { id: "aguilares", name: "Vida Mía | Aguilares" },
  { id: "opico", name: "Vida Mía | Opico" },
];

function ReservacionesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSucursal = searchParams.get("sucursal") || "";
  
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    sucursal: initialSucursal,
    fecha: "",
    horario: "",
    personas: 1,
    ocasion: "",
    comentarios: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePersonas = (delta: number) => {
    setFormData((prev) => ({
      ...prev,
      personas: Math.max(1, Math.min(20, prev.personas + delta)),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    router.push("/");
  };

  return (
    <div className="relative min-h-screen bg-white text-[#7a4737] overflow-x-hidden font-quicksand selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[852px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={assets.heroBg}
            alt="Mesa con comida Vida Mía"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-[329px] bg-gradient-to-b from-black/75 to-transparent z-10 pointer-events-none" />
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[378px] bg-gradient-to-t from-black/35 to-transparent z-10 pointer-events-none" />

        {/* Glow effect behind text */}
        <div className="absolute top-[160px] sm:top-[200px] lg:top-[227px] left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] lg:w-[588px] h-[150px] sm:h-[180px] lg:h-[199px] z-5">
          <div 
            className="w-full h-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          {/* Title row */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 mb-2">
            <span 
              className="text-white text-[28px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              tu mesa
            </span>
            <div className="w-[60px] sm:w-[120px] md:w-[160px] lg:w-[187px] h-[1px] bg-white opacity-80" />
            <span 
              className="text-white text-[28px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              te
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-white text-[40px] sm:text-[65px] md:text-[85px] lg:text-[105px] leading-none uppercase mb-6 sm:mb-8"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3px' }}
          >
            TE ESPERA
          </h1>

          {/* CTA Button */}
          <Link
            href="#reserva-form"
            className="backdrop-blur-[2px] bg-black/14 border border-white text-white w-[180px] sm:w-[200px] md:w-[228px] h-[48px] sm:h-[54px] flex items-center justify-center tracking-[2px] sm:tracking-[3px] font-semibold text-[13px] sm:text-[15px] uppercase hover:bg-white hover:text-[#8f4027] transition-all duration-300 active:scale-95 shadow-md"
          >
            ¡RESERVA AQUÍ!
          </Link>
        </div>
      </section>

      {/* RESERVATION FORM SECTION */}
      <section id="reserva-form" className="relative w-full">
        {/* Form Card - Positioned overlapping hero */}
        <div className="relative z-30 mx-auto max-w-[731px] -mt-[120px] sm:-mt-[180px] lg:-mt-[220px]">
          <div 
            className="backdrop-blur-[117px] bg-white/84 border border-white/50 shadow-[0px_4px_84px_rgba(0,0,0,0.09)] mx-4 sm:mx-6 lg:mx-0"
            style={{ minHeight: '900px' }}
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-16">
              <div className="flex flex-col gap-6 sm:gap-8 max-w-[420px] mx-auto">
                
                {/* Nombre para reservación */}
                <div className="flex flex-col gap-2">
                  <label 
                    className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                  >
                    Nombre para reservación
                  </label>
                  <div className="border-b border-black/30">
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingresa tu nombre"
                      className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-black bg-transparent outline-none placeholder:text-black/40"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-2">
                  <label 
                    className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                  >
                    Teléfono
                  </label>
                  <div className="border-b border-black/30">
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ingresa tu teléfono"
                      className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-black bg-transparent outline-none placeholder:text-black/40"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>

                {/* Correo electrónico */}
                <div className="flex flex-col gap-2">
                  <label 
                    className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                  >
                    Correo electrónico
                  </label>
                  <div className="border-b border-black/30">
                    <input
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="Ingresa tu correo"
                      className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-black bg-transparent outline-none placeholder:text-black/40"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>

                {/* Sucursal de reserva */}
                <div className="flex flex-col gap-2">
                  <label 
                    className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                  >
                    Sucursal de reserva
                  </label>
                  <div className="border-b border-black/30 relative">
                    <select
                      name="sucursal"
                      value={formData.sucursal}
                      onChange={handleChange}
                      className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-black bg-transparent outline-none appearance-none cursor-pointer"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                    >
                      <option value="" className="text-black/40">Selecciona la sucursal</option>
                      {LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#242426" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Fecha y Horario - Side by Side */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                  {/* Fecha de reserva */}
                  <div className="flex flex-col gap-2 flex-1 sm:w-[180px]">
                    <label 
                      className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                    >
                      Fecha de reserva
                    </label>
                    <div className="border-b border-black/30 relative">
                      <input
                        type="date"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-[#242426] bg-transparent outline-none tracking-[1.5px]"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                      />
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex flex-col gap-2 flex-1 sm:w-[200px]">
                    <label 
                      className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                    >
                      Horario
                    </label>
                    <div className="border-b border-black/30 relative">
                      <select
                        name="horario"
                        value={formData.horario}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-[#242426] bg-transparent outline-none appearance-none cursor-pointer"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                      >
                        <option value="">Seleccionar</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9L12 15L18 9" stroke="#242426" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cantidad de personas */}
                <div className="flex flex-col gap-2">
                  <label 
                    className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                  >
                    Cantidad de personas
                  </label>
                  <div className="border-b border-black/30">
                    <div className="flex items-center gap-4 px-4 py-2">
                      <button
                        type="button"
                        onClick={() => handlePersonas(-1)}
                        className="w-6 h-6 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <span 
                        className="text-[16px] sm:text-[18px] text-black min-w-[20px] text-center"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                      >
                        {formData.personas}
                      </span>
                      <button
                        type="button"
                        onClick={() => handlePersonas(1)}
                        className="w-6 h-6 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5V19M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Ocasión especial */}
                <div className="flex flex-col gap-2">
                  <label 
                    className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                  >
                    Ocasión especial
                  </label>
                  <div className="border-b border-black/30">
                    <input
                      type="text"
                      name="ocasion"
                      value={formData.ocasion}
                      onChange={handleChange}
                      placeholder="Cumpleaños, reunión, etc..."
                      className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-black bg-transparent outline-none placeholder:text-black/40"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>

                {/* Comentarios o solicitudes especiales */}
                <div className="flex flex-col gap-2">
                  <label 
                    className="text-[14px] sm:text-[15px] text-black tracking-[-0.3px]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                  >
                    Comentarios o solicitudes especiales
                  </label>
                  <div className="border-b border-black/30">
                    <textarea
                      name="comentarios"
                      value={formData.comentarios}
                      onChange={handleChange}
                      placeholder="Ingresa tus comentarios aquí..."
                      rows={3}
                      className="w-full px-4 py-2 text-[16px] sm:text-[18px] text-black bg-transparent outline-none placeholder:text-black/40 resize-none"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto backdrop-blur-[2px] bg-[#4156a9] text-white h-[48px] sm:h-[54px] px-6 flex items-center justify-center tracking-[2px] sm:tracking-[3px] font-semibold text-[13px] sm:text-[15px] uppercase hover:bg-[#354b94] transition-all duration-300 active:scale-95 mt-4"
                >
                  CONFIRMAR RESERVA
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* EVENTS GALLERY SECTION */}
      <section className="w-full py-16 sm:py-20 lg:py-28 bg-white">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <span 
            className="text-[32px] sm:text-[45px] md:text-[55px] text-[#8f4027] leading-none block"
            style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
          >
            Conoce nuestros
          </span>
          <h2 
            className="text-[50px] sm:text-[70px] md:text-[95px] text-[#8f4027] leading-none uppercase"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3px' }}
          >
            Eventos
          </h2>
        </div>

        {/* Masonry-style Image Gallery - full width */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            {/* Left Column - Tall vertical image */}
            <div className="relative w-full md:w-[28%] h-[350px] md:h-[550px]">
              <Image
                src={assets.gallery1}
                alt="Interior Vida Mía con decoración"
                fill
                className="object-cover"
              />
            </div>

            {/* Center Column - 2 stacked images */}
            <div className="flex flex-col gap-2 md:gap-3 w-full md:w-[36%]">
              <div className="relative h-[220px] md:h-[270px]">
                <Image
                  src={assets.gallery4}
                  alt="Mostrador de postres Vida Mía"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[220px] md:h-[270px]">
                <Image
                  src={assets.gallery5}
                  alt="Interior Vida Mía con clientes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - 3 images (1 top, 2 bottom) */}
            <div className="flex flex-col gap-2 md:gap-3 w-full md:w-[36%]">
              <div className="relative h-[200px] md:h-[220px]">
                <Image
                  src={assets.gallery2}
                  alt="Exterior Vida Mía"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-2 md:gap-3 h-[220px] md:h-[320px]">
                <div className="relative w-full h-full">
                  <Image
                    src={assets.gallery3}
                    alt="Interior Vida Mía"
                    fill
                    className="object-cover"
                  />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 mt-10 sm:mt-16 w-full">
        <div 
          className="relative w-full bg-[#8f4027] text-white"
          style={{
            clipPath: 'ellipse(85% 100% at 50% 100%)',
            paddingTop: '60px',
          }}
        >
          {/* Warm center glow */}
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
            {/* Logo */}
            <div className="relative mb-3 sm:mb-4 h-[40px] w-[180px] sm:h-[50px] sm:w-[220px] md:h-[60px] md:w-[260px]">
              <Image
                src="/assets/vida-mia-logo-footer.svg"
                alt="Vida Mía Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Tagline */}
            <span 
              className="text-[20px] sm:text-[26px] md:text-[32px] leading-none tracking-normal text-white"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Más que café una
            </span>
            
            {/* Main heading */}
            <h3 
              className="mt-1 text-[32px] sm:text-[42px] md:text-[60px] lg:text-[72px] uppercase leading-none text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-2px' }}
            >
              experiencia
            </h3>

            {/* Contact info */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center gap-6 sm:gap-8 sm:flex-row sm:items-start md:gap-[70px]">
              {/* Phone */}
              <div className="relative text-left">
                <div className="absolute left-0 top-[1px] h-5 w-5">
                  <Image
                    src={assets.phoneIcon}
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

              {/* Social */}
              <div className="text-left">
                <p className="font-montserrat text-[16px] font-medium tracking-[-0.9px] text-white">
                  ¡Síguenos en!
                </p>
                <div className="relative mt-4 h-[28px] w-[110px]">
                  <Image src={assets.socialsIcon} alt="Redes sociales" fill className="object-contain" />
                  <a href="https://www.facebook.com/share/14g6nA8Z4oi/" target="_blank" rel="noopener noreferrer" className="absolute left-0 top-0 h-full w-1/3" aria-label="Facebook" />
                  <a href="https://www.instagram.com/vidamiabistrocafe" target="_blank" rel="noopener noreferrer" className="absolute left-1/3 top-0 h-full w-1/3" aria-label="Instagram" />
                  <a href="https://www.tiktok.com/@vidamiabistrocafe" target="_blank" rel="noopener noreferrer" className="absolute left-2/3 top-0 h-full w-1/3" aria-label="TikTok" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex h-[70px] w-full items-center justify-center bg-[#823016] px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] leading-[20px] tracking-[-0.12px] text-white">
            <span className="font-montserrat font-medium">Powered by Aumenta</span>
            <span className="font-montserrat font-normal">
              Copyright <strong className="font-bold">2026</strong>
            </span>
          </div>
        </div>
      </footer>



      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
            onClick={handleCloseConfirmation}
          />
          
          {/* Modal Content - centered */}
          <div 
            className="relative w-full max-w-[600px] animate-slideUp"
          >
            <div className="backdrop-blur-[37px] bg-[rgba(175,104,82,0.85)] border border-white/50 rounded-[20px] flex flex-col gap-4 items-center px-6 sm:px-10 py-10 sm:py-12 text-center">
              {/* Logo */}
              <div className="relative w-[100px] sm:w-[137px] h-[50px] sm:h-[67px]">
                <Image
                  src={assets.logoWhite}
                  alt="Vida Mía"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <div className="flex flex-col items-center text-white">
                <span className="font-quicksand font-semibold text-[13px] sm:text-[15px] tracking-[2px] sm:tracking-[3px] uppercase">
                  ¡Tu reserva ha sido
                </span>
                <h3 
                  className="text-[32px] sm:text-[45px] leading-none uppercase tracking-[-1px] sm:tracking-[-1.8px]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900 }}
                >
                  CONFIRMADA!
                </h3>
              </div>

              {/* Description */}
              <p 
                className="text-white/80 text-[14px] sm:text-[16px] leading-relaxed tracking-[-0.4px] max-w-[450px]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
              >
                Hemos recibido tu reserva correctamente.<br />
                Te enviamos un correo electrónico con todos los detalles de tu visita. Por favor, revisa tu bandeja de entrada y, si no lo encuentras, verifica también tu carpeta de spam o correo no deseado.
              </p>

              {/* Button */}
              <button
                onClick={handleCloseConfirmation}
                className="mt-2 backdrop-blur-[2px] bg-[#4156a9] text-white h-[48px] sm:h-[54px] px-6 sm:px-8 flex items-center justify-center tracking-[2px] sm:tracking-[3px] font-bold text-[13px] sm:text-[15px] uppercase hover:bg-[#354b94] transition-all duration-300 active:scale-95"
              >
                VOLVER AL INICIO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            transform: translateY(100%);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default function Reservaciones() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ReservacionesContent />
    </Suspense>
  );
}
