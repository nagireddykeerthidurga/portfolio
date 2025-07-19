import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Award, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    {
      icon: Code,
      value: "4+",
      label: "Projects Delivered",
      description: "Full-stack applications",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      value: "1+",
      label: "Years Experience",
      description: "Production-grade development",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      value: "4",
      label: "Certifications",
      description: "AWS, DevOps, ML, Python",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      value: "150+",
      label: "Students Mentored",
      description: "Coding sessions led",
      color: "from-green-500 to-green-600"
    }
  ];

  const strengths = [
    { name: "JavaScript Expertise", level: 95 },
    { name: "Ownership Mindset", level: 100 }, 
    { name: "Fast Learner", level: 90 },
    { name: "Clean Architecture", level: 85 },
    { name: "Client-focused Delivery", level: 92 }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-subtle relative">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A passionate full-stack developer from Vijayawada, Andhra Pradesh, currently pursuing 
            B.Tech in Artificial Intelligence at JNTUK.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
          <div className="animate-slide-in space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold gradient-text">My Journey</h3>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I specialize in building scalable web applications using the MERN stack, 
                with expertise in payment integration, authentication systems, and real-time features.
              </p>
              <p>
                My experience includes developing secure payment platforms with Stripe, 
                building AI-powered chatbots, and creating comprehensive management systems 
                that serve real users in production environments.
              </p>
              <p>
                Beyond coding, I'm passionate about mentoring fellow developers and 
                leading coding initiatives in my community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="shadow-card hover-lift bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3 md:mb-4 transition-transform duration-300 ${hoveredStat === index ? 'scale-110' : ''}`}>
                    <stat.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="font-semibold text-foreground mb-1 text-sm md:text-base">{stat.label}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center gradient-text">Core Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="shadow-card hover-lift bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm md:text-base">{strength.name}</h4>
                    <TrendingUp className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${strength.level}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{strength.level}% proficiency</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;