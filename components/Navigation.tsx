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
        <div className="flex items-center justify-between h-24">
          <Link
            href="/"
            className="flex items-center space-x-4 space-x-reverse group"
          >
            <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="شعار شركة الطريق الصحيح"
                className="w-full h-full object-contain"
                width={64}
                height={64}
                loading="eager"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">
                الطريق الصحيح
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                ALTAREQ ALSAHEH
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-primary-700 bg-primary-50"
                    : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
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

