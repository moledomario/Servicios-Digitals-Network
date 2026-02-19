"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/productos", label: "Productos" },
    { href: "/blog", label: "Blog" },

];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100"
                : "bg-white/95 backdrop-blur-xl"
                }`}
        >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-80"></div>

            <div className="container mx-auto px-6 max-w-full">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative w-40 h-20 hover:scale-105 transition-transform duration-300 z-10"
                    >
                        <Image
                            src="/header-logo.png"
                            alt="Servicios Digitales Logo"
                            fill
                            className="object-contain drop-shadow-sm"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-[var(--primary)] transition-all duration-300 font-semibold relative group text-sm uppercase tracking-wide"
                            >
                                {link.label}
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-blue-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="/contacto"
                            className="group relative px-6 py-2.5 bg-gradient-to-r from-[var(--primary)] to-blue-400 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/30 hover:scale-105"
                        >
                            <span className="relative z-10 text-sm uppercase tracking-wide">Contacto</span>
                            {/* Animated Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative p-2 text-gray-700 hover:text-[var(--primary)] transition-colors z-10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'}`}></span>
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-6 flex flex-col gap-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-xl mb-4">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-all duration-300 font-medium py-3 px-6 rounded-lg mx-2 border border-transparent hover:border-[var(--primary)]/30"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="mx-2 mt-2 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-blue-400 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/30 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}