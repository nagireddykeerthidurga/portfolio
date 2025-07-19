import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

const Experience = () => {
  const workExperience = {
    title: "Freelance Full Stack Developer",
    company: "Remote",
    period: "2023 - 2024",
    location: "Remote",
    achievements: [
      "Delivered 4+ full-stack web applications using MERN stack and Stripe with production-level deployment",
      "Designed and implemented a custom payment platform with React, Node.js, and MongoDB",
      "Built reusable UI components, RESTful APIs, JWT-based authentication, and integrated Stripe for transactions",
      "Managed feature delivery, timelines, and communication directly with clients"
    ],
    technologies: ["MERN Stack", "Stripe API", "JWT", "REST APIs", "MongoDB", "React", "Node.js"]
  };

  const leadership = [
    {
      title: "Coordinator - Global Coding Club",
      description: "Mentored 54 peers and led coding sessions for 150+ students",
      icon: Users,
      impact: "150+ Students Reached"
    },
    {
      title: "Convener - Deeksharambh",
      description: "Organized 21-day student skill development challenge",
      icon: Trophy,
      impact: "21-Day Program"
    },
    {
      title: "Hackathon Winner",
      description: "Built and deployed an ML solution in a 24-hour hackathon",
      icon: Trophy,
      impact: "24-Hour Build"
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Foundations",
      issuer: "AICTE",
      year: "2025",
      status: "Upcoming"
    },
    {
      name: "DevOps Certification",
      issuer: "Industry Standard",
      year: "2024",
      status: "Completed"
    },
    {
      name: "Machine Learning - FMML",
      issuer: "IIT Hyderabad",
      year: "2024",
      status: "Completed"
    },
    {
      name: "Python Programming",
      issuer: "Infosys Springboard",
      year: "2023",
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience, leadership roles, and continuous learning journey.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-20 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">Work Experience</h3>
          <div className="relative pl-8 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-pink-400/80 before:rounded-full">
            <div className="relative mb-12">
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-pink-400 flex items-center justify-center shadow-lg">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div className="ml-12 bg-white/60 dark:bg-gray-900/70 backdrop-blur-lg border border-white/30 dark:border-gray-800/60 rounded-2xl shadow-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                  <div>
                    <h4 className="text-xl font-bold gradient-text mb-1">{workExperience.title}</h4>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{workExperience.period}</span>
                      <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{workExperience.location}</span>
                    </div>
                  </div>
                  <span className="gradient-primary text-base py-2 px-4 rounded-full font-semibold shadow">{workExperience.company}</span>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-primary">Key Achievements</h5>
                  <ul className="space-y-2 pl-4 list-disc text-gray-700 dark:text-gray-300 text-sm">
                    {workExperience.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-primary">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {workExperience.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 rounded-full bg-gradient-to-tr from-primary/20 to-pink-400/20 text-primary font-medium text-xs shadow hover:scale-105 transition-transform duration-200">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Responsibilities */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">Leadership & Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((role, index) => (
              <div key={index} className="rounded-3xl shadow-2xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-lg border border-white/30 dark:border-gray-800/60 p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300">
                <div className="bg-gradient-to-tr from-primary to-pink-400 p-4 rounded-2xl shadow-lg mb-4">
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-lg gradient-text drop-shadow-lg">{role.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                <span className="px-3 py-1 rounded-full bg-gradient-to-tr from-primary/20 to-pink-400/20 text-primary font-medium text-xs shadow">{role.impact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="rounded-2xl shadow-2xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-lg border border-white/30 dark:border-gray-800/60 p-6 flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-base gradient-text drop-shadow-lg">{cert.name}</h4>
                  <span className={cert.status === 'Completed' ? 'bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold' : 'bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold'}>{cert.status}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-sm font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;