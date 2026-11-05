import React, { useState, useEffect } from 'react';
import emailjs from 'https://esm.sh/@emailjs/browser';

interface Toast {
  message: string;
  type: 'success' | 'error';
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
      setTimeout(() => setToast(null), 400);
    }, 4000);
  };

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

      showToast("Thank you! I'll get back to you soon.", 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast("Oops! Something went wrong. Please try again.", 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 md:scroll-mt-36 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 bg-black min-h-screen flex flex-col justify-start sm:justify-center w-full max-w-full overflow-hidden relative">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3 rounded-xl border shadow-2xl backdrop-blur-xl transition-all duration-300 ${
            toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } ${
            toast.type === 'success'
              ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/90 border-rose-500/40 text-rose-300'
          }`}
          style={{ minWidth: '260px', maxWidth: '90vw' }}
        >
          {toast.type === 'success' ? (
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
          <span className="text-xs sm:text-sm font-semibold">{toast.message}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-amber-400 font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-2 sm:mb-3">Contact</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">Get In Touch</h2>
        </div>

        <div className="bg-neutral-900/40 rounded-2xl sm:rounded-3xl border border-neutral-800/80 shadow-2xl backdrop-blur-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Info Column */}
            <div className="p-6 sm:p-8 md:p-10 bg-amber-400/[0.015] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2.5 sm:mb-3 tracking-tight">Let's Connect</h3>
                <p className="text-neutral-400 text-xs sm:text-sm mb-6 sm:mb-8 font-light leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 sm:gap-3">
                <a
                  href="mailto:hmridul27@gmail.com"
                  className="group flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-neutral-800/90 hover:border-amber-400/40 hover:bg-neutral-900/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 group-hover:bg-amber-400/20 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-neutral-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">Email</span>
                    <span className="text-white text-xs font-semibold truncate block group-hover:text-amber-300 transition-colors">hmridul27@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 border border-neutral-800/90">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-neutral-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">Location</span>
                    <span className="text-white text-xs font-semibold truncate block">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="p-6 sm:p-8 md:p-10 border-t md:border-t-0 md:border-l border-neutral-800/80 bg-black/30">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="w-full bg-black/60 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/30 transition-all font-medium placeholder:text-neutral-600"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      className="w-full bg-black/60 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/30 transition-all font-medium placeholder:text-neutral-600"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    className="w-full bg-black/60 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/30 transition-all font-medium resize-none placeholder:text-neutral-600"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-3.5 px-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold uppercase tracking-widest text-xs rounded-xl transition-all shadow-lg shadow-amber-400/15 active:scale-[0.99] flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
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