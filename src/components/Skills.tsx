import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Node.js', level: 65 },
    ],
  },
  {
    title: 'Specializations',
    skills: [
      { name: 'Drone Technology', level: 60 },
      { name: 'AI/ML', level: 70 },
      { name: 'Data Structures', level: 75 },
      { name: 'Algorithms', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
      { name: 'Docker', level: 60 },
    ],
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={cn(
                  'p-6 md:p-8 rounded-2xl glass-card transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={cn(
                            'h-full rounded-full bg-gradient-to-r from-accent via-[hsl(187_85%_43%)] to-[hsl(199_89%_48%)] transition-all duration-1000 ease-out',
                            isVisible ? 'opacity-100' : 'opacity-0'
                          )}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
