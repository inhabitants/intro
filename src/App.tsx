import React from 'react';
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

  // Short GIF URLs for Lore section
  const loreGifs = [
    "/images/Inhabgif1.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzI0YzM0ZDM0YjA0YjMyZTA0ZDM0YjA0YjMyZTA0ZDM0YjA0YjMyZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3oKIPu8kvxfWqMjc1a/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJlMDRkMzRiMDRiMzJlMDRkMzRiMDRiMzJlMDRkMzRiMDRiMzJlJmVwPXYxX2ludGVybmFsX2dpZnNfZ2lmSWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif",
  ];

  // Exemplo de vídeos MP4 para substituir GIFs
  const loreVideos = [
    "/videos/helenskate.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  // HelenAI images
  const helenAIImages = [
    "/images/hellen1.jpg",
    "https://images.unsplash.com/photo-1639628735042-31baaf048d15?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dao-bg">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 magical-text"
            >
              Pinto DAO
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 text-gray-300"
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
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white hover:opacity-90 transition-opacity">
                Join the DAO
              </button>
              <button className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg font-bold text-white hover:bg-white/20 transition-all">
                Explore Collection
              </button>
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
        </div>

        <div className="nft-container">
          {/* First Row */}
          <div className="nft-track">
            {animeImages.slice(0, 17).map((image, index) => (
              <div key={`row1-${index}`} className="nft-item">
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
          </div>
          
          {/* Third Row */}
          <div className="nft-track">
            {animeImages.slice(34, 51).map((image, index) => (
              <div key={`row3-${index}`} className="nft-item">
                <img src={image} alt={`Anime NFT ${index + 35}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lore Section with GIFs */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 magical-text">Anime Lore</h2>
          <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Dive into the rich storytelling and vibrant worlds of our anime universe.
          </p>
          
          {/* Versão com GIFs */}
          <div className="lore-grid mb-20">
            {loreGifs.map((gif, index) => (
              <div key={`lore-${index}`} className="video-container">
                <img 
                  src={gif} 
                  alt={`Anime Lore ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Versão alternativa com vídeos MP4 em loop */}
          <h3 className="text-2xl font-bold text-center mb-4 magical-text">Versão com Vídeos MP4</h3>
          <div className="lore-grid">
            {loreVideos.map((video, index) => (
              <div key={`video-${index}`} className={`video-container ${video.includes('helenskate') ? 'video-vertical' : ''}`}>
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HelenAI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 magical-text">HelenAI</h2>
          <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Meet Helen, your personal pinto companion powered by advanced AI.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Primeiro quadrante com vídeo */}
            <div className="video-container video-vertical">
              <video
                src="/videos/helenskate.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Demais quadrantes com imagens */}
            {helenAIImages.slice(0, 2).map((image, index) => (
              <div key={`helen-${index}`} className="video-container">
                <img 
                  src={image} 
                  alt={`HelenAI ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold magical-text">Pinto DAO</h2>
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
