import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Buckinghamshire Escorts Agency",
  description: "Get in touch with Buckinghamshire Escorts Agency. Available 24/7 for bookings and enquiries across Milton Keynes, High Wycombe, Aylesbury and all of Buckinghamshire.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Contact</span>
            <span className="text-white"> Us</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300">
            Available 24/7 for bookings and enquiries
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                Get in <span className="text-amber-400">Touch</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Our professional booking team is available around the clock to assist with 
                your enquiries and arrangements. All communications are handled with the 
                utmost discretion.
              </p>

              <div className="space-y-6">
                <div className="card-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-amber-400">info@buckinghamshireescorts.agency</p>
                      <p className="text-gray-500 text-sm mt-1">We respond to all emails within 1 hour</p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Availability</h3>
                      <p className="text-amber-400">24 Hours, 7 Days a Week</p>
                      <p className="text-gray-500 text-sm mt-1">Including bank holidays</p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Service Area</h3>
                      <p className="text-amber-400">All of Buckinghamshire</p>
                      <p className="text-gray-500 text-sm mt-1">Milton Keynes, High Wycombe, Aylesbury & more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elegant">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select a location</option>
                    <option value="milton-keynes">Milton Keynes</option>
                    <option value="high-wycombe">High Wycombe</option>
                    <option value="aylesbury">Aylesbury</option>
                    <option value="amersham">Amersham</option>
                    <option value="chesham">Chesham</option>
                    <option value="beaconsfield">Beaconsfield</option>
                    <option value="marlow">Marlow</option>
                    <option value="buckingham">Buckingham</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-gold">
                  Send Message
                </button>
                <p className="text-xs text-gray-500 text-center">
                  All enquiries are handled with complete confidentiality
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Booking <span className="text-amber-400">Information</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="card-elegant">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-semibold text-white mb-2">Step 1</h3>
              <p className="text-gray-400 text-sm">Browse our escorts and select your preferred companion</p>
            </div>
            <div className="card-elegant">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Step 2</h3>
              <p className="text-gray-400 text-sm">Contact us with your requirements and preferred date/time</p>
            </div>
            <div className="card-elegant">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-lg font-semibold text-white mb-2">Step 3</h3>
              <p className="text-gray-400 text-sm">Receive confirmation and enjoy your unforgettable experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
