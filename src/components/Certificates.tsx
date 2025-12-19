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
    title: 'Build RAG Chatbot with Python',
    issuer: 'Lets Upgrade',
    date: ' 10 june 2025',
    credentialUrl: 'https://image2url.com/images/1766150809622-89089beb-a057-4034-8985-1e0df5aa4afd.png',
    skills: ['Python', 'Chatbot', 'Algorithms',],
  },
  {
    id: 'cert-2',
    title: 'SubQuery Network',
    issuer: 'Mind Luster',
    date: '2025-05-20',
    credentialUrl: 'https://image2url.com/images/1766150942223-dfb2a134-a7f7-4f8b-86c8-8ad001f142b0.jpg',
    skills: ['Network', 'Query', 'Internet'],
  },
  {
    id: 'cert-3',
    title: 'Cybersecurity red team fundamentals',
    issuer: 'Mind Luster',
    date: '2025-05-20',
    credentialUrl: 'https://image2url.com/images/1766151023571-2a6d2f95-e24e-45aa-b61e-faff44c8e08c.jpg',
    skills: ['Website Credentials', 'Network', 'Hacker team member','Cyber fundamentals'],
  },
  {
    id: 'cert-4',
    title: 'Amplify Your Critical Thinking with Generative Al',
    issuer: 'Linked in Learning',
    date: '2024',
    credentialUrl: 'https://image2url.com/images/1766151128562-4542c008-3511-4532-b48c-5f638910ca43.png',
    skills: ['Machine Learning', 'AI', 'Data analysis','Python','ALgorithms','Analysis','Vibing'],
  },
   {
    id: 'cert-5',
    title: 'Software Engineering Job Simulation',
    issuer: 'Electronic Arts',
    date: '2025',
    credentialUrl: 'https://image2url.com/images/1766150553578-3c882d51-0569-4d34-8e17-dafff7312d8f.jpg',
    skills: ['Game Object Class ', 'Improve Inventory System', 'Live Bugfix'],
  },
   {
    id: 'cert-6',
    title: 'Advanced Software Engineering Job Simutlation',
    issuer: 'Walmart Global Tech',
    date: '2025',
    credentialUrl: 'https://image2url.com/images/1766151265457-f9e9b98f-50bc-4003-97fc-9fe6bb1f8404.jpg',
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
