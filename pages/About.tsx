import React from 'react';

export const About: React.FC = () => {
  return (
    <>
      <section className="pt-20 md:pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-narthex-black mb-8">Our Story</h1>
        <div className="w-24 h-1 bg-narthex-gold mx-auto mb-12"></div>
      </section>

      <section className="px-6 pb-24 max-w-3xl mx-auto space-y-8 font-sans text-lg text-narthex-brown leading-relaxed">
        <p>
          The genesis of Narthex is simple, really. Two friends in Oklahoma City, one a business owner and one a remote worker, realized that they both rented an office and figured they may as well rent an office in the same space. The conversations were edifying and natural. It just seemed like how work was meant to be.
        </p>
        <p>
          This led to a simple observation: Catholic professionals feel like they have to live two separate lives. One on Sunday, and another Monday through Friday.
        </p>
        <p>
          Naturally, it begged the question: "What if there was a place where Catholics could work together?" A place that transforms 9am-5pm from the "work" part of your life into just "part of your life."
        </p>
        <p>
          So, we created Narthex. It started with a single building (just 5 offices and a coworking space). A place for us and our colleagues to work. It transformed into the vision we have now.
        </p>
        <p>
          We are building a culture where Catholics can lean on one another to help their businesses thrive. We envision a "hub" where Catholics from different industries and areas of expertise all gather under one roof to handle their day-to-day work, but also to support one another in their ventures.
        </p>
        <p>
          Not only do we think Narthex should be a place of professional excellence, but also a center of evangelization. Part of designing the space in a community-oriented way was to support evangelistic initiatives like Bible study, small groups, Mass, and family gatherings.
        </p>
        <p>
          Inspired by St. Augustine's "City of God," we want to transform the ordinary into the sacred, one city at a time.
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