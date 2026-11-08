import React from 'react';
import { Globe, Code2, Cpu, Cloud, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';
import SpotlightCard from './SpotlightCard';
import TiltCard from './TiltCard';

const services = [
  {
    num: '01',
    icon: <Globe className="w-7 h-7 text-accent" />,
    title: 'Web Application Development',
    description: 'High-performance, responsive web applications built with modern frameworks and scalable architectures.',
    span: 'md:col-span-2',
  },
  {
    num: '02',
    icon: <Code2 className="w-7 h-7 text-accent" />,
    title: 'SaaS Product Engineering',
    description: 'End-to-end development of Software-as-a-Service platforms, from concept to production deployment.',
    span: '',
  },
  {
    num: '03',
    icon: <Cpu className="w-7 h-7 text-accent" />,
    title: 'AI Integration & Automation',
    description: 'Implement intelligent features and automated workflows using cutting-edge AI technologies.',
    span: '',
  },
  {
    num: '04',
    icon: <Cloud className="w-7 h-7 text-accent" />,
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable, and optimized cloud architectures designed for high availability and performance.',
    span: 'md:col-span-2',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative border-t border-border">
      <Reveal className="text-center mb-20 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary">
          <ScrambleText text="What We Offer" />
        </h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Comprehensive engineering solutions tailored for modern digital businesses.
        </p>
      </Reveal>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <TiltCard
              key={index}
              index={index}
              className={`group ${service.span}`}
            >
              <SpotlightCard className="group h-full p-8 rounded-3xl bg-surface border border-border hover:border-accent/40 transition-colors duration-300 flex flex-col justify-between min-h-[240px]">
                <div className="relative z-10 flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <span className="group-hover:hidden">{service.icon}</span>
                    <ArrowUpRight className="w-7 h-7 text-black hidden group-hover:block" />
                  </div>
                  <span className="text-5xl font-black text-border group-hover:text-accent/20 transition-colors duration-300 select-none">
                    {service.num}
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    viewport={{ once: true }}
                    className="text-secondary leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </SpotlightCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
