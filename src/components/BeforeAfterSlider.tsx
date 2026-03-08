"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        if (isDragging) {
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchend", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="w-full max-w-2xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                    See The <span className="text-orange-500">Transformation</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                    Slide to see the difference our heavy-duty land clearing makes.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative w-full aspect-[3/4] rounded-sm overflow-hidden select-none border-2 border-neutral-800 cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
                onTouchMove={handleTouchMove}
                onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            >
                {/* After Image (Background) */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={afterImage}
                        alt="After"
                        fill
                        className="object-cover pointer-events-none"
                        priority
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 text-white font-bold px-3 py-1 rounded-sm text-sm uppercase tracking-wider backdrop-blur-md shadow-lg">
                        After
                    </div>
                </div>

                {/* Before Image (Foreground, clipped) */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                    <Image
                        src={beforeImage}
                        alt="Before"
                        fill
                        className="object-cover pointer-events-none"
                        priority
                    />
                    <div className="absolute top-4 left-4 bg-black/60 text-white font-bold px-3 py-1 rounded-sm text-sm uppercase tracking-wider backdrop-blur-md shadow-lg">
                        Before
                    </div>
                </div>

                {/* Slider Handle & Line */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-30"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.4)] border-2 border-orange-500 text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
