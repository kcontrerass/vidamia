"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  polaroidLeft: "/assets/bowl-pechuga-de-pollo.jpg",
  polaroidRight: "/assets/comida.png",
  aboutBg: "/assets/c6c465196aa08b0ee2ddcb061f4dc734f5e3094d.png",

  // Food items
  entrana: "/assets/clasico-mejorado.jpg",
  burger: "/assets/clasico-mejorado.jpg",
  pasta: "/assets/desayuno-salvador.jpg",
  salad: "/assets/mediterraneo.jpg",

  // Bistro shop / locations
  shopInterior: "/assets/c773a7e1ee50cf5640487f8feb442399b7ca59ee.png",
  shopInteriorLarge: "/assets/28c8a8d7f2ebc92249b6e33e4423aef103560b8d.png",
  mapBg: "/assets/map-bg.png",
  mapPinLarge: "/assets/map-pin-large.svg",
  mapPinMedium: "/assets/map-pin-medium.svg",
  mapPinSmall: "/assets/map-pin-small.svg",

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
      name: "DESAYUNO CLÁSICO (Mejorado)",
      price: "$6.50",
      description: "Huevos al gusto,acompañado de frijoles, salsa ranchera, plátanos fritos y carne asada",
      image: assets.entrana,
    },
    {
      id: 2,
      name: "DESAYUNO SALVADOREÑO",
      price: "$9.50",
      description: "2 Pupusas de maíz: (queso o frijol con queso) frijoles refritos, huevos al gusto; solos o con vegetales y plátanos fritos.",
      image: assets.pasta,
    },
    {
      id: 3,
      name: "DESAYUNO COLOMBIANO",
      price: "$9.50",
      description: "Lomito de res acompañado de huevos estrellados, frijoles, plátanos fritos y salsa ranchera. Incluye: 1 pan de agua.",
      image: assets.burger,
    },
    {
      id: 4,
      name: "OMELETTE MEDITERRÁNEO",
      price: "$8.75",
      description: "Omelette con costra de queso mozzarella, espinaca fresca, hongos, cebolla caramelizada y queso mantequilla.",
      image: assets.salad,
    },
  ],
  postres: [
    {
      id: 5,
      name: "ENSALADA VIDA VERDE",
      price: "$9.95",
      description: "Mix de lechugas con aguacate, queso mantequilla, semillas caramelizadas, albahaca y pechuga de pollo a la parrilla.",
      image: "/assets/ensalda-vida-verde.jpg",
    },
    {
      id: 6,
      name: "BOWL PECHUGA DE POLLO",
      price: "$10.95",
      description: "Base de arroz y lechuga, con chunks de pollo empanizado, aguacate, maíz dulce, chips tostadas, cebolla curtida, chirimol.",
      image: "/assets/bowl-pechuga-de-pollo.jpg",
    },
    {
      id: 7,
      name: "COBB SALAD",
      price: "$9.95",
      description: "Mix de lechugas, pollo a la barbacoa, queso cheddar, huevo duro, tocino y aguacate.",
      image: "/assets/cobb-salad.jpg",
    },
    {
      id: 8,
      name: "BOWL DE CAMARÓN",
      price: "$10.95",
      description: "Base de arroz y lechuga con camarones salteados, piña asada, maíz dulce, pepino y aceitunas negras.",
      image: "/assets/bown-de-camaron.jpg",
    },
  ],
  pasteles: [
    {
      id: 9,
      name: "LA TÓXICA",
      price: "$11.75",
      description: "Hamburguesa con doble carne de res, queso cheddar, queso frito, tocino, cebolla caramelizada aderezo chipotle y chile toreado.",
      image: "/assets/DSC07521.jpg",
    },
    {
      id: 10,
      name: "VM BURGER",
      price: "$10.00",
      description: "Pan de hamburguesa, carne de res, aderezo de la casa, queso cheddar, tocino y aros de cebolla en tempura.",
      image: "/assets/DSC07521.jpg",
    },
    {
      id: 11,
      name: "OCEAN BURGER",
      price: "$11.50",
      description: "Hamburguesa con carne de res, salsa Alfredo, queso mozzarella y camarones salteados.",
      image: "/assets/DSC07521.jpg",
    },
    {
      id: 12,
      name: "CRISPY BURGER",
      price: "$10.95",
      description: "Hamburguesa con carne de res, hongos salteados, queso mozzarella, cebolla crispy, tocino y aderezo barbacoa.",
      image: "/assets/DSC07521.jpg",
    },
  ],
  bebidas: [
    {
      id: 13,
      name: "PIZZA ALFREDO",
      price: "$9.00",
      description: "Pizza con salsa Alfredo, espinacas, pollo, hongos y tocino.",
      image: "/assets/pizza-alfredo.jpg",
    },
    {
      id: 14,
      name: "PIZZA CON CAMARONES",
      price: "$9.50",
      description: "Pizza bañada en salsa Alfredo, cubierta con queso mozzarella y camarones al ajillo.",
      image: "/assets/pizza-de-camarones.jpg",
    },
    {
      id: 15,
      name: "PIZZA MARGARITA",
      price: "$7.50",
      description: "Pizza tradicional de salsa napolitana, queso mozzarella, tomate, pesto y albahaca.",
      image: "/assets/pizza-margarita.jpg",
    },
    {
      id: 16,
      name: "PIZZA CUATRO QUESOS",
      price: "$7.50",
      description: "Pizza crujiente en salsa napolitana y 4 tipos de quesos: mozzarella, queso crema, ricotta y cheddar.",
      image: "/assets/pizza-4-quesos.jpg",
    },
  ],
  infantil: [
    {
      id: 17,
      name: "FETUCCINI ALFREDO CON CAMARONES",
      price: "$12.95",
      description: "Pasta fetuccini con camarones salteados y salsa Alfredo. Incluye: 2 rebanadas de pan baguette.",
      image: "/assets/fetuccini-alfredo-con-camarones.jpg",
    },
    {
      id: 18,
      name: "PECHUGA AL PESTO",
      price: "$10.95",
      description: "Pechuga de pollo a la parrilla bañada en pesto de albahaca, acompañada de tocino, vegetales salteados y papas españolas.",
      image: "/assets/pechuga-al-pesto.jpg",
    },
    {
      id: 19,
      name: "PARRILLADA PARA 2 PERSONAS",
      price: "$35.00",
      description: "8 Onzas de carne, 6 onzas de pollo, 1 orden de camarones, 6 cebollines, 2 ordenes de frijoles, 1 orden de papas españolas, 1 ordenes de guacamole, 2 ordenes de chirimol y 4 pan con ajo ó 4 tortillas de taco. Incluye: 4 rebanadas de pan baguette.",
      image: "/assets/parrillada-para-2.jpg",
    },
    {
      id: 20,
      name: "TACOS DE CAMARÓN",
      price: "$7.50",
      description: "Tacos con camarones salteados bañados en salsa chipotle, acompañados de guacamole, chirimol y cebolla morada encurtida.",
      image: "/assets/tacos-de-camaron.jpg",
    },
  ],
};

