import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, MapPin, ExternalLink, Briefcase, GraduationCap, Palette, Layout, Video, Image as ImageIcon, Box, Folder, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-bg/80 border-b border-white/5">
    <motion.div 
      className="font-display font-bold text-xl tracking-tighter flex items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        animate={{ 
          color: ['#ffffff', '#9ca3af', '#ffffff'],
          textShadow: ['0px 0px 0px rgba(255,255,255,0)', '0px 0px 8px rgba(255,255,255,0.5)', '0px 0px 0px rgba(255,255,255,0)']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        HD
      </motion.span>
      <motion.span 
        className="text-accent mx-[2px] inline-block"
        animate={{ 
          opacity: [1, 0.5, 1], 
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ 
          color: ['#ffffff', '#9ca3af', '#ffffff'],
          textShadow: ['0px 0px 0px rgba(255,255,255,0)', '0px 0px 8px rgba(255,255,255,0.5)', '0px 0px 0px rgba(255,255,255,0)']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        CREATIVES
      </motion.span>
    </motion.div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
      <a href="#about" className="hover:text-primary transition-colors">About</a>
      <a href="#services" className="hover:text-primary transition-colors">Services</a>
      <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
      <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
    </div>
    <a href="#contact" className="px-5 py-2 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">
      Let's Talk
    </a>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-accent"></span>
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Divya Chittiprolu</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
          Transforming Ideas <br className="hidden md:block" />
          into <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic font-light">Impactful</span> <br className="hidden md:block" />
          Visual Designs.
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#portfolio" className="flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
            View Projects <ArrowRight size={18} />
          </a>
          <div className="flex items-center gap-4 text-secondary text-sm font-mono">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg bg-surface flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/client${i}/100/100`} alt="Client" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span>100+ Happy Clients</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Hello, I'm Divya.</h2>
          <div className="space-y-6 text-secondary text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              I'm a freelance graphic designer with <strong className="text-primary">5 years of design experience</strong>, working with over 100 clients to bring their visions to life.
            </p>
            <p>
              I specialize in brand design, social media creatives, and print design. I enjoy collaborating with people and businesses who appreciate sleek, polished, and impactful visual communication.
            </p>
          </div>
          
          <div className="mt-16">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accent mb-8">Core Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Photoshop', 'CorelDRAW', 'Canva', 'Illustrator'].map((skill) => (
                <span key={skill} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Layout />, title: "Social Media Post Design", desc: "Engaging visuals tailored for your social platforms." },
    { icon: <Palette />, title: "Print & Marketing Materials", desc: "Flyers, brochures, and banners that stand out." },
    { icon: <ImageIcon />, title: "Thumbnail Design", desc: "Click-worthy thumbnails for your video content." },
    { icon: <Box />, title: "Packaging Design", desc: "Product packaging that tells your brand story." },
    { icon: <Video />, title: "Video Editing", desc: "Crisp and engaging edits for your raw footage." },
    { icon: <Layout />, title: "Ecommerce Product Images", desc: "High-converting listing images for your products." },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-secondary text-lg max-w-2xl">Comprehensive design solutions to elevate your brand's visual identity across all touchpoints.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-accent" />
            <h2 className="font-display text-3xl font-bold">Professional Experience</h2>
          </div>
          <div className="space-y-12">
            {[
              { role: "Freelance Graphic Designer", company: "Self-Employed", period: "2022 – Present", desc: "Working with 100+ clients globally, delivering high-quality brand and marketing designs." },
              { role: "Junior Designer", company: "Kolli Graphics", period: "2021 – 2022", desc: "Assisted in creating visual concepts, communicating ideas that inspire, inform, and captivate consumers." },
              { role: "Design Intern", company: "Halftone Digitals", period: "2021", desc: "Gained hands-on experience in digital design and print media production." },
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                <div className="text-sm font-mono text-secondary mb-1">{exp.period}</div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <div className="text-accent mb-3">{exp.company}</div>
                <p className="text-secondary text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-accent" />
            <h2 className="font-display text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-12">
            {[
              { degree: "B.Tech in Computer Science Engineering", school: "CMR Technical Campus, Medchal", period: "2022 – 2025" },
              { degree: "Diploma in Printing Technology", school: "Government Institute of Printing Technology, Secunderabad", period: "2018 – 2021" },
            ].map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-2" />
                <div className="text-sm font-mono text-secondary mb-1">{edu.period}</div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <div className="text-white/70 mt-1">{edu.school}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeFolder, setActiveFolder] = useState<any>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projects = [
    { 
      title: "Product Packaging", 
      isFolder: true,
      thumbnail: "https://drive.google.com/thumbnail?id=1LBk4D8nP8LlSYFEFLnBhqmkQiWni4AER&sz=w1000",
      images: [
        { title: "Rava Idly Premix", url: "https://drive.google.com/thumbnail?id=1LBk4D8nP8LlSYFEFLnBhqmkQiWni4AER&sz=w1000" },
        { title: "Upma Premix", url: "https://drive.google.com/thumbnail?id=15wimn6a6LDGp_ZVD8jyDmh8n4m5dwspP&sz=w1000" },
        { title: "Sambar Premix", url: "https://drive.google.com/thumbnail?id=1kjqiItXiA1nuJ6ofRNiS4erd-cq9R0lF&sz=w1000" },
        { title: "Rasam Premix", url: "https://drive.google.com/thumbnail?id=1SEPoo-_l95VQTNO3WE0yxnCOMNssCSPe&sz=w1000" },
        { title: "Poha Premix", url: "https://drive.google.com/thumbnail?id=1i5b9TMGePXe95G-uNkkGFk7EwGoke3f6&sz=w1000" },
      ]
    },
    { 
      title: "Print Materials", 
      isFolder: true,
      thumbnail: "https://drive.google.com/thumbnail?id=1tVJJ6J9qJ8Ayx4XxzJMEUorhlRAj8f7N&sz=w1000",
      images: [
        { title: "Print Material 1", url: "https://drive.google.com/thumbnail?id=1tVJJ6J9qJ8Ayx4XxzJMEUorhlRAj8f7N&sz=w1000" },
        { title: "Print Material 2", url: "https://drive.google.com/thumbnail?id=1_Wib4AiomElhvKoiXBXPSh6pgBf4tTNA&sz=w1000" },
        { title: "Print Material 3", url: "https://drive.google.com/thumbnail?id=1mKfOklQwCsVMBcpn2GBCEZXhMHxTzgng&sz=w1000" },
        { title: "Print Material 4", url: "https://drive.google.com/thumbnail?id=1VWeuH8d2WbVuJSqLRusdgU2FIkDiE_zv&sz=w1000" },
        { title: "Print Material 5", url: "https://drive.google.com/thumbnail?id=1W5Cv3reqAO6ks4VcI65rnwEkh5zrmmUG&sz=w1000" },
        { title: "Print Material 6", url: "https://drive.google.com/thumbnail?id=1Eh4VdWNxvKOWiqLspedFlB7YcjfJYns5&sz=w1000" },
      ]
    },
    { 
      title: "Social Media Creatives", 
      isFolder: true,
      thumbnail: "https://drive.google.com/thumbnail?id=1_hde-W3dl2MELB3pZmkoHXGfS5EzDxEA&sz=w1000",
      images: [
        { title: "Social Media Creative 1", url: "https://drive.google.com/thumbnail?id=1_hde-W3dl2MELB3pZmkoHXGfS5EzDxEA&sz=w1000" },
        { title: "Social Media Creative 2", url: "https://drive.google.com/thumbnail?id=1pPKfxjOSwZVurAaddMn9zQBN2S9Ol_cR&sz=w1000" },
        { title: "Social Media Creative 3", url: "https://drive.google.com/thumbnail?id=11KkHJzTi-RenuaxucVtq-Gd8-4WN8TA1&sz=w1000" },
        { title: "Social Media Creative 4", url: "https://drive.google.com/thumbnail?id=1YSiBhBjzZJ9XjcUjgsDg2WVfZ1xXaQBt&sz=w1000" },
      ]
    },
    { 
      title: "Event Poster Design", 
      isFolder: true,
      thumbnail: "https://drive.google.com/thumbnail?id=1SUXol4lfZaWGjZ3DpBLKGBw5UENCE2Ih&sz=w1000",
      images: [
        { title: "Event Poster 1", url: "https://drive.google.com/thumbnail?id=1SUXol4lfZaWGjZ3DpBLKGBw5UENCE2Ih&sz=w1000" },
        { title: "Event Poster 2", url: "https://drive.google.com/thumbnail?id=1_lZ7lpTwLCxRBc4ark4EWfbTYCpVpYfx&sz=w1000" },
        { title: "Event Poster 3", url: "https://drive.google.com/thumbnail?id=1o4xpxIGoHvithlyOLziTsgthO3pYjlEU&sz=w1000" },
        { title: "Event Poster 4", url: "https://drive.google.com/thumbnail?id=1SXYM9726aEmuyY56y8602oEzjZ6pklaS&sz=w1000" },
      ]
    },
    { 
      title: "YouTube Thumbnails", 
      isFolder: true,
      thumbnail: "https://drive.google.com/thumbnail?id=1GugYrqhABYFIoEpyzBSigTDpDf8S2xCD&sz=w1000",
      images: [
        { title: "Thumbnail 1", url: "https://drive.google.com/thumbnail?id=1GugYrqhABYFIoEpyzBSigTDpDf8S2xCD&sz=w1000" },
        { title: "Thumbnail 2", url: "https://drive.google.com/thumbnail?id=1aeSBE_MmOarJx_WswJD4QGcsJY8w2seg&sz=w1000" },
        { title: "Thumbnail 3", url: "https://drive.google.com/thumbnail?id=14zKyysdIH6VnTuXZamDprg2LtSYjiLPk&sz=w1000" },
        { title: "Thumbnail 4", url: "https://drive.google.com/thumbnail?id=18aGBNRhYEg0TubWOTdYnBChA_-DlRKtp&sz=w1000" },
        { title: "Thumbnail 5", url: "https://drive.google.com/thumbnail?id=1OThwdtWwuyvVIam5IZNq7XVMKdoH_XUh&sz=w1000" },
        { title: "Thumbnail 6", url: "https://drive.google.com/thumbnail?id=1kZgwpXxpmV-vKQOYYKGJeRTpwSIaYN02&sz=w1000" },
      ]
    },
    { 
      title: "Corporate Brochure", 
      isFolder: true,
      thumbnail: "https://drive.google.com/thumbnail?id=1ENF5Yj-6VC5Cn7gX7xnPIvd9VD5e9FWw&sz=w1000",
      images: [
        { title: "Brochure Design 1", url: "https://drive.google.com/thumbnail?id=1ENF5Yj-6VC5Cn7gX7xnPIvd9VD5e9FWw&sz=w1000" },
        { title: "Brochure Design 2", url: "https://drive.google.com/thumbnail?id=1HiGjNIC-9vBbfL2cpqAPQO_gFV7rumSp&sz=w1000" },
        { title: "Brochure Design 3", url: "https://drive.google.com/thumbnail?id=1aPAOZ2lhb3iFgFAG9XM8UXjk15f7beaP&sz=w1000" },
      ]
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-secondary text-lg max-w-xl">A glimpse into my recent design projects.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => project.isFolder ? setActiveFolder(project) : null}
                className="group block relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface shadow-lg hover:shadow-accent/20 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {project.isFolder && (
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                    <Folder size={16} className="text-accent" />
                    <span className="text-white text-sm font-bold uppercase tracking-wider">{project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
                  {project.isFolder && <Folder size={48} className="text-accent mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out" />}
                  <h3 className="text-3xl font-black tracking-tight text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out text-center drop-shadow-lg">{project.title}</h3>
                  {project.isFolder && (
                    <span className="text-accent text-sm mt-4 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out flex items-center gap-2 font-bold">
                      Open Folder <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeFolder && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-surface border border-white/10 rounded-3xl w-full max-w-6xl max-h-full overflow-y-auto flex flex-col"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-surface/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Folder className="text-accent" size={24} />
                  <h3 className="font-display text-2xl font-bold">{activeFolder.title}</h3>
                </div>
                <button 
                  onClick={() => setActiveFolder(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-secondary hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeFolder.images.map((img: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                      onClick={() => setLightboxImage(img.url)}
                      className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/5 cursor-pointer"
                    >
                      <img 
                        src={img.url} 
                        alt={img.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                        <h4 className="text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl cursor-zoom-out"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ClientsSection = () => {
  const clients = ["Rakesh", "Bhanu", "Sudhir", "100+ Happy Clients"];
  
  return (
    <div className="py-16 border-y border-white/5 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h3 className="text-center text-secondary text-sm font-mono uppercase tracking-widest mb-10">Trusted By</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {clients.map((client, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex items-center"
            >
              <span className="font-display text-2xl md:text-3xl font-bold text-white/40 hover:text-white transition-colors duration-300 uppercase tracking-wider">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Let's create something <span className="italic font-light text-secondary">extraordinary.</span></h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Available for freelance opportunities. Let's collaborate to build impactful visual designs for your brand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <a href="mailto:dchittiprolu@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-secondary mb-1">Email</p>
                <p className="font-medium">dchittiprolu@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+916300509873" className="flex items-center gap-4 p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-secondary mb-1">Phone</p>
                <p className="font-medium">+91 6300509873</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-surface border border-white/5">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-secondary mb-1">Location</p>
                <p className="font-medium">Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 px-2">
              <a href="https://www.behance.net/divyachittip" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors font-medium">Behance</a>
              <a href="https://www.linkedin.com/in/divya-chittiprolu-b535a521a/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors font-medium">LinkedIn</a>
            </div>
          </div>

          <form className="flex flex-col gap-6 bg-surface p-8 rounded-3xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-secondary">Name</label>
              <input type="text" id="name" className="bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-secondary">Email</label>
              <input type="email" id="email" className="bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-secondary">Message</label>
              <textarea id="message" rows={4} className="bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="mt-2 bg-white text-black font-medium py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              Send Message <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center border-t border-white/5 text-secondary text-sm flex flex-col items-center justify-center gap-4">
    <motion.div 
      className="font-display font-bold text-lg tracking-tighter flex items-center justify-center text-white cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        animate={{ 
          color: ['#ffffff', '#9ca3af', '#ffffff'],
          textShadow: ['0px 0px 0px rgba(255,255,255,0)', '0px 0px 8px rgba(255,255,255,0.5)', '0px 0px 0px rgba(255,255,255,0)']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        HD
      </motion.span>
      <motion.span 
        className="text-accent mx-[2px] inline-block"
        animate={{ 
          opacity: [1, 0.5, 1], 
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ 
          color: ['#ffffff', '#9ca3af', '#ffffff'],
          textShadow: ['0px 0px 0px rgba(255,255,255,0)', '0px 0px 8px rgba(255,255,255,0.5)', '0px 0px 0px rgba(255,255,255,0)']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        CREATIVES
      </motion.span>
    </motion.div>
    <p>© {new Date().getFullYear()} HD Creatives. All rights reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white">
      <div className="noise-bg" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
