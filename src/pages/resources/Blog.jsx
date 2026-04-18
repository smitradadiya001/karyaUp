import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import {
  Search,
  ArrowRight,
  Clock,
  Sparkles,
  TrendingUp,
  BookOpen,
  Users,
  Send,
  ChevronLeft,
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Copy,
  Check,
  CheckCircle2,
} from "lucide-react";
import {
  FocusIllust,
  TeamIllust,
  OpsIllust,
  LeadIllust,
  MeetingIllust,
} from "./BlogIllustrations";
import article1 from "../../assets/work_analysis.webp";

import Blog2 from "../../assets/Blog2.webp";
import Blog3 from "../../assets/Blog3.webp";
import Blog4 from "../../assets/Blog4.webp";
import Blog5 from "../../assets/Blog5.webp";
import Blog6 from "../../assets/Blog6.webp";

import BlogHero from "../../assets/Blog_Hero.webp";
import logo from "../../assets/logo.webp";
import { Helmet } from "react-helmet-async";
import MovingPurpleRing from "../../components/MovingPurpleRing";

const EASING = [0.2, 0.8, 0.2, 1];

const TrailSegment = ({ seg, index, isHovered, movementOpacity }) => {
  const opacity = useTransform(movementOpacity, (v) =>
    isHovered ? (index === 0 ? seg.opacity : v * seg.opacity) : 0,
  );

  return (
    <motion.div
      className="absolute pointer-events-none z-[100] rounded-full mix-blend-screen"
      style={{
        width: seg.size,
        height: seg.size,
        left: seg.x,
        top: seg.y,
        x: "-50%",
        y: "-50%",
        opacity,
        scale: isHovered ? 1 : 0,
        background:
          "radial-gradient(circle, rgba(192, 38, 211, 0.9) 0%, rgba(168, 85, 247, 0) 70%)",
        filter: `blur(${seg.blur}px)`,
      }}
    />
  );
};

