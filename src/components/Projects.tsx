import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  techStack: string[];
  role: string;
  challenges: string;
  solutions: string;
  outcomes: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Autonomous Drone Navigation System',
    description: 'AI-powered drone system for autonomous navigation and obstacle avoidance.',
    longDescription: 'Developed a comprehensive autonomous drone navigation system using computer vision and machine learning algorithms. The system enables drones to navigate complex environments without human intervention.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
    category: 'AI/ML',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'ROS'],
    role: 'Lead Developer',
    challenges: 'Real-time object detection with limited computational resources on the drone.',
    solutions: 'Implemented optimized YOLO model with hardware acceleration and edge computing.',
    outcomes: '95% accuracy in obstacle detection with 30fps processing speed.',
    repoUrl: 'https://github.com/Prashant44-cell/It-s-working',
  },
  {
    id: 2,
    title: 'Weather Prediction Dashboard',
    description: 'Real-time weather analytics with ML-based predictions.',
    longDescription: 'A comprehensive weather prediction platform that uses machine learning to provide accurate forecasts and visualizations of weather patterns.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    category: 'Web Dev',
    techStack: ['React', 'Python', 'Flask', 'TensorFlow'],
    role: 'Full Stack Developer',
    challenges: 'Processing large datasets in real-time for accurate predictions.',
    solutions: 'Implemented data streaming with Apache Kafka and optimized ML pipeline.',
    outcomes: 'Achieved 87% prediction accuracy for 7-day forecasts.',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Smart Agriculture IoT Platform',
    description: 'IoT-based solution for monitoring and automating agricultural processes.',
    longDescription: 'An integrated IoT platform that monitors soil conditions, weather, and crop health to automate irrigation and provide actionable insights to farmers.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
    category: 'IoT',
    techStack: ['Arduino', 'Python', 'MQTT', 'React'],
    role: 'Hardware & Software Developer',
    challenges: 'Ensuring reliable connectivity in remote agricultural areas.',
    solutions: 'Implemented LoRa communication with local data caching and sync.',
    outcomes: '40% reduction in water usage and 25% increase in crop yield.',
    liveUrl: 'https://example.com',
    reportUrl:'https://github.com/Prashant44-cell/Farmer-Mangement-System',
  },
  {
    id: 4,
    title: 'Student Portfolio Generator',
    description: 'Automated tool for generating professional portfolio websites.',
    longDescription: 'A web application that helps students create professional portfolio websites with customizable templates and easy content management.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    category: 'Web Dev',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    role: 'Full Stack Developer',
    challenges: 'Creating a flexible template system that works for diverse portfolios.',
    solutions: 'Built modular component system with drag-and-drop customization.',
    outcomes: 'Used by 500+ students to create professional portfolios.',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Key logger',
    description: 'surveillance tool that secretly records every keystroke made on a keyboard to monitor user activity.',
    longDescription: ' A hidden monitoring tool that records every keystroke to steal sensitive information like passwords, credit card details, and personal messages, often used in cybercrime or surveillance.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.uKpwMPN6zWNI_iPPQHtZcQHaEo?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Cyber security',
    techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
    role: 'Cyber security specialist',
    challenges: 'OS compatibility, detection by security software, legal restrictions, and ethical concerns.',
    solutions: ' using strong security measures, ethical development practices, and OS‑level permissions to ensure safe, legal, and transparent monitoring only for authorized purposes.',
    outcomes: 'Successful creation of keylogger to track real time password along with username.',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/Prashant44-cell/Keylogger-',
  },
  {
    id: 6,
    title: 'Facial recognition system',
    description: 'surveillance tool that secretly records every face that need to track and analysis.',
    longDescription: 'A monitoring tool that records every facial expression to capture and track a person using public camera or survillence system, often used in cybercrime or surveillance.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.kI6vak6rUAwIsjDnyMKhgAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Cyber security',
    techStack: ['Python', 'Javascript', 'ML', 'AI'],
    role: 'Survillence system',
    challenges: 'OS compatibility, detection by security software, legal restrictions, and ethical concerns.',
    solutions: ' using strong security measures, ethical development practices, and OS‑level permissions to ensure safe, legal, and transparent monitoring only for authorized purposes.',
    outcomes: 'Successful creation of Facial Survillence system to track real time face along with person details.',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/Prashant44-cell/Face_recognition-try1',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development, AI/ML, and IoT.
            </p>
          </div>

          {/* Filter buttons */}
          <div className={cn(
            'flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'gradient' : 'glass'}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  'group rounded-2xl overflow-hidden glass-card hover-lift cursor-pointer transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card p-6 md:p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-3">{selectedProject.title}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 md:h-64 object-cover rounded-xl mb-6"
            />

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Overview</h4>
                <p className="text-muted-foreground">{selectedProject.longDescription}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Role</h4>
                  <p className="text-muted-foreground text-sm">{selectedProject.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outcomes</h4>
                  <p className="text-muted-foreground text-sm">{selectedProject.outcomes}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Challenges & Solutions</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  <strong>Challenge:</strong> {selectedProject.challenges}
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Solution:</strong> {selectedProject.solutions}
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
                {selectedProject.repoUrl && (
                  <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="glass">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
