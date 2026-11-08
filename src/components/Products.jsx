import React from 'react';
import { Bot, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import UnderlineHeading from './UnderlineHeading';

const products = [
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    name: 'Avoiga',
    description: 'Next-generation AI Companion Platform designed for deep contextual understanding and natural interaction.',
    tag: 'Flagship',
    link: 'https://avoiga.ectama.com',
    live: true,
  },
  {
    icon: <Wrench className="w-8 h-8 text-accent-dark" />,
    name: 'Ectama Tools',
    description: 'A suite of productivity utilities built for modern teams to streamline workflows and boost efficiency.',
    tag: 'In Development',
    link: null,
    live: false,
  },
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    name: 'Project Nexus',
    description: 'Coming soon. An enterprise-grade data synchronization platform for the modern cloud ecosystem.',
    tag: 'Coming Soon',
    link: null,
    live: false,
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary">
            <UnderlineHeading>Our Products</UnderlineHeading>
          </h2>
          <p className="text-xl text-secondary max-w-2xl">
            We build tools that empower individuals and organizations to achieve more.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <TiltCard
              key={index}
              index={index}
              className="shine-sweep group glass-panel p-8 relative hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-[border-color,box-shadow] duration-300"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    product.live
                      ? 'bg-accent/10 text-accent border-accent/30'
                      : 'bg-surface text-secondary border-border'
                  }`}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-primary">{product.name}</h3>
                <p className="text-secondary leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                {product.live ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    className="flex items-center gap-2 text-sm font-semibold text-accent group/btn mt-auto w-fit hover:gap-3 transition-all"
                  >
                    Visit Avoiga
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button disabled className="flex items-center gap-2 text-sm font-semibold text-secondary/40 mt-auto w-fit cursor-not-allowed">
                    Coming Soon
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
