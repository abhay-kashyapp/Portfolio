import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '0448f61c-669f-42cb-be91-0761100b6fb7',
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            console.error('Form error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Get In <span className="text-indigo-400">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded"></div>
                    <p className="text-gray-400 mt-4">
                        Have a project in mind? Feel free to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">
                            Let&apos;s talk about everything!
                        </h3>
                        <p className="text-gray-400 mb-8">
                            I&apos;m interested in freelance opportunities and full-time positions.
                            If you have other requests or questions, don&apos;t hesitate to contact me.
                        </p>

                        <div className="space-y-4">
                            <a
                                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-indigo-500/50 transition"
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-indigo-500 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Phone</p>
                                    <p className="text-white">{personalInfo.phone}</p>
                                </div>
                            </a>

                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-indigo-500/50 transition"
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-indigo-500 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <p className="text-white">{personalInfo.email}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                <div className="w-10 h-10 flex items-center justify-center bg-indigo-500 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Location</p>
                                    <p className="text-white">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <p className="text-gray-400 mb-4">Find me on</p>
                            <div className="flex gap-4">
                                <a
                                    href={personalInfo.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-500 transition"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href={personalInfo.socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-500 transition"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href={personalInfo.socialLinks.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-500 transition"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <div className={`p-4 rounded-lg ${status.type === 'success'
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                    }`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
