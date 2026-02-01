import { education } from '../data/portfolioData';

const Education = () => {
    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        My <span className="text-indigo-400">Education</span>
                    </h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded"></div>
                </div>

                {/* Education Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/30 md:-translate-x-1/2"></div>

                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full -translate-x-1/2 z-10"></div>

                            {/* Content Card */}
                            <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-indigo-500/50 transition">
                                    {/* Icon & Period */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-3xl">{edu.icon}</span>
                                        <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs text-gray-300">
                                            {edu.period}
                                        </span>
                                    </div>

                                    {/* Degree */}
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>

                                    {/* Institution */}
                                    <p className="text-indigo-400 text-sm mb-1">{edu.institution}</p>

                                    {/* Board */}
                                    {edu.board && (
                                        <p className="text-gray-500 text-xs mb-3">{edu.board}</p>
                                    )}

                                    {/* Grade */}
                                    <div className="pt-3 border-t border-slate-700">
                                        <span className="text-indigo-400 font-semibold">{edu.grade}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for alternating layout */}
                            <div className="hidden md:block md:w-5/12"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
