import React, { useState } from 'react';
import emailjs from 'https://esm.sh/@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_hvlyjis',
        'template_1qn2ife',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        'G0t7x70GFseKW2h6n'
      );

      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h3 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Contact</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">Get In Touch</h2>
        </div>

        <div className="bg-neutral-900/30 rounded-[3rem] overflow-hidden border border-neutral-800 shadow-2xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-amber-400/[0.02] flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Let's Connect</h3>
              <p className="text-neutral-500 mb-10 font-light leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 border border-amber-400/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-neutral-400 font-black uppercase text-[10px] tracking-widest mb-1">Email</h5>
                    <p className="text-white font-bold">hmridul27@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 border border-amber-400/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-neutral-400 font-black uppercase text-[10px] tracking-widest mb-1">Location</h5>
                    <p className="text-white font-bold">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 border-l border-neutral-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-3">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-black/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-400 transition-all font-medium"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-3">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-black/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-400 transition-all font-medium"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-3">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-400 transition-all font-medium resize-none"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-amber-400 text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/10 active:scale-[0.98] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;