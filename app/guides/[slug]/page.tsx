import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const guides: Record<string, {
  title: string;
  description: string;
  content: string[];
  relatedGuides: string[];
}> = {
  "first-time-booking-escort-bedfordshire": {
    title: "First Time Booking an Escort in Bedfordshire",
    description: "A complete beginner's guide to booking your first escort experience in Bedfordshire. What to expect, how to prepare, and tips for a memorable encounter.",
    content: [
      `## Your First Escort Experience

Booking an escort for the first time can feel daunting, but it doesn't have to be. At Bedfordshire Escorts Agency, we're here to make your first experience as comfortable and enjoyable as possible. This guide covers everything you need to know.`,

      `## How to Book

Booking with us is simple and discreet:

1. **Browse our escorts** – Look through our gallery and find a companion who appeals to you
2. **Contact us on WhatsApp** – Message us with your preferred escort, date, time, and location
3. **Confirm the details** – We'll check availability and confirm arrangements
4. **Prepare for your date** – Get ready for your encounter (see tips below)
5. **Enjoy** – Your escort will arrive at the agreed time and location`,

      `## What to Expect

Our escorts are professional companions who provide outcall services across Bedfordshire. Here's what a typical booking involves:

- **Punctual arrival** – Your escort will arrive at your home, hotel, or private venue at the agreed time
- **Professional presentation** – She'll be well-groomed, appropriately dressed, and ready for your date
- **Genuine companionship** – Whether it's dinner, drinks, or private time, expect engaging conversation and warm company
- **Discretion** – All encounters are completely confidential`,

      `## Preparing for Your Date

Make a great first impression with these tips:

- **Personal grooming** – Shower, shave, brush your teeth, and wear clean clothes
- **Tidy your space** – If hosting at home, ensure your place is clean and welcoming
- **Have payment ready** – Cash is preferred, have the agreed amount ready in an envelope
- **Be clear on expectations** – Discuss what you're looking for when booking so there are no misunderstandings
- **Relax** – Our escorts are friendly professionals who want you to enjoy yourself`,

      `## Etiquette Tips

- Treat your escort with respect at all times
- Don't haggle on rates – prices are set by the escorts themselves
- Keep to the agreed time – if you want to extend, ask (don't assume)
- Respect boundaries – escorts have the right to refuse any request
- Be discreet – don't discuss the encounter publicly`,

      `## Why Choose Us?

As Bedfordshire's premier escort agency, we offer:

- **Verified escorts** – All photos are genuine and recent
- **24/7 availability** – Book any time, day or night
- **Outcall only** – We come to you for maximum convenience
- **Complete discretion** – Your privacy is our priority
- **Quality companions** – Beautiful, intelligent, and engaging women`,

      `## Ready to Book?

Contact us on WhatsApp to arrange your first escort experience. Our friendly team will guide you through the process and answer any questions you might have.`
    ],
    relatedGuides: ["escort-etiquette-guide", "preparing-for-escort-date", "what-is-gfe-girlfriend-experience"]
  },

  "what-is-gfe-girlfriend-experience": {
    title: "What is GFE? The Girlfriend Experience Explained",
    description: "Everything you need to know about the girlfriend experience (GFE). What it includes, why it's so popular, and how to book a GFE escort in Bedfordshire.",
    content: [
      `## The Girlfriend Experience

GFE stands for "Girlfriend Experience" – it's one of the most popular services offered by escorts. But what exactly does it mean, and why do so many clients seek it out?`,

      `## What GFE Includes

The girlfriend experience is designed to feel like a real romantic date with a genuine connection. Unlike more transactional encounters, GFE focuses on:

- **Genuine conversation** – Getting to know each other, sharing stories, laughing together
- **Affection** – Hand-holding, cuddling, kissing, and natural physical closeness
- **Romance** – The feeling of being with someone who genuinely enjoys your company
- **Unhurried pace** – No clock-watching, just natural flow between activities
- **Mutual enjoyment** – Both parties relaxed and enjoying the experience`,

      `## What Makes GFE Special

Many clients prefer GFE because it offers something beyond the physical:

- **Emotional connection** – Even briefly, you feel genuinely connected to another person
- **Authenticity** – It feels real, not performative or rushed
- **Relaxation** – The natural, unhurried pace helps you truly unwind
- **Companionship** – Sometimes you just want someone to spend quality time with
- **Romance without complication** – All the best parts of dating, none of the drama`,

      `## GFE vs Standard Bookings

While all our escorts provide excellent service, GFE specialists focus particularly on creating that romantic connection:

| Aspect | Standard Booking | GFE Booking |
|--------|------------------|-------------|
| Conversation | Professional | Deep, personal |
| Affection | Limited | Natural, frequent |
| Kissing | Often not included | Usually included |
| Pace | Time-conscious | Relaxed, unhurried |
| Feel | Professional service | Romantic date |`,

      `## Booking Tips for GFE

To get the most from a girlfriend experience:

1. **Book longer** – GFE works best with 2+ hour bookings; overnight is ideal
2. **Plan activities** – Dinner, drinks, or a show before private time builds connection
3. **Be yourself** – GFE escorts appreciate genuine conversation
4. **Relax** – Don't rush; let things develop naturally
5. **Choose carefully** – Look for escorts who specifically mention GFE in their profile`,

      `## Our GFE Escorts

Many of our Bedfordshire escorts specialise in the girlfriend experience. They're chosen for their warmth, conversational skills, and ability to create genuine connections. Browse our escorts and look for the GFE tag, or ask us for recommendations.`,

      `## Ready for the Girlfriend Experience?

Contact us on WhatsApp to book a GFE escort in Bedfordshire. Tell us what you're looking for, and we'll match you with the perfect companion.`
    ],
    relatedGuides: ["first-time-booking-escort-bedfordshire", "preparing-for-escort-date", "escort-etiquette-guide"]
  },

  "escort-etiquette-guide": {
    title: "Escort Etiquette: Do's and Don'ts",
    description: "Essential etiquette tips for meeting an escort in Bedfordshire. How to behave, what to discuss, and how to ensure a positive experience for everyone.",
    content: [
      `## Escort Etiquette Guide

Good etiquette ensures everyone has a positive experience. Whether you're a first-time client or an experienced regular, these guidelines will help you get the most from your escort bookings.`,

      `## The Do's

### Do Communicate Clearly
- Be upfront about what you're looking for when booking
- Ask questions if you're unsure about anything
- Discuss any special requests in advance

### Do Be Punctual
- Be ready at the agreed time
- If running late, let us know immediately
- Respect that escorts have schedules too

### Do Practice Good Hygiene
- Shower before your date
- Brush your teeth
- Wear clean clothes
- Trim nails and groom appropriately

### Do Have Payment Ready
- Prepare the exact amount in cash
- Place it in an envelope or somewhere visible
- Hand it over at the start, not the end
- Don't make your escort ask for it

### Do Treat Her With Respect
- She's a professional providing a service
- Use polite language
- Listen when she speaks
- Respect her as a person`,

      `## The Don'ts

### Don't Haggle
- Rates are non-negotiable
- Trying to reduce the price is disrespectful
- If budget is tight, book less time instead

### Don't Be Pushy
- Respect boundaries at all times
- No means no – don't keep asking
- Don't try to negotiate extra services

### Don't Overstay
- Keep to the agreed booking time
- If you want to extend, ask and agree new terms
- Don't assume extra time is included

### Don't Get Too Personal
- Avoid asking about private life details
- Don't ask for real names or personal numbers
- Keep the professional boundary intact

### Don't Be Under the Influence
- Don't be excessively drunk
- Drugs are an absolute no
- A glass of wine to relax is fine; being wasted is not`,

      `## During the Booking

- **Relax** – Nervousness is normal, but try to enjoy yourself
- **Communicate** – If something isn't working, say so politely
- **Be present** – Put your phone away and focus on the moment
- **Follow her lead** – She's experienced; trust her
- **Give feedback** – Let her know what you enjoy`,

      `## After the Booking

- **Thank her** – A genuine compliment goes a long way
- **Be discreet** – Don't discuss specifics publicly
- **Leave a review** – If you had a great time, consider leaving feedback
- **Book again** – Found your perfect match? Become a regular`,

      `## The Golden Rule

Treat your escort exactly as you would want to be treated. She's a professional, but she's also a person deserving of respect, kindness, and consideration.

Good clients get better experiences. Escorts remember those who treat them well and often go the extra mile for respectful regulars.`
    ],
    relatedGuides: ["first-time-booking-escort-bedfordshire", "preparing-for-escort-date", "what-is-gfe-girlfriend-experience"]
  },

  "best-hotels-luton-escorts": {
    title: "Best Hotels in Luton for Escort Dates",
    description: "Top escort-friendly hotels near Luton Airport and town centre. Discreet, comfortable venues perfect for outcall bookings in Bedfordshire.",
    content: [
      `## Escort-Friendly Hotels in Luton

Looking for the perfect hotel for your escort date in Luton? We've compiled a list of the best options near Luton Airport and the town centre – all known for discretion and comfort.`,

      `## Near Luton Airport

For convenience, especially if you're travelling:

### Luton Hoo Hotel, Golf & Spa
- **Rating:** 5-star luxury
- **Why we recommend it:** Stunning estate setting, exceptional privacy, world-class amenities
- **Perfect for:** Special occasions, overnight stays
- **Address:** The Mansion House, Luton LU1 3TQ

### Hampton by Hilton Luton Airport
- **Rating:** 3-star modern
- **Why we recommend it:** Clean, modern rooms, directly connected to airport
- **Perfect for:** Quick meets, late arrivals
- **Address:** 42 Kimpton Rd, Luton LU2 0NA

### Holiday Inn Express Luton Airport
- **Rating:** 3-star
- **Why we recommend it:** Reliable, comfortable, good value
- **Perfect for:** Budget-conscious bookings
- **Address:** Percival Way, Luton LU2 9GP`,

      `## Luton Town Centre

For those staying in or near the town:

### Premier Inn Luton Town Centre
- **Rating:** 3-star
- **Why we recommend it:** Central location, consistent quality, discreet
- **Perfect for:** Town centre convenience
- **Address:** 2-10 Mill St, Luton LU1 2NA

### Holiday Inn Luton South
- **Rating:** 4-star
- **Why we recommend it:** Spacious rooms, good facilities, easy parking
- **Perfect for:** Longer dates, dinner and overnight
- **Address:** London Rd, Luton LU1 3UT`,

      `## Booking Tips

When booking a hotel for an escort date:

- **Book a room with a king or double bed** – More comfortable than twins
- **Choose hotels with 24-hour reception** – Easier for evening arrivals
- **Avoid B&Bs** – Larger hotels offer more anonymity
- **Don't mention the escort when booking** – Simply book a standard room
- **Check parking** – If your escort is driving, ensure parking is available`,

      `## What to Look For

The best hotels for escort dates have:

- **Discreet check-in** – No awkward questions
- **Good soundproofing** – Privacy matters
- **Room service available** – For drinks or snacks
- **Clean, modern rooms** – Comfort enhances the experience
- **Easy access** – Lifts, accessible corridors`,

      `## Our Recommendation

For the ultimate Luton escort experience, we recommend **Luton Hoo Hotel** for special occasions or **Hampton by Hilton** for convenience. Both offer the discretion and comfort that makes an escort date memorable.

Contact us on WhatsApp to book an escort for your Luton hotel stay.`
    ],
    relatedGuides: ["best-hotels-bedford-escorts", "preparing-for-escort-date", "first-time-booking-escort-bedfordshire"]
  },

  "best-hotels-bedford-escorts": {
    title: "Best Hotels in Bedford for Escort Dates",
    description: "Recommended hotels in Bedford for meeting escorts. Quality accommodation with privacy and discretion for outcall bookings.",
    content: [
      `## Escort-Friendly Hotels in Bedford

Bedford offers several excellent hotels perfect for escort dates. Whether you want a quick meet or an overnight experience, here are our top recommendations.`,

      `## Premium Options

### The Swan Hotel
- **Rating:** 4-star boutique
- **Why we recommend it:** Historic charm, riverside location, excellent restaurant
- **Perfect for:** Dinner dates, romantic overnight stays
- **Address:** The Embankment, Bedford MK40 1RW

### Bedford Lodge Hotel & Spa
- **Rating:** 4-star
- **Why we recommend it:** Spa facilities, spacious rooms, secluded grounds
- **Perfect for:** Longer bookings, relaxed atmosphere
- **Address:** Located just outside Bedford`,

      `## Mid-Range Options

### Park Inn by Radisson Bedford
- **Rating:** 3-star
- **Why we recommend it:** Central location, modern rooms, reliable quality
- **Perfect for:** Convenient town centre meetings
- **Address:** 2 St Mary's St, Bedford MK42 0AS

### Premier Inn Bedford Town Centre
- **Rating:** 3-star
- **Why we recommend it:** Consistent quality, good value, discreet
- **Perfect for:** Budget-conscious but comfortable
- **Address:** St John's St, Bedford MK42 0AH`,

      `## Near the Embankment

Bedford's beautiful Embankment area offers scenic surroundings:

### The Embankment Hotel
- **Why we recommend it:** River views, walking distance to restaurants
- **Perfect for:** Starting with dinner, ending privately`,

      `## Booking Tips for Bedford Hotels

- **Book direct or through booking sites** – Don't mention escort visits
- **Request a quiet room** – Away from lifts and reception
- **Check-in before your escort arrives** – Smoother experience
- **Text your room number** – So she can come straight up
- **Have drinks ready** – Minibar or bring your own`,

      `## Making the Most of Your Stay

Bedford hotels often have:

- **Riverside restaurants** – Perfect for dinner dates before your booking
- **Bars** – Meet your escort for a drink first
- **Room service** – Keep the evening private
- **Good parking** – Important for outcall escorts`,

      `## Our Recommendation

For the best Bedford escort experience, we suggest **The Swan Hotel** for its combination of charm, location, and quality. For value without compromising comfort, **Park Inn by Radisson** is excellent.

Message us on WhatsApp to book an escort for your Bedford hotel stay.`
    ],
    relatedGuides: ["best-hotels-luton-escorts", "preparing-for-escort-date", "first-time-booking-escort-bedfordshire"]
  },

  "outcall-explained": {
    title: "Outcall Escort Services Explained",
    description: "What is outcall? How our Bedfordshire escorts come to you at your home, hotel, or private venue. Understanding our outcall-only service.",
    content: [
      `## What is Outcall?

Outcall means the escort travels to you. At Bedfordshire Escorts Agency, we are an **outcall-only** service – all our escorts come directly to your location rather than you visiting them.`,

      `## How Outcall Works

1. **You choose a location** – Your home, hotel room, or private venue
2. **You book with us** – Tell us where and when
3. **Your escort travels to you** – She arrives at the agreed time
4. **You enjoy your encounter** – In the comfort of your chosen space
5. **She leaves discreetly** – No evidence of the visit`,

      `## Why We're Outcall Only

We chose to operate exclusively as an outcall agency because:

- **Your comfort** – You're relaxed in familiar surroundings
- **Your control** – You set up the environment how you like
- **Maximum discretion** – No one sees you entering an unfamiliar location
- **Convenience** – No travel for you; we come to you
- **Flexibility** – We cover all of Bedfordshire`,

      `## Suitable Locations

Our escorts will visit:

✅ **Hotels** – Any decent hotel in Bedfordshire
✅ **Your home** – House or flat, if private
✅ **Apartments** – Rented accommodation, Airbnbs
✅ **Private offices** – After hours, if discreet

We don't visit:
❌ Public places
❌ Shared accommodation (unless private room)
❌ Vehicles
❌ Anywhere that compromises safety or discretion`,

      `## Outcall Coverage

We cover all of Bedfordshire:

- **Bedford** and surrounding areas
- **Luton** including airport hotels
- **Dunstable** and Houghton Regis
- **Leighton Buzzard** and surrounds
- **All other towns** in our coverage area

Travel time is factored into bookings. For remote locations, a travel fee may apply.`,

      `## Preparing for Outcall

Make your outcall visit go smoothly:

- **Provide clear address details** – Including flat numbers, entry codes
- **Ensure privacy** – Housemates, family members should be out
- **Tidy up** – Clean bathroom, fresh sheets
- **Have payment ready** – Cash in an envelope
- **Be ready on time** – Showered and prepared`,

      `## Outcall Advantages

Compared to incall services:

| Outcall | Incall |
|---------|--------|
| Escort comes to you | You travel to escort |
| Your environment | Unfamiliar space |
| No travel time | Travel time needed |
| Maximum privacy | Potentially less private |
| More relaxed | May feel rushed |`,

      `## Book an Outcall Escort

Ready to experience the convenience of outcall? Contact us on WhatsApp with your location and preferred escort. We'll handle the rest.`
    ],
    relatedGuides: ["first-time-booking-escort-bedfordshire", "best-hotels-luton-escorts", "best-hotels-bedford-escorts"]
  },

  "mature-escorts-guide": {
    title: "Why Choose a Mature Escort?",
    description: "The appeal of experienced companions. Why many clients prefer mature escorts in Bedfordshire and what makes them special.",
    content: [
      `## The Appeal of Mature Escorts

Mature escorts – typically aged 35 and above – offer something unique that younger companions simply cannot replicate. Experience, confidence, and genuine sophistication make them a popular choice for discerning clients.`,

      `## What Sets Mature Escorts Apart

### Experience
Mature escorts have years of experience in companionship. They've perfected their skills, know how to read clients, and understand exactly how to create memorable encounters. There's no awkwardness, no learning curve – just confident, assured service.

### Conversation
With life experience comes depth. Mature escorts can discuss a wide range of topics intelligently – current affairs, business, culture, travel. They're engaging dinner companions who can hold their own in any social situation.

### Confidence
A mature woman is comfortable in her own skin. She knows what she wants, what she enjoys, and isn't afraid to take the lead. This confidence creates a relaxed atmosphere where you can truly unwind.

### No Games
Mature escorts are straightforward. There's no pretence, no drama – just genuine, adult companionship focused on your enjoyment. What you see is what you get.`,

      `## Who Chooses Mature Escorts?

Our mature escorts appeal to:

- **Clients who value conversation** – Those who want more than physical companionship
- **Older gentlemen** – Who prefer a companion closer to their own age
- **Experience seekers** – Those who appreciate skill and expertise
- **Busy professionals** – Who want no-nonsense, quality service
- **First-timers** – Mature escorts often help nervous clients relax`,

      `## What to Expect

When you book a mature escort:

- **Punctuality** – They value time and won't keep you waiting
- **Presentation** – Elegant, sophisticated appearance
- **Engagement** – Genuine interest in you as a person
- **Patience** – No rush, no pressure
- **Expertise** – Years of experience in every aspect`,

      `## Our Mature Escorts

At Bedfordshire Escorts, we have several mature companions who represent the very best of experienced companionship. Each brings her own personality and style, but all share:

- Confidence and sophistication
- Excellent conversation skills
- Proven discretion
- Genuine enjoyment of their work
- Stunning appearance that defies age`,

      `## Booking a Mature Escort

To book one of our mature companions:

1. Browse our escorts and look for age 35+
2. Message us on WhatsApp with your preference
3. Tell us what you're looking for in your encounter
4. We'll match you with the perfect mature companion

Don't underestimate the appeal of experience. Our mature escorts consistently receive the highest praise from clients who discover the difference that sophistication makes.`
    ],
    relatedGuides: ["first-time-booking-escort-bedfordshire", "what-is-gfe-girlfriend-experience", "escort-etiquette-guide"]
  },

  "preparing-for-escort-date": {
    title: "How to Prepare for Your Escort Date",
    description: "Practical tips on grooming, setting the scene, and making a great first impression with your Bedfordshire escort.",
    content: [
      `## Preparing for Your Escort Date

A little preparation goes a long way. Whether it's your first escort experience or your fiftieth, these tips will help you make the most of your booking.`,

      `## Personal Grooming

First impressions matter. Before your escort arrives:

### Hygiene Essentials
- **Shower** – Freshly showered, within an hour of the booking
- **Brush teeth** – Fresh breath is essential
- **Deodorant** – But don't overdo cologne
- **Trim nails** – Clean and short, fingers and toes
- **Shave or trim** – Whatever you normally do, do it freshly

### What to Wear
- Clean, presentable clothes (even if they're coming off)
- Fresh underwear
- Nothing with stains or holes
- If meeting for dinner first, dress appropriately for the venue`,

      `## Setting the Scene

If hosting at your home or hotel:

### Cleanliness
- **Bathroom** – Clean toilet, sink, fresh towels
- **Bedroom** – Fresh sheets, tidy space
- **General tidiness** – First impression of your space matters

### Ambiance
- Comfortable temperature (not too hot or cold)
- Soft lighting (lamps rather than harsh overhead lights)
- Subtle background music if you like
- Clean, fresh air (open windows earlier if needed)

### Essentials Ready
- Payment in cash, in an envelope, visible
- Condoms available (though escorts bring their own)
- Drinks – offer wine, water, soft drinks
- Phone silenced or off`,

      `## Mental Preparation

### Relax
Nervous? That's completely normal. Remember:
- Your escort is a professional who wants you to enjoy yourself
- She's probably met hundreds of clients; nothing will surprise her
- A drink can help, but don't overdo it

### Be Clear on Expectations
- Know what you've booked (duration, services)
- Have any requests already discussed via WhatsApp
- Don't spring surprises on your escort

### Be Present
- Put work thoughts aside
- This is your time – enjoy it
- Turn off your phone`,

      `## Timing

- **Be ready early** – Don't be mid-shower when she arrives
- **Running late?** – Tell us immediately
- **Delayed escort?** – We'll keep you informed
- **Extending?** – Ask before time runs out, not after`,

      `## What to Have Ready

Checklist:
- [ ] Cash payment in envelope
- [ ] Clean towels in bathroom
- [ ] Fresh sheets on bed
- [ ] Drinks available
- [ ] Phone silenced
- [ ] Address/room number ready to share
- [ ] Entry codes if applicable`,

      `## Final Tip

The best preparation is mental: decide to relax and enjoy yourself. Our escorts are professionals who genuinely enjoy their work. When you're comfortable, they're comfortable, and the experience is better for everyone.

Contact us on WhatsApp when you're ready to book.`
    ],
    relatedGuides: ["first-time-booking-escort-bedfordshire", "escort-etiquette-guide", "best-hotels-bedford-escorts"]
  }
};

