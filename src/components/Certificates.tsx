import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const education = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Chennai Institute of Technology',
    location: 'Chennai, India',
    period: '2023 - 2028',
    status: 'Currently Pursuing',
    description: 'Specializing in Computer Science and Engineering with focus on AI/ML and drone technology.',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Education',
    institution: 'Previous School',
    location: 'Nepal',
    period: '2021 - 2023',
    status: 'Completed',
    description: 'Completed higher secondary education with focus on Science and Mathematics.',
  },
];

const certificates = [
  {
    id: 'cert-1',
    title: 'Python Programming',
    issuer: 'Coursera / Google',
    date: '2024',
    credentialUrl: '#',
    skills: ['Python', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'cert-2',
    title: 'Web Development Fundamentals',
    issuer: 'freeCodeCamp',
    date: '2024',
    credentialUrl: '#',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'cert-3',
    title: 'Introduction to AI/ML',
    issuer: 'Coursera',
    date: '2024',
    credentialUrl: '#',
    skills: ['Machine Learning', 'Neural Networks', 'Python'],
  },
  {
    id: 'cert-4',
    title: 'Java Programming',
    issuer: 'Oracle Academy',
    date: '2023',
    credentialUrl: '#',
    skills: ['Java', 'OOP', 'Data Structures'],
  },
   {
    id: 'cert-5',
    title: 'Software Engineering Job Simulation',
    issuer: 'Electronic Arts',
    date: '2025',
    credentialUrl: '#',
    skills: ['Game Object Class ', 'Improve Inventory System', 'Live Bugfix'],
  },
   {
    id: 'cert-6',
    title: 'Advanced Software Engineering Job Simutlation',
    issuer: 'Walmart Global Tech',
    date: '2025',
    credentialUrl: '#',
    skills: ['Advanced Data Structures', 'Software Architecture', 'Relational Database Design','Data Munging'],
  },
];

export function Certificates() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="certificates" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Education & Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Certificates & Education
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My academic journey and professional certifications that validate my skills and knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div className={cn(
              'transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <Accordion type="single" collapsible className="space-y-3">
                {education.map((edu, index) => (
                  <AccordionItem
                    key={edu.id}
                    value={edu.id}
                    className={cn(
                      'glass-card rounded-xl border-0 px-4',
                      'transition-all duration-500',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    )}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium">{edu.degree}</span>
                        <span className="text-sm text-muted-foreground">{edu.institution}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs">
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Certificates Section */}
            <div className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              
              <Accordion type="single" collapsible className="space-y-3">
                {certificates.map((cert, index) => (
                  <AccordionItem
                    key={cert.id}
                    value={cert.id}
                    className={cn(
                      'glass-card rounded-xl border-0 px-4',
                      'transition-all duration-500',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    )}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium">{cert.title}</span>
                        <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Issued: {cert.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 rounded-md bg-secondary text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          View Credential
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
