import React from 'react';
import { Globe, Code2, Cpu, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: 'Web Application Development',
    description: 'High-performance, responsive web applications built with modern frameworks and scalable architectures.'
  },
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: 'SaaS Product Engineering',
    description: 'End-to-end development of Software-as-a-Service platforms, from concept to production deployment.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: 'AI Integration & Automation',
    description: 'Implement intelligent features and automated workflows using cutting-edge AI technologies.'
  },
  {
    icon: <Cloud className="w-6 h-6 text-white" />,
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable, and optimized cloud architectures designed for high availability and performance.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Services</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored for modern digital businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-8 rounded-3xl bg-surface/30 border border-white/5 hover:bg-surface/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
