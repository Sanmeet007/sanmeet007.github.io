"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT_LINKS, CONTACT_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    return "";
  };

  const validateSubject = (subject: string) => {
    if (subject.trim().length > 0 && subject.trim().length < 3) {
      return "Subject must be at least 3 characters";
    }
    return "";
  };

  const handleBlur = (field: "name" | "email" | "subject" | "message") => {
    setTouched({ ...touched, [field]: true });
    
    let error = "";
    
    if (field === "name") error = validateName(formData.name);
    else if (field === "email") error = validateEmail(formData.email);
    else if (field === "message") error = validateMessage(formData.message);
    else if (field === "subject") error = validateSubject(formData.subject);

    if (formData[field].trim()) {
      setErrors({ ...errors, [field]: error });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage("Please fix the errors above");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(CONTACT_CONFIG.BASIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
        setTouched({ name: false, email: false, subject: false, message: false });
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage("Failed to send. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error sending message. Please try emailing directly.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section
        data-section="1"
        className="min-h-[60vh] flex items-center bg-transparent pt-24 pb-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionHeading label="reach out" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-text-heading tracking-[-0.02em] leading-[1.1]">
              Ready to collaborate?
            </h1>
            <h2 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-text-ghost tracking-[-0.02em] leading-[1.1]">
              I&apos;d love to hear from you.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="mt-10 max-w-135"
          >
            <p className="font-sans text-base leading-[1.9] text-text-body">
              currently available and actively exploring what&apos;s next.
              full-time roles, meaningful projects, and the right
              collaborations.
            </p>
            <p className="font-sans text-base leading-[1.9] text-text-body mt-3">
              if you&apos;re building something worth caring about, let&apos;s
              talk. i respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links + Form Section */}
      <section data-section="2" className="section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left - Contact Links + Schedule */}
            <div className="flex flex-col">
              <ScrollAnimation>
                {CONTACT_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.label === "email" ? undefined : "_blank"}
                    rel={link.label === "email" ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4 py-5 border-b border-border-rest"
                  >
                    <div className="border border-border-strong rounded-lg p-2.5 flex items-center justify-center h-10 w-10 shrink-0 group-hover:border-border-emphasis group-hover:bg-surface-low transition-all duration-180">
                      <link.icon
                        size={16}
                        strokeWidth={1.5}
                        className="text-text-body"
                      />
                    </div>
                    <span className="font-mono text-xs tracking-[0.2em] text-text-muted uppercase">
                      {link.label}
                    </span>
                    <span className="font-sans font-normal text-sm text-text-strong group-hover:text-text-heading group-hover:translate-x-2 transition-all duration-180 ml-auto">
                      {link.value}
                    </span>
                  </Link>
                ))}
              </ScrollAnimation>

              {/* Schedule a meeting — fills remaining height */}
              <ScrollAnimation delay={1} className="flex-1 flex flex-col mt-5">
                <div className="border border-border-rest rounded-xl p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="border border-border-strong rounded-lg p-2 flex items-center justify-center h-9 w-9 shrink-0">
                      <Calendar
                        size={15}
                        strokeWidth={1.5}
                        className="text-text-body"
                      />
                    </div>
                    <h3 className="font-sans font-semibold text-[16px] text-text-strong tracking-[-0.01em]">
                      Schedule a meeting
                    </h3>
                  </div>

                  <p className="font-sans text-[13px] text-text-muted leading-[1.8] mb-6">
                    if a message doesn&apos;t cut it, let&apos;s put something
                    on the calendar. a focused conversation beats a hundred
                    back-and-forths.
                  </p>

                  <div className="mt-auto pt-4">
                    <a
                      href={CONTACT_CONFIG.SCHEDULING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bordered-button group inline-flex"
                    >
                      <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                        <Calendar size={14} strokeWidth={1.5} />
                        find a time
                      </span>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right - Form in glass container */}
            <ScrollAnimation delay={1}>
              <div className="glass-card overflow-hidden">
                {/* Header */}
                <div className="px-6 pt-6 pb-5 border-b border-border-low">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase mb-2">
                    write
                  </p>
                  <h3 className="font-sans font-semibold text-xl text-text-heading">
                    Send a message
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="px-6 pt-6 space-y-5">
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase block mb-2">
                        name
                      </label>
                      <input
                        type="text"
                        placeholder="your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        onBlur={() => handleBlur("name")}
                        className={`form-input ${errors.name && touched.name ? "border-border-strong/60 bg-surface-mid/40" : ""}`}
                      />
                      {errors.name && touched.name && (
                        <p className="text-[12px] text-text-strong mt-1.5 opacity-70">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase block mb-2">
                        email
                      </label>
                      <input
                        type="email"
                        placeholder="your email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        onBlur={() => handleBlur("email")}
                        className={`form-input ${errors.email && touched.email ? "border-border-strong/60 bg-surface-mid/40" : ""}`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-[12px] text-text-strong mt-1.5 opacity-70">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase block mb-2">
                        subject
                      </label>
                      <input
                        type="text"
                        placeholder="what's this about"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: "" });
                        }}
                        onBlur={() => handleBlur("subject")}
                        className={`form-input ${errors.subject && touched.subject ? "border-border-strong/60 bg-surface-mid/40" : ""}`}
                        autoComplete="off"
                      />
                      {errors.subject && touched.subject && (
                        <p className="text-[12px] text-text-strong mt-1.5 opacity-70">{errors.subject}</p>
                      )}
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase block mb-2">
                        message
                      </label>
                      <textarea
                        placeholder="what's on your mind"
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        onBlur={() => handleBlur("message")}
                        className={`form-input min-h-20 resize-none ${errors.message && touched.message ? "border-border-strong/60 bg-surface-mid/40" : ""}`}
                      />
                      {errors.message && touched.message && (
                        <p className="text-[12px] text-text-strong mt-1.5 opacity-70">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-5 space-y-3">
                    {submitMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`px-4 py-3 rounded-lg text-sm font-sans text-center ${
                          submitMessage.includes("sent")
                            ? "bg-surface-mid text-text-body border border-border-subtle"
                            : "bg-surface-low text-text-muted border border-border-strong/40"
                        }`}
                      >
                        {submitMessage}
                      </motion.div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting || Object.values(errors).some(e => e !== "")}
                      className="w-full flex items-center justify-center gap-2 bg-transparent border border-border-strong rounded-lg py-3 font-sans text-sm text-text-strong hover:border-border-active hover:bg-surface-low hover:text-text-heading disabled:opacity-50 disabled:hover:border-border-strong disabled:hover:bg-transparent transition-all duration-200 outline-none focus:outline-none"
                    >
                      <PiPaperPlaneTilt size={16} />
                      {isSubmitting ? "sending..." : "send it"}
                    </button>
                  </div>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
