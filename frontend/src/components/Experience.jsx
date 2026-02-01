import { experiences } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Work <span className="text-indigo-400">Experience</span>
                    </h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded"></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/30 md:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-6 mb-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full -translate-x-1/2 mt-6 z-10"></div>

                            {/* Content */}
                            <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition">
                                    {/* Period */}
                                    <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-gray-300 mb-3">
                                        {exp.period}
                                    </span>

                                    {/* Title & Company */}
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                    <p className="text-indigo-400 font-medium mb-4">{exp.company}</p>

                                    {/* Description */}
                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                                <span className="text-indigo-400 mt-1">▹</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-slate-700 rounded text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
