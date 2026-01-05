import React from 'react';
import { Button } from '../components/Button';
import { ButtonVariant } from '../types';
import { Check, Wifi, Users, Monitor, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const Work: React.FC = () => {
  const personas = [
    {
      initial: "S",
      name: "Sarah Chen",
      role: "Tech Entrepreneur",
      quote: "I needed more than a desk—I needed a community that understood both my startup ambitions and my faith. Narthex gave me both."
    },
    {
      initial: "M",
      name: "Michael Rodriguez",
      role: "Real Estate Broker",
      quote: "Working from home was isolating. Here, I'm surrounded by people who share my values and challenge me to grow professionally."
    },
    {
      initial: "E",
      name: "Elena Kowalski",
      role: "Marketing Consultant",
      quote: "The quarterly Masses and professional workshops make this so much more than a workspace—it's a community committed to excellence."
    }
  ];

  return (
    <>
      {/* Hero - Vaulted Ceiling */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/vaulted-ceiling.png')] bg-cover bg-center opacity-25"></div>
        {/* Vignette and Darkening */}
        <div className="absolute inset-0 bg-narthex-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-narthex-gold mb-6">
            Blur the Line<br />Between Faith and Work
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
        <div className="absolute inset-0 bg-stone-texture opacity-[0.10] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-serif text-4xl text-center mb-16 text-narthex-black">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wifi />, title: "Amenities", desc: "High-speed WiFi, 24/7 access, community space, and private offices." },
              { icon: <Users />, title: "Community", desc: "Access to a network of like-minded professionals and mentors." },
              { icon: <Monitor />, title: "Professional Formation", desc: "Workshops and training from successful Catholic business leaders." },
              { icon: <BookOpen />, title: "Spiritual Formation", desc: "Mass on-site, scheduled prayer times, small groups, and evangelization events." },
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
        <div className="absolute inset-0 bg-[url('/Images/gothic-archway.png')] bg-cover bg-center opacity-20"></div>
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
        <div className="absolute inset-0 bg-stone-texture opacity-[0.10] pointer-events-none"></div>
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

      {/* Who Thrives at Narthex */}
      <section className="py-24 md:py-32 px-6 bg-narthex-black">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-narthex-gold text-center mb-16 md:mb-20"
          >
            Who Thrives at Narthex
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {personas.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className="text-center space-y-6 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full bg-narthex-gold/10 border-2 border-narthex-gold flex items-center justify-center mx-auto transition-colors duration-300 group-hover:bg-narthex-gold/20"
                >
                  <span className="font-serif text-3xl text-narthex-gold">
                    {person.initial}
                  </span>
                </motion.div>

                <p className="font-sans text-narthex-cream font-semibold text-lg">
                  {person.name}
                </p>

                <p className="font-sans text-narthex-gold text-sm uppercase tracking-wider">
                  {person.role}
                </p>

                <p className="font-sans text-narthex-gray text-base md:text-lg leading-relaxed italic">
                  "{person.quote}"
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-narthex-cream border-t border-narthex-gray/10 relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.10] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-serif text-4xl mb-6">Ready to Join Narthex?</h2>
          <p className="font-sans text-lg text-narthex-gray mb-10">
            Send us an email to schedule a visit
          </p>
          <div className="max-w-md mx-auto">
            <Button
              variant={ButtonVariant.PRIMARY}
              fullWidth
              onClick={() => window.location.href = 'mailto:narthexokc@gmail.com?subject=Tour Request&body=Hi, I\'d like to schedule a tour of Narthex.'}
            >
              Schedule Your Tour
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};