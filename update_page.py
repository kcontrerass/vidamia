import sys

def main():
    with open('app/page.tsx', 'r') as f:
        content = f.read()
    
    # We want to replace from {/* ABOUT US SECTION ("DESDE 2013") */} to the end of the file, except the closing </div> y ); }
    start_marker = '{/* ABOUT US SECTION ("DESDE 2013") */}'
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print("Marker not found")
        sys.exit(1)
        
    top_part = content[:start_idx]
    
    # Find the end of the main div
    end_part = """    </div>
  );
}
"""
    
    new_sections = """      {/* ABOUT US SECTION ("DESDE 2013") */}
      <section id="nosotros" className="relative w-full overflow-hidden bg-[#9c4c35] py-24 lg:py-32 text-white">
        {/* Subtle Background Image Overlay for Texture if needed */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/assets/c6c465196aa08b0ee2ddcb061f4dc734f5e3094d.png')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Polaroids - Absolute positioned on desktop to match exact overlapping */}
          <div className="hidden lg:block absolute left-[-60px] top-0 z-0">
            {/* Shadow layer */}
            <div className="absolute inset-0 bg-[#672b17] transform rotate-[-7deg] w-[413px] h-[454px]" />
            <div className="relative bg-white border-[10px] border-white p-4 pb-12 w-[413px] h-[454px] shadow-[0px_4px_24px_rgba(0,0,0,0.55)] transform rotate-[-15deg] hover:rotate-0 transition-transform duration-500 ease-out z-10">
              <div className="relative w-full h-[90%] bg-zinc-200 overflow-hidden">
                <Image src={assets.polaroidLeft} alt="Nuestros panaderos artesanales" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block absolute right-[20px] top-[100px] z-0">
             {/* Shadow layer */}
            <div className="absolute inset-0 bg-[#4156a9] transform rotate-[17deg] w-[413px] h-[454px]" />
            <div className="relative bg-white border-[10px] border-white p-4 pb-12 w-[413px] h-[454px] shadow-[0px_4px_24px_rgba(0,0,0,0.55)] transform rotate-[9deg] hover:rotate-0 transition-transform duration-500 ease-out z-10">
              <div className="relative w-full h-[90%] bg-zinc-200 overflow-hidden">
                <Image src={assets.polaroidRight} alt="Disfrutando en el bistro" fill className="object-cover" />
              </div>
            </div>
          </div>

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
              <span className="font-montserrat font-black text-[55px] md:text-[85px] tracking-[-3.4px] uppercase text-white">
                una experiencia
              </span>
              <span className="font-playfair italic text-[60px] md:text-[95px] text-white tracking-[-3.8px] mt-1 select-none">
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
            <span className="font-playfair italic text-[45px] sm:text-[65px] text-[#7a4737] tracking-[-2.6px] leading-none select-none">
              selecciones
            </span>
            <h2 className="font-montserrat font-black text-[65px] sm:text-[100px] md:text-[125px] text-[#8f4027] tracking-[-3px] sm:tracking-[-5px] leading-none uppercase mt-2 select-none">
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
      <section id="ubicaciones" className="w-full bg-[#f8f9fa] relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[850px] mb-[-50px] z-0">
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
            <span className="font-playfair italic text-[30px] tracking-[-1.2px] leading-none block mb-1">
              Pausa. Respira
            </span>
            <h3 className="font-montserrat font-black text-[65px] md:text-[85px] tracking-[-3.4px] uppercase leading-none block">
              DISFRUTA
            </h3>
          </div>
        </div>

        {/* Right Side: Map and Contact details */}
        <div className="flex-grow p-6 sm:p-12 lg:p-20 flex flex-col justify-center items-center text-center bg-white relative z-10">
          <div className="mb-8">
            <span className="font-playfair italic text-[45px] sm:text-[55px] text-[#8f4027] tracking-[-2.2px] leading-none block mb-2">
              Ten la pausa
            </span>
            <h2 className="font-montserrat font-black text-[65px] sm:text-[95px] text-[#8f4027] tracking-[-3.8px] leading-none uppercase block">
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

      {/* BRAND FOOTER - Exactly matching Figma */}
      <footer className="relative bg-[#823016] text-white pt-[150px] overflow-hidden z-10">
        
        {/* Curved Top Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[120%] h-[300px] bg-white rounded-b-[100%] pointer-events-none transform -translate-y-[150px] z-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />

        {/* Decorative background vectors from Figma */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-0">
           <Image src={assets.unionFooter} alt="Vector" fill className="object-cover object-top" />
           <Image src={assets.maskGroupFooter} alt="Mask" fill className="object-cover mix-blend-overlay" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          
          <div className="flex flex-col items-center justify-center mb-16 relative">
            <div className="absolute top-[-80px] w-[137px] h-[67px]">
              <Image src={assets.logoFooter} alt="Vida Mía Logo" fill className="object-contain filter drop-shadow-md" />
            </div>
            
            <div className="mt-8 flex flex-col items-center">
              <span className="font-playfair italic text-[30px] text-white tracking-[-1.2px] select-none leading-none">
                Más que café una
              </span>
              <h3 className="font-montserrat font-black text-[60px] md:text-[85px] tracking-[-3.4px] uppercase text-white leading-none mt-2">
                experiencia
              </h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
            {/* Phone Info */}
            <div className="flex flex-col items-start gap-1">
               <div className="flex items-center gap-2">
                 <div className="w-5 h-5 relative shrink-0 text-white invert">
                    <Image src={assets.phoneIcon} alt="Phone" fill className="object-contain" />
                 </div>
                 <span className="font-montserrat font-medium text-[18px] tracking-[-0.9px] text-white">
                   Teléfono
                 </span>
               </div>
               <span className="font-montserrat font-normal text-[18px] tracking-[3px] text-white pl-7">
                 2511-9609
               </span>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-start gap-3">
               <span className="font-montserrat font-medium text-[18px] tracking-[-0.9px] text-white">
                 ¡Síguenos en!
               </span>
               <div className="relative w-[123px] h-[32px]">
                 <Image src={assets.socialsIcon} alt="Social media" fill className="object-contain" />
                 <a href="https://facebook.com/vidamia" target="_blank" rel="noopener noreferrer" className="absolute left-0 top-0 w-1/3 h-full cursor-pointer" aria-label="Facebook" />
                 <a href="https://instagram.com/vidamia" target="_blank" rel="noopener noreferrer" className="absolute left-1/3 top-0 w-1/3 h-full cursor-pointer" aria-label="Instagram" />
                 <a href="https://tiktok.com/@vidamia" target="_blank" rel="noopener noreferrer" className="absolute left-2/3 top-0 w-1/3 h-full cursor-pointer" aria-label="TikTok" />
               </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="w-full bg-[#67220e] relative z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-center h-[88px]">
            <p className="font-montserrat font-medium text-[12px] text-white/80 tracking-wide uppercase flex items-center gap-2">
              Powered by Aumenta <span className="text-white/40">|</span> Copyright <strong className="font-bold text-white">2026</strong>
            </p>
          </div>
        </div>

      </footer>
"""
    
    with open('app/page.tsx', 'w') as f:
        f.write(top_part)
        f.write(new_sections)
        f.write(end_part)

if __name__ == "__main__":
    main()
