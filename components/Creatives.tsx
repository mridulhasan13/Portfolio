
import React, { useState, useEffect } from 'react';

// Imports for all Website images (Photography)
import Img1 from '../Website/1.webp';
import Img11 from '../Website/11.webp';
import Img14 from '../Website/14.webp';
import Img15 from '../Website/15.webp';
import Img16 from '../Website/16.webp';
import Img17 from '../Website/17.webp';
import Img18 from '../Website/18.webp';
import Img2 from '../Website/2.webp';
import Img24 from '../Website/24.webp';
import Img25 from '../Website/25.webp';
import Img29 from '../Website/29.webp';
import Img3 from '../Website/3.webp';
import Img30 from '../Website/30.webp';
import Img31 from '../Website/31.webp';
import Img32 from '../Website/32.webp';
import Img35 from '../Website/35.webp';
import Img36 from '../Website/36.webp';
import Img37 from '../Website/37.webp';
import Img42 from '../Website/42.webp';
import Img43 from '../Website/43.webp';
import Img44 from '../Website/44.webp';
import Img48 from '../Website/48.webp';
import Img49 from '../Website/49.webp';
import Img51 from '../Website/51.webp';
import Img56 from '../Website/56.webp';
import Img58 from '../Website/58.webp';
import Img63 from '../Website/63.webp';
import Img65 from '../Website/65.webp';
import Img7 from '../Website/7.webp';
import Img72 from '../Website/72.webp';
import Img73 from '../Website/73.webp';
import Img76 from '../Website/76.webp';
import Img77 from '../Website/77.webp';
import Img78 from '../Website/78.webp';
import Img79 from '../Website/79.webp';
import Img80 from '../Website/80.webp';
import Img81 from '../Website/81.webp';
import Img82 from '../Website/82.webp';
import Img83 from '../Website/83.webp';
import Img84 from '../Website/84.webp';
import Img85 from '../Website/85.webp';
import Img86 from '../Website/86.webp';
import Img87 from '../Website/87.webp';
import Img88 from '../Website/88.webp';
import Img89 from '../Website/89.webp';
import Img90 from '../Website/90.webp';

// Imports for all Design images (Graphics)
import DImg1 from '../Design/1-01.webp';
import DImg2 from '../Design/3-02.webp';
import DImg3 from '../Design/418102264_73edc2d9-aaf9-4050-8826-a0cdd2ca3bb1.webp';
import DImg4 from '../Design/70 Final logo Breakdown-01.webp';
import DImg5 from '../Design/Aipe.webp';
import DImg6 from '../Design/Associate.webp';
import DImg7 from '../Design/FB_IMG_1762345355014.webp';
import DImg8 from '../Design/FB_IMG_1762345498438.webp';
import DImg9 from '../Design/FB_IMG_1762345531087.webp';
import DImg10 from '../Design/Final-51-01 (1).webp';
import DImg11 from '../Design/Gold Madel.webp';
import DImg12 from '../Design/IMG-20250917-WA0002.webp';
import DImg13 from '../Design/Reception Invitation Card.webp';
import DImg14 from '../Design/Screenshot_2023_0319_215902.webp';
import DImg15 from '../Design/ergs.webp';
import DImg16 from '../Design/gfwda-02.webp';

interface GalleryItemProps {
  url: string;
  title: string;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ url, title, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="break-inside-avoid group relative overflow-hidden rounded-[2rem] bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:scale-[1.02] hover:border-amber-400/20 hover:shadow-2xl mb-6">
      <div className={`w-full transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0 min-h-[200px]'}`}>
        <img
          src={url}
          alt={title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {/* Minimal overlay per request for 'unique' feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 pointer-events-none">
        <span className="text-amber-400 font-bold text-[10px] uppercase tracking-[0.2em] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {title} {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
      </div>
    </div>
  );
};


const Creatives: React.FC = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [shuffledDesignImages, setShuffledDesignImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Pool of all available website images
  const allImages = [
    Img1, Img11, Img14, Img15, Img16, Img17, Img18, Img2, Img24, Img25, Img29, Img3,
    Img30, Img31, Img32, Img35, Img36, Img37, Img42, Img43, Img44, Img48, Img49, Img51,
    Img56, Img58, Img63, Img65, Img7, Img72, Img73, Img76, Img77, Img78, Img79, Img80,
    Img81, Img82, Img83, Img84, Img85, Img86, Img87, Img88, Img89, Img90
  ];

  // Pool of all available design images
  const allDesignImages = [
    DImg1, DImg2, DImg3, DImg4, DImg5, DImg6, DImg7, DImg8, DImg9, DImg10,
    DImg11, DImg12, DImg13, DImg14, DImg15, DImg16
  ];

  /* Fisher-Yates shuffle algorithm */
  const shuffleArray = (array: string[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    // Shuffle images on component mount
    setShuffledImages(shuffleArray(allImages));
    setShuffledDesignImages(shuffleArray(allDesignImages));
    setIsLoaded(true);
  }, []);

  // 46 slots for Photography (Architectural, Industrial, Nature, Macro)
  // We use the shuffled images to fill these slots.
  // If we run out of images, we restart from the beginning (modulo).
  const photographyStructure = Array(46).fill({ title: 'Visual Narrative' });

  // 16 slots for Graphics (Editorial, Branding, Layout)
  const graphicsStructure = Array(16).fill({ title: 'Graphic Identity' });

  // Prepare data with random images
  const photography = photographyStructure.map((item, index) => ({
    ...item,
    url: isLoaded ? shuffledImages[index % shuffledImages.length] : '', // Fallback or placeholder
  }));

  const graphics = graphicsStructure.map((item, index) => ({
    ...item,
    url: isLoaded ? shuffledDesignImages[index % shuffledDesignImages.length] : '',
  }));


  return (
    <section id="creatives" className="py-32 bg-black min-h-screen relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            The Visual <span className="gold-gradient italic">Vault</span>
          </h2>
          <p className="mt-8 text-neutral-500 max-w-2xl mx-auto font-light text-lg">
            A comprehensive collection of 40+ curated frames exploring the intersection of industrial precision and artistic narrative.
          </p>
        </div>

        {/* Photography Subsection */}
        <div className="mb-40">
          <div className="flex items-center gap-6 mb-16">
            <div className="flex flex-col">
              <span className="text-amber-400 font-black text-[10px] uppercase tracking-[0.4em] mb-2">Section 01</span>
              <h4 className="text-3xl font-black text-white tracking-tight uppercase">Photographic Stills</h4>
            </div>
            <div className="h-px bg-gradient-to-r from-neutral-800 to-transparent flex-grow"></div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {isLoaded && photography.map((item, i) => (
              <GalleryItem key={i} url={item.url} title={item.title} index={i} />
            ))}
          </div>
        </div>

        {/* Graphics Subsection */}
        <div>
          <div className="flex items-center gap-6 mb-16">
            <div className="flex flex-col">
              <span className="text-amber-400 font-black text-[10px] uppercase tracking-[0.4em] mb-2">Section 02</span>
              <h4 className="text-3xl font-black text-white tracking-tight uppercase">Graphics & Identity</h4>
            </div>
            <div className="h-px bg-gradient-to-r from-neutral-800 to-transparent flex-grow"></div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {isLoaded && graphics.map((item, i) => (
              <GalleryItem key={i} url={item.url} title={item.title} index={i} />
            ))}
          </div>
        </div>

        {/* Closing Tag */}
        <div className="mt-40 pt-20 border-t border-neutral-900 text-center">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.6em]">For more visuals contact</p>
        </div>
      </div>
    </section>
  );
};

export default Creatives;