const articles = [
  {
    id: "featured",
    title: "Why Your Team Is Busy But Nothing Is Getting Done",
    excerpt:
      "Busyness is not progress. Most teams confuse activity with output -and managers let it slide because the calendar looks full. Here's how to tell the difference, and what to actually fix.",
    category: "Team Management",
    author: "Alex Rivers",
    role: "Head of Operations",
    date: "March 25, 2024",
    readTime: "6 min read",
    image: Blog2,
    illustration: null,
    hookStat: "73% of tasks on average to-do lists never get done.",
    pullQuote:
      "A full calendar and an empty sprint are not the same problem -but they have the same root cause.",
    content: `
      <p>Busyness is the ultimate hiding place. It feels like commitment, it looks like hard work, and it sounds like progress. But for most teams, it's just noise.</p>
      <h2>The Paradox of Activity</h2>
      <p>In modern workplaces, we've developed a cult of the 'busy'. We measure success by the density of our calendars and the speed of our Slack replies. However, research consistently shows that there is a diminishing return on hours worked. When teams are "always on," they lose the capacity for deep work—the very thing that drives actual results.</p>
      <blockquote>"A full calendar and an empty sprint are not the same problem -but they have the same root cause."</blockquote>
      <h2>Confusing Motion with Progress</h2>
      <p>Motion is doing things; progress is getting things done. A team can spend forty hours a week in meetings discussing a feature, but if not a single line of code is written, that's motion without progress. Managers often let this slide because intervention feels like micro-management, or worse, because they are caught in the same cycle themselves.</p>
      <h2>What to Actually Fix</h2>
      <p>To break this cycle, leadership must prioritize outcome over output. This means setting clear, singular goals for the week and fiercely protecting the team's time. Stop asking "What did you do today?" and start asking "What did we ship today?"</p>
    `,
  },
  {
    id: 1,
    title: "The 3-Task Rule -Why Top Performers Never Write Long To-Do Lists",
    excerpt:
      "Long task lists feel productive to write and useless to execute. The best performers work differently -and it starts with a number most people think is too small.",
    category: "Productivity",
    author: "Sarah Chen",
    role: "Senior Product Designer",
    date: "March 24, 2024",
    readTime: "4 min read",
    image: Blog2,
    illustration: null,
    hookStat: "73% of tasks on average to-do lists never get done.",
    content: `
      <p>The secret to productivity isn't doing more; it's doing less of what doesn't matter. The 3-task rule is about radical prioritization.</p>
      <h2>The Psychology of the To-Do List</h2>
      <p>Most to-do lists are actually "wish lists." They are a dumping ground for every stray thought and obligation we encounter. By the time we look at the list, the sheer volume of tasks triggers a freeze response. We end up doing the easiest tasks first to get the hit of dopamine from crossing them off, while the most important work remains untouched.</p>
      <blockquote>"Focus is a matter of deciding what you are not going to do."</blockquote>
      <h2>Radical Simplification</h2>
      <p>The 3-task rule is simple: before you start your day, identify the three things that, if completed, would make the day a success. Everything else is secondary. This constraint forces you to evaluate the weight of each task. If you have ten things to do, you have to ask: which of these actually move the needle?</p>
      <h2>Executing with Intent</h2>
      <p>Once you have your three, you tackle them in order of importance. This prevents the "productive procrastination" of clearing your inbox before starting a difficult design project. By narrowing your focus, you increase the intensity of your work.</p>
    `,
  },
  {
    id: 2,
    title: "Hiring for Culture Fit Is Killing Your Team's Potential",
    excerpt:
      "Culture fit sounds smart until you realise you've built a room full of the same person. The teams that outperform aren't the ones that agree -they're the ones that argue well.",
    category: "Team Management",
    author: "Marcus Volt",
    role: "Full Stack Lead",
    date: "March 22, 2024",
    readTime: "5 min read",
    image: Blog3,
    illustration: null,
    hookStat:
      "Teams with diverse thinking styles are 35% more likely to hit targets.",
    content: `
      <p>Stop looking for people who fit in. Start looking for people who add something new. Culture add over culture fit.</p>
      <h2>The Echo Chamber Effect</h2>
      <p>When we hire for "culture fit," we are often subconsciously looking for people who remind us of ourselves. This leads to organizational stagnation. If everyone has the same background, the same education, and the same way of thinking, you will never see the blind spots in your strategy until it's too late.</p>
      <blockquote>"Diversity is not just a metric; it's a competitive advantage."</blockquote>
      <h2>Embracing Cognitive Friction</h2>
      <p>The most innovative teams are those where ideas are challenged. This requires "culture add"—hiring people who bring a different perspective, a different set of experiences, or a different problem-solving style. This creates friction, which is uncomfortable but necessary for growth.</p>
      <h2>How to Change Your Process</h2>
      <p>Redefine your culture not as a set of personality traits, but as a set of values. Instead of asking "Would I grab a beer with this person?", ask "What part of our culture is currently missing that this person can provide?"</p>
    `,
  },
  {
    id: 3,
    title: "The Hidden Cost of a Bad Leave Policy -And How to Fix It in a Day",
    excerpt:
      "Most companies don't have a leave problem. They have a leave policy problem. Here's what a broken system actually costs you -in time, trust, and talent.",
    category: "HR & Ops",
    author: "Priya Sharma",
    role: "HR Strategist",
    date: "March 20, 2024",
    readTime: "5 min read",
    image: Blog4,
    illustration: null,
    hookStat:
      "1 in 3 employees cite poor leave management as a reason to quit.",
    content: `
      <p>A broken leave policy is a silent killer of morale. If your team is afraid to take time off, you've already lost them.</p>
      <h2>The Fear of Stepping Away</h2>
      <p>Many companies offer "Unlimited PTO" only to find that employees take less time off than they did under a traditional accrual system. Why? Because without clear guidelines, taking leave feels like a sign of weakness or a lack of commitment. This leads to burnout and, eventually, a mass exodus of your best talent.</p>
      <blockquote>"A policy isn't what's written in the handbook; it's how people feel when they use it."</blockquote>
      <h2>The Financial Impact of Burnout</h2>
      <p>High turnover is expensive. Replacing a senior employee can cost up to twice their annual salary in recruitment, onboarding, and lost productivity. A bad leave policy is effectively a hidden tax on your business operations.</p>
      <h2>The 24-Hour Fix</h2>
      <p>You can fix this today by implementing a "Minimum Leave Requirement." Tell your team they are required to take at least 15 days off per year. When people see that leadership values rest, they will feel safe enough to take it themselves.</p>
    `,
  },
  {
    id: 4,
    title: "Stop Motivating Your Team. Start Removing What Demotivates Them.",
    excerpt:
      "Motivation is not a manager's job. Removing friction is. The best leaders don't inspire -they clear the path and get out of the way.",
    category: "Leadership",
    author: "Jordan Lee",
    role: "Experience Lead",
    date: "March 18, 2024",
    readTime: "4 min read",
    image: Blog5,
    illustration: null,
    hookStat:
      "Friction, not lack of motivation, causes 68% of disengagement at work.",
    content: `
      <p>Management is about removing obstacles, not cheerleading from the sidelines.</p>
      <h2>The Illusion of Inspiration</h2>
      <p>Many managers think their primary job is to give powerful speeches and "fire up" the team. This might work for an hour, but it doesn't solve the underlying issues. Most employees start their jobs motivated. They want to do good work. It's the bureaucracy, the useless meetings, and the broken tools that suck the life out of them.</p>
      <blockquote>"Leadership is a service role. You serve the people doing the work."</blockquote>
      <h2>Identifying Friction Points</h2>
      <p>Instead of hiring an inspirational speaker, spend an hour a week asking each team member: "What is the most annoying thing about your job right now?" Is it a slow CI/CD pipeline? Is it a difficult stakeholder? Is it a lack of clarity on a project? That is where your work as a leader begins.</p>
      <h2>Becoming a Path-Clearer</h2>
      <p>Your success as a manager is measured by how invisible you are. If the path is clear, the team will run. Your job is to stay ahead of them, spotting the hurdles and removing them before the team even knows they exist.</p>
    `,
  },
  {
    id: 5,
    title: "Meetings Are Not the Problem. Purposeless Meetings Are.",
    excerpt:
      "The meeting-hating culture has gone too far. Some meetings are irreplaceable -but only when they have a clear owner, a defined outcome, and a hard stop time.",
    category: "Productivity",
    author: "Nina Patel",
    role: "Growth Advisor",
    date: "March 15, 2024",
    readTime: "3 min read",
    image: Blog6,
    illustration: null,
    hookStat:
      "Employees spend 31 hours per month in unproductive meetings on average.",
    content: `
      <p>Don't ban meetings. Ban bad ones. Every meeting should have a cost-benefit analysis before the invite is sent.</p>
      <h2>The Default State of Collaboration</h2>
      <p>In many organizations, the default response to any problem is "let's have a meeting." This is a lazy way to collaborate. It offloads the work of thinking onto a group, usually resulting in a mediocre consensus rather than a sharp decision.</p>
      <blockquote>"A meeting is a luxury. Treat it like one."</blockquote>
      <h2>The Three Ingredients of a Good Meeting</h2>
      <p>Every meeting must have: 1. A clear owner (who is in charge?), 2. A defined outcome (what do we need to decide?), and 3. A hard stop time. If you can't state the outcome in one sentence, you aren't ready to meet.</p>
      <h2>Reclaiming Deep Work</h2>
      <p>By drastically reducing meeting frequency, you give your team back the most valuable asset they have: their attention. Encourage "meeting-free Wednesdays" or dedicated blocks for deep work. You'll find that most things can be solved more efficiently over a well-written document than an hour-long call.</p>
    `,
  },
];

