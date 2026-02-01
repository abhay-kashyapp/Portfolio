import { personalInfo } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        About <span className="text-indigo-400">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Profile Photo */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative group">
                            {/* Glowing ring effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>

                            {/* Photo container */}
                            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-indigo-500/50 transition-all duration-300 group-hover:scale-105">
                                <img
                                    src="/profile.jpg"
                                    alt="Abhay Kashyap"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                            {personalInfo.about.title}
                        </h3>

                        {personalInfo.about.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-400 mb-4 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {personalInfo.about.stats.map((stat, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                                    <p className="text-2xl font-bold text-indigo-400">{stat.value}</p>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://drive.google.com/file/d/1kFWIuVPHEeXL1lq1j9YuGqjtj6piLMcc/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-full transition font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
