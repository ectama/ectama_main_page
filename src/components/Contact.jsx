import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, Loader } from 'lucide-react';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwwlwxE6D5yYiGKdHmTrUuBjs7elALBV1h3lxugKen8Kpxcwm6jR9jyOayM0HpB99A9/exec';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(p => ({ ...p, [id]: value }));
    if (errors[id]) setErrors(p => ({ ...p, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(form),
      });
      // no-cors means we can't read the response — assume success if no error thrown
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all placeholder:text-white/20 ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/30'
        : 'border-white/10 focus:border-accent/50 focus:ring-accent/50'
    }`;

  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left info side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Get in Touch</h2>
            <p className="text-xl text-secondary mb-12">
              Ready to start your next project? Contact us for business inquiries or collaboration opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary">Email Us</h4>
                  <a href="mailto:hello@ectama.com" className="text-lg font-semibold hover:text-accent transition-colors">
                    hello@ectama.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary">Global Presence</h4>
                  <span className="text-lg font-semibold">Remote First</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form side */}
          <div className="glass-panel p-8 md:p-10 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Success state */}
            {status === 'success' ? (
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-6 py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-secondary">We've received your message and will get back to you soon.</p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-full border border-white/10 text-secondary hover:text-white hover:border-white/20 transition-all text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                      placeholder="John Doe"
                      disabled={status === 'loading'}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                      placeholder="john@example.com"
                      disabled={status === 'loading'}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass('message')}
                    placeholder="How can we help you?"
                    disabled={status === 'loading'}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    ⚠️ Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-white text-background font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
