import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

type Sponsor = {
  name: string;
  logo: string;
  link?: string | null;
};

export default function SponsorsMarquee() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        setSponsors(data.sponsors || []);
      } catch (e) {
        console.error("Failed to fetch sponsors", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <Marquee>
        {sponsors.map((sponsor) => {
          const logo = (
            <img
              className="mx-1 bg-white rounded-lg"
              width={300}
              height={200}
              alt={sponsor.name}
              src={sponsor.logo}
            />
          );

          return sponsor.link ? (
            <a
              key={sponsor.logo}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {logo}
            </a>
          ) : (
            <div key={sponsor.logo}>{logo}</div>
          );
        })}
      </Marquee>
    </div>
  );
}