const PostRow = ({ article, onClick, index = 0 }) => {
  const altLayout = index % 2 === 1;

  return (
    <MovingPurpleRing
      className="group scroll-mt-28"
      rounded="rounded-2xl lg:rounded-3xl"
      ringPadding="p-[2px] lg:p-[2.5px]"
      innerRounded="rounded-[calc(1rem-2px)] lg:rounded-[calc(1.5rem-2.5px)]"
      delayIndex={index}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className={`relative overflow-hidden border border-slate-100/90 bg-white p-6 shadow-[0_4px_12px_rgba(15,23,42,0.06),0_16px_40px_-16px_rgba(15,23,42,0.12)] transition-all duration-500 ease-out hover:-translate-y-0.5 md:p-8 lg:p-9 ${
          altLayout
            ? "hover:border-violet-300/50 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_24px_56px_-16px_rgba(124,58,237,0.22),0_12px_32px_-12px_rgba(15,23,42,0.06)]"
            : "hover:border-violet-200/60 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.2),0_28px_64px_-18px_rgba(109,40,217,0.18),0_12px_32px_-12px_rgba(15,23,42,0.06)]"
        }`}
      >
        {/* Purple hover washes */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[min(22rem,55vw)] w-[min(22rem,55vw)] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-500/10 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-52 w-52 rounded-full bg-violet-600/15 blur-3xl opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden
        />

        <div className="relative z-[1] flex flex-col gap-7 md:gap-8">
          {/* Top metadata */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {altLayout ? (
              <span className="w-fit rounded-full border border-violet-200/70 bg-gradient-to-r from-violet-50 to-fuchsia-50/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-violet-800 shadow-sm shadow-violet-200/20 transition-all duration-300 group-hover:border-violet-400/60 group-hover:shadow-md group-hover:shadow-violet-300/25">
                {article.category}
              </span>
            ) : (
              <div className="flex items-center gap-3">
                <div
                  className="h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-600 to-fuchsia-500 transition-transform duration-300 group-hover:scale-y-110"
                  aria-hidden
                />
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-violet-700 transition-colors duration-300 group-hover:text-violet-600">
                  {article.category}
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-5 sm:gap-8">
              <span className="text-[14px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-violet-900/55">
                {article.date}
              </span>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200/80 bg-slate-50 text-sm font-bold text-slate-800 transition-all duration-300 group-hover:border-violet-300/80 group-hover:bg-violet-50 group-hover:text-violet-900"
                  aria-hidden
                >
                  {article.author.charAt(0)}
                </div>
                <div className="min-w-0 text-left">
                  <div className="truncate text-[15px] font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-violet-950">
                    {article.author}
                  </div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:text-violet-700/70">
                    {article.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body -alternate image side on large screens */}
          <div
            className={`flex flex-col items-start gap-8 lg:gap-14 xl:gap-16 ${altLayout ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            <div className="min-w-0 flex-1 text-left">
              <h3
                onClick={() => onClick(article)}
                className="mb-4 cursor-pointer text-[26px] font-extrabold leading-[1.12] tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-violet-950 sm:text-[30px] md:text-[36px] lg:mb-6"
              >
                {article.title}
              </h3>

              <p className="mb-6 line-clamp-3 text-base font-medium leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-600 md:text-lg lg:mb-8">
                {article.excerpt}
              </p>

              <button
                type="button"
                onClick={() => onClick(article)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[15px] font-semibold text-violet-700 transition-all duration-300 hover:gap-3 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-fuchsia-600 group-hover:px-5 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/35"
              >
                Read more <ArrowRight size={17} strokeWidth={2.5} />
              </button>
            </div>

            <div className="w-full shrink-0 lg:w-[min(100%,420px)] xl:w-[min(100%,460px)]">
              <div
                onClick={() => onClick(article)}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/70 transition-all duration-500 group-hover:ring-2 group-hover:ring-violet-400/60 group-hover:shadow-[0_16px_48px_-12px_rgba(109,40,217,0.28)] sm:aspect-video lg:rounded-[22px]"
              >
                {article.illustration ? (
                  article.illustration
                ) : (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-700/30 via-transparent to-fuchsia-500/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </MovingPurpleRing>
  );
};

const ArticleDetail = ({ article, onBack, onOpenArticle }) => {
  const otherArticles = articles.filter((a) => a.id !== article.id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [article]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pb-32 relative"
    >
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto px-6 pt-32 md:pt-40 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-4 bg-[#7e22ce] rounded-full" />
          <span className="text-[#7e22ce] text-[12px] font-black uppercase tracking-[0.2em]">
            {article.category}
          </span>
          <span className="mx-2 text-slate-200">/</span>
          <span className="text-slate-400 text-[13px] font-semibold">
            {article.date}
          </span>
          <span className="mx-2 text-slate-200">/</span>
          <span className="text-slate-400 text-[13px] font-semibold">
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#0A2540] leading-[1.1] tracking-tight mb-8 md:mb-10 lg:mb-12">
          {article.title}
        </h1>

        <div className="flex items-center gap-5 mb-16 py-8 border-y border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] border border-slate-100 flex items-center justify-center font-black text-[#0A2540] text-sm shadow-sm">
            {article.author.charAt(0)}
          </div>
          <div>
            <div className="text-[#0A2540] font-black text-lg tracking-tight leading-none mb-1.5">
              {article.author}
            </div>
            <div className="text-[#425466] text-[10px] uppercase font-bold tracking-[0.2em]">
              {article.role}
            </div>
          </div>
        </div>

        <div className="relative aspect-[21/9] sm:aspect-[16/9] rounded-[32px] sm:rounded-[40px] overflow-hidden mb-12 sm:mb-16 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] bg-[#F6F9FC] md:-mt-8">
          {article.illustration ? (
            article.illustration
          ) : (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <article
          className="prose prose-slate prose-xl max-w-none 
            prose-headings:text-[#0A2540] prose-headings:font-black prose-headings:tracking-tight
            prose-p:text-[#425466] prose-p:leading-relaxed prose-p:font-medium
            prose-blockquote:border-l-4 prose-blockquote:border-[#635BFF] prose-blockquote:bg-[#F6F9FC] prose-blockquote:p-10 prose-blockquote:rounded-2xl prose-blockquote:italic
            prose-strong:text-[#0A2540] prose-strong:font-black
            prose-img:rounded-[24px] prose-img:shadow-xl"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* --- Next Article Section (Horizontally Scrolling) --- */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-6 lg:mb-10">
            <div className="w-1.5 h-6 bg-[#7e22ce] rounded-full" />
            <h3 className="text-2xl md:text-3xl font-black text-[#0A2540] tracking-tight">
              Read Next
            </h3>
          </div>

          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {otherArticles.map((nextArt) => (
              <div
                key={nextArt.id}
                onClick={() => onOpenArticle(nextArt)}
                className="group flex flex-col cursor-pointer p-4 sm:p-5 rounded-[2rem] bg-slate-50/50 hover:bg-slate-50 transition-colors border border-slate-100/50 hover:border-slate-200 shrink-0 w-[80vw] sm:w-[340px] md:w-[380px] snap-center"
              >
                <div className="w-full aspect-video rounded-[20px] overflow-hidden bg-[#F6F9FC] shadow-sm group-hover:shadow-md transition-shadow mb-4 sm:mb-5 md:-mt-4">
                  {nextArt.illustration ? (
                    nextArt.illustration
                  ) : (
                    <img
                      src={nextArt.image}
                      alt={nextArt.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                <div className="flex-1 flex flex-col items-start w-full">
                  <div className="text-[#7e22ce] text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] mb-2 sm:mb-3">
                    {nextArt.category}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0A2540] transition-colors leading-[1.15] tracking-tight mb-5 line-clamp-2">
                    {nextArt.title}
                  </h4>

                  <div className="mt-auto inline-flex items-center gap-2 text-[#7e22ce] font-black text-[12px] uppercase tracking-widest transition-all">
                    Read Article{" "}
                    <ArrowRight
                      size={16}
                      strokeWidth={3}
                      className="group-hover:translate-x-1.5 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Back to Blog Footer --- */}
        <div className="mt-12 mb-16 flex justify-center">
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-full bg-slate-50 border border-slate-200 text-[#0A2540] font-black tracking-widest text-[12px] uppercase hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center gap-3 shadow-sm"
          >
            <ChevronLeft size={16} strokeWidth={3} />
            Back to Blog
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Blog() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const trailConfig = [
    { stiffness: 250, damping: 25 },
    { stiffness: 200, damping: 22 },
    { stiffness: 150, damping: 18 },
    { stiffness: 100, damping: 15 },
    { stiffness: 80, damping: 12 },
  ];
  const s1x = useSpring(mouseX, trailConfig[0]);
  const s1y = useSpring(mouseY, trailConfig[0]);
  const s2x = useSpring(s1x, trailConfig[1]);
  const s2y = useSpring(s1y, trailConfig[1]);
  const s3x = useSpring(s2x, trailConfig[2]);
  const s3y = useSpring(s2y, trailConfig[2]);
  const s4x = useSpring(s3x, trailConfig[3]);
  const s4y = useSpring(s3y, trailConfig[3]);
  const s5x = useSpring(s4x, trailConfig[4]);
  const s5y = useSpring(s4y, trailConfig[4]);
  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  const velocity = useTransform([velX, velY], ([vx, vy]) =>
    Math.sqrt(vx * vx + vy * vy),
  );
  const movementOpacity = useSpring(
    useTransform(velocity, [0, 50, 300], [0, 0, 1]),
    { stiffness: 60, damping: 20 },
  );
  const segments = [
    { x: s1x, y: s1y, size: 160, opacity: 0.8, blur: 18 },
    { x: s2x, y: s2y, size: 130, opacity: 0.7, blur: 22 },
    { x: s3x, y: s3y, size: 100, opacity: 0.6, blur: 28 },
    { x: s4x, y: s4y, size: 80, opacity: 0.5, blur: 34 },
    { x: s5x, y: s5y, size: 60, opacity: 0.35, blur: 40 },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
            window.scrollTo({ top: y, behavior: "instant" });
          });
        });
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []); // runs once, uses ref so never stale

  const openArticle = (article) => {
    savedScrollY.current = window.scrollY; // save position before opening
    window.history.pushState({ article: article.id }, "", "#article");
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    const y = savedScrollY.current;
    // Set state to null first (ref also updates synchronously via render)
    setSelectedArticle(null);
    // Clean up the hash from the URL without triggering popstate double-close
    if (window.location.hash === "#article") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    // Restore scroll position after DOM updates
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "instant" });
      });
    });
  };

  const categories = [
    "All",
    "Team Management",
    "Productivity",
    "Product Updates",
    "HR & Ops",
    "Leadership",
  ];

  const handleSearch = () => {
    setAppliedSearch(searchQuery);
  };

  const handleNewsletterMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
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
      const matchesCategory =
        activeCategory === "All" || a.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (appliedSearch === "") return 0;
      const aTitleMatch = a.title
        .toLowerCase()
        .includes(appliedSearch.toLowerCase());
      const bTitleMatch = b.title
        .toLowerCase()
        .includes(appliedSearch.toLowerCase());
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });

  if (selectedArticle) {
    return (
      <AnimatePresence mode="wait">
        <ArticleDetail
          article={selectedArticle}
          onBack={closeArticle}
          onOpenArticle={openArticle}
        />
      </AnimatePresence>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog & Insights | Karyaup</title>

        <meta
          name="description"
          content="Explore the Karyaup blog for insights on productivity, project management, team collaboration, and workflow optimization. Learn how to work smarter."
        />

        <meta
          name="keywords"
          content="project management blog, productivity tips, team collaboration insights, workflow optimization, SaaS blog, Karyaup blog"
        />

        <meta name="author" content="Karyaup" />

        {/* Preload critical images for faster LCP and rendering */}
        <link rel="preload" as="image" href={BlogHero} />
        <link rel="preload" as="image" href={Blog2} />
        <link rel="preload" as="image" href={Blog3} />
        <link rel="preload" as="image" href={Blog4} />
        <link rel="preload" as="image" href={Blog5} />
        <link rel="preload" as="image" href={Blog6} />
        <link rel="preload" as="image" href={article1} />

        <meta property="og:title" content="Blog & Insights | Karyaup" />
        <meta
          property="og:description"
          content="Read articles on productivity, team management, and smarter workflows."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/resources/blog" />
        <meta property="og:site_name" content="Karyaup" />

        <link rel="canonical" href="https://karyaup.com/resources/blog" />
      </Helmet>
      <div className="min-h-screen max-w-full overflow-x-hidden bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900 font-sans selection:bg-[#7e22ce] selection:text-white">
        <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
          <div className="absolute top-0 right-0 -z-10 h-[560px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-purple-100/60 blur-[120px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/3 rounded-full bg-fuchsia-100/50 blur-[110px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="w-full max-w-4xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  BLOG -INSIGHTS & IDEAS
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08,
                  }}
                  className="mt-4 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                >
                  Not Another Productivity <br />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Blog.
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.18,
                  }}
                  className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:mx-0"
                >
                  {[
                    "Real talk on how modern teams work, lead, and grow.",
                    "Written by people who've actually felt the pressure of a missed deadline.",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-left">
                      <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.18,
                }}
                className="relative mt-8 lg:-mt-6 w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] mx-auto lg:mx-0 lg:ml-auto"
              >
                <img
                  src={BlogHero}
                  alt="KaryaUp blog hero visual"
                  className="relative w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Articles feed -card grid */}
        <section className="relative bg-gradient-to-b from-slate-50/50 via-white to-violet-50/25 pt-10 pb-14 sm:pb-18 lg:pb-16 min-h-[600px]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative isolate flex flex-col gap-5 pb-16 pt-2 sm:gap-6 md:gap-7 md:pb-20">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredArticles
                  .filter(
                    (a) =>
                      activeCategory !== "All" ||
                      appliedSearch ||
                      a.id !== "featured",
                  )
                  .map((article, index) => (
                    <PostRow
                      key={article.id}
                      article={article}
                      onClick={openArticle}
                      index={index}
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
                <h3 className="text-2xl font-black text-[#0A2540] mb-2">
                  No matches found
                </h3>
                <p className="text-slate-400 font-medium">
                  Try adjusting your search or category filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setAppliedSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-8 text-[#7e22ce] font-black uppercase tracking-widest text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Premium Dark Newsletter Section - FeatureCTA Style */}
        <section className="pt-0 pb-8 sm:pt-2 sm:pb-10 lg:pt-0 lg:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group">
          <div
            onMouseMove={handleNewsletterMouseMove}
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
            className={`relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-black flex flex-col lg:flex-row items-stretch border border-white/5 p-5 sm:p-6 lg:p-10 ${isCtaHovered ? "cursor-none" : ""}`}
          >
            {segments.map((seg, i) => (
              <TrailSegment
                key={i}
                seg={seg}
                index={i}
                isHovered={isCtaHovered}
                movementOpacity={movementOpacity}
              />
            ))}

            <motion.div
              className="absolute w-80 h-80 pointer-events-none z-[90] rounded-full mix-blend-screen"
              style={{
                left: s1x,
                top: s1y,
                x: "-50%",
                y: "-50%",
                opacity: isCtaHovered ? 0.45 : 0,
                scale: isCtaHovered ? 1 : 0,
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />

            {/* Ambient Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(126,34,206,0.25),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(99,91,255,0.15),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.1),transparent_40%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-24 w-full">
              {/* Left Content with Logo */}
              <div className="flex-1 flex flex-col justify-center z-10">
                <div className="mb-2 flex items-center gap-3">
                  {/* KaryaUp Logo (same as FeatureCTA) */}
                  <div className="relative h-11 flex items-center">
                    <img
                      src={logo}
                      alt="KaryaUp"
                      width="160"
                      height="44"
                      loading="lazy"
                      className="h-full w-auto"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ clipPath: "inset(0 75% 0 0)" }}
                    >
                      <img
                        src={logo}
                        alt=""
                        width="160"
                        height="44"
                        loading="lazy"
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-black uppercase tracking-[0.18em] text-purple-200/95 mb-4 w-fit">
                  Weekly ideas for better team work
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-black text-white leading-[1.1] mb-2 tracking-tight drop-shadow-lg">
                  Get the Tuesday Drop
                </h2>
                <p className="mt-4 text-[13px] sm:text-sm font-medium text-slate-400 max-w-xs">
                  Get one sharp, useful idea your team can act on before the
                  week is out. No spam, always free.
                </p>
                <p className="mt-4 text-[13px] sm:text-sm font-medium text-slate-500 max-w-sm leading-relaxed">
                  Built for teams that want clearer communication, smarter workflows, and less noise in the week ahead.
                </p>
              </div>
              {/* Right Form */}
              <div className="w-full max-w-md lg:max-w-none lg:w-[460px] flex-1 mx-auto">
                <motion.form
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-4 sm:gap-5 p-1.5 sm:p-2 rounded-[2rem] sm:rounded-[2.5rem]"
                >
                  <div className="relative group/input">
                    <input
                      type="email"
                      placeholder="Your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 sm:px-8 py-3.5 sm:py-5 rounded-[1.15rem] sm:rounded-[1.5rem] bg-white/5 border border-white/10 outline-none focus:border-[#635BFF]/50 focus:ring-4 focus:ring-[#635BFF]/10 transition-all font-bold text-base sm:text-lg text-white shadow-inner backdrop-blur-sm placeholder:text-slate-500"
                    />
                    <div className="absolute inset-0 rounded-[1.15rem] sm:rounded-[1.5rem] bg-gradient-to-r from-[#635BFF]/20 to-purple-500/20 opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none -z-10 blur-xl" />
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(99,91,255,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black py-3.5 sm:py-5 rounded-[1.15rem] sm:rounded-[1.5rem] font-black text-[13px] sm:text-base uppercase tracking-[0.12em] sm:tracking-widest hover:bg-slate-50 transition-all shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get the Tuesday Drop{" "}
                      <ArrowRight size={18} strokeWidth={3} />
                    </span>
                  </motion.button>

                  <div className="flex flex-col items-center gap-2.5 sm:gap-3 mt-1 sm:mt-2 text-center">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                      No spam. Unsubscribe in one click. Always free.
                    </p>

                    <AnimatePresence>
                      {subscribeStatus && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`text-[12px] font-black uppercase tracking-widest ${
                            subscribeStatus === "success"
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {message}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
