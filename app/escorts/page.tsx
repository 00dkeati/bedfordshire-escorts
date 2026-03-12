import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Escorts | Buckinghamshire Escorts Agency",
  description: "Browse our stunning selection of elite escorts available across Buckinghamshire. Professional companions in Milton Keynes, High Wycombe, Aylesbury and beyond.",
};

const escorts = [
  {
    name: "Isabella",
    age: 24,
    location: "Milton Keynes",
    description: "Elegant brunette with a passion for fine dining and stimulating conversation.",
    tags: ["Dinner Dates", "Events", "Travel"],
  },
  {
    name: "Sophia",
    age: 26,
    location: "High Wycombe",
    description: "Sophisticated blonde professional who knows how to make every moment special.",
    tags: ["Professional", "Outcall", "GFE"],
  },
  {
    name: "Victoria",
    age: 28,
    location: "Aylesbury",
    description: "Charming and witty companion with a love for art and culture.",
    tags: ["Cultural Events", "Private", "Intelligent"],
  },
  {
    name: "Emma",
    age: 23,
    location: "Amersham",
    description: "Bubbly and fun-loving escort who brings joy to every encounter.",
    tags: ["Fun", "Energetic", "Party"],
  },
  {
    name: "Charlotte",
    age: 27,
    location: "Beaconsfield",
    description: "Refined and elegant companion perfect for upscale occasions.",
    tags: ["Luxury", "Events", "Elite"],
  },
  {
    name: "Olivia",
    age: 25,
    location: "Marlow",
    description: "Natural beauty with a warm personality and genuine charm.",
    tags: ["Natural", "Warm", "Authentic"],
  },
];

export default function EscortsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Our</span>
            <span className="text-white"> Escorts</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Meet our carefully selected companions
          </p>
        </div>
      </section>

      {/* Escorts Grid */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {escorts.map((escort) => (
              <div key={escort.name} className="card-elegant group">
                {/* Placeholder Image */}
                <div className="aspect-[3/4] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-amber-400/30 font-playfair">{escort.name[0]}</div>
                    <p className="text-gray-600 text-sm mt-2">Photo Available on Request</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {escort.name}
                </h3>
                <p className="text-amber-400 text-sm mt-1">
                  {escort.age} • {escort.location}
                </p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {escort.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {escort.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block text-center btn-outline text-sm py-2"
                >
                  Enquire About {escort.name}
                </Link>
              </div>
            ))}
          </div>

          {/* More Escorts Notice */}
          <div className="mt-16 text-center card-elegant">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
              Looking for Someone <span className="text-amber-400">Specific?</span>
            </h3>
            <p className="text-gray-400 mb-6">
              We have many more escorts available who are not listed on our website for privacy reasons.
              Contact us with your preferences and we&apos;ll match you with the perfect companion.
            </p>
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">
                Verification
              </h3>
              <p className="text-gray-400 text-sm">
                All our escorts are verified in person. Photos are recent and authentic.
                What you see is what you get — no surprises, no disappointments.
              </p>
            </div>
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">
                Privacy
              </h3>
              <p className="text-gray-400 text-sm">
                Many of our escorts prefer not to have their photos publicly displayed.
                Contact us for private galleries and detailed profiles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
