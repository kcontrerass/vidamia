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
  polaroidLeft: "/assets/about-photo-left.jpg",
  polaroidRight: "/assets/about-photo-right.jpg",
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
            <span 
              className="text-white text-[70px] sm:text-[85px] md:text-[95px] leading-none lowercase select-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              una
            </span>
            <div className="w-[150px] sm:w-[220px] md:w-[294px] h-[1px] bg-white opacity-80" />
            <span 
              className="text-white text-[70px] sm:text-[85px] md:text-[95px] leading-none lowercase select-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              nueva
            </span>
          </div>

          {/* Large Title */}
          <h1 
            className="text-white text-[60px] sm:text-[90px] md:text-[120px] lg:text-[125px] leading-none mb-6 uppercase select-none drop-shadow-sm mt-[-10px] sm:mt-[-25px]"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3.4px' }}
          >
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
      <section id="nosotros" className="relative w-full overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/assets/about-bg.jpg" 
            alt="" 
            fill 
            className="object-cover object-center"
          />
        </div>
        {/* Color overlay */}
        <div className="absolute inset-0 w-full h-full bg-[rgba(155,62,38,0.64)]" />

        {/* Polaroid Left - Extends outside screen */}
        <div className="hidden lg:block absolute left-[-100px] xl:left-[-60px] top-[50%] -translate-y-1/2 z-20">
          <div className="relative w-[280px] lg:w-[340px] xl:w-[400px]">
            {/* Shadow layer - slightly more rotated */}
            <div className="absolute top-[0px] left-[10px] bg-[#672b17] w-full h-[340px] lg:h-[300px] xl:h-[390px] transform rotate-[-5deg] " />
            <div className="relative bg-white p-[6px]  shadow-[0px_2px_12px_rgba(0,0,0,0.25)] transform rotate-[-15deg]">
              <div className="relative w-full h-[300px] lg:h-[360px] xl:h-[400px] overflow-hidden">
                <Image src={assets.polaroidLeft} alt="Nuestros panaderos artesanales" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Polaroid Right - Extends outside screen */}
        <div className="hidden lg:block absolute right-[-100px] xl:right-[-60px] top-[40%] -translate-y-1/2 z-20">
          <div className="relative w-[280px] lg:w-[340px] xl:w-[400px]">
            {/* Shadow layer - slightly more rotated */}
            <div className="absolute top-[-10px] right-[10px] bg-[#4156a9] w-full h-[340px] lg:h-[400px] xl:h-[400px] transform rotate-[12deg] " />
            <div className="relative bg-white p-[6px]  shadow-[0px_2px_12px_rgba(0,0,0,0.25)] transform rotate-[9deg]">
              <div className="relative w-full h-[300px] lg:h-[360px] xl:h-[400px] overflow-hidden">
                <Image src={assets.polaroidRight} alt="Disfrutando en el bistro" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-20 mt-10">
            {/* DESDE 2013 */}
            <div className="flex items-center justify-center gap-[30px] mb-4 w-full">
              <div className="h-[1px] bg-white w-[90px]" />
              <span className="font-quicksand font-bold text-[20px] md:text-[23px] tracking-[4.6px] uppercase text-white">
                DESDE 2013
              </span>
              <div className="h-[1px] bg-white w-[90px]" />
            </div>

            <span className="font-quicksand font-bold text-[18px] md:text-[23px] tracking-[2.3px] uppercase text-white mb-2 block">
              que cada bocado que disfrutes te lleves
            </span>

            <h2 className="flex flex-col items-center mb-6 leading-none">
              <span 
                className="text-[55px] md:text-[65px] uppercase text-white"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3.4px' }}
              >
                una experiencia
              </span>
              <span 
                className="text-[55px] md:text-[90px] text-white tracking-[-1px] mt-1 select-none"
                style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
              >
                única de sabor
              </span>
            </h2>

            <p className="font-montserrat font-normal text-[18px] md:text-[20px] leading-[1.3] mb-10 tracking-[-0.6px] text-white text-center max-w-[590px]">
              Con platillos basados en pan <strong className="font-bold">hecho en casa</strong>. Hemos creado un solo espacio donde <strong className="font-bold">hay de todo, para todas las vidas.</strong>
            </p>

            <a
              href="#menu"
              className="backdrop-blur-[2px] bg-black/15 border-[0.5px] border-white w-[228px] h-[54px] flex items-center justify-center tracking-[3px] font-semibold text-[15px] uppercase text-white hover:bg-white hover:text-[#9c4c35] transition-all duration-300 active:scale-95 shadow-md"
            >
              ¡CONÓCENOS!
            </a>
          </div>
        </div>
      </section>

      {/* SELECCIONES MENU SECTION */}
      <section id="menu" className="w-full py-20 lg:py-28 bg-white text-[#7a4737] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex flex-col items-center mb-12">
            <span 
              className="text-[45px] sm:text-[65px] text-[#7a4737] leading-none select-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              selecciones
            </span>
            <h2 
              className="text-[65px] sm:text-[100px] md:text-[125px] text-[#8f4027] leading-none uppercase mt-2 select-none"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3.4px' }}
            >
              VIDA MÍA
            </h2>
            <p className="font-montserrat font-normal text-[16px] sm:text-[20px] text-[#7a4737] tracking-[-0.6px] mt-4 max-w-[420px] mx-auto">
              Nuestra oferta está diseñada para satisfacer todos los gustos y momentos del día
            </p>
          </div>

          {/* Category Tabs */}
          <div className="w-full overflow-x-auto pb-8 scrollbar-hide flex justify-center">
            <div className="flex items-center justify-center gap-10 min-w-max px-4">
              <button className="bg-[#4156a9] text-white px-5 py-3 font-quicksand font-semibold text-[15px] tracking-[3px] uppercase shadow-md flex items-center h-[54px]">
                PLATOS FUERTES
              </button>
              <button className="text-black font-quicksand font-semibold text-[15px] tracking-[3px] uppercase hover:text-[#4156a9] transition-colors">
                POSTRES
              </button>
              <button className="text-black font-quicksand font-semibold text-[15px] tracking-[3px] uppercase hover:text-[#4156a9] transition-colors">
                PASTELES
              </button>
              <button className="text-black font-quicksand font-semibold text-[15px] tracking-[3px] uppercase hover:text-[#4156a9] transition-colors">
                BEBIDAS
              </button>
              <button className="text-black font-quicksand font-semibold text-[15px] tracking-[3px] uppercase hover:text-[#4156a9] transition-colors">
                MENÚ INFANTIL
              </button>
            </div>
          </div>

          {/* Food Grid - Matching the Figma EXACTLY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 text-left max-w-[1240px] mx-auto">
            {MENU_DATA["platos"]?.map((item) => (
              <div
                key={item.id}
                className="bg-[#fff8f3] shadow-[0px_4px_24px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row h-auto sm:h-[244px] group w-full max-w-[606px] mx-auto"
              >
                {/* Left Image - Full rectangle, no arch */}
                <div className="relative w-full sm:w-[299px] h-[200px] sm:h-full shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[153px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none hidden sm:block" />
                </div>

                {/* Right Content */}
                <div className="p-5 sm:p-6 flex flex-col relative w-full pt-10 sm:pt-6">
                  {/* Price Tag positioned absolute in the design! */}
                  <div className="absolute top-6 left-6 bg-[#4156a9] text-white font-montserrat font-bold text-[15px] tracking-tight px-2 py-1 rounded-[4px] h-[25px] flex items-center justify-center">
                    {item.price}
                  </div>

                  <div className="mt-10 sm:mt-8">
                    <h3 className="font-montserrat font-bold text-[18px] sm:text-[20px] text-[#af6852] leading-tight uppercase mb-1">
                      {item.name}
                    </h3>
                    <p className="font-montserrat font-light text-[13px] sm:text-[14px] text-[#7a4737] leading-[16px] tracking-[-0.4px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-montserrat font-bold text-[13px] sm:text-[14px] text-[#af6852]">5 estrellas</span>
                      </div>
                      <a href="#ubicaciones" className="font-montserrat font-normal text-[13px] sm:text-[14px] text-[#7a4737] underline tracking-[-0.4px] hover:text-[#4156a9]">
                        Ver Ubicaciones
                      </a>
                    </div>
                    {/* Stars visual */}
                    <div className="relative w-[119px] h-[23px]">
                      <Image src={assets.stars} alt="5 Stars" fill className="object-contain object-left" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Under Menu Button */}
          <div className="mt-16 pb-10 flex justify-center">
            <button className="bg-[#4156a9] hover:bg-brand-blue/90 text-white font-quicksand font-semibold text-[15px] tracking-[3px] uppercase w-[228px] h-[54px] transition-all shadow-md active:scale-95 flex items-center justify-center">
              IR AL MENÚ
            </button>
          </div>

        </div>
      </section>

      {/* COZY SHOP & LOCATION INFO ("PAUSA PERFECTA") */}
      <section id="ubicaciones" className="w-full bg-white relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[850px] z-0">
        {/* Left Side: Large vertical photo of cozy bistro interior */}
        <div className="relative w-full lg:w-[687px] h-[500px] lg:h-auto shrink-0 flex items-end">
          <Image
            src={assets.shopInteriorLarge}
            alt="Interior acogedor Vida Mía Bistro"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-[378px] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />

          {/* Text over image */}
          <div className="relative z-10 text-white w-full text-center pb-20">
            <span 
              className="text-[30px] leading-none block mb-1"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Pausa. Respira
            </span>
            <h3 
              className="text-[65px] md:text-[85px] uppercase leading-none block"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3.4px' }}
            >
              DISFRUTA
            </h3>
          </div>
        </div>

        {/* Right Side: Map and Contact details */}
        <div className="flex-grow p-6 sm:p-12 lg:p-20 flex flex-col justify-center items-center text-center bg-white relative z-10">
          <div className="mb-8">
            <span 
              className="text-[45px] sm:text-[55px] text-[#8f4027] leading-none block mb-2"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Ten la pausa
            </span>
            <h2 
              className="text-[65px] sm:text-[95px] text-[#8f4027] leading-none uppercase block"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3.4px' }}
            >
              PERFECTA
            </h2>
            <p className="font-montserrat font-normal text-[16px] sm:text-[18px] text-[#7a4737] tracking-[-0.5px] mt-6 max-w-[470px] mx-auto">
              Nuestro equipo está listo para responder tus consultas y ayudarte a encontrar tu bebida o experiencia favorita.
            </p>
          </div>

          {/* Custom line separator */}
          <div className="w-full max-w-[500px] h-px bg-[#7a4737]/20 my-8" />

          {/* Map layout container */}
          <div className="relative w-full max-w-[578px] h-[260px] rounded-[10px] overflow-hidden bg-zinc-100 mb-10 shadow-sm">
            <Image
              src={assets.mapBg}
              alt="Ubicación Mapa Vida Mía Chalatenango"
              fill
              className="object-cover object-center"
            />
            {/* Markers can be placed here with absolute positioning if needed */}
            <div className="absolute top-[45%] right-[20%] font-montserrat font-normal text-[#8f4027] text-[18px] tracking-[-0.5px]">
              Vida Mía Bistro Café
            </div>
            {/* Animated Pin (Example) */}
            <div className="absolute top-[40%] left-[30%] w-6 h-6">
              <div className="absolute w-full h-full rounded-full bg-brand-blue opacity-40 animate-ping" />
              <div className="w-3.5 h-3.5 rounded-full bg-brand-blue border-2 border-white shadow-md mx-auto mt-1" />
            </div>
          </div>

          {/* Address and telephone details */}
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-[700px] text-left">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 relative shrink-0 mt-1">
                  <Image src={assets.locationVector} alt="Location" fill className="object-contain" />
                </div>
                <div>
                  <h4 className="font-montserrat font-medium text-[18px] text-[#7a4737] tracking-[-0.9px] leading-none mb-1">
                    Vida Mía | <strong className="font-bold">Chalatenango</strong>
                  </h4>
                  <p className="font-montserrat font-normal text-[16px] leading-[21px] text-[#7a4737] tracking-[-0.48px] max-w-[290px]">
                    6ta Calle Poniente, Barrio El Chile #A5-35, Chalatenango, Chalatenango
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 relative shrink-0">
                  <Image src={assets.phoneIcon} alt="Phone" fill className="object-contain" />
                </div>
                <div>
                  <h4 className="font-montserrat font-medium text-[18px] text-[#7a4737] tracking-[-0.9px] leading-none mb-1">
                    Teléfono
                  </h4>
                  <a
                    href="tel:+50323012829"
                    className="font-montserrat font-normal text-[18px] text-[#7a4737] underline tracking-[3px] hover:text-[#4156a9]"
                  >
                    2301-2829
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <button className="bg-[#4156a9] text-white px-6 py-4 font-quicksand font-semibold text-[15px] tracking-[3px] uppercase shadow-md flex items-center justify-center hover:bg-brand-blue/90 transition-colors w-[228px]">
                IR A UBICACIONES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND FOOTER — Figma node 1:190 */}
      <footer className="relative z-10 mt-16 w-full">
        {/* Curved arch shape using clip-path ellipse like Figma */}
        <div 
          className="relative w-full bg-[#8f4027] text-white"
          style={{
            clipPath: 'ellipse(75% 100% at 50% 100%)',
            paddingTop: '100px',
          }}
        >
          {/* Warm center glow */}
          <div 
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '800px',
              height: '200px',
              background: 'radial-gradient(ellipse at center, #c35f3e 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center pb-16">
            {/* Color logo with heart */}
            <div className="relative mb-4 h-[50px] w-[220px] sm:h-[60px] sm:w-[260px]">
              <Image
                src="/assets/vida-mia-logo-footer.svg"
                alt="Vida Mía Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Tagline - script font to match Figma */}
            <span 
              className="text-[26px] leading-none tracking-normal text-white sm:text-[32px]"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Más que café una
            </span>
            
            {/* Main heading */}
            <h3 
              className="mt-1 text-[42px] uppercase leading-none text-white sm:text-[60px] lg:text-[72px]"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-3.4px' }}
            >
              experiencia
            </h3>

            {/* Contact info */}
            <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:mt-10 sm:flex-row sm:items-start sm:gap-[70px]">
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
                  <a href="https://facebook.com/vidamia" target="_blank" rel="noopener noreferrer" className="absolute left-0 top-0 h-full w-1/3" aria-label="Facebook" />
                  <a href="https://instagram.com/vidamia" target="_blank" rel="noopener noreferrer" className="absolute left-1/3 top-0 h-full w-1/3" aria-label="Instagram" />
                  <a href="https://tiktok.com/@vidamia" target="_blank" rel="noopener noreferrer" className="absolute left-2/3 top-0 h-full w-1/3" aria-label="TikTok" />
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
    </div>
  );
}
