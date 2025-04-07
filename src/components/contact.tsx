"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(""); // ✅ String only

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(""); // Clear previous errors

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Failed to send email.");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // ✅ Reset form

      setTimeout(() => setSuccess(false), 5000); // Hide after 5s
    } catch (err) {
      setError("❌ Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-10 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,220,130,0.05),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative">
              <User
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00dc82] focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00dc82] focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <MessageSquare
                size={20}
                className="absolute left-3 top-4 text-gray-400"
              />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00dc82] text-white placeholder-gray-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#00FF94] text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send size={20} />
            </motion.button>
          </motion.form>

          {/* ✅ Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-green-400 text-center font-semibold"
            >
              ✅ Your message has been sent successfully!
            </motion.div>
          )}

          {/* ❌ Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-red-400 text-center font-semibold"
            >
              {error}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
