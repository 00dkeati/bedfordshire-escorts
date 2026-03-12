import Link from "next/link";

const towns = [
  { name: "Milton Keynes", description: "Our largest service area with diverse escort options" },
  { name: "High Wycombe", description: "Premium companions in the heart of the Chilterns" },
  { name: "Aylesbury", description: "Elite escorts in the county town" },
  { name: "Amersham", description: "Sophisticated companionship in historic surroundings" },
  { name: "Chesham", description: "Discreet services in the Chess Valley" },
  { name: "Beaconsfield", description: "Luxury escorts for discerning clients" },
  { name: "Marlow", description: "Riverside town with premium companions" },
  { name: "Buckingham", description: "Historic market town escort services" },
  { name: "Princes Risborough", description: "Charming Chiltern escorts" },
  { name: "Winslow", description: "Boutique escort services" },
  { name: "Newport Pagnell", description: "Quality companionship near the M1" },
  { name: "Olney", description: "Intimate escort experiences" },
  { name: "Gerrards Cross", description: "Exclusive escorts for affluent areas" },
  { name: "Great Missenden", description: "Countryside charm meets elite companionship" },
  { name: "Wendover", description: "Picturesque setting, premium service" },
  { name: "Burnham", description: "South Bucks premier escort service" },
];

const services = [
  {
    title: "Dinner Dates",
    description: "Enjoy the company of a sophisticated escort for dining experiences at Buckinghamshire's finest restaurants.",
    icon: "🍷",
  },
  {
    title: "Social Events",
    description: "Arrive with an elegant companion for business functions, parties, and special occasions.",
    icon: "✨",
  },
  {
    title: "Private Companionship",
    description: "Discreet and professional companionship services tailored to your preferences.",
    icon: "💎",
  },
  {
    title: "Travel Companion",
    description: "Sophisticated escorts available for both domestic and international travel arrangements.",
    icon: "✈️",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Elite</span> Escorts in
            <br />
            <span className="text-white">Buckinghamshire</span>
          </h1>
          
          <div className="divider-gold my-8"></div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the finest companionship services in Buckinghamshire. 
            Our carefully selected escorts offer sophistication, discretion, 
            and unforgettable experiences throughout the county.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/escorts" className="btn-gold">
              View Our Escorts
            </Link>
            <Link href="/contact" className="btn-outline">
              Book Now
            </Link>
          </div>

          <div className="mt-16 flex justify-center space-x-12 text-center">
            <div>
              <div className="text-4xl font-playfair text-amber-400">16+</div>
              <div className="text-gray-400 text-sm mt-1">Locations</div>
            </div>
            <div>
              <div className="text-4xl font-playfair text-amber-400">24/7</div>
              <div className="text-gray-400 text-sm mt-1">Availability</div>
            </div>
            <div>
              <div className="text-4xl font-playfair text-amber-400">100%</div>
              <div className="text-gray-400 text-sm mt-1">Discretion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Our <span className="text-amber-400">Services</span>
            </h2>
            <div className="divider-gold"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              We offer a range of premium escort services designed to meet your needs 
              with the utmost professionalism and discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-elegant text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-white mb-6">
                Why Choose <span className="text-amber-400">Us?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Complete Discretion</h3>
                    <p className="text-gray-400 text-sm mt-1">Your privacy is our absolute priority. All interactions are completely confidential.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Premium Selection</h3>
                    <p className="text-gray-400 text-sm mt-1">Hand-picked escorts who embody elegance, intelligence, and charm.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">24/7 Availability</h3>
                    <p className="text-gray-400 text-sm mt-1">Our booking team is available around the clock to assist you.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Countywide Coverage</h3>
                    <p className="text-gray-400 text-sm mt-1">Serving all major towns across Buckinghamshire with incall and outcall options.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-playfair text-amber-400/30">BE</div>
                  <div className="text-2xl font-playfair text-amber-400 mt-2">Buckinghamshire Escorts</div>
                  <div className="text-gray-500 text-sm mt-2">Est. 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Areas We <span className="text-amber-400">Serve</span>
            </h2>
            <div className="divider-gold"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Our escorts are available throughout Buckinghamshire. 
              Select your location to find companions in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {towns.map((town) => (
              <Link
                key={town.name}
                href={`/locations/${town.name.toLowerCase().replace(/ /g, "-")}`}
                className="card-elegant group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {town.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{town.description}</p>
                <div className="mt-3 text-amber-400 text-sm flex items-center">
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-black to-amber-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Experience <span className="text-amber-400">Excellence?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us today to arrange an unforgettable encounter with one of our 
            stunning Buckinghamshire escorts. Discretion guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us Now
            </Link>
            <Link href="/escorts" className="btn-outline">
              Browse Escorts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
