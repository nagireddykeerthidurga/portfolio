import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Wrench, 
  Brain, 
  Users2 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Basic" },
        { name: "C", level: "Intermediate" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "SQL", level: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Technologies",
      icon: Database,
      skills: [
        { name: "MERN Stack", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Flask", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "JWT", level: "Advanced" },
        { name: "Stripe API", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "AWS", level: "Foundational" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS Cloud", level: "Foundational" },
        { name: "DevOps", level: "Certified" },
        { name: "Deployment", level: "Intermediate" },
        { name: "CI/CD", level: "Basic" }
      ]
    },
    {
      title: "CS Concepts",
      icon: Brain,
      skills: [
        { name: "Data Structures", level: "Advanced" },
        { name: "Algorithms", level: "Advanced" },
        { name: "OOP", level: "Advanced" },
        { name: "DBMS", level: "Intermediate" },
        { name: "System Design", level: "Intermediate" },
        { name: "MVC", level: "Advanced" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users2,
      skills: [
        { name: "Leadership", level: "Advanced" },
        { name: "Communication", level: "Advanced" },
        { name: "Fast Learning", level: "Advanced" },
        { name: "Team Collaboration", level: "Advanced" },
        { name: "Mentoring", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground";
      case "Intermediate": return "bg-accent text-accent-foreground";
      case "Basic": return "bg-secondary text-secondary-foreground";
      case "Foundational": return "bg-muted text-muted-foreground";
      case "Certified": return "bg-accent-purple text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technologies and tools I use to build modern, 
            scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-2xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-lg border border-white/30 dark:border-gray-800/60 p-8 flex flex-col gap-6 hover:scale-[1.03] transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gradient-to-tr from-primary to-pink-400 p-4 rounded-2xl shadow-lg">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold gradient-text drop-shadow-lg">{category.title}</h3>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-base text-gray-800 dark:text-gray-100">{skill.name}</span>
                      <span className="text-xs font-semibold text-primary/80 dark:text-primary-300/80 uppercase tracking-wide">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={
                          skill.level === "Advanced"
                            ? "bg-gradient-to-r from-primary to-pink-400"
                            : skill.level === "Intermediate"
                            ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                            : skill.level === "Basic"
                            ? "bg-gradient-to-r from-gray-400 to-gray-300"
                            : skill.level === "Foundational"
                            ? "bg-gradient-to-r from-blue-300 to-blue-100"
                            : skill.level === "Certified"
                            ? "bg-gradient-to-r from-purple-500 to-pink-400"
                            : "bg-gradient-to-r from-gray-400 to-gray-300"
                        }
                        style={{
                          width:
                            skill.level === "Advanced"
                              ? "100%"
                              : skill.level === "Intermediate"
                              ? "75%"
                              : skill.level === "Basic"
                              ? "50%"
                              : skill.level === "Foundational"
                              ? "40%"
                              : skill.level === "Certified"
                              ? "90%"
                              : "50%",
                          height: '100%',
                          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;