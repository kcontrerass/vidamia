"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";

// Image mapping from downloaded assets
const assets = {
  heroBg: "/assets/69b16b734d9fb2686e65758d78e4e0835e1cb194.png",
  logoHeader: "/assets/9e7da1f34b321d13277dec961b81b343ff15ef2f.svg",
  logoFooter: "/assets/03520c69ee4f50edd6d492e1112bf285e01dc81c.png",
  arrowLeft: "/assets/cafe58ca8cefb44d2c924630b9049eb04b7dda67.svg",
  arrowRight: "/assets/244f66ea5833f1cd516b8e75c671421320b134a0.svg",
  lineHero: "/assets/8488ff95667493d356eb709ee94ac6eb29fad5e5.svg",
  lineDivider: "/assets/7307316da21818cd638854c1579138ac0a318597.svg",
  stars: "/assets/60311ec309ca3584206717d7949843250ab1c53b.svg",
  unionFooter: "/assets/b62f8641271792224b0f5ac8ae2ce0feb54c2b80.svg",
  maskGroupFooter: "/assets/02a47ad42082a01bb1ffb26a671fcf75bafb1a1a.svg",

  // Background/Polaroid photos
  polaroidLeft: "/assets/754159cdf0fc11b720543796e76169137cd68ded.png",
  polaroidRight: "/assets/2220b7f7c1d8d4eaebef12f45237410de74392e7.png",
  aboutBg: "/assets/c6c465196aa08b0ee2ddcb061f4dc734f5e3094d.png",

  // Food items
  entrana: "/assets/0ac6c1f51e47b859b4df61982fc2b736692ce04f.png",
  burger: "/assets/e92bbd701d0ab155eedec8f5a5b5917e9bfe0461.png",
  pasta: "/assets/d1d4443d8ba08a54ff48294bb665cb114196ba90.png",
  salad: "/assets/a98b5c0f118290eb6cc834b765617f54f11a07b5.png",

  // Bistro shop / locations
  shopInterior: "/assets/c773a7e1ee50cf5640487f8feb442399b7ca59ee.png",
  shopInteriorLarge: "/assets/28c8a8d7f2ebc92249b6e33e4423aef103560b8d.png",
  mapBg: "/assets/e74fe5d2951db596ef79a5aea2bd4bf175737053.png",

  // Icons
  phoneIcon: "/assets/5ffd90a8f0a372d2321bffd9dba6a2f94bbc65a0.svg",
  locationVector: "/assets/a0269fa833ec9d2effd35c874c0be3f628eb004a.svg",
  socialsIcon: "/assets/e36456f60cf6a6ff2b091416446046b00687e7a4.svg",
  ellipseChat: "/assets/4c420b2fc326e4c250ea3e5217245d77f065f6e4.svg",
  comment2Fill: "/assets/4dd2ffb7013c3d1c83fd37c20e0e45c7547cd219.svg",
  wineglass2Line: "/assets/0c8dc059ace4d6f44c8c57f1df98e644e11b4a3b.svg",
};

interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const MENU_DATA: Record<string, FoodItem[]> = {
  platos: [
    {
      id: 1,
      name: "ENTRAÑA 8OZ",
      price: "$19.50",
      description: "Corte premium de entraña a la parrilla con mantequilla de hierbas montado en una cama de papas francesas.",
      image: assets.entrana,
    },
    {
      id: 2,
      name: "PASTA GRATINADA DE POLLO",
      price: "$12.50",
      description: "Pasta Penne con salsa florentina, espinaca gratinada con queso.",
      image: assets.pasta,
    },
    {
      id: 3,
      name: "SKILLET CHEDDAR BURGUER",
      price: "$10.95",
      description: "Con carne de res, lechuga, aros de cebolla bañado en salsa de queso cheddar derretido.",
      image: assets.burger,
    },
    {
      id: 4,
      name: "ENSALADA DE LA CASA",
      price: "$9.95",
      description: "Base de lechuga fresca, queso, mantequilla, tomate y pepino acompañado con pechuga a la plancha y pesto.",
      image: assets.salad,
    },
  ],
  postres: [
    {
      id: 5,
      name: "TRES LECHES DE LA CASA",
      price: "$4.50",
      description: "Esponjoso pan bañado en nuestra mezcla secreta de tres leches, decorado con merengue y un toque de canela.",
      image: assets.entrana,
    },
    {
      id: 6,
      name: "VOLCÁN DE CHOCOLATE",
      price: "$5.95",
      description: "Bizcocho de chocolate relleno de fudge caliente de chocolate belga, acompañado de una bola de helado de vainilla.",
      image: assets.pasta,
    },
    {
      id: 7,
      name: "CHEESECAKE DE FRESA",
      price: "$5.25",
      description: "Suave y cremosa tarta de queso con base crujiente de galleta y coulis artesanal de fresas frescas.",
      image: assets.burger,
    },
    {
      id: 8,
      name: "FLAN DE COCO CASERO",
      price: "$4.00",
      description: "Flan casero horneado lentamente con caramelo tostado y lluvia de coco deshidratado y tostado.",
      image: assets.salad,
    },
  ],
  pasteles: [
    {
      id: 9,
      name: "PASTEL VIDA MÍA (ENTERO)",
      price: "$28.00",
      description: "Pastel insignia de chocolate oscuro relleno de ganache de avellana y decorado con frutos rojos de temporada.",
      image: assets.entrana,
    },
    {
      id: 10,
      name: "RED VELVET CLASSIQUE",
      price: "$25.00",
      description: "Capas de bizcocho aterciopelado rojo relleno y cubierto con frosting suave de queso crema premium.",
      image: assets.pasta,
    },
    {
      id: 11,
      name: "PASTEL DE ZANAHORIA Y NUEZ",
      price: "$24.50",
      description: "Bizcocho húmedo de zanahoria rallada con nueces troceadas y especias dulces, cubierto con crema de vainilla.",
      image: assets.burger,
    },
    {
      id: 12,
      name: "SELVA NEGRA DE CEREZAS",
      price: "$26.00",
      description: "Tradicional pastel de chocolate, crema batida, cerezas al marrasquino y virutas de chocolate premium.",
      image: assets.salad,
    },
  ],
  bebidas: [
    {
      id: 13,
      name: "CAPUCCINO MOCHA FRÍO",
      price: "$3.75",
      description: "Espresso premium con leche vaporizada fría, un toque de jarabe de chocolate belga y espuma densa.",
      image: assets.entrana,
    },
    {
      id: 14,
      name: "SMOOTHIE TROPICAL MIX",
      price: "$4.25",
      description: "Bebida refrescante granizada de mango, maracuyá y piña, licuado al momento con ingredientes frescos.",
      image: assets.pasta,
    },
    {
      id: 15,
      name: "SODA ITALIANA DE FRUTOS ROJOS",
      price: "$3.50",
      description: "Soda artesanal gasificada con jarabe de fresas, moras y arándanos, servida helada con hojas de menta.",
      image: assets.burger,
    },
    {
      id: 16,
      name: "LATTE DE LAVANDA Y MIEL",
      price: "$3.95",
      description: "Café latte premium con infusión sutil de lavanda orgánica y endulzado con miel de abeja local.",
      image: assets.salad,
    },
  ],
  infantil: [
    {
      id: 17,
      name: "MINI BURGUER CON PAPAS",
      price: "$6.95",
      description: "Mini hamburguesa de res con queso cheddar derretido, acompañada de papas fritas crujientes y ketchup.",
      image: assets.entrana,
    },
    {
      id: 18,
      name: "CHICKEN NUGGETS CASEROS",
      price: "$5.50",
      description: "Trocitos de pechuga de pollo marinados y empanizados al momento, servidos con salsa de miel y mostaza.",
      image: assets.pasta,
    },
    {
      id: 19,
      name: "MAC & CHEESE CREAMY",
      price: "$5.95",
      description: "Pasta corta bañada en una rica y cremosa salsa de queso cheddar y parmesano gratinada al horno.",
      image: assets.burger,
    },
    {
      id: 20,
      name: "MINI WAFFLES DE FRUTA",
      price: "$4.95",
      description: "Dos mini waffles esponjosos acompañados de fresas frescas, rodajas de banano y miel de maple pura.",
      image: assets.salad,
    },
  ],
};

