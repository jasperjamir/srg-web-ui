import {
  Globe,
  TrendingUp,
  ShieldCheck,
  Target,
  HeartHandshake,
  ArrowRight,
  CheckCircle,
  Facebook,
  MessageCircle,
  Award,
  PieChart,
  Briefcase,
  Database,
  Sun,
} from 'lucide-react'

import Navbar from './components/Navbar'

const FACEBOOK_URL = 'https://www.facebook.com/springrainglobal'
const MEMBERSHIP_URL = 'https://springrainglobal.org/membership/'

function SRG() {
  // Updated Color Palette - "Organic & Growth"
  // #7ad03a (Main Action Green - Bright & Energetic)
  // #2f5220 (Deep Forest Green - Text & Headings for Contrast)
  // #f2f9ed (Background - Very Pale Organic Tint)
  // #ffffff (Cards - clean white)
  const pillars = [
    {
      title: 'Leadership & Governance',
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: 'Strong foundations for decision making.',
      color: 'text-[#2f5220]',
    },
    {
      title: 'Program Development & Management',
      icon: <Target className="w-6 h-6" />,
      desc: 'Designing impactful, mission-driven programs.',
      color: 'text-[#7ad03a]',
    },
    {
      title: 'Philanthropy Development',
      icon: <TrendingUp className="w-6 h-6" />,
      desc: 'Sustainable fundraising and resource generation.',
      color: 'text-[#2f5220]',
    },
    {
      title: 'Financial Planning',
      icon: <PieChart className="w-6 h-6" />,
      desc: 'Strategic transparency and fiscal health.',
      color: 'text-[#7ad03a]',
    },
    {
      title: 'Database Management',
      icon: <Database className="w-6 h-6" />,
      desc: 'Data-driven insights and donor tracking.',
      color: 'text-[#2f5220]',
    },
    {
      title: 'Ecosystem Building',
      icon: <Globe className="w-6 h-6" />,
      desc: 'Connecting with global partners and collaborators.',
      color: 'text-[#7ad03a]',
    },
    {
      title: 'Spirituality',
      icon: <Sun className="w-6 h-6" />,
      desc: 'Aligning mission with core spiritual values.',
      color: 'text-[#2f5220]',
    },
  ]

  const partners = [
    'Religious Congregations',
    'Schools & Universities',
    'Social Ministries',
    'Hospitals & Missions',
    'NGOs & Nonprofits',
    'Family Foundations',
    'Impact Funders',
    'Corporate Foundations',
  ]

  // Gradients
  const buttonGradient =
    'bg-gradient-to-r from-[#7ad03a] to-[#5ea828] hover:from-[#5ea828] hover:to-[#4a851f] shadow-lg hover:shadow-[#7ad03a]/40'

  const heroGradient =
    'bg-gradient-to-br from-[#1a3310] via-[#2f5220] to-[#5ea828]' // Deep, rich forest gradient

  const cardGradient = 'bg-gradient-to-br from-[#2f5220] to-[#5ea828]'

  return (
    <div className="font-sans text-gray-800 bg-[#f2f9ed] min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${heroGradient}`}
      >
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#7ad03a] blur-3xl"></div>
          <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#f2f9ed] blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1a3310] to-transparent opacity-60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7ad03a] animate-pulse"></span>
              <span className="text-sm font-medium text-white">
                Over $16.7M Raised Globally
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-sm">
              Unlock Philanthropic <br className="hidden md:block" /> Capital
              Today.
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
              We transform overlooked grassroots missions into sustainable,
              well-funded organizations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2f5220] px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-[#f2f9ed] transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition flex items-center justify-center"
              >
                Be a Member
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  210+
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Organizations Helped
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  ₱1 Billion
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Funds Raised ($16.7M)
                </p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-3xl md:text-4xl font-bold text-white">
                  Global
                </p>
                <p className="text-sm text-white/80 mt-1">Impact Reach</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mission / Why We Exist */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2f5220] to-[#7ad03a] rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
              <a
                href="https://springrainglobal.org/about-ceo/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#f2f9ed] rounded-3xl overflow-hidden shadow-xl aspect-video md:aspect-square flex items-center justify-center border border-[#dce8d0] group cursor-pointer block"
              >
                <img
                  src="https://springrainglobal.org/wp-content/uploads/2026/01/607001329_1167542252213001_7895299748943138730_n-1.jpg"
                  alt="Spring Rain Global Founder"
                  className="w-full h-full object-contain scale-[1.1] group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-[#7ad03a] font-bold uppercase tracking-wider mb-2">
                Why We Exist
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f5220] mb-6">
                Breaking Cycles of Poverty
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We believe true change begins when grassroots organizations are
                empowered with the tools and financial clarity usually reserved
                for larger institutions.
              </p>
              <div className="bg-[#f2f9ed] border-l-4 border-[#7ad03a] p-6 rounded-r-lg mb-8">
                <p className="text-[#2f5220] font-medium italic">
                  "Today, many groups remain overlooked and underfunded. We
                  exist to change that—building a sustainable ecosystem where
                  donors and donees grow together."
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#7ad03a] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Financial clarity for grassroots missions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2f5220] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Sustainable planning beyond one-time donations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#7ad03a] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Empowering mission-driven leaders.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 7-Pillar Model */}
      <section id="model" className="py-20 bg-[#f2f9ed] relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h4 className="text-[#7ad03a] font-bold uppercase tracking-wider mb-2">
              How We Do It
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f5220] mb-4">
              The SRG 7-Pillar Capacitation Model
            </h2>
            <p className="text-gray-600 text-lg">
              We install a{' '}
              <span className="font-bold text-[#2f5220]">
                Philanthropic Development System
              </span>{' '}
              giving you a clear roadmap from donation-dependent to
              sustainability-driven.
            </p>
          </div>
          <div className="flex justify-center mb-16">
            <img
              src="https://springrainglobal.org/wp-content/uploads/2025/07/7-Pillar-model-scaled.jpg"
              alt="SRG 7-Pillar Capacitation Model Diagram"
              className="rounded-2xl shadow-xl max-w-5xl w-full border-4 border-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[#7ad03a] group"
              >
                <div
                  className={`w-12 h-12 bg-[#f2f9ed] ${pillar.color} rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7ad03a] group-hover:text-white transition-colors`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2f5220] mb-2 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm">{pillar.desc}</p>
              </div>
            ))}
            {/* Callout Card for the grid */}
            <div className="bg-[#2f5220] p-6 rounded-xl shadow-md text-white flex flex-col justify-center items-center text-center border-t-4 border-[#7ad03a]">
              <h3 className="text-xl font-bold mb-3">Ready to transform?</h3>
              <p className="text-white/80 text-sm mb-4">
                Integrate these pillars into your organization today.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#7ad03a] hover:bg-[#5ea828] text-white font-bold py-2 px-6 rounded-lg transition text-sm shadow-lg"
                >
                  Get Started
                </a>
                <a
                  href={MEMBERSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-white/70 text-white font-bold py-2 px-6 rounded-lg hover:bg-white/10 transition text-sm"
                >
                  Be a Member
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Pricing */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className={`rounded-3xl overflow-hidden shadow-2xl text-white ${cardGradient}`}>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 p-10 md:p-16">
                <h3 className="text-3xl font-bold mb-6">
                  Build Your Philanthropic Development Office (PDO)
                </h3>
                <p className="text-white/95 text-lg mb-8">
                  Stop chasing one-time donations. Build a system that
                  generates reliable, recurring mission support.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg text-white">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        Professional Systems
                      </h4>
                      <p className="text-white/90 text-sm">
                        Access professional fundraising frameworks and reliable
                        support structures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg text-white">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Global Ecosystem</h4>
                      <p className="text-white/90 text-sm">
                        Connect with foundations, philanthropists, academic
                        institutions, and collaborators.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg text-white">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        Exclusive Membership
                      </h4>
                      <p className="text-white/90 text-sm">
                        Ongoing tools, training, community, and capacity-building.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 bg-black/10 p-10 md:p-16 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-white/20">
                <p className="text-white/80 uppercase tracking-widest font-semibold text-sm mb-2">
                  Starting Investment
                </p>
                <div className="text-5xl font-bold text-white mb-2">$3,500</div>
                <p className="text-[#2f5220] font-bold mb-8 bg-[#f2f9ed] px-4 py-1 rounded-full">
                  Your first step toward sustainability
                </p>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonGradient} w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg flex items-center justify-center gap-2`}
                >
                  Message Us Now <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={MEMBERSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-bold text-lg border-2 border-white/60 text-white hover:bg-white/10 transition flex items-center justify-center mt-3"
                >
                  Be a Member
                </a>
                <p className="text-xs text-white/70 mt-4">
                  Via WhatsApp / Messenger
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Partners */}
      <section className="py-16 bg-[#f2f9ed]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f5220] mb-4">
            Trusted by 210+ Organizations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We work alongside global development organizations, philanthropic
            foundations, and mission-driven institutions worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {partners.map((partner) => (
              <span
                key={partner}
                className="px-6 py-3 bg-white border border-[#dce8d0] rounded-full text-[#2f5220] font-medium shadow-sm"
              >
                {partner}
              </span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            <div className="h-16 flex items-center justify-center bg-white border border-[#dce8d0] rounded text-xs text-gray-500 font-bold">
              University Partner
            </div>
            <div className="h-16 flex items-center justify-center bg-white border border-[#dce8d0] rounded text-xs text-gray-500 font-bold">
              Foundation Partner
            </div>
            <div className="h-16 flex items-center justify-center bg-white border border-[#dce8d0] rounded text-xs text-gray-500 font-bold">
              Religious Org
            </div>
            <div className="h-16 flex items-center justify-center bg-white border border-[#dce8d0] rounded text-xs text-gray-500 font-bold">
              NGO Partner
            </div>
          </div>
          <div className="mt-12">
            <a
              href="https://springrainglobal.org/our-strategic-partners/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7ad03a] font-bold hover:underline flex items-center justify-center gap-1"
            >
              View all strategic partners <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#2f5220] mb-6">
              Ready to Build Your Philanthropy Development Office?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the network of organizations breaking the cycle of poverty
              through sustainable systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonGradient} inline-flex items-center justify-center gap-3 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform`}
            >
              <Facebook className="w-6 h-6" />
              Message Us on Facebook
            </a>
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[#2f5220] font-bold text-xl px-10 py-5 rounded-full border-2 border-[#2f5220] hover:bg-[#2f5220] hover:text-white transition"
            >
              Be a Member
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f5220] text-white py-12 border-t border-[#7ad03a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://springrainglobal.org/wp-content/uploads/2019/05/spring-rain-global-cropped-copy.png"
                  alt="Spring Rain Global"
                  className="h-12 w-auto object-contain bg-white rounded-lg px-2 py-1"
                />
              </div>
              <p className="text-sm max-w-xs leading-relaxed text-white/80">
                Unlock Philanthropic Capital Today. We help grassroots missions
                become sustainable, well-funded organizations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#mission" className="hover:text-[#7ad03a] transition">
                    Why We Exist
                  </a>
                </li>
                <li>
                  <a href="#model" className="hover:text-[#7ad03a] transition">
                    Our Model
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="hover:text-[#7ad03a] transition"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href={MEMBERSHIP_URL}
                    className="hover:text-[#7ad03a] transition"
                  >
                    Membership
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={FACEBOOK_URL}
                    className="hover:text-[#7ad03a] transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://springrainglobal.org/our-strategic-partners/"
                    className="hover:text-[#7ad03a] transition"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#4a851f] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
            <p>&copy; {new Date().getFullYear()} Spring Rain Global. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Sustainable Philanthropy Systems</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SRG

