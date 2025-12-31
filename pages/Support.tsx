import React from 'react';
import { Button } from '../components/Button';
import { ButtonVariant } from '../types';
import { Heart, TrendingUp, GraduationCap, Globe } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <>
      {/* Hero - Stained Glass */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/st-joseph.png')] bg-cover bg-center opacity-20"></div>
        {/* Darkening & Vignette */}
        <div className="absolute inset-0 bg-narthex-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-narthex-gold mb-6">
            Invest in Catholic Professionals
          </h1>
          <p className="font-sans text-xl text-narthex-cream mb-10">
            Help us build workspaces where faith and excellence thrive.
          </p>
          <div className="flex justify-center">
            <Button variant={ButtonVariant.PRIMARY} onClick={() => window.location.href='mailto:narthexokc@gmail.com'}>
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Vision - Stone Texture */}
      <section className="py-24 px-6 bg-narthex-cream relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.06] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl">Why This Matters</h2>
          <p className="font-sans text-lg text-narthex-brown leading-relaxed">
            The modern professional world often demands we leave our faith at the door. Narthex bridges that gap, creating a space where Catholic identity isn't just permitted—it's the foundation for excellence.
          </p>
          <p className="font-sans text-lg text-narthex-brown leading-relaxed">
             By supporting Narthex, you aren't just renting desks. You are investing in a cultural renewal that starts with the way we work.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 px-6 bg-narthex-black text-narthex-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-narthex-gold text-center mb-16">Your Investment Enables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp />, title: "Excellence", desc: "Stronger Catholic businesses and professionals." },
              { icon: <Heart />, title: "Community", desc: "Vibrant faith communities in the marketplace." },
              { icon: <GraduationCap />, title: "Formation", desc: "Scholarship funds and professional workshops." },
              { icon: <Globe />, title: "Expansion", desc: "Future expansion to transform cities nationwide." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 border border-narthex-gray/20 rounded-sm">
                <div className="text-narthex-gold mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-narthex-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Partner - Stone Texture */}
      <section className="py-24 px-6 bg-narthex-cream relative">
        <div className="absolute inset-0 bg-stone-texture opacity-[0.06] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          
          <div className="bg-white p-10 border-t-4 border-narthex-green shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-serif text-2xl mb-4">Financial Support</h3>
            <p className="text-narthex-brown mb-6">
              Support our scholarship fund, sponsor an event, or contribute to our capital campaign for future expansion. Narthex is a 501(c)(3) organization.
            </p>
            <Button variant={ButtonVariant.PRIMARY} onClick={() => window.location.href='mailto:narthexokc@gmail.com'}>
              Contact to Give
            </Button>
          </div>

          <div className="bg-white p-10 border-t-4 border-narthex-gold shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-serif text-2xl mb-4">Share Your Expertise</h3>
            <p className="text-narthex-brown mb-6">
              Are you a successful Catholic professional or business owner? Lead workshops, mentor emerging professionals, or share your skills. Your wisdom is just as valuable as financial support.
            </p>
            <Button variant={ButtonVariant.OUTLINE} className="!text-narthex-green !border-narthex-green hover:!bg-narthex-green hover:!text-narthex-cream">
              Get Involved
            </Button>
          </div>

        </div>
      </section>
    </>
  );
};