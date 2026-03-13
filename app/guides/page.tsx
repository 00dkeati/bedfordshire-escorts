import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escort Guides & Tips | Bedfordshire Escorts Agency",
  description: "Expert guides on booking escorts in Bedfordshire. Tips for first-timers, etiquette advice, hotel recommendations, and everything you need to know.",
};

const guides = [
  {
    slug: "first-time-booking-escort-bedfordshire",
    title: "First Time Booking an Escort in Bedfordshire",
    description: "A complete beginner's guide to booking your first escort experience. What to expect, how to prepare, and tips for a memorable encounter.",
    category: "Getting Started",
  },
  {
    slug: "what-is-gfe-girlfriend-experience",
    title: "What is GFE? The Girlfriend Experience Explained",
    description: "Everything you need to know about the girlfriend experience. What it includes, why it's popular, and how to book a GFE escort.",
    category: "Services",
  },
  {
    slug: "escort-etiquette-guide",
    title: "Escort Etiquette: Do's and Don'ts",
    description: "Essential etiquette tips for meeting an escort. How to behave, what to discuss, and how to ensure a positive experience for everyone.",
    category: "Tips & Advice",
  },
  {
    slug: "best-hotels-luton-escorts",
    title: "Best Hotels in Luton for Escort Dates",
    description: "Top escort-friendly hotels near Luton Airport and town centre. Discreet, comfortable venues perfect for outcall bookings.",
    category: "Locations",
  },
  {
    slug: "best-hotels-bedford-escorts",
    title: "Best Hotels in Bedford for Escort Dates",
    description: "Recommended hotels in Bedford for meeting escorts. Quality accommodation with privacy and discretion guaranteed.",
    category: "Locations",
  },
  {
    slug: "outcall-explained",
    title: "Outcall Escort Services Explained",
    description: "What is outcall? How our escorts come to you at your home, hotel, or private venue anywhere in Bedfordshire.",
    category: "Services",
  },
  {
    slug: "mature-escorts-guide",
    title: "Why Choose a Mature Escort?",
    description: "The appeal of experienced companions. Why many clients prefer mature escorts and what makes them special.",
    category: "Tips & Advice",
  },
  {
    slug: "preparing-for-escort-date",
    title: "How to Prepare for Your Escort Date",
    description: "Practical tips on grooming, setting the scene, and making a great first impression with your escort.",
    category: "Tips & Advice",
  },
];

export default function GuidesPage() {
  const categories = [...new Set(guides.map(g => g.category))];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Escort</span>
            <span className="text-white"> Guides</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Expert advice and tips for the perfect escort experience
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-amber-400 mb-6">
                {category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {guides
                  .filter((g) => g.category === category)
                  .map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="card-elegant group"
                    >
                      <h3 className="text-xl font-playfair font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{guide.description}</p>
                      <div className="mt-4 text-amber-400 text-sm flex items-center">
                        Read Guide
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Ready to <span className="text-amber-400">Book?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Browse our escorts and arrange your perfect encounter today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/escorts" className="btn-gold">
              View Escorts
            </Link>
            <a
              href="https://wa.me/447424783087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
