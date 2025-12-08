import { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prashantvyahut.work@gmail.com',
    href: 'mailto:prashantvyahut.work@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Prasauni, Bara District, Nepal',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/vyahut/',
  },
];

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<ContactFormData> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className={cn(
              'lg:col-span-2 space-y-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={cn(
                    'flex items-start gap-4 p-4 rounded-xl glass-card hover-lift transition-all duration-500',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  )}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="p-3 rounded-lg bg-accent/10">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className={cn(
              'lg:col-span-3 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all',
                        errors.name && 'border-destructive focus:border-destructive focus:ring-destructive/20'
                      )}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all',
                        errors.email && 'border-destructive focus:border-destructive focus:ring-destructive/20'
                      )}
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all',
                      errors.subject && 'border-destructive focus:border-destructive focus:ring-destructive/20'
                    )}
                    placeholder="What's this about?"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-destructive mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(
                      'w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none',
                      errors.message && 'border-destructive focus:border-destructive focus:ring-destructive/20'
                    )}
                    placeholder="Tell me about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={isSubmitting || isSuccess}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
