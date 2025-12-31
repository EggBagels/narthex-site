import React from 'react';
import { Button } from '../components/Button';
import { ButtonVariant } from '../types';
import { Check, Wifi, Users, Monitor, BookOpen } from 'lucide-react';

export const Work: React.FC = () => {
  return (
    <>
      {/* Hero - Vaulted Ceiling */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517502884422-41e157d4ed43?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-25"></div>
        {/* Vignette and Darkening */}
        <div className="absolute inset-0 bg-narthex-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-narthex-gold mb-6">
            Where Your Work<br />Becomes Worship
          </h1>
          <p className="font-sans text-xl text-narthex-cream mb-10">
            Professional workspace designed for Catholic excellence.
          </p>
          <div className="flex justify-center">
            <Button variant={ButtonVariant.PRIMARY} onClick={() => document.getElementById('options')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply for Membership
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits - Stone Texture */}
      <section className="py-24 px-6 bg-narthex-cream relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.06] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-serif text-4xl text-center mb-16 text-narthex-black">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wifi />, title: "Amenities", desc: "High-speed WiFi, conference rooms, printing, and professional atmosphere." },
              { icon: <Users />, title: "Community", desc: "Access to a network of like-minded professionals and mentors." },
              { icon: <Monitor />, title: "Formation", desc: "Workshops and training from successful Catholic business leaders." },
              { icon: <BookOpen />, title: "Spiritual", desc: "Quarterly Masses, small groups, and spiritual resources on-site." },
            ].map((item, i) => (
              <div key={i} className="bg-white/50 p-8 border border-narthex-gray/20 shadow-sm hover:shadow-md transition-all">
                <div className="text-narthex-gold mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-narthex-brown leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options - Gothic Archway Background */}
      <section id="options" className="py-24 px-6 bg-narthex-black text-narthex-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590059591465-b46321287118?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-narthex-black via-narthex-black/80 to-narthex-black/90"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            
            {/* Co-working */}
            <div className="bg-narthex-cream/5 border border-narthex-gold/20 p-8 md:p-12 hover:bg-narthex-cream/10 transition-all duration-300">
              <h3 className="font-serif text-3xl text-narthex-gold mb-2">Co-Working</h3>
              <div className="text-4xl font-sans font-bold mb-6">$250<span className="text-lg font-normal text-narthex-gray">/month</span></div>
              <ul className="space-y-4 mb-8 text-narthex-cream/80">
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> Flexible shared workspace</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> Community events access</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> High-speed internet</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> Coffee & Amenities</li>
              </ul>
              <Button variant={ButtonVariant.SECONDARY} fullWidth className="!bg-transparent !text-narthex-cream hover:!bg-narthex-gold hover:!text-narthex-black !border-narthex-gold">
                Learn More
              </Button>
            </div>

            {/* Dedicated */}
            <div className="bg-narthex-cream/5 border border-narthex-gold/20 p-8 md:p-12 hover:bg-narthex-cream/10 transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-narthex-gold text-narthex-black text-xs font-bold px-3 py-1 uppercase tracking-widest">Most Popular</div>
              <h3 className="font-serif text-3xl text-narthex-gold mb-2">Dedicated Office</h3>
              <div className="text-4xl font-sans font-bold mb-6">$600<span className="text-lg font-normal text-narthex-gray">/month</span></div>
              <ul className="space-y-4 mb-8 text-narthex-cream/80">
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> Private, lockable office</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> 24/7 Building Access</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> Priority Conference Booking</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-narthex-green" /> Mail handling</li>
              </ul>
              <Button variant={ButtonVariant.PRIMARY} fullWidth>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <p className="text-narthex-gray text-sm italic">
               Scholarship opportunities available - we don't want cost to be a barrier to joining this community.
             </p>
          </div>
        </div>
      </section>

      {/* Programming - Stone Texture */}
      <section className="py-24 px-6 bg-narthex-cream relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.06] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Community Programming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { title: "Quarterly Masses", desc: "Celebrate the Eucharist right here in your workplace." },
               { title: "Professional Workshops", desc: "Tactical business skills from industry leaders." },
               { title: "Small Groups", desc: "Bible studies and mastermind groups for support." },
               { title: "Social Events", desc: "Happy hours and networking to build real friendship." }
             ].map((evt, i) => (
               <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-narthex-gold flex items-center justify-center shrink-0 text-narthex-gold font-serif text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{evt.title}</h3>
                    <p className="text-narthex-brown text-sm">{evt.desc}</p>
                  </div>
               </div>
             ))}
          </div>
          <p className="text-center mt-12 text-narthex-gray text-sm uppercase tracking-widest">All programming open to the broader community</p>
        </div>
      </section>

      {/* Tour the Space - Gallery */}
      <section className="py-24 bg-narthex-black px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-narthex-gold text-center mb-4">Tour the Space</h2>
           <p className="font-sans text-narthex-gray text-center mb-16 max-w-2xl mx-auto">
              A physical environment crafted to inspire peace, focus, and creativity.
           </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80"
             ].map((url, idx) => (
               <div key={idx} className="aspect-[4/3] overflow-hidden rounded-sm group relative">
                 <div className="absolute inset-0 bg-narthex-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                 <img 
                    src={url} 
                    alt="Space preview" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                 />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-narthex-cream border-t border-narthex-gray/10 relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.06] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-serif text-4xl mb-6">Ready to Join Narthex?</h2>
          <div className="flex items-center justify-center gap-4 text-sm font-sans mb-10 text-narthex-gray">
            <span>Schedule a Tour</span>
            <span className="text-narthex-gold">→</span>
            <span>Submit Application</span>
            <span className="text-narthex-gold">→</span>
            <span>Get Started</span>
          </div>
          <form className="max-w-md mx-auto space-y-4 mb-8">
            <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 bg-white border border-narthex-gray/30 focus:border-narthex-gold outline-none placeholder:text-narthex-gray/50" />
            <Button variant={ButtonVariant.PRIMARY} fullWidth>Schedule Your Tour</Button>
          </form>
        </div>
      </section>
    </>
  );
};