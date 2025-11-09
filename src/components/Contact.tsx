import { useState } from 'react';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nevindiiii', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/nevindisadeera', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:nevindisadeera@gmail.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="mx-auto section-divider"></div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-lg text-gray-600">Let's create something amazing together</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-black">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="example@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="resize-none input-field"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="flex items-center justify-center w-full gap-2 btn-primary">
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {status && (
                <p className="font-medium text-center text-green-600">{status}</p>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-2xl font-bold text-black">Connect with me</h3>
            <p className="mb-8 leading-relaxed text-gray-600">
              I'm always excited to connect with fellow developers, potential collaborators,
              or anyone interested in discussing technology and innovative ideas. Feel free
              to reach out through any of the platforms below!
            </p>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 transition-all duration-300 border-2 border-transparent rounded-lg group bg-gray-50 hover:bg-orange-50 hover:border-orange-500"
                >
                  <div className="p-3 transition-all bg-white rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-110">
                    <social.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-lg font-medium text-black transition-colors group-hover:text-orange-500">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
