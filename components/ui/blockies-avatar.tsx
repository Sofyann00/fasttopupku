"use client";

import { useEffect, useRef } from "react";
import createIcon from "ethereum-blockies";

interface BlockiesAvatarProps {
  seed: string;
  size?: number;
  scale?: number;
  className?: string;
}

export function BlockiesAvatar({
  seed,
  size = 8,
  scale = 3,
  className = "",
}: BlockiesAvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      var icon = createIcon.create({
        // All options are optional
        seed: seed, // seed used to generate icon data, default: random
        color: "#dfe", // to manually specify the icon color, default: random
        bgcolor: "#aaa", // choose a different background color, default: random
        size: size, // width/height of the icon in blocks, default: 8
        scale: scale, // width/height of each block in pixels, default: 4

        // default: random. Set to -1 to disable it. These "spots" create structures
        // that look like eyes, mouths and noses.
      });

      // Clear the canvas before drawing new icon
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.clearRect(0, 0, size * scale, size * scale);
      }

      canvasRef.current.width = size * scale;
      canvasRef.current.height = size * scale;
      canvasRef.current.style.width = `${size * scale}px`;
      canvasRef.current.style.height = `${size * scale}px`;

      // Draw the icon on the canvas
      canvasRef.current.getContext("2d")?.drawImage(icon, 0, 0);
    }
  }, [seed, size, scale]);

  return (
    <canvas
      ref={canvasRef}
      className={`rounded-full ${className}`}
      width={size * scale}
      height={size * scale}
    />
  );
}
