import ContactInformation from "../components/contact-page/ContactInformation"
import MessageUs from "../components/contact-page/MessageUs"
import { Helmet } from "react-helmet-async"
import { contact, metaData } from "../assets/simulateCMS" // Replace with CMS


function ContactPage() {
  // SEO metadata
  const rawBaseUrl = window.location.origin
  const baseUrl = rawBaseUrl.replace(/\/+$/, "")
  const fullPath = baseUrl + window.location.pathname
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl},
      {"@type": "ListItem", "position": 2, "name": "Contact", "item": `${baseUrl}/contact`}
    ]
  }
  const contactData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Brimedge",
    "description": "Reach out to Brimedge for inquiries, quotes, or collaborations.",
    "url": `${baseUrl}/contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Brimedge",
      "url": baseUrl,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": contact.phone[0],
          "contactType": "customer service",
          "areaServed": "NG",
          "availableLanguage": ["en"]
        },
        {
          "@type": "ContactPoint",
          "email": contact.email[0],
          "contactType": "sales",
          "areaServed": "NG",
          "availableLanguage": ["en"]
        }
      ]
    }
  }

  return (
    <>
      {/* SEO metadata */}
      <Helmet>
        <title>{metaData.contact.title}</title>
        <meta name="description" content={metaData.contact.description} />
        <link rel="canonical" href={fullPath} />

        <meta property="og:title" content={metaData.contact.ogTitle} />
        <meta
          property="og:description"
          content={metaData.contact.ogDescription}
        />
        <meta property="og:image" content={metaData.contact.ogImage} />
        <meta property="og:url" content={fullPath} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactData)}
        </script>
      </Helmet>
      <main className="bg-gradient-to-br from-brim-blue/5 via-white to-edge-green/5">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-14 overflow-hidden">
          <div className="min-h-[100vh] grid lg:grid-cols-[1fr_2.1fr] gap-x-[40px] gap-y-[60px] items-start">
            <ContactInformation />
            <MessageUs />
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactPage
