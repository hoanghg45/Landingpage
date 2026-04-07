import { Facebook, Instagram, Twitter, Youtube, Bookmark, MessageCircle, Settings } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between bg-transparent">
        <div 
          className="text-3xl md:text-4xl font-black tracking-wide cursor-pointer hover:scale-105 transition-transform" 
          style={{ 
            fontFamily: 'var(--font-fredoka)',
            WebkitTextStroke: '2px black',
            paintOrder: 'stroke fill',
            textShadow: '0 4px 6px rgba(0,0,0,0.2)'
          }}
        >
          <span className="text-[#FF4D4D]">P</span>
          <span className="text-[#FF9933]">L</span>
          <span className="text-[#FFD700]">E</span>
          <span className="text-[#33CC33]">I</span>
          <span className="text-[#3399FF]">K</span>
          <span className="text-[#9933FF]">U</span>
          <span className="text-[#FF3399]">T</span>
          <span className="text-[#FF66B2]">I</span>
          <span className="text-[#00CCFF]">.</span>
          <span className="text-[#FFA500]">F</span>
          <span className="text-[#66FF66]">U</span>
          <span className="text-[#FF5050]">N</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-white font-semibold drop-shadow-md">
          <a href="#home" className="hover:opacity-80 transition-opacity">CHÀO MỪNG</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">VỀ CHÚNG TÔI</a>
          <a href="#services" className="hover:opacity-80 transition-opacity">DỊCH VỤ</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">LIÊN HỆ</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl drop-shadow-lg">
          ☰
        </button>
      </nav>

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: 'url(/hero-bg-colorful.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Optional overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>

      </div>

      {/* Footer */}
      <footer className="bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#facebook" className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#instagram" className="text-gray-700 hover:text-pink-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#twitter" className="text-gray-700 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#youtube" className="text-gray-700 hover:text-red-600 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>

            {/* Copyright Text */}
            <p className="text-gray-600 text-sm md:text-base text-center">
              &copy; 2024 - Tất cả các quyền được giữ vui vẻ.
            </p>

            {/* Utility Icons */}
            <div className="flex gap-4">
              <a href="#bookmark" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Bookmark">
                <Bookmark size={20} />
              </a>
              <a href="#chat" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Chat">
                <MessageCircle size={20} />
              </a>
              <a href="#settings" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Settings">
                <Settings size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
