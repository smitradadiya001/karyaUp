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
  website: z.string().optional(),
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
  "ClickUp",
  "Jira",
  "None",
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
      website: fd.get("website"),
      stack: selectedTools,
      reason: fd.get("reason"),
      onboarding: fd.get("onboarding"),
      role: fd.get("role"),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
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
        website: data.website || "Not provided",
        stack: data.stack.join(", "),
        reason: data.reason,
        onboarding: data.onboarding,
        role: data.role,
      };

      const serviceID = import.meta.env.VITE_EMAILJS_APPLICATION_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_APPLICATION_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_APPLICATION_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setStatus("success");
      e.target.reset();
      setSelectedTools([]);
      setCompanyType("");
    } catch (err) {
      console.error("EMAILJS ERROR:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputCls =
    "w-full rounded-[2px] border-2 border-[#e5e3df] bg-[#fafaf9] px-[16px] py-[12px] text-[15px] text-[#192e44] outline-none transition-all duration-300 focus:border-[#7e22ce] focus:bg-white focus:shadow-[0_0_0_4px_rgba(126,34,206,0.08),0_4px_16px_rgba(25,46,68,0.06)] placeholder:text-[#9ca3af] font-sans";
  
  const labelCls =
    "mb-[8px] block text-[12px] font-bold uppercase tracking-[0.5px] text-[#192e44] font-sans";

  const errorCls = "mt-1.5 text-xs font-semibold text-[#7e22ce]";

  return (
    <div className="mx-auto max-w-[720px] w-full overflow-hidden rounded-[2px] border-t-[4px] border-[#7e22ce] bg-white shadow-[0_20px_80px_rgba(25,46,68,0.08),0_2px_8px_rgba(25,46,68,0.04)]">
      {/* Form Header */}
      <div className="border-b border-[#e5e3df] bg-gradient-to-b from-[#fafaf9] to-white px-6 py-6 sm:px-12 text-center">
        <div className="mb-3 flex flex-col items-center gap-2">
          <div className="text-[12px] font-normal uppercase tracking-[2px] text-[#7e22ce] font-serif">
            KaryaUp · Exclusive Access
          </div>
        </div>
        <h1 className="mb-1 text-[26px] sm:text-[30px] font-normal leading-tight tracking-[-0.3px] text-[#192e44] font-serif">
          Request Early Access
        </h1>
        <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-[#5a6672] font-sans">
          Apply for one of the strictly limited 100 spots in our early adopter community.
        </p>
      </div>

      <form onSubmit={onSubmit} className="px-6 py-8 sm:px-12">
        <div className="space-y-5">
          {/* SECTION: Essentials */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelCls}>Your Full Name <span className="text-[#7e22ce]">*</span></label>
              <input name="fullname" required placeholder="Your Full Name" className={inputCls} />
              {errors.fullname && <p className={errorCls}>{errors.fullname}</p>}
            </div>

            <div>
              <label className={labelCls}>Your Work Mail <span className="text-[#7e22ce]">*</span></label>
              <input name="workmail" type="email" required placeholder="Your Work Mail" className={inputCls} />
              {errors.workmail && <p className={errorCls}>{errors.workmail}</p>}
            </div>

            <div>
              <label className={labelCls}>Company Name <span className="text-[#7e22ce]">*</span></label>
              <input name="company_name" required placeholder="Enter company name" className={inputCls} />
              {errors.company_name && <p className={errorCls}>{errors.company_name}</p>}
            </div>

            <div>
              <label className={labelCls}>Company Type <span className="text-[#7e22ce]">*</span></label>
              <div className="relative">
                <select 
                  name="company_type" 
                  required
                  className={`${inputCls} appearance-none pr-12`}
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23192e44' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 18px center'
                  }}
                >
                  <option value="">Select a category</option>
                  <option value="Marketing Agency">Marketing Agency</option>
                  <option value="Startup">Startup</option>
                  <option value="IT">IT</option>
                  <option value="Service Business">Service Business</option>
                  <option value="Product Company">Product Company</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {errors.company_type && <p className={errorCls}>{errors.company_type}</p>}
            </div>

            {companyType === "Other" && (
              <div>
                <label className={labelCls}>Specify Type <span className="text-[#7e22ce]">*</span></label>
                <input name="company_type_other" required placeholder="e.g. Legal Firm" className={inputCls} />
                {errors.company_type_other && <p className={errorCls}>{errors.company_type_other}</p>}
              </div>
            )}

            <div>
              <label className={labelCls}>Team Size <span className="text-[#7e22ce]">*</span></label>
              <div className="relative">
                <select 
                  name="team_size" 
                  required 
                  className={`${inputCls} appearance-none pr-12`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23192e44' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 18px center'
                  }}
                >
                  <option value="">Choose scale</option>
                  <option value="1–5">1–5</option>
                  <option value="6–15">6–15</option>
                  <option value="16–50">16–50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              {errors.team_size && <p className={errorCls}>{errors.team_size}</p>}
            </div>
          </div>

          {/* SECTION: Context */}
          <div className="space-y-5">
            <div className="h-px bg-gradient-to-r from-transparent via-[#e5e3df] to-transparent" />
            
            <div>
              <label className={labelCls}>Business Website <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input 
                name="website" 
                type="url"
                placeholder="https://yourcompany.com" 
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls}>Which tools are you currently using? <span className="text-[#7e22ce]">*</span></label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {TOOLS.map((tool) => (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => toggleTool(tool)}
                    className={`relative flex items-center justify-center overflow-hidden rounded-[2px] border-2 px-4 py-2 text-center text-[12px] font-medium transition-all duration-300 active:scale-[0.98]
                    ${selectedTools.includes(tool)
                      ? "border-[#7e22ce] bg-gray-100 text-[#192e44] shadow-[0_6px_20px_rgba(126,34,206,0.15)]"
                      : "border-[#e5e3df] bg-[#fafaf9] text-[#192e44] hover:border-[#7e22ce] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(126,34,206,0.08)]"
                    }`}
                  >
                    <span className="relative z-10">{tool}</span>
                  </button>
                ))}
              </div>
              {errors.stack && <p className={errorCls}>{errors.stack}</p>}
            </div>

            <div>
              <label className={labelCls}>Why do you want early access? <span className="text-[#7e22ce]">*</span></label>
              <textarea 
                name="reason" 
                required
                rows={3} 
                placeholder="How will KaryaUp help your business scale?" 
                className={`${inputCls} min-h-[90px] resize-y leading-relaxed`}
              />
              {errors.reason && <p className={errorCls}>{errors.reason}</p>}
            </div>

            <div>
              <label className={labelCls}>Are you open to a 30-min onboarding call? <span className="text-[#7e22ce]">*</span></label>
              <div className="grid grid-cols-2 gap-3">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="relative cursor-pointer">
                    <input type="radio" name="onboarding" value={opt} required className="peer sr-only" />
                    <div className="flex items-center justify-center rounded-[2px] border-2 border-[#e5e3df] bg-[#fafaf9] py-2 text-[13px] font-medium text-[#192e44] transition-all duration-300 hover:border-[#7e22ce] hover:-translate-y-0.5 peer-checked:border-[#7e22ce] peer-checked:bg-gray-100 peer-checked:text-[#192e44] peer-checked:shadow-[0_6px_20px_rgba(126,34,206,0.15)]">
                      {opt}
                    </div>
                  </label>
                ))}
              </div>
              {errors.onboarding && <p className={errorCls}>{errors.onboarding}</p>}
            </div>

            <div>
              <label className={labelCls}>Your role in company <span className="text-[#7e22ce]">*</span></label>
              <div className="relative">
                <select 
                  name="role" 
                  required 
                  className={`${inputCls} appearance-none pr-12`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23192e44' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 18px center'
                  }}
                >
                  <option value="">Select your role</option>
                  <option value="Founder / Owner">Founder / Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Team Member">Team Member</option>
                </select>
              </div>
              {errors.role && <p className={errorCls}>{errors.role}</p>}
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        {/* SUBMIT & FEEDBACK */}
        <div className="mt-10 flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex h-[52px] w-full max-w-[18em] items-center justify-center overflow-hidden rounded-[2px] bg-transparent font-bold text-[16px] transition-all duration-300 active:scale-95  disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
            
            {/* Hover white fill effect */}
            <div className="absolute inset-0 z-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
            
            <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${isSubmitting ? 'text-black' : 'text-white group-hover:text-slate-900'}`}>
              {isSubmitting ? "Processing..." : (
                <>
                  Apply for Early Access <ArrowRight size={20} className="transition-transform group-hover:translate-x-1.5" />
                </>
              )}
            </span>
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 max-w-sm text-center text-[13px] font-medium leading-relaxed text-[#166534]"
              >
                ✓ Your application has been received! We'll contact you within 24 hours.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-center text-[13px] font-medium text-rose-600"
              >
                Submission failed. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
