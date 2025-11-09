import Marquee from "react-fast-marquee";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
];

const Skills = () => {
  const extendedSkills = [...skills, ...skills, ...skills]; // repeat more for full line

  return (
    <section className="relative py-10 overflow-hidden bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Top stripe: scroll left */}
      <Marquee gradient={false} speed={50} className="-rotate-2">
        <div className="flex items-center whitespace-nowrap">
          {extendedSkills.map((skill, index) => (
            <span
              key={index}
              className="mx-6 text-3xl font-extrabold tracking-widest text-white uppercase transition-transform duration-300 md:text-4xl hover:scale-110 hover:text-orange-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </Marquee>

      {/* Bottom stripe: scroll right */}
      <div className="absolute bottom-0 w-full py-4 bg-black shadow-xl rotate-1">
        <Marquee gradient={false} speed={40} direction="right">
          <div className="flex items-center whitespace-nowrap">
            {extendedSkills.map((skill, index) => (
              <span
                key={index}
                className="mx-6 text-3xl font-extrabold tracking-widest text-orange-600 uppercase transition-transform duration-300 md:text-4xl hover:scale-110 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
