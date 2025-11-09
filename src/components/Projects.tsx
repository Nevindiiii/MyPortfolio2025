import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "TypeScript", "Tailwind", "SQL"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "REST APIs", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and automated reporting.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Portfolio CMS",
      description:
        "Content management system for portfolio websites with drag-and-drop builder and SEO optimization.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "TypeScript", "SQL", "Tailwind"],
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Health and fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Express", "MongoDB", "JavaScript"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="projects-section px-6">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <div className="section-divider mx-auto"></div>
          <h2>My Projects</h2>
          <p>A showcase of my recent work</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card relative bg-black group"
            >
              {/* Project Image */}
              <div className="relative w-full h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 brightness-90"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                  <h3 className="mb-2 text-2xl font-bold text-orange-500">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-100 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 text-black transition bg-white rounded-lg hover:bg-gray-200"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 text-white transition bg-orange-500 rounded-lg hover:bg-orange-600"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Info for small screens */}
              <div className="p-6 md:hidden">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;