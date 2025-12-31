import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Briefcase, Users, BookOpen, Cross, Columns, LayoutGrid, Sun } from 'lucide-react';
import { Button } from '../components/Button';
import { ButtonVariant } from '../types';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden parallax" style={{ backgroundImage: "url('/Images/cathedral-nave.png')" }}>
        <div className="absolute inset-0 bg-narthex-black/25 mix-blend-multiply"></div>
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.6)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-narthex-black/90 via-narthex-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 fade-in-up">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-narthex-gold mb-6 leading-tight drop-shadow-lg">
            Where Faith Meets<br />Professional Excellence
          </h1>
          <p className="font-sans text-lg md:text-xl text-narthex-cream mb-12 max-w-2xl mx-auto font-light tracking-wide">
            A workspace for Catholic professionals in Oklahoma City.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/work">
              <Button variant={ButtonVariant.PRIMARY}>Work at Narthex</Button>
            </Link>
            <Link to="/support">
              <Button variant={ButtonVariant.OUTLINE}>Support Our Mission</Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-narthex-cream/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 md:py-32 px-6 bg-narthex-cream relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.06] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Briefcase size={32} strokeWidth={1.5} />,
                title: "Professional Workspace",
                desc: "Dedicated offices and co-working spaces designed for focused, excellent work in a community that shares your values."
              },
              {
                icon: <Columns size={32} strokeWidth={1.5} />,
                title: "Authentic Community",
                desc: "Connect with Catholic professionals who understand the challenge of integrating faith and work in the modern world."
              },
              {
                icon: <BookOpen size={32} strokeWidth={1.5} />,
                title: "Professional Formation",
                desc: "Networking events, workshops, and mentorship from successful Catholic business leaders who invest in your growth."
              },
              {
                icon: <Cross size={32} strokeWidth={1.5} />,
                title: "Faith Formation",
                desc: "Quarterly Masses, small groups, and spiritual resources to deepen your relationship with God while pursuing professional excellence."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6 p-6 group">
                <div className="text-narthex-gold transition-transform duration-500 group-hover:-translate-y-2 p-6 border-2 border-narthex-gold/30 gothic-arch bg-narthex-white shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl text-narthex-black">{pillar.title}</h3>
                <p className="font-sans text-narthex-brown leading-relaxed text-sm md:text-base">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative py-32 bg-narthex-black text-narthex-cream overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 bg-[url('/Images/gothic-archway.png')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-narthex-black/80 to-narthex-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="hidden md:block md:col-span-5"></div>
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-narthex-gold">Built for Catholic Professionals</h2>
            <p className="font-sans text-lg leading-relaxed text-narthex-cream/90 max-w-2xl">
              Whether you're an entrepreneur building something new, a remote worker seeking community, or a business owner looking for a workspace that aligns with your values - Narthex is your home.
            </p>
            <p className="font-sans text-lg leading-relaxed text-narthex-cream/90 max-w-2xl">
              This is where you can work with excellence, grow in your faith, and build authentic relationships with people who share your commitment to integrating the sacred and the professional.
            </p>
          </div>
        </div>
      </section>

      {/* See The Space */}
      <section className="py-24 bg-narthex-black px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl text-narthex-gold">Your Workspace in Oklahoma City</h2>
          <p className="font-sans text-narthex-gray text-lg">225 NW 59th St • Oklahoma City, Oklahoma</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="h-80 md:h-[500px] col-span-1 md:col-span-2 overflow-hidden rounded-sm relative group">
             <div className="absolute inset-0 bg-narthex-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" alt="Office Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
           </div>
           <div className="h-80 md:h-[500px] col-span-1 overflow-hidden rounded-sm relative group">
             <div className="absolute inset-0 bg-narthex-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" alt="Meeting Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
           </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-narthex-gray text-sm">Starting in Oklahoma City, with vision to expand to cities nationwide</p>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-32 px-6 bg-narthex-cream relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.06] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Card 1 */}
          <div className="bg-narthex-cream border border-narthex-gray/30 p-10 shadow-[0_2px_15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-500">
            <Briefcase size={32} className="text-narthex-gold mb-6" />
            <h3 className="font-serif text-3xl mb-4 text-narthex-black">Ready to Join?</h3>
            <p className="font-sans text-narthex-brown mb-8 leading-relaxed">
              Explore membership options, tour our space, and become part of a community where your faith and work thrive together.
            </p>
            <Link to="/work">
              <Button variant={ButtonVariant.PRIMARY} fullWidth>Work at Narthex</Button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-narthex-cream border border-narthex-gray/30 p-10 shadow-[0_2px_15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-500">
            <Users size={32} className="text-narthex-gold mb-6" />
            <h3 className="font-serif text-3xl mb-4 text-narthex-black">Want to Support?</h3>
            <p className="font-sans text-narthex-brown mb-8 leading-relaxed">
              Invest in Catholic professionals and help build a model for faith-integrated work that can transform cities nationwide.
            </p>
            <Link to="/support">
              <Button variant={ButtonVariant.SECONDARY} fullWidth>Support Our Mission</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};