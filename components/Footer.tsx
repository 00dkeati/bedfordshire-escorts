import Link from "next/link";

const towns = [
  "Milton Keynes", "High Wycombe", "Aylesbury", "Amersham", "Chesham",
  "Beaconsfield", "Marlow", "Buckingham", "Princes Risborough", "Winslow",
  "Newport Pagnell", "Olney", "Gerrards Cross", "Great Missenden", "Wendover", "Burnham"
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-amber-400">Buckinghamshire</span>
              <span className="text-white">Escorts</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Buckinghamshire&apos;s premier outcall escort agency providing elite companionship 
              services with discretion and professionalism throughout the county. We come to you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/escorts" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Our Escorts</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-1">
              {towns.slice(0, 8).map((town) => (
                <li key={town}>
                  <Link 
                    href={`/locations/${town.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {town} Escorts
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@buckinghamshireescorts.agency</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Available 24/7</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500">
                All escorts are 18+ and operate independently. 
                We act solely as an introduction agency.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Buckinghamshire Escorts Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-amber-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
