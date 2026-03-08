import type { WithContext, LocalBusiness, Service, FAQPage } from "schema-dts";
import { siteConfig } from "@/lib/config";

// ── LocalBusiness Schema ──────────────────────────────────────────────
const localBusiness: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    description: siteConfig.seo.description,
    address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country,
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map(area => ({ "@type": "Place", name: area })),
    image: siteConfig.ogImage,
    logo: siteConfig.logo,
    priceRange: "$$",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "4",
        bestRating: "5",
    },
    sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.facebook,
    ],
};

// ── Service Schemas ───────────────────────────────────────────────────
const services: WithContext<Service>[] = siteConfig.mainServices.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: "Southeast Manitoba",
    serviceType: service.type,
}));

// ── FAQ Schema ────────────────────────────────────────────────────────
const faqPage: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map(faq => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
        },
    })),
};

// ── Component ─────────────────────────────────────────────────────────
export default function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
                }}
            />
            {services.map((service, i) => (
                <script
                    key={`service-${i}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(service).replace(/</g, "\\u003c"),
                    }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqPage).replace(/</g, "\\u003c"),
                }}
            />
        </>
    );
}
