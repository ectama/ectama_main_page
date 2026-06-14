import React from 'react';
import { Bot, Wrench, Sparkles, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    name: 'Avoiga',
    description: 'Next-generation AI Companion Platform designed for deep contextual understanding and natural interaction.',
    tag: 'Flagship'
  },
  {
    icon: <Wrench className="w-8 h-8 text-purple-400" />,
    name: 'Ectama Tools',
    description: 'A suite of productivity utilities built for modern teams to streamline workflows and boost efficiency.',
    tag: 'In Development'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    name: 'Project Nexus',
    description: 'Coming soon. An enterprise-grade data synchronization platform for the modern cloud ecosystem.',
    tag: 'In Development'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our Products</h2>
          <p className="text-xl text-secondary max-w-2xl">
            We build tools that empower individuals and organizations to achieve more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group glass-panel p-8 relative overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-secondary border border-white/10">
                    {product.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-secondary leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-semibold text-white group/btn mt-auto w-fit">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
