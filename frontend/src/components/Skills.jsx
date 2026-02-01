import { skillCategories, coursework, areasOfInterest } from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        My <span className="text-indigo-400">Skills</span>
                    </h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded"></div>
                    <p className="text-gray-400 mt-4">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid - New Card Design */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={category.title}
                            className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Skills as Tags/Chips */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.name}
                                        className="group/skill relative"
                                    >
                                        <div className="px-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 cursor-default">
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                                                <span className="text-xs text-indigo-400 font-semibold">{skill.level}%</span>
                                            </div>
                                            {/* Mini progress bar */}
                                            <div className="mt-1.5 h-1 bg-slate-600 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coursework - Horizontal Scroll */}
                <div className="mb-10">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center flex items-center justify-center gap-2">
                        <span className="text-2xl">📚</span> Relevant Coursework
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {coursework.map((course, index) => (
                            <span
                                key={course}
                                className="px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/30 rounded-full text-gray-300 text-sm hover:border-indigo-400 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                {course}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Areas of Interest - Icon Cards */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Areas of Interest</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {areasOfInterest.map((area, index) => {
                            const icons = ['🎨', '⚙️', '🚀', '💡'];
                            return (
                                <div
                                    key={area}
                                    className="flex items-center gap-2 px-5 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 cursor-default group"
                                >
                                    <span className="text-xl group-hover:scale-110 transition-transform">{icons[index] || '⭐'}</span>
                                    <span className="text-gray-300 text-sm font-medium">{area}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
