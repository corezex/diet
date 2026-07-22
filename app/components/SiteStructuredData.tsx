const SITE_URL = "https://dietfiniti.com";

/**
 * One authoritative entity graph for the practice. Keep factual business
 * details here so name, phone, address and social profiles stay consistent.
 * Do not add ratings or awards unless they are verifiable and displayed.
 */
export function SiteStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "DietFiniti",
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": ["Organization", "LocalBusiness", "DietNutrition"],
        "@id": `${SITE_URL}/#organization`,
        name: "DietFiniti",
        alternateName: "DietFiniti by Dietitian Tejal",
        url: SITE_URL,
        logo: `${SITE_URL}/image/logo.png`,
        image: `${SITE_URL}/image/logo.png`,
        description:
          "Personalized nutrition consultation and Indian meal planning for weight management, pregnancy, sports nutrition and lifestyle health.",
        telephone: "+91-93210-57899",
        email: "dietfiniti@gmail.com",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400013",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.994891,
          longitude: 72.831515,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "11:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "11:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" },
        ],
        availableLanguage: ["English", "Hindi", "Marathi"],
        sameAs: [
          "https://www.facebook.com/dieticiantejal",
          "https://www.instagram.com/dieticiantejal/",
          "https://www.pinterest.com/dieticiantejal/",
        ],
        founder: {
          "@type": "Person",
          name: "Dietitian Tejal",
          jobTitle: "Founder and Dietitian",
          worksFor: { "@id": `${SITE_URL}/#organization` },
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
