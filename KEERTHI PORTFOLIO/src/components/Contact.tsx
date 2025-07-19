import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Calendar 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "keerthiinagireddy1127306@gmail.com",
      href: "mailto:keerthiinagireddy1127306@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vijayawada, Andhra Pradesh, India",
      href: null
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Available for new projects",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "keerthidurga",
      href: "https://github.com/keerthidurga",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "keerthi-nagireddy-60aa21348",
      href: "https://linkedin.com/in/keerthi-nagireddy-60aa21348",
      color: "hover:text-blue-600"
    }
  ];

  const interests = [
    "Cloud Development",
    "Scalable Systems", 
    "Coding Challenges",
    "Mentoring",
    "Payment APIs",
    "AI/ML Integration"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'm always excited to discuss 
            new opportunities and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover-lift"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className={`h-5 w-5 ${social.color} transition-colors`} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{social.label}</div>
                      <div className="font-medium">{social.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action & Interests */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Ready to Work Together?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Whether you need a full-stack developer for your startup or want to collaborate 
                  on an innovative project, I'd love to hear from you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="gradient-primary hover-lift group flex-1"
                    asChild
                  >
                    <a href="mailto:keerthiinagireddy1127306@gmail.com">
                      <Send className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="hover-lift group flex-1"
                    asChild
                  >
                    <a href="https://linkedin.com/in/keerthi-nagireddy-60aa21348" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Areas of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="text-base py-2 px-4 hover-lift cursor-default"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Always excited to explore new technologies and tackle challenging problems!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;