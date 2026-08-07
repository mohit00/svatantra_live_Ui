import Head from "next/head";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.svatantramicrofin.com/#organization",
    "name": "Svatantra Microfin Limited",
    "alternateName": [
      "Svatantra Microfinance",
      "Svatantra"
    ],
    "url": "https://www.svatantramicrofin.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.svatantramicrofin.com/_next/static/media/header_logo.224055b5.svg"
    },
    "image": "https://www.svatantramicrofin.com/_next/static/media/og-image.32805c8f.jpg",
    "description":
      "Svatantra Microfin is an RBI-registered NBFC-MFI providing collateral-free microfinance loans to rural and semi-urban women entrepreneurs across India. It was the first institution to receive an NBFC-MFI licence from the Reserve Bank of India.",
    "slogan": "Building the Entrepreneurs who power India’s economy",
    "foundingDate": "2012",
    "founder": {
      "@type": "Person",
      "name": "Ananya Birla",
      "jobTitle": "Founder and Chairperson",
      "sameAs": "https://www.ananyabirla.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Microfinance",
      "NBFC-MFI",
      "Financial inclusion",
      "Collateral-free loans for women",
      "Joint Liability Group loans",
      "Rural women entrepreneurship"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "Sunshine Tower, 20th Floor, Senapati Bapat Marg, Elphinstone Road (West)",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400013",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-1800-267-9911",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    ],
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "CIN",
      "value": "U74120MH2012PLC227069"
    },
    "sameAs": [
      "https://www.linkedin.com/company/svatantra-microfin-pvt-ltd",
      "https://x.com/WeAreSvatantra",
      "https://www.facebook.com/svatantramicrofinance",
      "https://www.instagram.com/wearesvatantra",
      "https://www.youtube.com/channel/UCDN7Vupq3kJt5PRjjkffytA"
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </Head>
  );
}