const HERO_IMAGES = [
  "/assets/banner-4.png",
  "/assets/banner-2.png",
  "/assets/banner-1.png",
  "/assets/banner-3.png",
  "/assets/banner-5.png",
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
      <section className="relative w-full h-[100vh] min-h-[600px] max-h-[864px] overflow-hidden flex items-end justify-center">
        {/* Slides - Images positioned at the bottom of the section to match layout */}
        {HERO_IMAGES.map((imgSrc, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
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

        {/* Dark Top Gradient for Header Readability */}
        <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-black/80 via-black/30 to-transparent z-20 pointer-events-none" />

        {/* Hero Content Overlay - Perfectly positioned based on Figma coordinates */}
        <div className="absolute inset-0 z-25 text-center flex flex-col items-center justify-center px-4 w-full">
          {/* Script accent row "una nueva" */}

          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-4 w-auto">
            <span
              className="text-white text-[26px] sm:text-[45px] md:text-[65px] lg:text-[85px] xl:text-[95px] leading-none lowercase select-none whitespace-nowrap"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Sabor
            </span>
            <div className="w-[40px] sm:w-[80px] md:w-[140px] lg:w-[220px] xl:w-[294px] h-[1px] bg-white opacity-80 flex-shrink-0" />
            <span
              className="text-white text-[26px] sm:text-[45px] md:text-[65px] lg:text-[85px] xl:text-[95px] leading-none lowercase select-none whitespace-nowrap"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Para
            </span>
          </div>

          {/* Large Title */}
          <h1
            className="text-white text-[30px] sm:text-[48px] md:text-[75px] lg:text-[100px] xl:text-[125px] leading-none mb-3 sm:mb-5 md:mb-6 uppercase select-none drop-shadow-sm mt-[-3px] sm:mt-[-8px] md:mt-[-15px]"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-2px' }}
          >
            SIEMPRE
          </h1>

          {/* Call to action */}
          <a
            href="https://wa.me/50325119609"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white bg-black/15 backdrop-blur-[2px] text-white w-[160px] sm:w-[190px] md:w-[210px] lg:w-[228px] h-[44px] sm:h-[50px] md:h-[54px] flex items-center justify-center tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.8px] font-semibold text-[11px] sm:text-[12px] md:text-[14px] uppercase hover:bg-white hover:text-terracotta transition-all duration-300 active:scale-95 shadow-md"
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
        <div className="hidden md:block absolute left-[-60px] lg:left-[-100px] xl:left-[-60px] top-[50%] -translate-y-1/2 z-20">
          <div className="relative w-[160px] md:w-[200px] lg:w-[300px] xl:w-[380px]">
            {/* Shadow layer - slightly more rotated */}
            <div className="absolute top-[0px] left-[8px] bg-[#672b17] w-full h-[200px] md:h-[240px] lg:h-[320px] xl:h-[400px] transform rotate-[-5deg]" />
            <div className="relative bg-white p-[4px] md:p-[5px] lg:p-[6px] shadow-[0px_2px_12px_rgba(0,0,0,0.25)] transform rotate-[-15deg]">
              <div className="relative w-full h-[180px] md:h-[220px] lg:h-[300px] xl:h-[380px] overflow-hidden">
                <Image src={assets.polaroidLeft} alt="Nuestros panaderos artesanales" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Polaroid Right - Extends outside screen */}
        <div className="hidden md:block absolute right-[-60px] lg:right-[-100px] xl:right-[-60px] top-[40%] -translate-y-1/2 z-20">
          <div className="relative w-[160px] md:w-[200px] lg:w-[300px] xl:w-[380px]">
            {/* Shadow layer - slightly more rotated */}
            <div className="absolute top-[-8px] right-[8px] bg-[#4156a9] w-full h-[200px] md:h-[240px] lg:h-[320px] xl:h-[400px] transform rotate-[12deg]" />
            <div className="relative bg-white p-[4px] md:p-[5px] lg:p-[6px] shadow-[0px_2px_12px_rgba(0,0,0,0.25)] transform rotate-[9deg]">
              <div className="relative w-full h-[180px] md:h-[220px] lg:h-[300px] xl:h-[380px] overflow-hidden">
                <Image src={assets.polaroidRight} alt="Disfrutando en el bistro" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-20 mt-6 sm:mt-10">
            {/* DESDE 2013 */}
            <div className="flex items-center justify-center gap-4 sm:gap-[30px] mb-3 sm:mb-4 w-full">
              <div className="h-[1px] bg-white w-[50px] sm:w-[90px]" />
              <span className="font-quicksand font-bold text-[14px] sm:text-[18px] md:text-[23px] tracking-[3px] sm:tracking-[4.6px] uppercase text-white">
                DESDE 2013
              </span>
              <div className="h-[1px] bg-white w-[50px] sm:w-[90px]" />
            </div>

            <span className="font-quicksand font-bold text-[13px] sm:text-[16px] md:text-[23px] tracking-[1.5px] sm:tracking-[2.3px] uppercase text-white mb-2 block px-4">
              que cada bocado que disfrutes te lleves
            </span>

            <h2 className="flex flex-col items-center mb-4 sm:mb-6 leading-none">
              <span
                className="text-[32px] sm:text-[45px] md:text-[55px] lg:text-[65px] uppercase text-white"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-2px' }}
              >
                una experiencia
              </span>
              <span
                className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[90px] text-white tracking-[-1px] mt-1 select-none"
                style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
              >
                única de sabor
              </span>
            </h2>

            <p className="font-montserrat font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] mb-8 sm:mb-10 tracking-[-0.4px] sm:tracking-[-0.6px] text-white text-center max-w-[590px] px-4">
              Con platillos basados en pan <strong className="font-bold">hecho en casa</strong>. Hemos creado un solo espacio donde <strong className="font-bold">hay de todo, para todas las vidas.</strong>
            </p>

            <Link
              href="#menu"
              className="backdrop-blur-[2px] bg-black/15 border-[0.5px] border-white w-[180px] sm:w-[200px] md:w-[228px] h-[48px] sm:h-[54px] flex items-center justify-center tracking-[2px] sm:tracking-[3px] font-semibold text-[13px] sm:text-[15px] uppercase text-white hover:bg-white hover:text-[#9c4c35] transition-all duration-300 active:scale-95 shadow-md"
            >
              ¡CONÓCENOS!
            </Link>
          </div>
        </div>
      </section>

      {/* SELECCIONES MENU SECTION */}
      <section id="menu" className="w-full py-12 sm:py-16 lg:py-28 bg-white text-[#7a4737] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <span
              className="text-[32px] sm:text-[45px] md:text-[65px] text-[#7a4737] leading-none select-none"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              selecciones
            </span>
            <h2
              className="text-[40px] sm:text-[65px] md:text-[100px] lg:text-[125px] text-[#8f4027] leading-none uppercase mt-2 select-none"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-2px' }}
            >
              VIDA MÍA
            </h2>
            <p className="font-montserrat font-normal text-[14px] sm:text-[16px] md:text-[20px] text-[#7a4737] tracking-[-0.6px] mt-4 max-w-[420px] mx-auto px-4">
              Nuestra oferta está diseñada para satisfacer todos los gustos y momentos del día
            </p>
          </div>

          {/* Category Tabs */}
          <div className="w-full overflow-x-auto pb-6 sm:pb-8 scrollbar-hide flex justify-start sm:justify-center">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 min-w-max px-4">
              <button
                onClick={() => setActiveTab("platos")}
                className={`px-3 sm:px-5 py-2 sm:py-3 font-quicksand font-semibold text-[12px] sm:text-[15px] tracking-[2px] sm:tracking-[3px] uppercase flex items-center h-[44px] sm:h-[54px] transition-all whitespace-nowrap ${activeTab === "platos" ? "bg-[#4156a9] text-white shadow-md" : "text-black hover:text-[#4156a9]"}`}
              >
                DESAYUNOS
              </button>
              <button
                onClick={() => setActiveTab("postres")}
                className={`px-3 sm:px-5 py-2 sm:py-3 font-quicksand font-semibold text-[12px] sm:text-[15px] tracking-[2px] sm:tracking-[3px] uppercase flex items-center h-[44px] sm:h-[54px] transition-all whitespace-nowrap ${activeTab === "postres" ? "bg-[#4156a9] text-white shadow-md" : "text-black hover:text-[#4156a9]"}`}
              >
                ENSALADAS
              </button>
              <button
                onClick={() => setActiveTab("pasteles")}
                className={`px-3 sm:px-5 py-2 sm:py-3 font-quicksand font-semibold text-[12px] sm:text-[15px] tracking-[2px] sm:tracking-[3px] uppercase flex items-center h-[44px] sm:h-[54px] transition-all whitespace-nowrap ${activeTab === "pasteles" ? "bg-[#4156a9] text-white shadow-md" : "text-black hover:text-[#4156a9]"}`}
              >
                BURGERS
              </button>
              <button
                onClick={() => setActiveTab("bebidas")}
                className={`px-3 sm:px-5 py-2 sm:py-3 font-quicksand font-semibold text-[12px] sm:text-[15px] tracking-[2px] sm:tracking-[3px] uppercase flex items-center h-[44px] sm:h-[54px] transition-all whitespace-nowrap ${activeTab === "bebidas" ? "bg-[#4156a9] text-white shadow-md" : "text-black hover:text-[#4156a9]"}`}
              >
                PIZZAS
              </button>
              <button
                onClick={() => setActiveTab("infantil")}
                className={`px-3 sm:px-5 py-2 sm:py-3 font-quicksand font-semibold text-[12px] sm:text-[15px] tracking-[2px] sm:tracking-[3px] uppercase flex items-center h-[44px] sm:h-[54px] transition-all whitespace-nowrap ${activeTab === "infantil" ? "bg-[#4156a9] text-white shadow-md" : "text-black hover:text-[#4156a9]"}`}
              >
                PLATOS FUERTES
              </button>
            </div>
          </div>

          {/* Food Grid - Matching the Figma EXACTLY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 text-left max-w-[1240px] mx-auto">
            {MENU_DATA[activeTab]?.map((item) => (
              <div
                key={item.id}
                className="bg-[#fff8f3] shadow-[0px_4px_24px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row h-auto sm:h-[220px] lg:h-[244px] group w-full max-w-[606px] mx-auto"
              >
                {/* Left Image - Full rectangle, no arch */}
                <div className="relative w-full sm:w-[45%] lg:w-[299px] h-[180px] sm:h-full shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[100px] sm:h-[153px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Right Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col relative w-full pt-8 sm:pt-5 lg:pt-6">
                  {/* Price Tag positioned absolute in the design! */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 lg:top-6 lg:left-6 bg-[#4156a9] text-white font-montserrat font-bold text-[13px] sm:text-[15px] tracking-tight px-2 py-1 rounded-[4px] h-[23px] sm:h-[25px] flex items-center justify-center">
                    {item.price}
                  </div>

                  <div className="mt-6 sm:mt-6 lg:mt-8">
                    <h3 className="font-montserrat font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-[#af6852] leading-tight uppercase mb-1">
                      {item.name}
                    </h3>
                    <p className="font-montserrat font-light text-[12px] sm:text-[13px] lg:text-[14px] text-[#7a4737] leading-[15px] sm:leading-[16px] tracking-[-0.4px] line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-3 sm:pt-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-montserrat font-bold text-[12px] sm:text-[13px] lg:text-[14px] text-[#af6852]">5 estrellas</span>
                      </div>
                      <Link href="#ubicaciones" className="font-montserrat font-normal text-[12px] sm:text-[13px] lg:text-[14px] text-[#7a4737] underline tracking-[-0.4px] hover:text-[#4156a9]">
                        Ver Ubicaciones
                      </Link>
                    </div>
                    {/* Stars visual */}
                    <div className="relative w-[100px] sm:w-[119px] h-[20px] sm:h-[23px]">
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
      <section id="ubicaciones" className="w-full bg-white relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[750px] xl:min-h-[850px] z-0">
        {/* Left Side: Large vertical photo of cozy bistro interior */}
        <div className="relative w-full lg:w-1/2 h-[500px] sm:h-[600px] lg:h-auto lg:min-h-[750px] xl:min-h-[850px] flex items-end">
          <Image
            src="/assets/shop-interior-waiter.png"
            alt="Interior acogedor Vida Mía Bistro"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

          {/* Text over image */}
          <div className="relative z-10 text-white w-full text-left pb-8 sm:pb-12 lg:pb-16 xl:pb-20 px-6 sm:px-12 md:px-16 flex flex-col items-start justify-end">
            <div className="w-[100px] sm:w-[120px] md:w-[140px] h-[60px] sm:h-[70px] md:h-[80px] relative mb-2 sm:mb-3">
              <Image
                src="/assets/vida-mia-logo-white.png"
                alt="Vida Mía Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <span
              className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] leading-none block mb-1"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Pausa. Respira
            </span>
            <h3
              className="text-[45px] sm:text-[60px] md:text-[80px] lg:text-[95px] xl:text-[110px] uppercase leading-none block font-black"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-2px' }}
            >
              DISFRUTA
            </h3>
          </div>
        </div>

        {/* Right Side: Map and Contact details */}
        <div className="w-full lg:w-1/2 p-5 sm:p-8 lg:p-10 xl:p-16 flex flex-col justify-center items-center text-center bg-white relative z-10">
          <div className="mb-6 sm:mb-8">
            <span
              className="text-[30px] sm:text-[40px] md:text-[55px] text-[#8f4027] leading-none block mb-2"
              style={{ fontFamily: 'var(--font-script), cursive', fontWeight: 600 }}
            >
              Ten la pausa
            </span>
            <h2
              className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] text-[#8f4027] leading-none uppercase block"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, letterSpacing: '-2px' }}
            >
              PERFECTA
            </h2>
            <p className="font-montserrat font-normal text-[14px] sm:text-[16px] md:text-[18px] text-[#7a4737] tracking-[-0.5px] mt-4 sm:mt-6 max-w-[470px] mx-auto px-4">
              Nuestro equipo está listo para responder tus consultas y ayudarte a encontrar tu bebida o experiencia favorita.
            </p>
          </div>

          {/* Custom line separator */}
          <div className="w-full max-w-[400px] sm:max-w-[500px] h-px bg-[#7a4737]/20 my-6 sm:my-8" />

          {/* Map layout container */}
          <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[578px] h-[180px] sm:h-[220px] md:h-[260px] rounded-[10px] overflow-hidden bg-zinc-100 mb-6 sm:mb-10 shadow-sm">
            <Image
              src={assets.mapBg}
              alt="Ubicación Mapa Vida Mía Chalatenango"
              fill
              className="object-cover object-center"
            />
            {/* Map pins positioned like Figma */}
            {/* Large center pin with label */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-[49px] h-[49px] relative">
                <Image src={assets.mapPinLarge} alt="" fill className="object-contain" />
              </div>
              <span className="font-montserrat font-normal text-[#8f4027] text-[16px] sm:text-[18px] tracking-[-0.54px] mt-1 whitespace-nowrap">
                Vida Mía Bistro Café
              </span>
            </div>
            {/* Top left pin */}
            <div className="absolute top-[15%] left-[4%] w-[34px] h-[34px]">
              <Image src={assets.mapPinMedium} alt="" fill className="object-contain" />
            </div>
            {/* Top right small pin */}
            <div className="absolute top-[8%] right-[35%] w-[26px] h-[26px]">
              <Image src={assets.mapPinSmall} alt="" fill className="object-contain" />
            </div>
            {/* Right side pin */}
            <div className="absolute top-[30%] right-[8%] w-[34px] h-[34px]">
              <Image src={assets.mapPinMedium} alt="" fill className="object-contain" />
            </div>
            {/* Bottom left pin */}
            <div className="absolute bottom-[15%] left-[8%] w-[34px] h-[34px]">
              <Image src={assets.mapPinMedium} alt="" fill className="object-contain" />
            </div>
            {/* Bottom left small pin */}
            <div className="absolute bottom-[8%] left-[16%] w-[26px] h-[26px]">
              <Image src={assets.mapPinSmall} alt="" fill className="object-contain" />
            </div>
            {/* Bottom right pin */}
            <div className="absolute bottom-[10%] right-[12%] w-[34px] h-[34px]">
              <Image src={assets.mapPinMedium} alt="" fill className="object-contain" />
            </div>
            {/* Top center small pin */}
            <div className="absolute top-[10%] right-[22%] w-[17px] h-[17px]">
              <Image src={assets.mapPinSmall} alt="" fill className="object-contain" />
            </div>
          </div>

          {/* Address and telephone details */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center justify-center w-full max-w-[700px] text-left px-4">
            <div className="flex flex-col gap-4 items-center sm:items-start">
              <div className="flex items-start gap-3">
                <div className="w-4 sm:w-5 h-4 sm:h-5 relative shrink-0 mt-1">
                  <Image src={assets.locationVector} alt="Location" fill className="object-contain" />
                </div>
                <div>
                  <h4 className="font-montserrat font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#7a4737] tracking-[-0.9px] leading-none mb-1">
                    Vida Mía bistro café | <strong className="font-bold">Valle Dulce</strong>
                  </h4>
                  <p className="font-montserrat font-normal text-[13px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[21px] text-[#7a4737] tracking-[-0.48px] max-w-[250px] sm:max-w-[290px]">
                    Centro Comercial El Encuentro Valle Dulce, Local Mini Ancla 07, Porción 1 Hacienda El Ángel, Apopa, San Salvador
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 sm:w-5 h-4 sm:h-5 relative shrink-0">
                  <Image src={assets.phoneIcon} alt="Phone" fill className="object-contain" />
                </div>
                <div>
                  <h4 className="font-montserrat font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#7a4737] tracking-[-0.9px] leading-none mb-1">
                    Teléfono
                  </h4>
                  <a
                    href="tel:+50323012829"
                    className="font-montserrat font-normal text-[14px] sm:text-[16px] md:text-[18px] text-[#7a4737] underline tracking-[2px] sm:tracking-[3px] hover:text-[#4156a9]"
                  >
                    2301-2829
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 mt-4 sm:mt-0">
              <button className="bg-[#4156a9] text-white px-4 sm:px-6 py-3 sm:py-4 font-quicksand font-semibold text-[13px] sm:text-[14px] tracking-[2px] sm:tracking-[3px] uppercase shadow-md flex items-center justify-center hover:bg-brand-blue/90 transition-colors w-[180px] sm:w-[200px] md:w-[228px]">
                <Link href="/ubicaciones">IR A UBICACIONES</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND FOOTER — Figma node 1:190 */}
      <footer className="relative z-10 mt-10 sm:mt-16 w-full">
        {/* Curved arch shape using clip-path ellipse like Figma */}
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
            {/* Color logo with heart */}
            <div className="relative mb-3 sm:mb-4 h-[40px] w-[180px] sm:h-[50px] sm:w-[220px] md:h-[60px] md:w-[260px]">
              <Image
                src="/assets/vida-mia-logo-footer.svg"
                alt="Vida Mía Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Tagline - script font to match Figma */}
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

      {/* Floating WhatsApp Button - Always visible */}
      <a
        href="https://wa.me/50325119609"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[93px] lg:h-[93px] bg-[#d4a58c] hover:bg-[#c4917a] rounded-full flex items-center justify-center shadow-[0px_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 active:scale-95"
        title="Chatea con nosotros"
      >
        <svg className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]" viewBox="0 0 37 37" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.3333 0C8.20783 0 0 8.20783 0 18.3333C0 21.7983 0.9625 25.0433 2.63633 27.808L1.001 33.3667C0.907105 33.6858 0.900927 34.0244 0.983115 34.3467C1.0653 34.6691 1.23282 34.9634 1.46806 35.1986C1.7033 35.4338 1.99757 35.6014 2.31993 35.6836C2.6423 35.7657 2.98085 35.7596 3.3 35.6657L8.85867 34.0303C11.7162 35.7593 14.9934 36.6712 18.3333 36.6667C28.4588 36.6667 36.6667 28.4588 36.6667 18.3333C36.6667 8.20783 28.4588 0 18.3333 0ZM14.1863 22.4822C17.8952 26.1892 21.4353 26.6787 22.6857 26.7245C24.5868 26.7942 26.4385 25.3422 27.159 23.6573C27.25 23.4477 27.283 23.2176 27.2546 22.9909C27.2262 22.7641 27.1375 22.5492 26.9977 22.3685C25.993 21.0852 24.6345 20.163 23.3072 19.2463C23.03 19.0547 22.6895 18.9778 22.3569 19.0319C22.0243 19.0859 21.7256 19.2665 21.5233 19.536L20.4233 21.2135C20.3655 21.3037 20.2754 21.3683 20.1714 21.3943C20.0675 21.4202 19.9576 21.4053 19.8642 21.3528C19.118 20.9257 18.0308 20.1997 17.2498 19.4187C16.4688 18.6377 15.7868 17.6 15.4037 16.9015C15.3562 16.8128 15.3424 16.7098 15.365 16.6117C15.3876 16.5136 15.445 16.427 15.5265 16.368L17.2205 15.1103C17.4623 14.9001 17.6183 14.6084 17.6588 14.2906C17.6994 13.9728 17.6217 13.6512 17.4405 13.387C16.6192 12.1843 15.6622 10.6553 14.2743 9.6415C14.0952 9.51171 13.8854 9.43078 13.6655 9.40667C13.4457 9.38256 13.2233 9.4161 13.0203 9.504C11.3337 10.2263 9.87433 12.078 9.944 13.9828C9.98983 15.2332 10.4793 18.7733 14.1863 22.4822Z" fill="white" />
        </svg>
      </a>
    </div>
  );
}
