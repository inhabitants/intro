import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Instagram, MessageCircle } from 'lucide-react';

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
        <div className="container mx-auto px-4 py-3 flex justify-center">
          <img 
            src="/images/logo-pinto dao.png" 
            alt="Pinto DAO Logo" 
            className="h-14 object-contain"
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
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="logo-container"
            >
              <img 
                src="/images/logo-pinto dao.png" 
                alt="Pinto DAO Logo" 
                className="mx-auto h-32 md:h-40 mb-6"
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-description mt-6 mb-10"
            >
              The first decentralized autonomous organization dedicated to Pinto fans worldwide. 
              Collect, trade, and govern the future of Pinto culture.
            </motion.p>
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
                className="h-12 mb-2"
              />
              <p className="text-gray-400 mt-2">Decentralizing Pinto culture since 2025</p>
            </div>
            <div className="flex gap-6">
              <a href="#" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube className="social-icon" />
              </a>
              <a href="#" aria-label="Discord">
                <MessageCircle className="social-icon" />
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