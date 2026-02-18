'use client';

import Image from "next/image";
import { videos } from "../utils/videos";

export default function CartaBlog() {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 px-4">

            {videos.map((video) => (
                <div
                    key={video.id}
                    className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                    {console.log(video.description)}
                    {/* Contenedor 16:9 */}
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            allowFullScreen
                        />
                    </div>
                    <div className="p-3">
                        <h3 className="text-sm font-semibold text-gray-700 truncate">{video.title}</h3>

                    </div>
                    <div className="p-3">
                        <p className="text-sm font-semibold">{video.description}</p>
                    </div>
                </div>
            ))}

        </div>

    );
}
