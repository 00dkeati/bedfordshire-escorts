import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { towns, escortTypes, serviceTypes, getTown, getEscortType, getServiceType } from "@/data/seo-config";

type PageProps = {
  params: Promise<{ town: string; type: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { town: townSlug, type: typeSlug } = await params;
  const town = getTown(townSlug);
  const escortType = getEscortType(typeSlug);
  const serviceType = getServiceType(typeSlug);
  const type = escortType || serviceType;

  if (!town || !type) {
    return { title: "Page Not Found" };
  }

  const title = `${type.title} in ${town.name} | Buckinghamshire Escorts`;
  const description = `${type.description} Available now in ${town.name}, ${town.region}. Book your ${type.name.toLowerCase()} escort today.`;

  return {
    title,
    description,
    keywords: `${type.name.toLowerCase()} escorts ${town.name}, ${town.name} ${type.name.toLowerCase()} escorts, ${type.slug} escort ${town.name}, Buckinghamshire ${type.name.toLowerCase()} escorts`,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const params: { town: string; type: string }[] = [];
  
  for (const town of towns) {
    for (const escortType of escortTypes) {
      params.push({ town: town.slug, type: escortType.slug });
    }
    for (const serviceType of serviceTypes) {
      params.push({ town: town.slug, type: serviceType.slug });
    }
  }
  
  return params;
}

export default async function TownTypePage({ params }: PageProps) {
  const { town: townSlug, type: typeSlug } = await params;
  const town = getTown(townSlug);
  const escortType = getEscortType(typeSlug);
  const serviceType = getServiceType(typeSlug);

  if (!town) {
    notFound();
  }

  const type = escortType || serviceType;
  if (!type) {
    notFound();
  }

  const isService = !!serviceType;
  
  // Get related types for internal linking
  const relatedTypes = isService 
    ? serviceTypes.filter(s => s.slug !== typeSlug).slice(0, 2)
    : escortTypes.filter(e => e.slug !== typeSlug).slice(0, 4);

  // Get nearby towns for internal linking
  const nearbyTowns = towns
    .filter(t => t.slug !== townSlug && t.region === town.region)
    .slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-amber-400 text-sm uppercase tracking-wider mb-4">
            {town.region}
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-amber-400">{type.name}</span>
            <span className="text-white"> Escorts in</span>
            <br />
            <span className="text-white">{town.name}</span>
          </h1>
          <div className="divider-gold my-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {type.description} Book your perfect {type.name.toLowerCase()} companion in {town.name} today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Book Now
            </Link>
            <Link href="/escorts" className="btn-outline">
              View All Escorts
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="card-elegant mb-8">
                <h2 className="text-2xl font-playfair font-semibold text-white mb-4">
                  About {type.name} Escorts in {town.name}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {type.longDescription}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our {type.name.toLowerCase()} escorts in {town.name} are carefully selected to ensure 
                  the highest standards of companionship. Whether you&apos;re looking for a dinner date, 
                  social event companion, or private encounter, our {town.name} {type.name.toLowerCase()} escorts 
                  are ready to provide an unforgettable experience.
                </p>
              </div>

              {/* Features */}
              <div className="card-elegant mb-8">
                <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">
                  What to Expect
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <span className="text-amber-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Process (if applicable) */}
              {isService && serviceType && 'process' in serviceType && (
                <div className="card-elegant mb-8">
                  <h3 className="text-xl font-playfair font-semibold text-amber-400 mb-4">
                    How {type.name} Works
                  </h3>
                  <div className="space-y-4">
                    {(serviceType as typeof serviceTypes[0]).process.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-semibold">
                          {idx + 1}
                        </div>
                        <p className="text-gray-300 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Local SEO Content */}
              <div className="card-elegant">
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">
                  {type.name} Escort Services in {town.name}, Buckinghamshire
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {town.name} is located in {town.region} and is one of the key areas we serve 
                  with our premium {type.name.toLowerCase()} escort services. Whether you&apos;re a 
                  local resident or visiting the area, our {type.name.toLowerCase()} companions 
                  are available for both incall and outcall appointments.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We pride ourselves on providing discreet, professional {type.name.toLowerCase()} escort 
                  services throughout {town.name} and the surrounding {town.region} area. 
                  Contact us today to arrange your booking with one of our stunning {type.name.toLowerCase()} escorts.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="card-elegant mb-6">
                <h3 className="text-lg font-playfair font-semibold text-white mb-4">
                  Quick Booking
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Ready to book a {type.name.toLowerCase()} escort in {town.name}? Contact us now.
                </p>
                <Link href="/contact" className="btn-gold w-full text-center block">
                  Contact Us
                </Link>
              </div>

              {/* Related Types */}
              <div className="card-elegant mb-6">
                <h3 className="text-lg font-playfair font-semibold text-amber-400 mb-4">
                  Other {isService ? "Services" : "Types"} in {town.name}
                </h3>
                <ul className="space-y-2">
                  {relatedTypes.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/${townSlug}/${related.slug}`}
                        className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center"
                      >
                        <span className="mr-2">→</span>
                        {related.name} Escorts
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby Towns */}
              {nearbyTowns.length > 0 && (
                <div className="card-elegant">
                  <h3 className="text-lg font-playfair font-semibold text-amber-400 mb-4">
                    {type.name} Escorts Nearby
                  </h3>
                  <ul className="space-y-2">
                    {nearbyTowns.map((nearbyTown) => (
                      <li key={nearbyTown.slug}>
                        <Link
                          href={`/${nearbyTown.slug}/${typeSlug}`}
                          className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center"
                        >
                          <span className="mr-2">→</span>
                          {nearbyTown.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Browse More */}
      <section className="py-16 section-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-white mb-8">
            Browse All <span className="text-amber-400">{type.name} Escorts</span> in Buckinghamshire
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {towns.filter(t => t.slug !== townSlug).slice(0, 8).map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}/${typeSlug}`}
                className="card-elegant text-center group py-4"
              >
                <span className="text-white group-hover:text-amber-400 transition-colors font-medium">
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

      {/* CTA */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Book Your <span className="text-amber-400">{type.name}</span> Escort in {town.name}
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today to arrange an unforgettable encounter with one of our 
            stunning {type.name.toLowerCase()} escorts in {town.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Book Now
            </Link>
            <Link href={`/locations/${townSlug}`} className="btn-outline">
              All {town.name} Escorts
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${type.name} Escorts in ${town.name}`,
            "description": type.description,
            "provider": {
              "@type": "Organization",
              "name": "Buckinghamshire Escorts Agency",
              "url": "https://buckinghamshireescorts.agency"
            },
            "areaServed": {
              "@type": "City",
              "name": town.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Buckinghamshire"
              }
            },
            "serviceType": `${type.name} Escort Service`
          })
        }}
      />
    </div>
  );
}
