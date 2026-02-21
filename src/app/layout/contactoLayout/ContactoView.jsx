'use client';

import { useState } from 'react';

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Error al enviar el formulario');

            setStatus('success');
            setFormData({ nombre: "", email: "", mensaje: "" });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleWhatsapp = () => {
        const mensaje = encodeURIComponent("Hola, me gustaría obtener información sobre sus servicios.");
        window.open(`https://wa.me/51948599036?text=${mensaje}`, "_blank");
    };

    const inputBase =
        "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-blue-100";

    return (
        <section className="min-h-screen bg-gray-50 py-20 px-4">

            {/* Header */}
            <div className="text-center mt-12 mb-14 max-w-2xl mx-auto">
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-[var(--primary)] mb-4">
                    Contacto
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    ¡Contactate con nosotros!
                </h1>
                <p className="text-gray-500 text-lg">
                    Cuéntanos cómo podemos ayudarte y te responderemos a la brevedad.
                </p>
            </div>

            {/* Main Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Envianos un mensaje</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                Nombre
                            </label>
                            <input
                                type="text"
                                placeholder="Ej: Juan García"
                                value={formData.nombre}
                                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                required
                                className={inputBase}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className={inputBase}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                Mensaje
                            </label>
                            <textarea
                                placeholder="¿En qué podemos ayudarte?"
                                value={formData.mensaje}
                                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                required
                                rows={5}
                                className={`${inputBase} resize-none`}
                            />
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <p className="text-sm text-green-600 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                                ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                                ❌ Ocurrió un error. Por favor intentá de nuevo.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-3.5 px-6 bg-[var(--primary)] hover:bg-blue-600 active:scale-95 text-white font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-blue-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                    </form>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">

                    {/* WhatsApp Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-green-50 rounded-xl p-3">
                                <svg className="w-7 h-7 fill-[#25D366]" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Hablemos por WhatsApp</h2>
                                <p className="text-gray-500 text-sm">Respuesta rápida garantizada</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mb-5">
                            ¿Preferís una respuesta inmediata? Escribinos directamente por WhatsApp y te atendemos al instante.
                        </p>
                        <button
                            onClick={handleWhatsapp}
                            className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-green-200"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Escribir por WhatsApp
                        </button>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-[310px]">
                            <div className="bg-blue-50 rounded-lg w-9 h-9 flex items-center justify-center mb-3">
                                <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-bold text-gray-800 mb-1">Gmail</h3>
                            <p className="text-xs text-gray-500">comercial@servicios-digitals-network.com</p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}