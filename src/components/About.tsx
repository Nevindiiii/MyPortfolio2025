import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="section-divider"></div>
          <h2 className="section-title mb-8">About Me</h2>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I am currently pursuing my Higher National Diploma in Information Technology (HNDIT) at SLIATE,
            where I'm developing a strong foundation in modern software development practices and technologies.
          </p>

          <p>
            Previously, I studied Bachelor of Software Engineering at the Open University of Sri Lanka (OUSL),
            which provided me with valuable insights into software architecture and development methodologies.
          </p>

          <p className="text-xl font-medium text-black italic border-l-4 border-orange-500 pl-6 py-4 my-8">
            "I love building scalable web applications and continuously learning new technologies."
          </p>

          <p>
            My passion lies in creating intuitive user experiences and robust backend systems. I thrive on
            solving complex problems and staying updated with the latest trends in web development. Whether
            it's crafting responsive frontends or architecting efficient server solutions, I'm dedicated to
            delivering high-quality code.
          </p>
        </div>

        <button className="btn-primary group mt-12 flex items-center gap-2">
          <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;
