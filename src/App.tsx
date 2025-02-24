import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Instagram, MessageCircle, Rocket, ExternalLink } from 'lucide-react';

function App() {
  const nftPlaceholders = Array(6).fill(0).map((_, i) => (
    <div key={i} className="w-48 h-48 magic-border rounded-lg bg-white/5" />
  ));

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center dao-bg">
          <div className="container mx-auto px-4 text-center relative">
            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-6"
            >
              <a href="#" className="social-icon"><Twitter /></a>
              <a href="#" className="social-icon"><Youtube /></a>
              <a href="#" className="social-icon"><Instagram /></a>
              <a href="#" className="social-icon"><MessageCircle /></a>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-7xl md:text-8xl font-bold mb-8 magical-text"
            >
              PintoDAO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12"
            >
              Uma DAO web3 de experiências e estudos
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-primary/30 text-white px-12 py-6 rounded-2xl font-medium text-xl flex items-center gap-3 hover:border-primary/60 transition-all mx-auto"
            >
              <Rocket className="w-6 h-6" />
              Enter DAO
            </motion.button>
          </div>
        </section>

        {/* NFT Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 mb-16">
            <h2 className="text-5xl font-bold mb-4 magical-text text-center">NFT Collection</h2>
            <p className="text-xl text-gray-400 text-center">Explore nossa coleção única de personagens Pinto</p>
          </div>
          
          <div className="space-y-16 relative">
            <div className="nft-track nft-track-1">{nftPlaceholders}</div>
            <div className="nft-track nft-track-2">{nftPlaceholders}</div>
            <div className="nft-track nft-track-3">{nftPlaceholders}</div>
          </div>
        </section>

        {/* Lore Section */}
        <section className="py-32 relative dao-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-16 magical-text text-center">Lore</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className="video-container magic-border" />
              ))}
            </div>

            <div className="text-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-primary/30 hover:border-primary/60 transition-colors"
              >
                Explore Full Lore
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* HelenAI Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-16 magical-text text-center">HelenAI Agent</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="video-container magic-border" />
              ))}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-primary/30 hover:border-primary/60 transition-colors"
              >
                Conheça HelenAI
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 magical-text">PintoDAO</h3>
                <p className="text-gray-400">Inovação e aprendizado através da web3</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NFTs</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lore</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HelenAI</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Community</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Docs</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">© 2025 PintoDAO. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="social-icon"><Twitter /></a>
                <a href="#" className="social-icon"><Youtube /></a>
                <a href="#" className="social-icon"><Instagram /></a>
                <a href="#" className="social-icon"><MessageCircle /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;