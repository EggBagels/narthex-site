import React from 'react';

export const About: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-narthex-black mb-8">Our Story</h1>
        <div className="w-24 h-1 bg-narthex-gold mx-auto mb-12"></div>
      </section>

      <section className="px-6 pb-24 max-w-3xl mx-auto space-y-8 font-sans text-lg text-narthex-brown leading-relaxed">
        <p>
          Narthex began with a simple observation: Catholic professionals in Oklahoma City often felt they lived two separate lives—one on Sunday, and another Monday through Friday.
        </p>
        <p>
          We believed that faith shouldn't be checked at the door of the office. Inspired by the narthex of a church—the transition space between the sacred liturgy and the world—we created a workspace that bridges the gap.
        </p>
        <p>
          Here, the pursuit of professional excellence is fueled by spiritual depth. We aren't just building businesses; we are building a culture.
        </p>
      </section>

      <section className="py-24 bg-narthex-black text-narthex-cream px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="font-serif text-4xl text-narthex-gold mb-8">Our Mission</h2>
           <p className="font-serif text-2xl md:text-3xl leading-relaxed italic">
             "To cultivate a community of Catholic professionals who pursue excellence in their work as a witness to the Truth, creating a bridge between the sacred and the secular."
           </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-narthex-cream">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="font-serif text-3xl mb-8">Vision for the Future</h2>
           <p className="text-narthex-brown max-w-2xl mx-auto">
             Starting in Oklahoma City, we aim to establish a network of Catholic professional hubs across the nation, empowering the laity to sanctify the temporal order through their daily work.
           </p>
        </div>
      </section>
    </>
  );
};