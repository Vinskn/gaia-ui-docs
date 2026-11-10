import React, { useState } from "react";

export interface ColorItem {
  hex: string;
  text: string;
}

interface ColorPaletteProps {
  colors: ColorItem[];
  title?: string;
}

// SVG Icons
const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2" />
      <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
    </g>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  title = "Color Palette",
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      {title && (
        <h3 className="text-lg font-bold text-slate-800 mb-4">{title}</h3>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {colors.map((color, index) => {
          const isCopied = copiedHex === color.hex;

          return (
            <div
              key={`${color.hex}-${index}`}
              onClick={() => handleCopy(color.hex)}
              className="group relative flex flex-col rounded-xl overflow-hidden border border-slate-200/80 bg-white cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Color Swatch */}
              <div
                className="h-28 w-full relative transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: color.hex }}
              >
                {/* Overlay Icon saat Hover / Copied */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {isCopied ? (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      <span className="text-emerald-400">
                        <CheckIcon />
                      </span>
                      Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      <CopyIcon /> Copy
                    </span>
                  )}
                </div>
              </div>

              {/* Color Info */}
              <div className="p-3 flex flex-col gap-0.5 bg-white z-10">
                <span
                  className="text-xs font-semibold text-slate-700 truncate"
                  title={color.text}
                >
                  {color.text}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {color.hex}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPalette;
