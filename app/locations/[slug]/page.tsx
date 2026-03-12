import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const towns: Record<string, { name: string; description: string; content: string }> = {
  "milton-keynes": {
    name: "Milton Keynes",
    description: "Premier escort services in Milton Keynes, Buckinghamshire's largest city",
    content: `Milton Keynes is the largest urban area in Buckinghamshire and home to many of our most sought-after escorts. 
    With its modern architecture, excellent hotels, and vibrant nightlife, MK is the perfect setting for an unforgettable encounter.
    Our Milton Keynes escorts are available for both incall and outcall services throughout the city, including Central Milton Keynes, 
    Bletchley, Wolverton, and surrounding areas.`
  },
  "high-wycombe": {
    name: "High Wycombe",
    description: "Elite escorts in High Wycombe, nestled in the beautiful Chiltern Hills",
    content: `High Wycombe, the second largest town in Buckinghamshire, offers a perfect blend of historic charm and modern amenities.
    Our High Wycombe escorts are sophisticated companions ideal for dinner dates at the town's fine restaurants or private encounters.
    We cover all areas including the town centre, Loudwater, Hazlemere, and the surrounding Chiltern villages.`
  },
  "aylesbury": {
    name: "Aylesbury",
    description: "Premium escort services in Aylesbury, the historic county town of Buckinghamshire",
    content: `As the county town of Buckinghamshire, Aylesbury combines rich history with modern living. 
    Our Aylesbury escorts offer refined companionship for clients seeking discretion and quality in this historic market town.
    Services are available throughout Aylesbury Vale, including Wendover, Waddesdon, and surrounding villages.`
  },
  "amersham": {
    name: "Amersham",
    description: "Sophisticated escorts in Amersham, one of the Chilterns' most prestigious towns",
    content: `Amersham, with its beautiful Old Town and affluent character, attracts clients seeking the finest companionship.
    Our Amersham escorts reflect the town's sophisticated atmosphere, offering elegant company for any occasion.
    We serve both Old Amersham and Amersham-on-the-Hill, as well as nearby areas.`
  },
  "chesham": {
    name: "Chesham",
    description: "Discreet escort services in Chesham, a charming Chess Valley town",
    content: `Nestled in the Chess Valley, Chesham offers a peaceful setting for those seeking quality companionship.
    Our Chesham escorts provide discreet, professional services in this charming market town.
    Coverage includes Chesham town centre and the surrounding Chiltern countryside.`
  },
  "beaconsfield": {
    name: "Beaconsfield",
    description: "Luxury escorts in Beaconsfield, one of England's most affluent towns",
    content: `Beaconsfield is renowned for its affluence and charm, making it home to some of our most exclusive escorts.
    Whether you're seeking companionship at Bekonscot Model Village or a private encounter, our Beaconsfield escorts deliver excellence.
    Services extend to the Old Town, New Town, and surrounding areas including Seer Green and Jordans.`
  },
  "marlow": {
    name: "Marlow",
    description: "Riverside escorts in Marlow, an elegant Thames-side town",
    content: `The picturesque town of Marlow, with its iconic suspension bridge and riverside setting, is perfect for romantic encounters.
    Our Marlow escorts are ideal companions for fine dining at the town's celebrated restaurants or private meetings.
    We cover Marlow Bottom, Little Marlow, and the surrounding Thames Valley area.`
  },
  "buckingham": {
    name: "Buckingham",
    description: "Traditional escort services in the historic market town of Buckingham",
    content: `The historic market town of Buckingham, once the county town, retains its classic English charm.
    Our Buckingham escorts offer refined companionship in this university town, serving both residents and visitors.
    Services available throughout North Buckinghamshire.`
  },
  "princes-risborough": {
    name: "Princes Risborough",
    description: "Charming escorts in Princes Risborough, gateway to the Chilterns",
    content: `At the foot of the Chiltern escarpment, Princes Risborough offers stunning countryside and genuine charm.
    Our Princes Risborough escorts provide quality companionship in this picturesque market town.
    Coverage includes Monks Risborough, Longwick, and surrounding villages.`
  },
  "winslow": {
    name: "Winslow",
    description: "Boutique escort services in the charming town of Winslow",
    content: `The charming market town of Winslow, with its Georgian architecture and community spirit, is perfect for discreet encounters.
    Our Winslow escorts offer intimate, professional companionship in this North Bucks gem.
    Services available throughout Winslow and surrounding villages.`
  },
  "newport-pagnell": {
    name: "Newport Pagnell",
    description: "Quality escorts in Newport Pagnell, historic town near Milton Keynes",
    content: `Newport Pagnell, known for its historic high street and proximity to Milton Keynes, offers convenient access to quality companionship.
    Our Newport Pagnell escorts serve clients seeking discretion in this traditional market town.
    Coverage extends to Olney, Sherington, and surrounding areas.`
  },
  "olney": {
    name: "Olney",
    description: "Intimate escort experiences in the historic town of Olney",
    content: `The picturesque market town of Olney, famous for its Pancake Race and beautiful high street, provides a charming backdrop.
    Our Olney escorts offer intimate, quality companionship in this North Buckinghamshire gem.
    Services available in Olney and the surrounding countryside.`
  },
  "gerrards-cross": {
    name: "Gerrards Cross",
    description: "Exclusive escorts in Gerrards Cross, one of England's wealthiest towns",
    content: `Gerrards Cross, consistently ranked among England's most expensive places to live, demands the finest companionship.
    Our Gerrards Cross escorts match the town's affluent character with sophistication and elegance.
    We serve GX, Chalfont St Peter, and surrounding South Bucks areas.`
  },
  "great-missenden": {
    name: "Great Missenden",
    description: "Countryside escorts in Great Missenden, heart of the Chilterns",
    content: `Great Missenden, the charming village that inspired Roald Dahl, offers a quintessentially English setting.
    Our Great Missenden escorts provide refined companionship in this beautiful Chiltern location.
    Services extend to Little Missenden, Prestwood, and surrounding areas.`
  },
  "wendover": {
    name: "Wendover",
    description: "Premium escorts in Wendover, at the foot of the Chiltern Hills",
    content: `The historic market town of Wendover, nestled beneath Coombe Hill, combines natural beauty with convenience.
    Our Wendover escorts offer quality companionship in this picturesque Chiltern town.
    Coverage includes Halton, Stoke Mandeville, and surrounding villages.`
  },
  "burnham": {
    name: "Burnham",
    description: "South Bucks escorts in Burnham, close to Slough and London",
    content: `Burnham, with its famous Beeches and excellent transport links, serves clients seeking quality near London.
    Our Burnham escorts provide convenient, discreet services in South Buckinghamshire.
    We cover Burnham, Taplow, Farnham Common, and surrounding areas.`
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const town = towns[slug];
  
  if (!town) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${town.name} Escorts | Buckinghamshire Escorts Agency`,
    description: town.description,
    keywords: `${town.name} escorts, escort agency ${town.name}, companionship ${town.name}, Buckinghamshire escorts`,
  };
}

export async function generateStaticParams() {
  return Object.keys(towns).map((slug) => ({ slug }));
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const town = towns[slug];

  if (!town) {
    notFound();
  }

  const otherTowns = Object.entries(towns)
    .filter(([key]) => key !== slug)
    .slice(0, 6);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">{town.name}</span>
            <span className="text-white"> Escorts</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            {town.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant">
            <h2 className="text-2xl font-playfair font-semibold text-amber-400 mb-4">
              About Our {town.name} Escort Services
            </h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {town.content}
            </p>
          </div>

          {/* Services */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-white mb-3">Incall Services</h3>
              <p className="text-gray-400">
                Visit our escorts at their discreet, comfortable locations in {town.name}.
                All incall venues are private, clean, and welcoming.
              </p>
            </div>
            <div className="card-elegant">
              <h3 className="text-xl font-playfair font-semibold text-white mb-3">Outcall Services</h3>
              <p className="text-gray-400">
                Our {town.name} escorts can visit you at your home, hotel, or other suitable venue.
                Outcall services available throughout the area.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
              Book a {town.name} Escort Today
            </h3>
            <p className="text-gray-400 mb-6">
              Contact us now to arrange your encounter with one of our stunning {town.name} companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                Contact Us
              </Link>
              <Link href="/escorts" className="btn-outline">
                View All Escorts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 section-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-white mb-8">
            Other <span className="text-amber-400">Locations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherTowns.map(([key, t]) => (
              <Link
                key={key}
                href={`/locations/${key}`}
                className="card-elegant text-center group"
              >
                <span className="text-white group-hover:text-amber-400 transition-colors font-semibold">
                  {t.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-amber-400 hover:text-amber-300">
              View all locations →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
