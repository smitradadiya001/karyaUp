import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Clock, Sparkles, TrendingUp, BookOpen, Users, Send, ChevronLeft, Calendar, Share2, Twitter, Linkedin, Copy } from "lucide-react";
import article1 from "../../assets/work_analysis.jpeg";
import article2 from "../../assets/projects.jpeg";
import article3 from "../../assets/dashboard1.jpeg";
import article4 from "../../assets/calender.jpeg";
import article5 from "../../assets/attendance.jpeg";
import article6 from "../../assets/salary.jpeg";
import article7 from "../../assets/Task.jpeg";
import article8 from "../../assets/Team.jpeg";
import article9 from "../../assets/dashboard.jpeg";
import article10 from "../../assets/work_analysis.jpeg";
import article11 from "../../assets/dashboard1.jpeg";
import article12 from "../../assets/projects.jpeg";
import dashboardMockup from "../../assets/newsletter_illustration_v2.png";

const EASING = [0.2, 0.8, 0.2, 1];

const articles = [
  {
    id: 1,
    title: "The Future of Distributed Work in 2024",
    excerpt: "How KaryaUp is redefining the way creative studios manage global talent and complex design systems.",
    category: "Business",
    author: "Alex Rivers",
    role: "Head of Operations",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: article1,
    content: `
      <p>The landscape of work has undergone a seismic shift, transition from the traditional office-centric model to a more fluid, distributed reality. As we move further into 2024, the tools and philosophies that govern this space are evolving at an unprecedented pace.</p>
      <h2>The Shift to Asynchronous Collaboration</h2>
      <p>One of the most significant changes we're observing is the prioritization of asynchronous communication over real-time meetings. Distributed teams are increasingly relying on structured documentation and powerful project management tools like KaryaUp to bridge the gap across time zones.</p>
      <blockquote>"Architecture is the art of how to waste space." - Philip Johnson. In the digital world, we don't waste space, we optimize it for human connection.</blockquote>
      <h2>Building Dynamic Design Systems</h2>
      <p>Design systems are no longer static libraries; they are living ecosystems. Creative studios are now building systems that are not just responsive, but context-aware, adapting to the diverse needs of global talent.</p>
      <p>As we look toward the future, the integration of AI-driven insights into our daily workflows will further redefine productivity, allowing creative teams to focus on what they do best: innovate.</p>
    `
  },
  {
    id: 2,
    title: "Mastering Minimalist UI Components",
    excerpt: "Why less is more when building scalable design languages for enterprise-grade SaaS products.",
    category: "Design",
    author: "Sarah Chen",
    role: "Senior Product Designer",
    date: "March 12, 2024",
    readTime: "8 min read",
    image: article2,
    content: `
      <p>In the world of enterprise SaaS, complexity is often unavoidable. However, the interface that houses this complexity should be anything but complicated. Mastery of minimalist UI components is the key to creating products that users love.</p>
      <h2>The Core Pillars of Minimalism</h2>
      <p>Minimalism isn't just about white space; it's about purpose. Every element on the screen should earn its place. We focus on clarity, hierarchy, and navigation as our guiding principles.</p>
      <img src="${article6}" alt="Minimalist Design Example" class="rounded-2xl my-8 w-full h-auto object-cover" />
      <h2>Scaling Design Languages</h2>
      <p>When you're building for thousands of users, consistency is your best friend. A minimalist approach allows for a cleaner codebase and a more predictable user experience across the entire product suite.</p>
    `
  },
  {
    id: 3,
    title: "React Server Components: A Deep Dive",
    excerpt: "Understanding the shift in mental models required to build high-performance modern web applications.",
    category: "Development",
    author: "Marcus Volt",
    role: "Full Stack Lead",
    date: "March 10, 2024",
    readTime: "12 min read",
    image: article3,
    content: `<p>React Server Components represent one of the most significant architectural shifts in web development since the introduction of hooks. By allowing components to render on the server without being sent to the client, we're opening up new possibilities for performance and developer experience.</p>`
  },
  {
    id: 4,
    title: "Building a Freelance Career That Scales",
    excerpt: "From solo freelancer to agency owner — the strategies that actually work in 2024.",
    category: "Freelancing",
    author: "Priya Sharma",
    role: "Freelance Strategist",
    date: "March 08, 2024",
    readTime: "6 min read",
    image: article4,
    content: `<p>The jump from solo freelancer to agency owner is less about doing more work and more about building better systems. In this guide, we explore the mental shifts and practical tools needed to scale your creative business.</p>`
  },
  {
    id: 5,
    title: "The Rise of Spatial Design Systems",
    excerpt: "How 3D interfaces and spatial computing are reshaping the future of digital product design.",
    category: "Design",
    author: "Jordan Lee",
    role: "Experience Lead",
    date: "March 05, 2024",
    readTime: "10 min read",
    image: article5,
    content: `<p>Spatial design is no longer just for VR enthusiasts. With the advent of new hardware and refined software ecosystems, 3D interfaces are becoming a core part of the digital designer's toolkit. We dive into the principles of Z-axis navigation and depth hierarchy.</p>`
  },
  {
    id: 6,
    title: "Data-Driven Decision Making for Startups",
    excerpt: "Leveraging analytics and KPIs to make smarter business decisions from day one.",
    category: "Business",
    author: "Nina Patel",
    role: "Growth Advisor",
    date: "March 01, 2024",
    readTime: "7 min read",
    image: article6,
    content: `<p>Intuition is valuable, but data is undeniable. For startups looking to scale, building a culture of data-informed decision making is the difference between guessing and growing.</p>`
  },
  {
    id: 7,
    title: "Optimizing Web Performance in 2024",
    excerpt: "Techniques for achieving lightning-fast load times in modern web applications.",
    category: "Development",
    author: "David Kim",
    role: "Performance Engineer",
    date: "Feb 28, 2024",
    readTime: "9 min read",
    image: article7,
    content: `<p>Performance is a feature. In 2024, we're looking beyond simple minification to advanced hydration strategies and edge-side rendering to deliver sub-second experiences on any device.</p>`
  },
  {
    id: 8,
    title: "Building Collaborative Culture",
    excerpt: "How to foster high-performance teams in a remote-first environment.",
    category: "Business",
    author: "Emma Wilson",
    role: "People Ops Lead",
    date: "Feb 25, 2024",
    readTime: "6 min read",
    image: article8,
    content: `<p>Culture isn't a ping-pong table; it's the sum of your collective behaviors. In a distributed world, building culture requires intentionality, radical transparency, and a lot of high-quality documentation.</p>`
  },
  {
    id: 9,
    title: "Advanced Dashboard Architectures",
    excerpt: "Designing data visualization systems that provide actionable insights at scale.",
    category: "Design",
    author: "Liam Chen",
    role: "UI Architect",
    date: "Feb 20, 2024",
    readTime: "11 min read",
    image: article9,
    content: `<p>Dashboards are often where design meets the most complex data structures. We explore how to maintain clarity while surfacing deep insights using modular dashboard components.</p>`
  },
  {
    id: 10,
    title: "The Psychology of User Productivity",
    excerpt: "Understanding how interface design ripples through user efficiency and focus.",
    category: "Design",
    author: "Sophia Reed",
    role: "UX Researcher",
    date: "Feb 15, 2024",
    readTime: "8 min read",
    image: article10,
    content: `<p>Productivity is a psychological state as much as it is a tactical output. We study how color, spacing, and transition timing can influence focus and reduce cognitive load.</p>`
  },
  {
    id: 11,
    title: "Scaling SaaS Infrastructure",
    excerpt: "Practical architectural patterns for growing your product from 1k to 1M users.",
    category: "Development",
    author: "Michael Scott",
    role: "CTO",
    date: "Feb 10, 2024",
    readTime: "14 min read",
    image: article11,
    content: `<p>Scaling is about solving the problems you have today while not closing the door on tomorrow. We dissect the infra changes required at different stages of a SaaS lifecycle.</p>`
  },
  {
    id: 12,
    title: "Marketing for Solo Founders",
    excerpt: "Effective customer acquisition strategies on a small budget.",
    category: "Freelancing",
    author: "Sarah Brown",
    role: "Marketing Specialist",
    date: "Feb 05, 2024",
    readTime: "7 min read",
    image: article12,
    content: `<p>You don't need a multi-million dollar budget to find your first thousand users. This guide covers organic reach, content strategy, and community-led growth for solo founders.</p>`
  }
];

