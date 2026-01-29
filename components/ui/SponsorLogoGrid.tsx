import React, { useState, useEffect } from "react";

interface SponsorLogoGridProps {
  className?: string;
}

export const SponsorLogoGrid = ({ className = "" }: SponsorLogoGridProps) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data.images || []);
    };
    fetchData();
  }, []);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {images.map((image) => (
        <div
          key={image}
          className="flex items-center justify-center p-4 bg-white rounded-lg border border-border"
        >
          <img
            className="max-h-20 w-auto object-contain"
            alt="Sponsor logo"
            src={`/sponsors/${image}`}
          />
        </div>
      ))}
    </div>
  );
};
