import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Instagram } from 'lucide-react';

// Componente para o ícone do Discord
const DiscordIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    className="social-icon"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

function App() {
  // Array of unique anime character image URLs from Unsplash
  const animeImages = [
    // First row images (17 unique)
    "/images/pinto1.jpg",
    "/images/pinto2.jpg",
    "/images/pinto3.jpg",
    "/images/pinto4.jpg",
    "/images/pinto5.jpg",
    "/images/pinto6.jpg",
    "/images/pinto7.jpg",
    "/images/pinto8.jpg",
    "/images/pinto9.jpg",
    "/images/pinto10.jpg",
    "/images/pinto11.jpg",
    "/images/pinto12.jpg",
    "/images/pinto13.jpg",
    "/images/pinto14.jpg",
    "/images/pinto15.jpg",
    "/images/pinto16.jpg",
    "/images/pinto17.jpg",
    
    // Second row images (17 unique)
    "/images/pinto18.jpg",
    "/images/pinto19.jpg",
    "/images/pinto20.jpg",
    "/images/pinto21.jpg",
    "/images/pinto22.jpg",
    "/images/pinto23.jpg",
    "/images/pinto24.jpg",
    "/images/pinto25.jpg",
    "/images/pinto26.jpg",
    "/images/pinto27.jpg",
    "/images/pinto28.jpg",
    "/images/pinto29.jpg",
    "/images/pinto30.jpg",
    "/images/pinto31.jpg",
    "/images/pinto32.jpg",
    "/images/pinto33.jpg",
    "/images/pinto34.jpg",
    
    // Third row images (17 unique)
    "/images/pinto35.jpg",
    "/images/pinto36.jpg",
    "/images/pinto37.jpg",
    "/images/pinto38.jpg",
    "/images/pinto39.jpg",
    "/images/pinto40.jpg",
    "/images/pinto41.jpg",
    "/images/pinto42.jpg",
    "/images/pinto43.jpg",
    "/images/pinto44.jpg",
    "/images/pinto45.jpg",
    "/images/pinto46.jpg",
    "/images/pinto47.jpg",
    "/images/pinto48.jpg",
    "/images/pinto49.jpg",
    "/images/pinto50.jpg",
    "/images/pinto51.jpg"
  ];

  // HelenAI images
  const helenAIImages = [
    "/images/helen1.jpg",
    "https://images.unsplash.com/photo-1639628735042-31baaf048d15?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000&auto=format&fit=crop"
  ];

  // Refs para os vídeos
  const loreVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Toggle sound function
  const toggleSound = () => {
    if (loreVideoRef.current) {
      loreVideoRef.current.muted = !loreVideoRef.current.muted;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Navbar com logo */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-start">
          <img 
            src="/images/logo-pinto dao.png" 
            alt="Pinto DAO Logo" 
            className="h-20 object-contain"
          />
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dao-bg">
        <div className="video-background">
          <video
            src="/videos/Pintointro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video-bg"
          />
          <div className="video-overlay-bg"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center justify-end min-h-screen pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://pinto.wtf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white hover:opacity-90 transition-opacity"
            >
              Join DAO
            </a>
          </motion.div>
        </div>
      </section>

      {/* NFT Collection Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 magical-text">NFT Collection</h2>
          <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto">
            Exclusive pinto-inspired digital collectibles, each with unique traits and rarities.
          </p>
          <div className="mt-8 text-center">
            <a 
              href="https://opensea.io/collection/pintudo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opensea-button"
            >
              Visitar Coleção no OpenSea
            </a>
          </div>
        </div>

        <div className="nft-container">
          {/* First Row */}
          <div className="nft-track">
            {animeImages.slice(0, 17).map((image, index) => (
              <div key={`row1-${index}`} className="nft-item">
                <img src={image} alt={`Anime NFT ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Duplicação das imagens para garantir um loop contínuo */}
            {animeImages.slice(0, 17).map((image, index) => (
              <div key={`row1-dup-${index}`} className="nft-item">
                <img src={image} alt={`Anime NFT ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          {/* Second Row (Reverse Direction) */}
          <div className="nft-track nft-track-reverse">
            {animeImages.slice(17, 34).map((image, index) => (
              <div key={`row2-${index}`} className="nft-item">
                <img src={image} alt={`Anime NFT ${index + 18}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Duplicação das imagens para garantir um loop contínuo */}
            {animeImages.slice(17, 34).map((image, index) => (
              <div key={`row2-dup-${index}`} className="nft-item">
                <img src={image} alt={`Anime NFT ${index + 18}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          {/* Third Row */}
          <div className="nft-track">
            {animeImages.slice(34, 51).map((image, index) => (
              <div key={`row3-${index}`} className="nft-item">
                <img src={image} alt={`Anime NFT ${index + 35}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Duplicação das imagens para garantir um loop contínuo */}
            {animeImages.slice(34, 51).map((image, index) => (
              <div key={`row3-dup-${index}`} className="nft-item">
                <img src={image} alt={`Anime NFT ${index + 35}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lore Section with Videos */}
      <section className="py-20 lore-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 magical-text">Anime Lore</h2>
          <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Dive into the rich storytelling and vibrant worlds of our anime universe.
          </p>
          
          {/* Vídeo MP4 em loop */}
          <div className="single-video-container" onClick={toggleSound}>
            <video
              ref={loreVideoRef}
              src="/videos/Helensong.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="video-overlay">
              <button className="sound-toggle">
                <span className="sound-icon">🔊</span>
                <span className="sound-text">Clique para som</span>
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://inhabitants.zone" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="lore-button"
            >
              Explorar o Universo Inhabitants
            </a>
          </div>
        </div>
      </section>

      {/* HelenAI Section */}
      <section className="py-20 helen-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 magical-text">HelenAI</h2>
          <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Meet Helen, your personal pinto companion powered by advanced AI.
          </p>
          
          <div className="helen-video-grid">
            {/* Vídeos da Helen */}
            <div className="video-container helen-video">
              <video
                src="/videos/helenskate.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="video-container helen-video">
              <video
                src="/videos/Helenacademia.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="video-container helen-video">
              <video
                src="/videos/helencasa.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://helenai.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="helen-button"
            >
              Visite Helen
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/images/logo-pinto dao.png" 
                alt="Pinto DAO Logo" 
                className="h-20 mb-2"
              />
              <p className="text-gray-400 mt-2">Decentralizing Pinto culture since 2025</p>
            </div>
            <div className="flex gap-6">
              <a href="https://x.pinto.wtf" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="https://instagram.pinto.wtf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="https://youtube.pinto.wtf" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="social-icon" />
              </a>
              <a href="https://discord.pinto.wtf" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <DiscordIcon />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>© 2025 Pinto DAO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;