import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MessageSquareText, MoveRight, Send } from "lucide-react";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactUs() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailJsConfig = {
    serviceId:
      import.meta.env.VITE_CONTACT_EMAILJS_SERVICE_ID ||
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId:
      import.meta.env.VITE_CONTACT_EMAILJS_TEMPLATE_ID ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey:
      import.meta.env.VITE_CONTACT_EMAILJS_PUBLIC_KEY ||
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    toEmail:
      import.meta.env.VITE_CONTACT_TO_EMAIL ||
      import.meta.env.VITE_DEMO_TO_EMAIL ||
      "demo@karyaup.com",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus({
        type: "error",
        message: "Contact EmailJS configuration is missing in the .env file.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          ...formData,
          from_name: `${formData.first_name} ${formData.last_name}`.trim(),
          full_name: `${formData.first_name} ${formData.last_name}`.trim(),
          reply_to: formData.email,
          to_email: emailJsConfig.toEmail,
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      setFormData(initialForm);
      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.text || error?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#fafbff_0%,#f3f5fb_100%)] pt-32 pb-8 sm:pb-10 lg:pb-12 text-slate-900">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.88fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-4"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-purple-700 mx-auto lg:mx-0">
            Contact Us
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]">
            Let&apos;s talk <br />about your
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              next move
            </motion.span>
          </h1>
          <p className="mt-3 max-w-lg text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-slate-500">
            Fill in the 5 fields below and we&apos;ll get your message directly through EmailJS.
            This form matches your email template with name, email, subject, and message.
          </p>

          <div className="mt-6 space-y-3 w-full max-w-md">
            <InfoCard
              icon={<Mail className="h-5 w-5 text-purple-700" />}
              title="Template-ready fields"
              text="First name, last name, email, subject, and message map cleanly to your EmailJS template."
            />
            <InfoCard
              icon={<MessageSquareText className="h-5 w-5 text-purple-700" />}
              title="Fast responses"
              text="Use the subject field to route sales, support, partnership, or general contact requests."
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          className="w-full max-w-[28rem] justify-self-center rounded-[1.6rem] border border-white/80 bg-[#f7f7f9] p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.18)] sm:p-5"
        >
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid gap-3 sm:grid-cols-2">
              <FormField
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <FormField
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>

            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <FormField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <TextAreaField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative z-10 flex h-[3.35em] w-full items-center justify-center overflow-hidden rounded-[30em] text-[15px] font-bold transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              style={{
                boxShadow: "6px 6px 12px #d8dbe6, -6px -6px 12px #ffffff",
              }}
            >
              <div className="absolute inset-0 -z-20 bg-gradient-animated" />
              <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
                <Send className="h-4.5 w-4.5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>

            {status.message && status.type === "success" && (
              <div className="flex items-center gap-2 pt-1 text-base font-bold text-emerald-600">
                <MoveRight className="h-5 w-5" />
                <span>{status.message}</span>
              </div>
            )}

            {status.message && status.type === "error" && (
              <div className="pt-1 text-sm font-semibold text-rose-600">{status.message}</div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-3.5 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-100">
        {icon}
      </div>
      <div>
        <h2 className="text-[0.95rem] font-black text-slate-900">{title}</h2>
        <p className="mt-1 text-[13px] font-medium leading-5 text-slate-500">{text}</p>
      </div>
    </div>
  );
}

function FormField({ label, name, type = "text", value, onChange, required = false }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-bold text-slate-600 sm:text-[0.95rem]">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value ?? ""}
        onChange={onChange}
        required={required}
        className="w-full rounded-[0.95rem] border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition focus:border-[#7e22ce] focus:ring-4 focus:ring-purple-100"
      />
    </div>
  );
}

function TextAreaField({ label, name, value, onChange, required = false }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-bold text-slate-600 sm:text-[0.95rem]">
        {label}
        {required ? " *" : ""}
      </label>
      <textarea
        id={name}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        required={required}
        rows={5}
        className="w-full resize-none rounded-[0.95rem] border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition focus:border-[#7e22ce] focus:ring-4 focus:ring-purple-100"
      />
    </div>
  );
}
