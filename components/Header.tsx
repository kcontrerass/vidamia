"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 h-[80px] sm:h-[90px] md:h-[106px] bg-transparent border-b border-white/20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-28 sm:w-36 md:w-48 h-10 sm:h-12 hover:scale-105 transition-transform duration-200">
          <Image
            src="/assets/9e7da1f34b321d13277dec961b81b343ff15ef2f.svg"
            alt="Vida Mía Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] sm:text-[14px] font-bold text-white tracking-[2.5px] uppercase">
          <Link href="/" className="hover:text-amber-200 transition-colors duration-200 relative group">
            Inicio
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
          </Link>
          <Link href="/#nosotros" className="hover:text-amber-200 transition-colors duration-200 relative group">
            Quiénes Somos
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
          </Link>
          <Link href="https://linktr.ee/vidamiabistrocafe" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors duration-200 relative group">
            Menú
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
          </Link>
          <Link href="/ubicaciones" className="hover:text-amber-200 transition-colors duration-200 relative group">
            Ubicaciones
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
          </Link>
        </nav>

        {/* Desktop Call to Action Button */}
        <Link
          href="/reservaciones"
          className="hidden md:inline-flex border border-white hover:bg-white hover:text-terracotta text-white font-semibold text-[13px] tracking-[2.5px] uppercase px-6 py-3 transition-all duration-300 backdrop-blur-[2px] bg-white/5 active:scale-95"
        >
          COTIZA TU EVENTO
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-amber-200 transition-colors focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 sm:w-8 h-6 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] sm:top-[90px] left-0 right-0 bg-[#c9956d] shadow-lg border-t border-white/10 z-50">
          <nav className="flex flex-col px-6 py-8 gap-6 text-[15px] font-bold text-white tracking-[3px] uppercase">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors py-2 border-b border-white/5"
            >
              Inicio
            </Link>
            <Link
              href="/#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors py-2 border-b border-white/5"
            >
              Quiénes Somos
            </Link>
            <Link
              href="https://linktr.ee/vidamiabistrocafe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors py-2 border-b border-white/5"
            >
              Menú
            </Link>
            <Link
              href="/ubicaciones"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-200 transition-colors py-2 border-b border-white/5"
            >
              Ubicaciones
            </Link>
            <Link
              href="/reservaciones"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex justify-center border border-white hover:bg-white hover:text-terracotta text-white font-semibold text-[14px] tracking-[2.5px] uppercase px-6 py-3 mt-4 transition-colors"
            >
              COTIZA TU EVENTO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
