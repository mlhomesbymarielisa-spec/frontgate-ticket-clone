"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import { ChevronRight, Mail, Phone, MessageCircle, Ticket, User, HelpCircle, CreditCard } from "lucide-react";

const helpCategories = [
  {
    icon: Ticket,
    title: "Delivery",
    description: "Track your tickets, wristband delivery status, and shipping information",
  },
  {
    icon: User,
    title: "Account Management",
    description: "Update your profile, password, and notification preferences",
  },
  {
    icon: HelpCircle,
    title: "Wristband Help",
    description: "Register, activate, and troubleshoot your wristband",
  },
  {
    icon: CreditCard,
    title: "Ticket Insurance",
    description: "Learn about coverage options and how to file a claim",
  },
  {
    icon: MessageCircle,
    title: "Layaway Plans",
    description: "Payment plan options and schedule management",
  },
  {
    icon: Mail,
    title: "Contact Us",
    description: "Get in touch with our support team directly",
  },
];

const faqs = [
  {
    question: "How do I transfer my ticket to someone else?",
    answer: "You can transfer your ticket through your account dashboard. Go to 'My Tickets', select the ticket you want to transfer, and click 'Transfer'. Enter the recipient's email address to complete the transfer.",
  },
  {
    question: "When will I receive my wristband?",
    answer: "Wristbands are typically shipped 2-3 weeks before the event. You can track your shipment status in your account dashboard under 'Deliveries'.",
  },
  {
    question: "Can I get a refund for my ticket?",
    answer: "Refund policies vary by event. Check the specific event page for refund eligibility and deadlines. If you purchased ticket insurance, you may file a claim through your account.",
  },
  {
    question: "How do I register my wristband?",
    answer: "Visit the event's registration page and enter your wristband ID. You'll need to link it to your account and provide emergency contact information.",
  },
];

export default function SupportPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#111212]">
      <Sidebar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <main className="pt-20 lg:pt-0 lg:pl-16">
        {/* Header */}
        <div className="px-6 lg:px-12 py-12 lg:py-20 text-center">
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6">
            How can we help?
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Help Categories */}
        <div className="px-6 lg:px-12 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpCategories.map((category) => (
              <button
                key={category.title}
                className="bg-[#1a1a1b] rounded-2xl p-6 text-left hover:bg-[#222223] transition-colors group"
              >
                <category.icon className="w-8 h-8 text-[#7baa60] mb-4" />
                <h3 className="text-white font-medium text-lg mb-2 group-hover:text-[#7baa60] transition-colors">
                  {category.title}
                </h3>
                <p className="text-white/50 text-sm">{category.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-6 lg:px-12 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1a1a1b] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-white/50 transition-transform ${
                        openFaq === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-6 lg:px-12 pb-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#7baa60]/20 to-[#1a1a1b] rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-white/60 mb-8">
              Our support team is available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support@frontgatetickets.com"
                className="flex items-center gap-2 bg-white text-[#111212] px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                <Mail size={18} />
                Email Support
              </a>
              <a
                href="tel:+18449757469"
                className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
