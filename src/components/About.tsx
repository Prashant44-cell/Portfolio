import { MapPin, GraduationCap, Calendar, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const details = [
  { icon: MapPin, label: 'Location', value: 'Prasauni, Bara District, Nepal' },
  { icon: GraduationCap, label: 'Education', value: 'B.E. Computer Science & Engineering' },
  { icon: Calendar, label: 'Graduation', value: 'Class of 2028' },
  { icon: Globe, label: 'Languages', value: 'English, Nepali, Hindi' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Passionate Developer & Tech Enthusiast
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a 17-year-old 2nd year Computer Science and Engineering student at 
                  Chennai Institute of Technology. My journey in tech began with a curiosity 
                  about how things work, which evolved into a deep passion for programming 
                  and innovation.
                </p>
                <p>
                  I specialize in drone technology and have a keen interest in Artificial 
                  Intelligence and Machine Learning. When I'm not coding, you'll find me 
                  exploring new technologies, working on personal projects, or contributing 
                  to open-source communities.
                </p>
                <p>
                  My goal is to leverage technology to solve real-world problems and make 
                  a positive impact in the tech industry.
                </p>
              </div>
            </div>

            <div className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.map((detail, index) => (
                  <div
                    key={detail.label}
                    className={cn(
                      'p-6 rounded-2xl glass-card hover-lift',
                      'transition-all duration-500',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    )}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <detail.icon className="h-6 w-6 text-accent mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
