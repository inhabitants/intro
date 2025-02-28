import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Instagram, MessageCircle } from 'lucide-react';

function App() {
  // Array of unique anime character image URLs from Unsplash
  const animeImages = [
    // First row images (17 unique)
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1637242140586-2f618d165d3a?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600854109241-48f9e1d38c3a?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578165219176-ece04edbd053?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580130732478-4e339fb6836f?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621478374422-35206faedbd5?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
    
    // Second row images (17 unique)
    "https://images.unsplash.com/photo-1586182987320-4f376d39d787?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1627672360124-4ed09583e14c?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621155346337-1d19476ba5b6?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1630710478039-9af99899a1c8?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626548307930-deac221f87d9?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616248304589-6a3d8d60ad7d?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615310748170-37b5b1bc4c8e?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620428268482-cf1851a383aa?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613125479732-14543c793349?q=80&w=500&auto=format&fit=crop",
    
    // Third row images (17 unique)
    "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624456735729-03594a40c5fb?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743036-0c5b2a4e5f4a?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743038-f8a1d7a0c9c7?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743476-2a2b0e5d1e89?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743596-7bcb9d1a1175?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743692-3055e83f58ab?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743736-575c1c09aae1?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743831-4b3fd5df5a2c?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519743945-f8a7a4b3e887?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519744011-7c27b088c5da?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519744119-5f7336a2e599?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519744228-0d2c7a66d1d0?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519744335-76a3f6e4a191?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519744441-0c3d0c4d2fe2?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519744547-1a7d0b6cd397?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604519744656-5b9de8d05cf8?q=80&w=500&auto=format&fit=crop"
  ];

  // Short GIF URLs for Lore section
  const loreGifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGVjNjQ0ZmZkYzFkZjFkZGNmZDM5ZTJkZjc3NzM0NzFkMzIxYjE0ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7TKDMPKsakcJnpwk/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzI0YzM0ZDM0YjA0YjMyZTA0ZDM0YjA0YjMyZTA0ZDM0YjA0YjMyZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3oKIPu8kvxfWqMjc1a/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJlMDRkMzRiMDRiMzJlMDRkMzRiMDRiMzJlMDRkMzRiMDRiMzJlJmVwPXYxX2ludGVybmFsX2dpZnNfZ2lmSWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjM5ZTJkZjc3NzM0NzFkMzIxYjE0ZjRlYzY0NGZmZGMxZGYxZGRjJmVwPXYxX2ludGVybmFsX2dpZnNfZ2lmSWQmY3Q9Zw/l0HlQXlQ3nHyLMvte/giphy.gif"
  ];

  // HelenAI images
  const helenAIImages = [
    "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1000&auto=format&fit=crop",
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
          
          <div className="lore-grid">
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
            {helenAIImages.map((image, index) => (
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