const HERO_IMAGES = [
  assets.heroBg,
  assets.shopInteriorLarge,
  assets.mapBg,
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("platos");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#7a4737] overflow-x-hidden font-quicksand  selection:text-white">

      <Header />

      {/* HERO SLIDER SECTION - Matches exact height and placement */}
      <section className="relative w-full h-[864px] overflow-hidden flex items-end justify-center">
        {/* Slides - Images positioned at the bottom of the section to match layout */}
        {HERO_IMAGES.map((imgSrc, idx) => (
          <div
            key={idx}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1584px] h-full transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={imgSrc}
              alt="Bistro slide image"
              fill
              className="object-cover object-bottom"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Seamless Header/Top Soft Blend Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#c9956d] via-[#c9956d]/80 to-transparent z-20 pointer-events-none" />

        {/* Hero Content Overlay - Perfectly positioned based on Figma coordinates */}
        <div className="absolute top-[181px] left-0 right-0 z-25 text-center flex flex-col items-center px-4 w-full">
          {/* Script accent row "una nueva" */}
          <div className="flex items-center justify-center gap-6 mb-2 sm:mb-4 w-full max-w-[900px]">
            <span className="font-playfair italic text-white text-[70px] sm:text-[85px] md:text-[95px] tracking-[-3.8px] leading-none lowercase select-none">
              una
            </span>
            <div className="w-[150px] sm:w-[220px] md:w-[294px] h-[1px] bg-white opacity-80" />
            <span className="font-playfair italic text-white text-[70px] sm:text-[85px] md:text-[95px] tracking-[-3.8px] leading-none lowercase select-none">
              nueva
            </span>
          </div>

          {/* Large Title */}
          <h1 className="font-montserrat font-black text-white text-[60px] sm:text-[90px] md:text-[120px] lg:text-[125px] tracking-[-3px] sm:tracking-[-5px] leading-none mb-6 uppercase select-none drop-shadow-sm mt-[-10px] sm:mt-[-25px]">
            TEMPORADA
          </h1>

          {/* Call to action */}
          <a
            href="https://wa.me/50325119609"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white bg-black/15 backdrop-blur-[2px] text-white w-[228px] h-[54px] flex items-center justify-center tracking-[2.8px] font-semibold text-[14px] uppercase hover:bg-white hover:text-terracotta transition-all duration-300 active:scale-95 shadow-md"
          >
            COTIZA TU EVENTO
          </a>
        </div>

        {/* Left and Right Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-[55%] -translate-y-1/2 z-30 p-2 rounded-full  text-white  duration-200 focus:outline-none active:scale-95"
          aria-label="Previous slide"
        >
          <div className="w-8 h-8 relative">
            <Image src={assets.arrowLeft} alt="Arrow Left" fill />
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-[55%] -translate-y-1/2 z-30 p-2 rounded-full text-white transition-all duration-200 focus:outline-none active:scale-95"
          aria-label="Next slide"
        >
          <div className="w-8 h-8 relative">
            <Image className="rotate-180  " src={assets.arrowRight} alt="Arrow Right" fill />
          </div>
        </button>

        {/* Slide Indicators / Pagination Dots */}
        <div className="absolute bottom-16 z-30 flex gap-3">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full border border-white transition-all duration-300 ${idx === currentSlide ? "bg-brand-blue border-brand-blue px-3.5" : "bg-transparent hover:bg-white/40"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* WHATSAPP FLOAT BUTTON INSIDE HERO - Matches Figma layout exactly */}
        <a
          href="https://wa.me/50325119609"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-16 right-8 md:right-16 z-30 w-16 h-16 md:w-[93px] md:h-[93px] bg-[#af6852] hover:bg-[#8f4027] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          title="Chatea con nosotros"
        >
          <svg className="w-8 h-8 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.432.002 9.851-4.388 9.854-9.779.002-2.611-1.013-5.066-2.86-6.92C16.418 2.05 13.97 1.037 11.999 1.037c-5.437 0-9.856 4.39-9.859 9.782-.001 1.57.418 3.102 1.214 4.467l-.955 3.486 3.648-.956zm11.752-6.52c-.29-.146-1.715-.847-1.98-.942-.266-.097-.459-.146-.653.146-.193.29-.748.942-.917 1.137-.169.194-.338.22-.628.075-.29-.146-1.223-.45-2.33-1.439-.86-.767-1.44-1.716-1.609-2.008-.169-.29-.018-.447.127-.591.13-.13.29-.338.435-.507.145-.169.193-.29.29-.483.097-.193.048-.361-.024-.507-.072-.146-.653-1.57-.894-2.152-.234-.565-.472-.488-.652-.497-.169-.008-.362-.008-.555-.008-.193 0-.507.073-.772.362-.266.29-1.015.992-1.015 2.416s1.039 2.796 1.184 2.99c.145.195 2.044 3.12 4.95 4.376.691.3 1.23.479 1.65.612.695.22 1.328.19 1.828.115.556-.083 1.715-.7 1.956-1.376.24-.677.24-1.256.169-1.376-.073-.12-.266-.194-.556-.34z" />
          </svg>
        </a>
      </section>

      {/* ABOUT US SECTION ("DESDE 2013") */}
      <section id="nosotros" className="relative w-full overflow-hidden bg-[#8f4027] py-20 lg:py-28 text-white">
        {/* Subtle Background Image Overlay for Texture */}
        <div className="absolute inset-0 opacity-15 filter grayscale contrast-125">
          <Image
            src={assets.aboutBg}
            alt="Wooden board texture"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Dark overlay blend */}
        <div className="absolute inset-0 bg-[#8f4027]/75 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-8">

            {/* Left Polaroid Collage (Bakers/Chefs) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#672b17] transform -rotate-6 w-[280px] sm:w-[320px] h-[340px] sm:h-[390px] shadow-lg rounded-sm" />
                <div className="relative bg-white p-4 pb-12 w-[280px] sm:w-[320px] h-[340px] sm:h-[390px] shadow-[0_8px_30px_rgb(0,0,0,0.35)] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300 ease-out">
                  <div className="relative w-full h-[82%] bg-zinc-200 overflow-hidden">
                    <Image
                      src={assets.polaroidLeft}
                      alt="Nuestros panaderos artesanales"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center font-playfair text-[#8f4027] text-lg italic">
                    Hecho en casa
                  </div>
                </div>
              </div>
            </div>

            {/* Center Content Column */}
            <div className="lg:col-span-4 text-center flex flex-col items-center max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-10 sm:w-16 h-[1px] bg-white/70" />
                <span className="font-semibold text-[14px] sm:text-[16px] tracking-[4px] uppercase text-amber-200">
                  DESDE 2013
                </span>
                <div className="w-10 sm:w-16 h-[1px] bg-white/70" />
              </div>

              <h2 className="flex flex-col items-center mb-6 leading-none">
                <span className="font-montserrat font-black text-[45px] sm:text-[60px] md:text-[75px] tracking-[-2px] uppercase">
                  una experiencia
                </span>
                <span className="font-playfair italic text-[45px] sm:text-[65px] md:text-[80px] text-amber-200 capitalize mt-2 select-none">
                  única de sabor
                </span>
              </h2>

              <p className="font-light text-[15px] sm:text-[17px] leading-relaxed opacity-90 mb-8 max-w-sm">
                Con platillos basados en pan <strong className="font-bold text-amber-100">hecho en casa</strong>. Hemos creado un solo espacio donde <strong className="font-bold text-amber-100">hay de todo, para todas las vidas.</strong>
              </p>

              <a
                href="#menu"
                className="border border-white/80 hover:bg-white hover:text-terracotta text-white font-semibold text-[13px] tracking-[3px] uppercase px-8 py-3.5 transition-all duration-300 shadow-md active:scale-95"
              >
                ¡CONÓCENOS!
              </a>
            </div>

            {/* Right Polaroid Collage (Man Dining) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-blue transform rotate-12 w-[280px] sm:w-[320px] h-[340px] sm:h-[390px] shadow-lg rounded-sm" />
                <div className="relative bg-white p-4 pb-12 w-[280px] sm:w-[320px] h-[340px] sm:h-[390px] shadow-[0_8px_30px_rgb(0,0,0,0.35)] transform rotate-[6deg] hover:rotate-0 transition-transform duration-300 ease-out">
                  <div className="relative w-full h-[82%] bg-zinc-200 overflow-hidden">
                    <Image
                      src={assets.polaroidRight}
                      alt="Disfrutando en el bistro"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center font-playfair text-[#8f4027] text-lg italic">
                    Momentos Vida Mía
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SELECCIONES MENU SECTION */}
      <section id="menu" className="w-full py-20 lg:py-28 bg-white text-[#7a4737]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex flex-col items-center mb-8">
            <span className="font-playfair italic text-[45px] sm:text-[60px] text-terracotta leading-none select-none">
              selecciones
            </span>
            <h2 className="font-montserrat font-black text-[55px] sm:text-[90px] md:text-[110px] text-[#8f4027] tracking-[-3px] sm:tracking-[-5px] leading-none uppercase mt-[-10px] sm:mt-[-20px] select-none">
              VIDA MÍA
            </h2>
            <p className="font-normal text-[15px] sm:text-[17px] text-[#7a4737]/80 mt-4 max-w-md mx-auto">
              Nuestra oferta está diseñada para satisfacer todos los gustos y momentos del día
            </p>
          </div>

          {/* Category Tabs Scroll Wrapper */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
            <div className="flex justify-start md:justify-center items-center gap-3 md:gap-6 min-w-[760px] md:min-w-0 px-4">
              {[
                { key: "platos", label: "PLATOS FUERTES" },
                { key: "postres", label: "POSTRES" },
                { key: "pasteles", label: "PASTELES" },
                { key: "bebidas", label: "BEBIDAS" },
                { key: "infantil", label: "MENÚ INFANTIL" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 font-semibold text-[13px] tracking-[2.5px] uppercase transition-all duration-300 border focus:outline-none ${activeTab === tab.key
                    ? "bg-brand-blue border-brand-blue text-white shadow-md"
                    : "bg-white border-[#7a4737]/20 text-[#7a4737] hover:border-brand-blue hover:text-brand-blue"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 text-left">
            {MENU_DATA[activeTab]?.map((item) => (
              <div
                key={item.id}
                className="bg-card-cream rounded-none overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row h-auto sm:h-[244px] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.18)] transition-all duration-300 group"
              >
                {/* Left Arched Image */}
                <div className="relative w-full sm:w-[260px] md:w-[299px] h-[200px] sm:h-full shrink-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden rounded-t-[100px] sm:rounded-t-none sm:rounded-r-[120px] transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/10 to-transparent pointer-events-none hidden sm:block" />
                </div>

                {/* Right Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-brand-blue text-white font-bold text-[13px] px-3 py-1 rounded-[4px] tracking-wide">
                        {item.price}
                      </span>
                      <div className="relative w-[85px] h-[15px] opacity-90">
                        <Image
                          src={assets.stars}
                          alt="5 Stars"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="font-montserrat font-black text-lg md:text-[20px] text-[#af6852] tracking-tight leading-snug uppercase mb-2">
                      {item.name}
                    </h3>

                    <p className="font-light text-[13px] md:text-[14px] text-[#7a4737] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#7a4737]/10 flex items-center justify-between">
                    <a
                      href="#ubicaciones"
                      className="text-[12px] md:text-[13px] font-bold text-[#7a4737] hover:text-brand-blue underline underline-offset-4 decoration-1 transition-colors uppercase tracking-wider"
                    >
                      Ver Ubicaciones
                    </a>
                    <span className="text-[11px] text-[#af6852] font-semibold tracking-wider uppercase">
                      5 estrellas
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Under Menu Button */}
          <div className="mt-16">
            <a
              href="https://wa.me/50325119609?text=Hola,%20quisiera%20ver%20el%20menú%20completo%20de%20pasteles%20y%20repostería"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-[14px] tracking-[3px] uppercase px-10 py-4 transition-all duration-300 shadow-md active:scale-95"
            >
              IR AL MENÚ COMPLETO
            </a>
          </div>

        </div>
      </section>

      {/* COZY SHOP & LOCATION INFO ("PAUSA PERFECTA") */}
      <section id="ubicaciones" className="w-full bg-[#fff8f3] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[750px]">

        {/* Left Side: Large vertical photo of cozy bistro interior */}
        <div className="relative lg:col-span-5 h-[450px] lg:h-auto min-h-[400px] flex items-end p-8 sm:p-12 lg:p-16">
          <Image
            src={assets.shopInterior}
            alt="Interior acogedor Vida Mía Bistro"
            fill
            className="object-cover object-center filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35 pointer-events-none" />

          <div className="relative z-10 text-white max-w-md animate-fadeIn">
            <span className="font-playfair italic text-[30px] sm:text-[36px] text-amber-200 leading-none select-none">
              Pausa. Respira
            </span>
            <h3 className="font-montserrat font-black text-[45px] sm:text-[65px] md:text-[75px] tracking-[-3px] uppercase leading-none mt-1 select-none">
              DISFRUTA
            </h3>
          </div>
        </div>

        {/* Right Side: Map and Contact details */}
        <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-center max-w-3xl mx-auto w-full">
          <div className="mb-8">
            <span className="font-playfair italic text-[36px] sm:text-[45px] text-[#af6852] leading-none select-none">
              Ten la pausa
            </span>
            <h2 className="font-montserrat font-black text-[45px] sm:text-[65px] md:text-[85px] text-[#8f4027] tracking-[-3px] sm:tracking-[-5px] leading-none uppercase mt-[-5px] sm:mt-[-10px] select-none">
              PERFECTA
            </h2>
            <p className="font-light text-[15px] sm:text-[17px] text-[#7a4737]/80 mt-4 leading-relaxed">
              Nuestro equipo está listo para responder tus consultas y ayudarte a encontrar tu bebida o experiencia favorita en un espacio diseñado para tu descanso.
            </p>
          </div>

          {/* Map layout container */}
          <div className="relative w-full h-[260px] rounded-[10px] overflow-hidden shadow-lg border border-[#7a4737]/10 group">
            <Image
              src={assets.mapBg}
              alt="Ubicación Mapa Vida Mía Chalatenango"
              fill
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-brand-blue/5 hover:bg-transparent transition-colors duration-300" />

            {/* Animated Pin Indicators */}
            <div className="absolute top-[35%] left-[20%] w-6 h-6 flex items-center justify-center pointer-events-none">
              <div className="absolute w-full h-full rounded-full bg-brand-blue opacity-40 animate-ping" />
              <div className="w-3.5 h-3.5 rounded-full bg-brand-blue border-2 border-white shadow-md" />
            </div>
            <div className="absolute top-[48%] left-[50%] w-6 h-6 flex items-center justify-center pointer-events-none">
              <div className="absolute w-full h-full rounded-full bg-brand-blue opacity-40 animate-ping" />
              <div className="w-4 h-4 rounded-full bg-brand-blue border-2 border-white shadow-md flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
            <div className="absolute top-[60%] left-[80%] w-6 h-6 flex items-center justify-center pointer-events-none">
              <div className="absolute w-full h-full rounded-full bg-brand-blue opacity-40 animate-ping" />
              <div className="w-3.5 h-3.5 rounded-full bg-brand-blue border-2 border-white shadow-md" />
            </div>
          </div>

          {/* Address and telephone details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-start">
            <div className="flex gap-4">
              <div className="w-6 h-6 relative shrink-0 text-brand-blue mt-1">
                <Image src={assets.locationVector} alt="Location Marker Icon" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-[16px] sm:text-[18px] text-[#7a4737] tracking-tight leading-none mb-2">
                  Vida Mía | <span className="font-black text-[#8f4027]">Chalatenango</span>
                </h4>
                <p className="font-light text-[14px] leading-relaxed text-[#7a4737]/80">
                  6ta Calle Poniente, Barrio El Chile #A5-35, Chalatenango, El Salvador
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-5 h-5 relative shrink-0 text-[#7a4737] mt-1">
                <Image src={assets.phoneIcon} alt="Phone Icon" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-[16px] sm:text-[18px] text-[#7a4737] tracking-tight leading-none mb-1">
                  Teléfono
                </h4>
                <a
                  href="tel:+50323012829"
                  className="font-semibold text-[16px] sm:text-[18px] text-[#7a4737] hover:text-brand-blue underline underline-offset-4 tracking-[2.5px] block transition-colors"
                >
                  2301-2829
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://maps.app.goo.gl/q6Q6g7t9728j9049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-[13px] sm:text-[14px] tracking-[3px] uppercase px-8 py-3.5 transition-all duration-300 shadow-md active:scale-95"
            >
              IR A UBICACIONES
            </a>
          </div>

        </div>
      </section>

      {/* BRAND FOOTER WITH CURVED TOP - Aligned with correct brand background colors */}
      <footer className="relative bg-[#8f4027] text-white pt-24 pb-8 overflow-hidden z-20">

        {/* Curved top boundary matching the SVG Union */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#fff8f3] clip-footer pointer-events-none" />

        {/* Decorative backdrop patterns */}
        <div className="absolute inset-0 opacity-10 filter mix-blend-overlay pointer-events-none">
          <Image
            src={assets.maskGroupFooter}
            alt="Vector graphic patterns"
            fill
            className="object-cover object-bottom"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-playfair italic text-[24px] sm:text-[30px] text-amber-200 select-none">
              Más que café una
            </span>
            <h3 className="font-montserrat font-black text-[45px] sm:text-[75px] md:text-[85px] tracking-[-3px] uppercase leading-none select-none drop-shadow-md">
              EXPERIENCIA
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 pb-12 border-b border-white/10 text-center md:text-left">

            {/* Footer Logo Column */}
            <div className="flex flex-col items-center md:items-start justify-center">
              <a href="#" className="relative w-44 h-20 hover:scale-105 transition-transform duration-200">
                <Image
                  src={assets.logoFooter}
                  alt="Vida Mía Pastelería Logo"
                  fill
                  className="object-contain"
                />
              </a>
              <p className="text-[12px] opacity-60 mt-3 font-light tracking-wide max-w-[200px] text-center md:text-left">
                Pausa. Respira. Disfruta la dulzura de la vida.
              </p>
            </div>

            {/* Contact Phone Column */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 relative text-white">
                  <Image src={assets.phoneIcon} alt="Phone Icon" fill className="object-contain filter invert" />
                </div>
                <span className="font-bold text-[16px] tracking-tight">Teléfono Corporativo</span>
              </div>
              <a
                href="tel:+50325119609"
                className="font-light text-[18px] sm:text-[20px] hover:text-amber-200 underline underline-offset-4 tracking-[2.5px] transition-colors"
              >
                2511-9609
              </a>
            </div>

            {/* Social media icons column */}
            <div className="flex flex-col items-center md:items-end justify-center gap-3">
              <span className="font-bold text-[16px] tracking-tight">¡Síguenos en!</span>
              <div className="relative w-[123px] h-[32px] hover:scale-105 transition-transform duration-200">
                <Image
                  src={assets.socialsIcon}
                  alt="Socials (Facebook, Instagram, TikTok)"
                  fill
                  className="object-contain"
                />
                <a
                  href="https://facebook.com/vidamia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-0 top-0 w-1/3 h-full cursor-pointer"
                  title="Facebook"
                />
                <a
                  href="https://instagram.com/vidamia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/3 top-0 w-1/3 h-full cursor-pointer"
                  title="Instagram"
                />
                <a
                  href="https://tiktok.com/@vidamia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-2/3 top-0 w-1/3 h-full cursor-pointer"
                  title="TikTok"
                />
              </div>
            </div>

          </div>

          {/* Bottom Copyright Block - Matches background dark terracotta #823016 */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#823016] py-6 z-15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] opacity-75 font-light tracking-wide text-white">
              <div>
                &copy; {new Date().getFullYear()} <strong className="font-semibold text-white">Vida Mía Pastelería & Bistro</strong>. Todos los derechos reservados.
              </div>
              <div className="flex items-center gap-1">
                Powered by <strong className="font-semibold text-white">Aumenta</strong>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* PERSISTENT FLOATING INQUIRY CHAT TRIGGER (BOTTOM LEFT FLOTATION) */}
      <div className="fixed bottom-6 left-6 z-45 group">
        <a
          href="https://wa.me/50325119609?text=Hola,%20me%20gustaría%20saber%20más%20de%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-14 h-14 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full shadow-[0px_4px_16px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 group"
          title="¿Consultas?"
        >
          <div className="absolute inset-0 flex items-center justify-center p-3">
            <svg
              className="w-full h-full fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </svg>
          </div>

          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-[12px] font-semibold tracking-wider uppercase py-1.5 px-3 rounded shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
            ¿Consultas?
          </span>
        </a>
      </div>

    </div>
  );
}
