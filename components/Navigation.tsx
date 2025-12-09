"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "عن الشركة" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-28 md:h-32">
          <Link
            href="/"
            className="flex items-center space-x-5 space-x-reverse group"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="شعار شركة إعمار اليوم"
                className="w-full h-full object-contain"
                width={96}
                height={96}
                loading="eager"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                إعمار اليوم
              </h1>
              <p className="text-sm md:text-base text-gray-500 font-medium">
                EMAAR ALYOUM
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-primary-700 bg-primary-50"
                    : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-4 rounded-xl font-semibold text-base transition-colors ${
                  isActive(item.href)
                    ? "text-primary-700 bg-primary-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

