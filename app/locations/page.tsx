import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations | Buckinghamshire Escorts Agency",
  description: "Find escorts across all of Buckinghamshire. Milton Keynes, High Wycombe, Aylesbury, Amersham, Chesham, Beaconsfield, Marlow and 10+ more towns.",
};

const towns = [
  { slug: "milton-keynes", name: "Milton Keynes", description: "Buckinghamshire's largest city with diverse escort options" },
  { slug: "high-wycombe", name: "High Wycombe", description: "Premium companions in the heart of the Chilterns" },
  { slug: "aylesbury", name: "Aylesbury", description: "Elite escorts in the county town" },
  { slug: "amersham", name: "Amersham", description: "Sophisticated companionship in historic surroundings" },
  { slug: "chesham", name: "Chesham", description: "Discreet services in the Chess Valley" },
  { slug: "beaconsfield", name: "Beaconsfield", description: "Luxury escorts for discerning clients" },
  { slug: "marlow", name: "Marlow", description: "Riverside town with premium companions" },
  { slug: "buckingham", name: "Buckingham", description: "Historic market town escort services" },
  { slug: "princes-risborough", name: "Princes Risborough", description: "Charming Chiltern escorts" },
  { slug: "winslow", name: "Winslow", description: "Boutique escort services" },
  { slug: "newport-pagnell", name: "Newport Pagnell", description: "Quality companionship near the M1" },
  { slug: "olney", name: "Olney", description: "Intimate escort experiences" },
  { slug: "gerrards-cross", name: "Gerrards Cross", description: "Exclusive escorts for affluent areas" },
  { slug: "great-missenden", name: "Great Missenden", description: "Countryside charm meets elite companionship" },
  { slug: "wendover", name: "Wendover", description: "Picturesque setting, premium service" },
  { slug: "burnham", name: "Burnham", description: "South Bucks premier escort service" },
];

export default function LocationsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Our</span>
            <span className="text-white"> Locations</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Elite escorts available across all of Buckinghamshire
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {towns.map((town) => (
              <Link
                key={town.slug}
                href={`/locations/${town.slug}`}
                className="card-elegant group"
              >
                <h3 className="text-xl font-playfair font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {town.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{town.description}</p>
                <div className="mt-4 text-amber-400 text-sm flex items-center">
                  View Escorts
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Full <span className="text-amber-400">Buckinghamshire Coverage</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Our escorts provide both incall and outcall services throughout Buckinghamshire. 
              If your area isn&apos;t listed, contact us — we likely have escorts available 
              who can travel to you.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              <div>
                <h3 className="text-amber-400 font-semibold mb-2">Incall Services</h3>
                <p className="text-gray-400 text-sm">
                  Visit our escorts at their discreet, private locations across the county.
                  Available in major towns including Milton Keynes, High Wycombe, and Aylesbury.
                </p>
              </div>
              <div>
                <h3 className="text-amber-400 font-semibold mb-2">Outcall Services</h3>
                <p className="text-gray-400 text-sm">
                  Our escorts can visit you at your home, hotel, or other suitable venue
                  anywhere in Buckinghamshire. Travel fees may apply for remote areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Can&apos;t Find Your <span className="text-amber-400">Area?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us with your location and requirements. We&apos;ll find the perfect 
            escort for you, wherever you are in Buckinghamshire.
          </p>
          <Link href="/contact" className="btn-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
