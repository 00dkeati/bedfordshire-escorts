import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Buckinghamshire Escorts Agency",
  description: "Frequently asked questions about our Buckinghamshire escort services. Learn about booking, discretion, rates and more.",
};

const faqs = [
  {
    question: "How do I book an escort?",
    answer: "Booking is simple. Browse our escorts, choose your preferred companion, and contact us via email or our contact form. Provide your preferred date, time, duration, and location. We'll confirm availability and provide all necessary details."
  },
  {
    question: "Are your escorts genuine?",
    answer: "Yes. All our escorts are verified in person by our team. Photos are recent and authentic — we don't use edited or misleading images. What you see is what you get."
  },
  {
    question: "Is my privacy protected?",
    answer: "Absolutely. Discretion is our highest priority. We never share client information, all communications are confidential, and our escorts are professionals who understand the importance of privacy."
  },
  {
    question: "What areas do you cover?",
    answer: "We cover all of Buckinghamshire including Milton Keynes, High Wycombe, Aylesbury, Amersham, Chesham, Beaconsfield, Marlow, and many more towns. Our escorts offer both incall and outcall services."
  },
  {
    question: "What are your rates?",
    answer: "Rates vary depending on the escort, duration, and services required. Contact us for accurate pricing. We're completely transparent — all costs are discussed upfront with no hidden fees."
  },
  {
    question: "Do you offer incall and outcall?",
    answer: "Yes, most of our escorts offer both options. Incall means visiting the escort at their private location. Outcall means the escort visits you at your home, hotel, or other suitable venue."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least a few hours in advance, though same-day bookings are often possible. For specific escorts or peak times (weekends, evenings), earlier booking is advisable."
  },
  {
    question: "Are your escorts independent?",
    answer: "Yes. All escorts work independently and set their own boundaries and services. We act as an introduction agency, facilitating connections between clients and escorts."
  },
  {
    question: "What payment methods do you accept?",
    answer: "Payment details are discussed during the booking process. Payment is typically made directly to the escort at the start of the appointment."
  },
  {
    question: "Can I request specific services?",
    answer: "When contacting us, feel free to mention your preferences. We'll match you with an escort who can accommodate your requirements. All arrangements are made in advance."
  },
  {
    question: "What if I need to cancel?",
    answer: "We understand plans change. Please give us as much notice as possible. Cancellation policies vary by escort and are discussed at the time of booking."
  },
  {
    question: "Are all escorts over 18?",
    answer: "Yes, absolutely. All our escorts are verified to be 18 years of age or older. This is non-negotiable."
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Frequently</span>
            <span className="text-white"> Asked Questions</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Everything you need to know about our services
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elegant">
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">
            Still Have <span className="text-amber-400">Questions?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Our friendly team is here to help with any enquiries you may have.
          </p>
          <Link href="/contact" className="btn-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