const guidesList = [
  { slug: "first-time-booking-escort-bedfordshire", title: "First Time Booking an Escort" },
  { slug: "what-is-gfe-girlfriend-experience", title: "What is GFE?" },
  { slug: "escort-etiquette-guide", title: "Escort Etiquette Guide" },
  { slug: "best-hotels-luton-escorts", title: "Best Hotels in Luton" },
  { slug: "best-hotels-bedford-escorts", title: "Best Hotels in Bedford" },
  { slug: "outcall-explained", title: "Outcall Services Explained" },
  { slug: "mature-escorts-guide", title: "Why Choose a Mature Escort?" },
  { slug: "preparing-for-escort-date", title: "Preparing for Your Date" },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${guide.title} | Bedfordshire Escorts Agency`,
    description: guide.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  const relatedGuides = guidesList.filter(g => guide.relatedGuides.includes(g.slug));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm mb-4 inline-block">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            {guide.title}
          </h1>
          <p className="text-xl text-gray-300">
            {guide.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-invert prose-amber max-w-none">
            {guide.content.map((section, index) => (
              <div 
                key={index} 
                className="mb-8 text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: section
                    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-playfair font-bold text-amber-400 mt-8 mb-4">$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-white mt-6 mb-3">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
                    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc list-inside space-y-1 my-4">$&</ul>')
                    .replace(/^\d\. (.*$)/gm, '<li class="ml-4">$1</li>')
                    .replace(/✅/g, '<span class="text-green-500">✅</span>')
                    .replace(/❌/g, '<span class="text-red-500">❌</span>')
                    .replace(/\n\n/g, '</p><p class="my-4">')
                }}
              />
            ))}
          </article>

          {/* CTA */}
          <div className="mt-12 card-elegant text-center">
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              Ready to Book?
            </h3>
            <p className="text-gray-400 mb-6">
              Contact us on WhatsApp to arrange your escort experience in Bedfordshire.
            </p>
            <a
              href="https://wa.me/447424783087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-12 section-gradient">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-playfair font-bold text-white mb-6">
              Related <span className="text-amber-400">Guides</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="card-elegant group text-center"
                >
                  <span className="text-white group-hover:text-amber-400 transition-colors font-semibold">
                    {g.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
