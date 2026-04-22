import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  fullname: z.string().min(2, "Full name is required"),
  workmail: z.string().email("Enter a valid work email"),
  company_name: z.string().min(2, "Company name is required"),
  company_type: z.string().min(1, "Select company type"),
  company_type_other: z.string().optional(),
  team_size: z.string().min(1, "Select team size"),
  challenge: z.string().min(5, "Please describe your challenge (min 5 chars)"),
  stack: z.array(z.string()).min(1, "Select at least one tool"),
  reason: z.string().min(10, "Please provide a reason (min 10 chars)"),
  onboarding: z.string().min(1, "This field is required"),
  role: z.string().min(1, "Select your role"),
}).refine((data) => {
  if (data.company_type === "Other") {
    return data.company_type_other && data.company_type_other.length >= 2;
  }
  return true;
}, {
  message: "Please specify your company type",
  path: ["company_type_other"],
});

const TOOLS = [
  "Notion",
  "Slack",
  "Google Sheets",
  "CRM (Zoho, HubSpot, etc.)",
  "Project tools",
  "Other"
];

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // 'success' | 'error' | ''
  const [selectedTools, setSelectedTools] = useState([]);
  const [companyType, setCompanyType] = useState("");

  const toggleTool = (tool) => {
    setSelectedTools(prev =>
      prev.includes(tool)
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const fd = new FormData(e.target);
    const selectedCompanyType = fd.get("company_type");
    const companyTypeOther = fd.get("company_type_other");
    
    const data = {
      fullname: fd.get("fullname"),
      workmail: fd.get("workmail"),
      company_name: fd.get("company_name"),
      company_type: selectedCompanyType === "Other" ? companyTypeOther : selectedCompanyType,
      team_size: fd.get("team_size"),
      challenge: fd.get("challenge"),
      stack: selectedTools,
      reason: fd.get("reason"),
      onboarding: fd.get("onboarding"),
      role: fd.get("role"),
    };

    console.log("Submitting Data:", data);

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      console.warn("Validation Errors:", parsed.error.flatten().fieldErrors);
      const fieldErrors = {};
      parsed.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus("");

    try {
     const templateParams = {
  fullname: data.fullname,
  workmail: data.workmail,
  company_name: data.company_name,
  company_type: data.company_type,
  team_size: data.team_size,

  // ✅ FIXED NAMES
  challenge: data.challenge,
  stack: data.stack.join(", "),

  reason: data.reason,
  onboarding: data.onboarding,
  role: data.role,
};

      console.log("🚀 SENDING TO EMAILJS:", templateParams);

      const serviceID = import.meta.env.VITE_EMAILJS_APPLICATION_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_APPLICATION_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_APPLICATION_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setStatus("success");
      e.target.reset();
      setSelectedTools([]);
    } catch (err) {
      console.error("EMAILJS ERROR:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputCls =
    "w-full rounded-[0.95rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#7e22ce] focus:ring-4 focus:ring-purple-100 placeholder:text-slate-400";
  
  const labelCls =
    "mb-2 block text-sm font-bold text-slate-900 sm:text-[0.95rem]";

  const sectionHeadCls = 
    "mt-10 mb-6 flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-[#7e22ce] border-b border-slate-200 pb-2 first:mt-0";

  const errorCls = "mt-1.5 text-xs font-semibold text-rose-500";

  return (
    <div className="relative">
      <form
        onSubmit={onSubmit}
        className="w-full mx-auto rounded-[1.6rem] border border-white/80 bg-[#f7f7f9] p-6 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.18)] sm:p-12"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {/* ESSENTIALS */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Full Name</label>
            <input name="fullname" placeholder="Enter your full name" className={inputCls} />
            {errors.fullname && <p className={errorCls}>{errors.fullname}</p>}
          </div>

          <div>
            <label className={labelCls}>Work Email</label>
            <input name="workmail" type="email" placeholder="name@company.com" className={inputCls} />
            {errors.workmail && <p className={errorCls}>{errors.workmail}</p>}
          </div>

          <div>
            <label className={labelCls}>Company Name</label>
            <input name="company_name" placeholder="Enter company name" className={inputCls} />
            {errors.company_name && <p className={errorCls}>{errors.company_name}</p>}
          </div>

          {/* COMPANY PROFILE */}
          <div>
            <label className={labelCls}>Company Type</label>
            <select 
              name="company_type" 
              className={inputCls}
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Marketing Agency">Marketing Agency</option>
              <option value="Startup">Startup</option>
              <option value="Service Business">Service Business</option>
              <option value="Product Company">Product Company</option>
              <option value="Other">Other</option>
            </select>
            {errors.company_type && <p className={errorCls}>{errors.company_type}</p>}
          </div>

          {/* Custom Company Type - Shows when Other is selected */}
          {companyType === "Other" && (
            <div>
              <label className={labelCls}>Specify Company Type</label>
              <input 
                name="company_type_other" 
                placeholder="Enter your company type" 
                className={inputCls} 
              />
              {errors.company_type_other && <p className={errorCls}>{errors.company_type_other}</p>}
            </div>
          )}

          <div>
            <label className={labelCls}>Team Size</label>
            <select name="team_size" className={inputCls}>
              <option value="">Choose Scale</option>
              <option value="1–5">1–5</option>
              <option value="6–15">6–15</option>
              <option value="16–50">16–50</option>
              <option value="50+">50+</option>
            </select>
            {errors.team_size && <p className={errorCls}>{errors.team_size}</p>}
          </div>

          {/* PAIN POINT */}
          <div className="sm:col-span-2">
            <label className={labelCls}>What is your biggest challenge right now?</label>
            <textarea 
              name="challenge" 
              rows={3} 
              placeholder="What bottlenecks are holding your team back?" 
              className={`${inputCls} resize-none`}
            />
            {errors.challenge && <p className={errorCls}>{errors.challenge}</p>}
          </div>

          {/* CURRENT STACK */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Which tools are you currently using?</label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {TOOLS.map((tool) => (
                <button
                  key={tool}
                  type="button"
                  onClick={() => toggleTool(tool)}
                  className={`flex items-center justify-center rounded-xl border px-3 py-3 text-[11px] font-bold transition-all
                  ${selectedTools.includes(tool)
                    ? "border-[#7e22ce] bg-purple-50 text-[#7e22ce] shadow-inner ring-2 ring-purple-100"
                    : "border-slate-200 bg-white text-slate-900 hover:border-purple-200 shadow-sm"
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
            {errors.stack && <p className={errorCls}>{errors.stack}</p>}
          </div>

          {/* INTENT QUALIFIER */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Why do you want early access to KaryaUp?</label>
            <textarea 
              name="reason" 
              rows={3} 
              placeholder="How will KaryaUp help your business?" 
              className={`${inputCls} resize-none`}
            />
            {errors.reason && <p className={errorCls}>{errors.reason}</p>}
          </div>

          {/* COMMITMENT FILTER */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Are you open to a 30-min onboarding call?</label>
            <div className="flex gap-4">
              {["Yes", "No"].map((opt) => (
                <label key={opt} className="relative flex-1 cursor-pointer">
                  <input type="radio" name="onboarding" value={opt} className="peer sr-only" />
                  <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50 shadow-sm peer-checked:border-[#7e22ce] peer-checked:bg-purple-50 peer-checked:text-[#7e22ce] peer-checked:ring-2 peer-checked:ring-purple-100">
                    {opt}
                  </div>
                </label>
              ))}
            </div>
            {errors.onboarding && <p className={errorCls}>{errors.onboarding}</p>}
          </div>

          {/* DECISION POWER */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Your role in company</label>
            <select name="role" className={inputCls}>
              <option value="">Select Role</option>
              <option value="Founder / Owner">Founder / Owner</option>
              <option value="Manager">Manager</option>
              <option value="Team Member">Team Member</option>
            </select>
            {errors.role && <p className={errorCls}>{errors.role}</p>}
          </div>
        </div>

        {/* SUBMIT */}
        <div className="mt-14 flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative z-10 flex h-[3.5em] w-full max-w-[18em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 active:scale-95 shadow-xl shadow-slate-200
            ${isSubmitting ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
          >
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
            <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
            <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
              {isSubmitting ? "Processing..." : (
                <>
                  Request Founder Access <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
          </button>

          {/* STATUS - Text only below button */}
          <div className="mt-4 text-center text-sm font-semibold">
            {status === "success" && (
              <p className="text-emerald-600">
                ✅ Application Received! We'll reach out soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-rose-600">
                ❌ Submission failed. Check EmailJS config.
              </p>
            )}
          </div>
        </div>

        {/* FOOTER */}
       
      </form>
    </div>
  );
}
