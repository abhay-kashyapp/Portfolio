import { projects } from '../data/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Featured <span className="text-indigo-400">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded"></div>
                    <p className="text-gray-400 mt-4">
                        Here are some of the projects I&apos;ve worked on
                    </p>
                </div>

                {/* Projects */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } gap-8 items-center`}
                        >
                            {/* Project Image */}
                            <div className="lg:w-1/2">
                                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 aspect-video flex items-center justify-center hover:border-indigo-500/50 transition">
                                    <div className="text-center">
                                        <span className="text-6xl md:text-7xl">{project.icon}</span>
                                        <p className="text-gray-400 mt-4">{project.title}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="lg:w-1/2">
                                {/* Period */}
                                <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-gray-300 mb-3">
                                    {project.period}
                                </span>

                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Features */}
                                <ul className="space-y-2 mb-4">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-indigo-400 mt-1">▹</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-slate-700 rounded text-sm text-blue-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-full transition font-medium text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2 border border-gray-400 hover:bg-white hover:text-black rounded-full transition font-medium text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