const FloatingShape = ({ color, size, top, left, delay }) => (
  <motion.div
    animate={{
      y: [0, 15, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className={`absolute ${color} ${size} rounded-full blur-[80px] opacity-20 pointer-events-none z-0`}
    style={{ top, left }}
  />
);


const PerspectiveCard = ({ article, onClick }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 25);
    setRotateY(-(x - centerX) / 25);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(article)}
      style={{
        perspective: "1000px",
      }}
      className="cursor-pointer group relative"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-xl shadow-purple-200/60 hover:shadow-2xl hover:shadow-purple-400/30 transition-shadow h-full flex flex-col"
      >
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/95 backdrop-blur-sm text-[#7e22ce] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-slate-100">
              {article.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-3 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          
          <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#7e22ce] transition-colors leading-tight mb-4">
            {article.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
            {article.excerpt}
          </p>

          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center font-bold text-[#7e22ce] text-sm border border-slate-100">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="text-slate-900 font-bold text-xs leading-none">{article.author}</div>
                <div className="text-slate-400 text-[9px] mt-1.5 uppercase font-black tracking-widest">{article.role}</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#7e22ce] group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
              <ArrowRight size={18} strokeWidth={3} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white rounded-3xl p-7 border border-slate-100 flex items-center gap-6 group hover:shadow-2xl hover:shadow-indigo-500/5 transition-all w-full"
  >
    <div className="p-4 bg-slate-50 rounded-2xl text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white transition-all shadow-sm">
      <Icon size={28} strokeWidth={2.5} />
    </div>
    <div>
      <div className="text-3xl font-black text-slate-900 leading-none mb-1.5">{value}</div>
      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{label}</div>
    </div>
  </motion.div>
);


const ArticleDetail = ({ article, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white min-h-screen pb-32 relative"
    >
      <FloatingShape color="bg-indigo-300" size="w-96 h-96" top="-10%" left="70%" delay={0} />
      <FloatingShape color="bg-purple-300" size="w-80 h-80" top="40%" left="-10%" delay={1} />

      {/* Detail Header */}
      <div className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-[#7e22ce] transition-colors font-bold text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-100"
          >
            <ChevronLeft size={18} strokeWidth={3} />
            Back to Journal
          </button>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#7e22ce] hover:bg-slate-100 transition-colors"><Twitter size={18} /></button>
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#7e22ce] hover:bg-slate-100 transition-colors"><Linkedin size={18} /></button>
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#7e22ce] hover:bg-slate-100 transition-colors"><Copy size={18} /></button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-16 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[#7e22ce] text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 bg-indigo-50 rounded-full border border-indigo-100">
            {article.category}
          </span>
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
            <Calendar size={14} />
            {article.date}
          </span>
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 border-l border-slate-200 pl-4">
            <Clock size={14} />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-10">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mb-16 border-t border-b border-slate-100 py-8">
          <div className="w-14 h-14 rounded-2xl bg-[#7e22ce] flex items-center justify-center font-bold text-white text-2xl shadow-lg shadow-indigo-500/20">
            {article.author.charAt(0)}
          </div>
          <div>
            <div className="text-slate-900 font-extrabold text-lg tracking-tight leading-none mb-1.5">{article.author}</div>
            <div className="text-[#7e22ce] text-xs font-bold uppercase tracking-widest">{article.role}</div>
          </div>
        </div>

        <div className="w-full aspect-video rounded-[40px] overflow-hidden mb-20 shadow-2xl shadow-indigo-500/15 border border-slate-100">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <article
          className="prose prose-slate prose-xl max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-[#7e22ce] prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-img:rounded-3xl prose-img:shadow-2xl"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </motion.div>
  );
};


export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const selectedArticleRef = React.useRef(null);

  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [message, setMessage] = useState("");

  // Keep ref in sync with state so popstate listener never has stale closure
  selectedArticleRef.current = selectedArticle;
  const savedScrollY = React.useRef(0);

  // Handle browser back button / touchpad swipe at the Blog level
  useEffect(() => {
    const handlePopState = () => {
      if (selectedArticleRef.current) {
        setSelectedArticle(null);
        // Restore scroll position after DOM updates
        const y = savedScrollY.current;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: y, behavior: 'instant' });
          });
        });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []); // runs once, uses ref so never stale

  const openArticle = (article) => {
    savedScrollY.current = window.scrollY; // save position before opening
    window.history.pushState({ article: article.id }, '', '#article');
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    const y = savedScrollY.current;
    // Set state to null first (ref also updates synchronously via render)
    setSelectedArticle(null);
    // Clean up the hash from the URL without triggering popstate double-close
    if (window.location.hash === '#article') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    // Restore scroll position after DOM updates
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: 'instant' });
      });
    });
  };

  const categories = ["All", "Design", "Development", "Business", "Freelancing"];

  const handleSearch = () => {
    setAppliedSearch(searchQuery);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setSubscribeStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setSubscribeStatus("success");
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  const filteredArticles = articles
    .filter((a) => {
      const matchesSearch =
        appliedSearch === "" ||
        a.title.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(appliedSearch.toLowerCase());
      const matchesCategory = activeCategory === "All" || a.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (appliedSearch === "") return 0;
      const aTitleMatch = a.title.toLowerCase().includes(appliedSearch.toLowerCase());
      const bTitleMatch = b.title.toLowerCase().includes(appliedSearch.toLowerCase());
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });

  if (selectedArticle) {
    return (
      <AnimatePresence mode="wait">
        <ArticleDetail article={selectedArticle} onBack={closeArticle} />
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7e22ce] selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <FloatingShape color="bg-indigo-300" size="w-96 h-96" top="-10%" left="80%" delay={0} />
        <FloatingShape color="bg-purple-300" size="w-80 h-80" top="20%" left="-10%" delay={1} />
        <FloatingShape color="bg-emerald-200" size="w-64 h-64" top="60%" left="70%" delay={2} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full text-[#7e22ce] text-xs font-black uppercase tracking-[0.2em] mb-8 border border-indigo-100"
          >
            <Sparkles size={14} strokeWidth={3} />
            The KaryaUp Journal
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[56px] md:text-[100px] font-black text-slate-900 leading-[0.9] tracking-[-0.05em] mb-10"
          >
            Insights for the <br />{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              next generation.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-16 font-medium"
          >
            Deep dives into design systems, engineering culture, and the future of digital product development at scale.
          </motion.p>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StatCard icon={BookOpen} value="120+" label="Articles Published" delay={0.3} />
            <StatCard icon={TrendingUp} value="50K+" label="Monthly Readers" delay={0.4} />
            <StatCard icon={Users} value="15+" label="Industry Experts" delay={0.5} />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-full md:max-w-2xl relative flex items-center gap-3">
             <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-4 focus:ring-[#7e22ce]/10 focus:border-[#7e22ce] transition-all outline-none text-slate-900 font-bold"
                />
             </div>
             <button 
              onClick={handleSearch}
              className="bg-[#7e22ce] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all"
             >
                Search
             </button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className=" relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <PerspectiveCard
                  key={article.id}
                  article={article}
                  onClick={openArticle}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">No matches found</h3>
              <p className="text-slate-400 font-medium">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => { setSearchQuery(""); setAppliedSearch(""); setActiveCategory("All"); }}
                className="mt-8 text-[#7e22ce] font-black uppercase tracking-widest text-sm hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Recent Highlights - Horizontal Scroll Carousel */}
      <section className="py-24 bg-gradient-to-br from-[#faf7ff] via-white to-[#f5f3ff] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-[#7e22ce] text-xs font-black uppercase tracking-[0.25em] mb-3 block">From the journal</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-4">Recent Highlights</h2>
              <p className="text-slate-500 font-medium max-w-md">
                A curated selection of our most popular insights, guides, and updates from the KaryaUp team.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scrollable Row */}
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex gap-6 overflow-x-auto pb-8 scroll-smooth"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
          {articles.slice(0, 6).map((article, i) => {
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{ scrollSnapAlign: "start" }}
                className="w-[300px] rounded-[32px] flex flex-col justify-between border border-slate-200 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.28)] shrink-0 h-[500px] p-8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-38px_rgba(126,34,206,0.22)]"
              >
                {/* Top */}
                <div className="flex flex-col gap-5">
                  <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] bg-purple-50 text-purple-700 border border-purple-100 px-4 py-2 rounded-full w-fit">
                    {article.category}
                  </span>
                  <h3 className="text-[22px] font-extrabold leading-snug tracking-tight text-slate-900 group-hover:text-[#7e22ce] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-500 font-medium">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 mt-2">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="pt-5 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm mb-3 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 text-white">
                    {article.author.charAt(0)}
                  </div>
                  <div className="font-bold text-[14px] text-slate-900">{article.author}</div>
                  <div className="text-[11px] mt-0.5 text-slate-400 font-semibold uppercase tracking-wide">{article.role}</div>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Newsletter - Feature CTA Style */}
      <section className="pt-16 pb-28 px-6">
        <div className="max-w-6xl mx-auto group">
          <motion.div
            whileHover={{ y: -8 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-black border border-white/5 p-3 lg:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.65),transparent_52%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.2),transparent_42%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.26),transparent_44%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(88,28,135,0.18),rgba(10,10,18,0)_40%,rgba(126,34,206,0.16))] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">
              <div className="flex-[0.62] text-left flex flex-col justify-center pt-6 lg:pt-10 pb-4 lg:pb-8 pl-4 lg:pl-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.95] mb-4">
                  Get the latest <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
                    KaryaUp
                  </span>{" "}
                  insights.
                </h2>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 tracking-tight">
                  Subscribe for more articles
                </h3>
                <p className="text-slate-400 text-sm sm:text-base font-medium mb-8 max-w-md leading-relaxed">
                  Stay updated with the latest insights and updates on the future of work.
                </p>

                <form className="max-w-xl" onSubmit={handleSubscribe}>
                  <div className="flex flex-col sm:flex-row gap-4 mb-5">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-7 py-4 rounded-[1.25rem] bg-white border border-white/20 focus:ring-4 focus:ring-purple-500/20 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all shadow-xl"
                    />
                    <button className="bg-white text-black px-8 py-4 rounded-[1.25rem] font-black text-base hover:bg-slate-50 transition-all shadow-2xl self-start">
                      Subscribe
                    </button>
                  </div>
                  {subscribeStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-2xl flex items-center justify-center text-sm font-black backdrop-blur-md ${
                        subscribeStatus === "success"
                          ? "bg-emerald-500/20 text-emerald-100 border border-emerald-500/30"
                          : "bg-red-500/20 text-red-100 border border-red-500/30"
                      }`}
                    >
                      {message}
                    </motion.div>
                  )}
                </form>
              </div>

              <div className="flex-[1.2] relative mt-8 lg:mt-0 flex items-center justify-end p-4 lg:p-6 lg:pr-10">
                <motion.div
                  initial={{ opacity: 0, x: 80, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-[100%] lg:w-[88%] translate-x-0 lg:translate-x-3"
                >
                  <motion.div
                    animate={{
                      rotateY: [-5, 5, -5],
                      rotateX: [2, -2, 2],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative"
                  >
                    <img
                      src={dashboardMockup}
                      alt="Product Showcase"
                      className="relative w-full h-auto object-contain transition-all duration-500 z-10"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
