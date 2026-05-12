import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../mock';

const BlogSection = () => {
  return (
    <section id="blog" className="bg-white text-black py-24 px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <h2 className="font-display tracking-[-0.03em] leading-none font-light" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}>
            What's
            <span className="inline-block align-middle mx-3 w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" alt="" className="w-full h-full object-cover"/>
            </span>
            New
          </h2>
          <a href="#blog" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-[15px] font-medium hover:bg-[#9DF5D2] transition-colors">
            Explore More Thoughts <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <a key={i} href="#" className="group block">
              <div className="rounded-2xl overflow-hidden aspect-square mb-5 bg-white/5">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <p className="text-[12px] uppercase tracking-wider text-white/60 mb-3">{post.category}</p>
              <h3 className="font-display text-[22px] md:text-[26px] leading-tight tracking-tight mb-5 group-hover:text-[#9DF5D2] transition-colors">{post.title}</h3>
              <div className="flex items-center gap-3 text-[13px] text-white/70">
                <img src={post.avatar} alt={post.author} className="w-7 h-7 rounded-full object-cover"/>
                <span>{post.author}</span>
                <span className="opacity-60">•</span>
                <span>{post.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
