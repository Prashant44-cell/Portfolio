import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Ramesh Kumar',
    role: 'Professor, Chennai Institute of Technology',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: "Prashant is one of the most dedicated students I've had the pleasure of teaching. His passion for technology and ability to grasp complex concepts quickly sets him apart. His drone project showcased exceptional problem-solving skills.",
  },
  {
    id: 2,
    name: 'Ankit Sharma',
    role: 'Senior Developer, Tech Solutions Inc.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: "Working with Prashant on the IoT agriculture project was impressive. Despite being a student, he brought fresh perspectives and innovative solutions. His code quality and attention to detail are remarkable.",
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Hackathon Organizer, CodeFest',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: "Prashant's team won our annual hackathon with their weather prediction project. His leadership and technical skills were evident throughout the competition. He's definitely a developer to watch!",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevTestimonial();
    if (e.key === 'ArrowRight') nextTestimonial();
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32 bg-secondary/30"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What People Say
            </h2>
          </div>

          <div className={cn(
            'relative transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="relative overflow-hidden rounded-2xl glass-card p-8 md:p-12">
              <Quote className="absolute top-6 left-6 h-12 w-12 text-accent/20" />
              
              <div className="relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      'transition-all duration-500 absolute inset-0 p-8 md:p-12 flex flex-col items-center text-center',
                      index === currentIndex
                        ? 'opacity-100 translate-x-0'
                        : index < currentIndex
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    )}
                    style={{ position: index === currentIndex ? 'relative' : 'absolute' }}
                    aria-hidden={index !== currentIndex}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mb-6 ring-4 ring-accent/20"
                    />
                    <p className="text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="glass"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      index === currentIndex
                        ? 'w-8 bg-accent'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="glass"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
