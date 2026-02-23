import { useEffect, useState } from 'react'
import { Menu, X, ExternalLink } from 'lucide-react'

const OLD_SITE_LINKS = [
  {
    label: 'About us',
    items: [
      { href: 'https://springrainglobal.org/company-new/', label: 'Company' },
      { href: 'https://springrainglobal.org/about-ceo/', label: 'About CEO' },
      { href: 'https://springrainglobal.org/meet-the-team-2/', label: 'Meet the Team' },
    ],
  },
  {
    label: 'Partnerships',
    items: [
      { href: 'https://springrainglobal.org/partners/', label: 'Partners' },
      { href: 'https://springrainglobal.org/our-strategic-partners/', label: 'Strategic Partners' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: 'https://springrainglobal.org/events/', label: 'Events' },
      { href: 'https://springrainglobal.org/publications/', label: 'Publications' },
      { href: 'https://springrainglobal.org/srg-philanthropy-ai/', label: 'SRG Philanthropy AI' },
    ],
  },
  {
    label: 'Get in touch',
    items: [
      { href: 'https://springrainglobal.org/contact-us/', label: 'Contact Us' },
      { href: 'https://springrainglobal.org/faqs/', label: 'FAQs' },
    ],
  },
]

function OldSiteDropdown({ onLinkClick, title = 'Previous Website Links' }) {
  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 py-4 max-h-[80vh] overflow-y-auto z-50">
      <div className="px-4 pb-2 border-b border-gray-200">
        <h3 className="text-sm font-bold text-[#2f5220] uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <div className="px-2 py-2">
        {OLD_SITE_LINKS.map((section) => (
          <div key={section.label} className="mb-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">
              {section.label}
            </h4>
            {section.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#f2f9ed] hover:text-[#7ad03a] rounded transition"
                onClick={onLinkClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOldSiteMenuOpen, setIsOldSiteMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOldSiteMenuOpen && !event.target.closest('.old-site-menu-container')) {
        setIsOldSiteMenuOpen(false)
      }
    }
    if (isOldSiteMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOldSiteMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeOldSiteMenu = () => setIsOldSiteMenuOpen(false)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://springrainglobal.org/wp-content/uploads/2019/05/spring-rain-global-cropped-copy.png"
            alt="Spring Rain Global"
            className="h-12 md:h-14 w-auto object-contain bg-white rounded-lg px-2 py-1 shadow-sm"
          />
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#mission"
            className={`font-medium hover:text-[#7ad03a] transition ${
              scrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            Why We Exist
          </a>
          <a
            href="#model"
            className={`font-medium hover:text-[#7ad03a] transition ${
              scrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            Our Model
          </a>
          <a
            href="#benefits"
            className={`font-medium hover:text-[#7ad03a] transition ${
              scrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            Benefits
          </a>
          <a
            href="https://www.facebook.com/springrainglobal"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full font-bold transition shadow-lg ${
              scrolled
                ? 'bg-[#7ad03a] text-white hover:bg-[#5ea828]'
                : 'bg-white text-[#5ea828] hover:bg-[#f2f9ed]'
            }`}
          >
            Contact Us
          </a>
          <div className="relative old-site-menu-container">
            <button
              onClick={() => setIsOldSiteMenuOpen(!isOldSiteMenuOpen)}
              className={`p-2 rounded-full transition ${
                scrolled
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white/70 hover:bg-white/10'
              }`}
              aria-label="Old website menu"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
            {isOldSiteMenuOpen && (
              <OldSiteDropdown title="Previous Website Links" />
            )}
          </div>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <div className="relative old-site-menu-container">
            <button
              onClick={() => setIsOldSiteMenuOpen(!isOldSiteMenuOpen)}
              className={`p-2 rounded-full transition ${
                scrolled ? 'text-[#2f5220]' : 'text-white'
              }`}
              aria-label="Old website menu"
            >
              <ExternalLink className="w-6 h-6" />
            </button>
            {isOldSiteMenuOpen && (
              <OldSiteDropdown
                title="Old Website Links"
                onLinkClick={closeOldSiteMenu}
              />
            )}
          </div>
          <button className="focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X
                className={`w-8 h-8 ${scrolled ? 'text-[#2f5220]' : 'text-white'}`}
              />
            ) : (
              <Menu
                className={`w-8 h-8 ${scrolled ? 'text-[#2f5220]' : 'text-white'}`}
              />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col space-y-4">
          <a
            href="#mission"
            className="text-gray-600 font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Why We Exist
          </a>
          <a
            href="#model"
            className="text-gray-600 font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Our Model
          </a>
          <a
            href="#benefits"
            className="text-gray-600 font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Benefits
          </a>
          <a
            href="https://www.facebook.com/springrainglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#7ad03a] text-white py-3 rounded-lg font-bold"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  )
}
