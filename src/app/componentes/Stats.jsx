"use client";

const stats = [
    { id: 1, name: 'Proyectos Completados', value: '100+' },
    { id: 2, name: 'Años de Experiencia', value: '10+' },
    { id: 3, name: 'Clientes Satisfechos', value: '100%' },
];

export default function Stats() {
    return (
        <div className="bg-black py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`mx-auto flex max-w-xs flex-col gap-y-4 ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''
                                } w-full`}
                        >
                            <dt className="text-base leading-7 text-white uppercase tracking-widest font-medium">
                                {stat.name}
                            </dt>
                            <dd className="order-first text-5xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-md">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
