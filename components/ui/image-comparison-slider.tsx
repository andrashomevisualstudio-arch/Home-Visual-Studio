"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";

export interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

// Takes two image URLs (before and after) and creates a slider to compare them.
export const ImageComparison: React.FC<ImageComparisonProps> = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
}) => {
  // Slider position (0–100) and drag state.
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle slider movement (mouse + touch).
  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    },
    [isDragging]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  // Stop dragging even if the cursor leaves the component.
  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[3/2] w-full max-w-4xl select-none overflow-hidden rounded-xl shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before image (top layer) — revealed on the LEFT, under the "Előtte" label. */}
      <div
        className="absolute left-0 top-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={altBefore}
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
      </div>

      {/* After image (bottom layer) — shows on the RIGHT, under the "Utána" label. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterImage}
        alt={altAfter}
        className="block h-full w-full object-cover object-center"
        draggable={false}
      />

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
        Előtte
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
        Utána
      </span>

      {/* Slider handle */}
      <div
        className="absolute bottom-0 top-0 flex w-1.5 cursor-ew-resize items-center justify-center bg-white/80"
        style={{ left: `calc(${sliderPosition}% - 0.375rem)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 ease-in-out ${
            isDragging ? "scale-110 shadow-xl" : ""
          }`}
        >
          <ChevronsLeftRight className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </div>
  );
};
