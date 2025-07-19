import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Custom Payment Platform for Event Site",
      description: "Built and deployed a secure, real-time payment platform with Stripe API integration and comprehensive user authentication system.",
      features: [
        "Stripe API integration for secure payments",
        "Session tracking and backend validation",
        "Real-time payment processing",
        "Error handling and user feedback",
        "Responsive design with React"
      ],
      technologies: ["MERN Stack", "Stripe API", "JWT", "React", "Node.js", "MongoDB"],
      category: "Full-Stack",
      status: "Production"
    },
    {
      title: "AI Virtual Assistant",
      description: "Developed an intelligent NLP-based virtual assistant using Flask and OpenAI API for interactive question-answering capabilities.",
      features: [
        "Natural language processing",
        "Interactive Q&A interface",
        "Dynamic user interaction",
        "Backend API integration",
        "Responsive frontend design"
      ],
      technologies: ["Flask", "OpenAI API", "Python", "JavaScript", "HTML/CSS"],
      category: "AI/ML",
      status: "Completed"
    },
    {
      title: "AI Chatbot with Learning Capabilities",
      description: "Created an intelligent chatbot capable of learning from user feedback and handling dynamic conversation intents.",
      features: [
        "Dynamic intent recognition",
        "User feedback learning system",
        "Response logging and analytics",
        "Improved classification accuracy",
        "Real-time conversation handling"
      ],
      technologies: ["JavaScript", "NLP", "Machine Learning", "Node.js"],
      category: "AI/ML",
      status: "Completed"
    },
    {
      title: "Attendance Management System",
      description: "Comprehensive attendance tracking system with admin controls, leave requests, and detailed analytics dashboard.",
      features: [
        "Attendance logging and tracking",
        "Leave request management",
        "Admin control panel",
        "MongoDB data queries",
        "JWT authentication system"
      ],
      technologies: ["MERN Stack", "MongoDB", "Express", "React", "JWT"],
      category: "Full-Stack",
      status: "Production"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack": return "bg-primary text-primary-foreground";
      case "AI/ML": return "bg-accent-purple text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500 text-white";
      case "Completed": return "bg-blue-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-pink-50/60 via-purple-50/40 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of production-grade applications I've built, 
            from payment platforms to AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            // Map project titles to image filenames
            let imageSrc = '';
            if (project.title.includes('Payment')) imageSrc = '/projects/online-payment.jpg';
            else if (project.title.includes('Virtual Assistant')) imageSrc = '/projects/virtual-assistant.jpg';
            else if (project.title.includes('Chatbot')) imageSrc = '/projects/ai-chatbot.jpg';
            else if (project.title.includes('Attendance')) imageSrc = '/projects/attendance-management.jpg';
            else imageSrc = `https://source.unsplash.com/600x400/?technology,project,code&sig=${index}`;

            return (
              <div
                key={index}
                className="group rounded-3xl shadow-2xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-lg border border-white/30 dark:border-gray-800/60 p-0 flex flex-col overflow-hidden hover:scale-[1.03] transition-transform duration-300 animate-fade-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="h-48 w-full bg-gradient-to-tr from-primary/30 to-pink-400/30 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://source.unsplash.com/600x400/?technology,project,code&sig=${index}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                {/* Card Content */}
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold gradient-text drop-shadow-lg mb-2">{project.title}</h3>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getCategoryColor(project.category)}`}>{project.category}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getStatusColor(project.status)}`}>{project.status}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base mb-2">{project.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-primary">Key Features</h4>
                    <ul className="space-y-1 pl-4 list-disc text-gray-700 dark:text-gray-300 text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full bg-gradient-to-tr from-primary/20 to-pink-400/20 text-primary font-medium text-xs shadow hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-lg border border-primary text-primary font-semibold bg-white/80 dark:bg-gray-900/80 shadow hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-tr from-primary to-pink-400 text-white font-semibold shadow hover:from-pink-400 hover:to-primary transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;