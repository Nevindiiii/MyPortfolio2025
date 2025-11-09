import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nevindiiii', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/nevindisadeera', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nevindi@example.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 py-12 text-white bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold transition-colors cursor-pointer hover:text-orange-500"
            >
              Nevindi Sadeera
            </button>
            <p className="flex items-center justify-center gap-2 mt-2 text-gray-400 md:justify-start">
              © {currentYear} Nevindi Sadeera Lokuliyanage.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-link group"
              >
                <social.icon className="w-6 h-6 transition-transform group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-8 text-sm text-center text-gray-400 border-t border-gray-800">
          <p>Designed and developed with passion for creating exceptional web experiences.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
