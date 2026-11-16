# Devra Clinic & Diagnostics — Full Project Snapshot

> Complete, restore-able snapshot of the custom one-page marketing site built on
> top of the starter Astro template. Everything below was **uncommitted** working
> work; this file is the sole backup. To rebuild the site, recreate the files in
> the exact paths shown using the code blocks here.

## Overview & stack

- **What it is:** single-page marketing website for *Devra Clinic & Diagnostics*, a clinic and diagnostic centre in Ranchi, Jharkhand, India.
- **Framework:** Astro 7 (static output, all `.astro`, no framework components).
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin. Design tokens defined in `src/styles/global.css` under `@theme`.
- **SEO:** `@astrojs/sitemap`, canonical URLs, Open Graph/Twitter meta, geo meta, `MedicalClinic` + `FAQPage` JSON-LD, `robots.txt`, Ranchi keyword targeting.
- **Fonts:** Inter (Google Fonts).
- **Bookings:** funnel to WhatsApp (+91 70334 07345). A native `<dialog>` collects patient details and opens WhatsApp with a pre-filled message; the plain `wa.me` href is the no-JS fallback.
- **Content architecture:** `src/data/site.ts` is the single source of truth — page copy, SEO, and structured data all read from it.

### Page composition (`src/pages/index.astro`)
`Layout` › `TopBar` › `Header` › `main`( `Hero`, `TrustStrip`, `Services`, `WhyChooseUs`, `Doctors`, `About`, `Faq`, `ContactInfo` ) › `Footer` › `BookingModal`.

### File map (custom files added on top of the starter)
```
astro.config.mjs                         (modified: site + sitemap + tailwind vite)
package.json / package-lock.json         (modified: added deps below)
public/favicon.svg                       (modified)
public/robots.txt                        (new)
src/layouts/Layout.astro                 (rewritten)
src/pages/index.astro                    (rewritten)
src/styles/global.css                    (new — design system)
src/data/site.ts                         (new — all content)
src/components/ui/Button.astro
src/components/ui/Icon.astro
src/components/ui/Section.astro
src/components/ui/SectionHeading.astro
src/components/ui/Wordmark.astro
src/components/sections/TopBar.astro
src/components/sections/Header.astro
src/components/sections/Hero.astro
src/components/sections/TrustStrip.astro
src/components/sections/Services.astro
src/components/sections/ServiceCard.astro
src/components/sections/WhyChooseUs.astro
src/components/sections/Doctors.astro
src/components/sections/DoctorCard.astro
src/components/sections/About.astro
src/components/sections/Faq.astro
src/components/sections/ContactInfo.astro
src/components/sections/Footer.astro
src/components/sections/BookingModal.astro
```

### Pre-launch placeholders still to confirm
- `clinic.establishedYear` — real "serving Ranchi since" year (currently `[YEAR]`)
- `clinic.doctor` — lead doctor name + qualification
- `clinic.labAccreditation` — real accreditation body / partner lab
- `doctors[]` — the three doctors (name, role, qualification, bio)
- `hours` — real opening times (also feed the SEO schema; currently placeholders)
- `seo.siteUrl` / `astro.config.mjs` `site` — live domain once registered (assumed `https://devraclinicranchi.com`)

### Confirmed contact / location facts
- **Phone / WhatsApp:** +91 70334 07345 (`tel:+917033407345`, `wa.me/917033407345`)
- **Email:** devraclinicranchi@gmail.com
- **Address:** Shop No. G5, Ground Floor, Pitamber Estate, Khelgaon More, Deepatoli, Jai Prakash Nagar, Ranchi, Jharkhand 834012, IN

---

## Dependencies (package.json)

Added dependencies (on top of the Astro starter):

```json
{
  "dependencies": {
    "@astrojs/sitemap": "^3.7.3",
    "@tailwindcss/vite": "^4.3.2",
    "astro": "^7.0.4",
    "tailwindcss": "^4.3.2"
  }
}
```

Engines: `"node": ">=22.12.0"`. Name: `devra-clinic-web`.

---

## astro.config.mjs

```js
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace `site` with the live domain once registered (used for canonical
// URLs and the generated sitemap).
// https://astro.build/config
export default defineConfig({
	site: 'https://devraclinicranchi.com',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
```

---

## public/robots.txt

```
User-agent: *
Allow: /

Sitemap: https://devraclinicranchi.com/sitemap-index.xml
```

---

## src/styles/global.css

```css
@import "tailwindcss";

/*
 * Devra Clinic - Design System
 * Clean & clinical: generous whitespace, crisp reddish accents, modern sans-serif.
 * All design tokens live here as Tailwind v4 theme variables so the whole site
 * can be re-themed from one place. Use them via utilities like `bg-brand`,
 * `text-ink-muted`, `rounded-card`, `shadow-card`, `max-w-content`, etc.
 */
@theme {
	/* Brand - clinical red */
	--color-brand: #c1272d;
	--color-brand-dark: #8e1b20;
	--color-brand-darker: #6f1418;
	--color-brand-tint: #fbeaea;
	--color-brand-tint-strong: #f6d6d7;

	/* Ink / neutrals */
	--color-ink: #1a1c1e;
	--color-ink-muted: #5b6066;
	--color-ink-subtle: #8a9099;
	--color-surface: #ffffff;
	--color-surface-alt: #f7f8fa;
	--color-line: #e6e8ec;

	/* Typography */
	--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI",
		Roboto, Helvetica, Arial, sans-serif;

	/* Radius scale */
	--radius-card: 1rem;
	--radius-pill: 9999px;

	/* Shadows */
	--shadow-card: 0 1px 2px rgba(26, 28, 30, 0.04),
		0 8px 24px rgba(26, 28, 30, 0.06);
	--shadow-card-hover: 0 2px 4px rgba(26, 28, 30, 0.06),
		0 16px 40px rgba(193, 39, 45, 0.12);

	/* Layout */
	--spacing-content: 72rem; /* max content width via max-w-content */
}

@layer base {
	html {
		scroll-behavior: smooth;
		-webkit-text-size-adjust: 100%;
	}

	body {
		font-family: var(--font-sans);
		color: var(--color-ink);
		background-color: var(--color-surface);
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}

	/* Visible, on-brand focus ring for keyboard users */
	:focus-visible {
		outline: 2px solid var(--color-brand);
		outline-offset: 2px;
		border-radius: 4px;
	}
}
```

---

## src/data/site.ts

```ts
/**
 * Devra Clinic - central site content (single source of truth).
 *
 * Replace every value wrapped in [SQUARE BRACKETS] with the clinic's real
 * detail before launch. Everything on the page and in the SEO/structured data
 * reads from here, so you only edit once.
 *
 * IMPORTANT pre-launch placeholders still to confirm:
 *   - clinic.establishedYear   (the real "serving Ranchi since" year)
 *   - clinic.doctor            (lead doctor name + qualification)
 *   - clinic.labAccreditation  (the real accreditation body or lab partner)
 *   - hours                    (real opening times, also used in SEO schema)
 *   - seo.siteUrl              (the live domain once registered)
 */

export const clinic = {
	name: "Devra Clinic & Diagnostics",
	shortName: "Devra Clinic",

	// Location-rich tagline for both humans and search engines.
	tagline: "Trusted clinic & diagnostic centre in Ranchi",
	subheading:
		"Doctor consultations, physiotherapy, lab diagnostics, pharmacy and adult vaccination for families across Ranchi, all under one roof.",
	intro:
		"Devra Clinic & Diagnostics is a trusted healthcare centre in Ranchi. From everyday consultations to reliable lab reports and medicines, we help families get the care they need close to home.",

	/* ---- Confirmed-true trust facts (specific values still to provide) ---- */
	establishedYear: "[YEAR]", // e.g. 2019 -> renders "Serving Ranchi since 2019"
	doctor: {
		name: "[Dr. Full Name]",
		qualification: "[MBBS, MD]",
	},
	labAccreditation: "[accreditation body / partner lab name]",

	/* ---- Contact ---- */
	phoneDisplay: "+91 70334 07345",
	phoneHref: "tel:+917033407345",
	whatsappDisplay: "+91 70334 07345",
	whatsappHref: "https://wa.me/917033407345",
	whatsappNumber: "917033407345", // digits only, used to build booking links
	email: "devraclinicranchi@gmail.com",

	/* ---- Address (Ranchi) ---- */
	address: {
		line1: "Shop No. G5, Ground Floor, Pitamber Estate, Khelgaon More",
		line2: "Deepatoli, Jai Prakash Nagar",
		locality: "Ranchi",
		region: "Jharkhand",
		postalCode: "834012",
		country: "IN",
	},
	mapsHref:
		"https://www.google.com/maps/search/?api=1&query=Devra+Clinic+Pitamber+Estate+Khelgaon+More+Deepatoli+Jai+Prakash+Nagar+Ranchi+Jharkhand+834012",
} as const;

/**
 * Opening hours. `opens`/`closes` use 24-hour HH:MM for the SEO schema.
 * NOTE: these are PLACEHOLDER timings - confirm the real hours before launch,
 * they appear both on the page and in Google's structured data.
 */
export const hours = [
	{
		label: "Monday to Saturday",
		display: "9:00 AM to 9:00 PM",
		days: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		opens: "09:00",
		closes: "21:00",
	},
	{
		label: "Sunday",
		display: "10:00 AM to 2:00 PM",
		days: ["Sunday"],
		opens: "10:00",
		closes: "14:00",
	},
] as const;

export type Service = {
	name: string;
	description: string;
	icon: "stethoscope" | "physio" | "diagnostics" | "pharmacy" | "vaccine";
};

export const services: Service[] = [
	{
		name: "Physician Consultation",
		description:
			"Experienced doctors in Ranchi for fevers, infections, diabetes, blood pressure and everyday health concerns.",
		icon: "stethoscope",
	},
	{
		name: "Physiotherapy",
		description:
			"Targeted rehabilitation for back pain, joint pain, injury and mobility, guided by trained physiotherapists.",
		icon: "physio",
	},
	{
		name: "Diagnostics & Lab Tests",
		description:
			"Accurate blood tests, health screenings and pathology reports with quick, dependable turnaround.",
		icon: "diagnostics",
	},
	{
		name: "Pharmacy",
		description:
			"An in-house pharmacy so you can collect prescribed medicines before you leave the clinic.",
		icon: "pharmacy",
	},
	{
		name: "Adult Vaccination",
		description:
			"Recommended adult immunisations administered safely by our clinical team.",
		icon: "vaccine",
	},
];

export type Doctor = {
	name: string;
	role: string;
	qualification: string;
	bio: string;
};

/**
 * Our doctors / clinical team (3 doctors). PLACEHOLDER entries - replace each
 * name, role/specialty, qualification and bio with the real details. Add or
 * remove objects from this array to change how many cards show.
 */
export const doctors: Doctor[] = [
	{
		name: "[Dr. Full Name 1]",
		role: "[Specialty / Role]",
		qualification: "[Qualification]",
		bio: "[One line about this doctor's focus or experience.]",
	},
	{
		name: "[Dr. Full Name 2]",
		role: "[Specialty / Role]",
		qualification: "[Qualification]",
		bio: "[One line about this doctor's focus or experience.]",
	},
	{
		name: "[Dr. Full Name 3]",
		role: "[Specialty / Role]",
		qualification: "[Qualification]",
		bio: "[One line about this doctor's focus or experience.]",
	},
];

export type TrustPoint = {
	title: string;
	description: string;
	icon: "doctor" | "lab" | "clinic" | "wallet";
};

export const trustPoints: TrustPoint[] = [
	{
		title: "Qualified doctors",
		description:
			"Care led by a qualified medical team focused on careful diagnosis and clear, honest advice.",
		icon: "doctor",
	},
	{
		title: "Accredited diagnostics",
		description:
			"An accredited, quality-checked lab so your test reports are accurate and dependable.",
		icon: "lab",
	},
	{
		title: "One-stop care",
		description:
			"Consult, test, treat and collect medicines in a single visit, without running across the city.",
		icon: "clinic",
	},
	{
		title: "Affordable & local",
		description:
			"Transparent pricing at a welcoming clinic right here in Ranchi.",
		icon: "wallet",
	},
];

/** Short credibility chips shown under the hero. */
export const trustChips: string[] = [
	"Qualified doctors",
	"Accredited lab",
	"Walk-ins welcome",
	"Open 7 days",
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
	{
		question: "Where is Devra Clinic located in Ranchi?",
		answer:
			"We are at Shop No. G5, Ground Floor, Pitamber Estate, Ranchi, Jharkhand 834012. We are centrally located and easy to reach from across the city.",
	},
	{
		question: "What services does Devra Clinic & Diagnostics offer?",
		answer:
			"We offer physician consultations, physiotherapy, diagnostic and lab tests, an in-house pharmacy and adult vaccination, so most of your family's healthcare needs are handled in one place.",
	},
	{
		question: "Do I need an appointment or can I walk in?",
		answer:
			"Both work. You are welcome to walk in during opening hours, or book ahead on WhatsApp so we can keep your slot ready and reduce your waiting time.",
	},
	{
		question: "Do you serve patients from across Ranchi?",
		answer:
			"Yes. Patients visit us from all over Ranchi for consultations, diagnostics, pharmacy and vaccination. We are centrally located and easy to reach.",
	},
	{
		question: "Can I get blood tests and reports done here?",
		answer:
			"Yes. Our diagnostics and lab service covers common blood tests and health screenings, with accurate reports and a quick turnaround.",
	},
	{
		question: "How do I book an appointment?",
		answer:
			"Tap any 'Book Appointment' button to share a few details, and we will continue on WhatsApp. You can also call us directly during opening hours.",
	},
];

export const nav = [
	{ label: "Services", href: "#services" },
	{ label: "Why Us", href: "#why-us" },
	{ label: "Doctors", href: "#doctors" },
	{ label: "About", href: "#about" },
	{ label: "FAQ", href: "#faq" },
	{ label: "Visit Us", href: "#contact" },
] as const;

/** SEO / site-wide config. */
export const seo = {
	// Replace with the live domain once registered (used for canonical + OG).
	siteUrl: "https://devraclinicranchi.com",
	title:
		"Devra Clinic & Diagnostics | Clinic & Diagnostic Centre in Ranchi",
	description:
		"Devra Clinic & Diagnostics in Ranchi offers doctor consultations, physiotherapy, blood tests & diagnostics, pharmacy and adult vaccination. Walk in or book on WhatsApp.",
	keywords: [
		"clinic in Ranchi",
		"diagnostic centre in Ranchi",
		"doctor in Ranchi",
		"diagnostic lab in Ranchi",
		"physiotherapy in Ranchi",
		"blood test lab in Ranchi",
		"pathology lab Ranchi",
		"pharmacy in Ranchi",
		"adult vaccination Ranchi",
		"best clinic in Ranchi",
	],
} as const;
```

---

## src/layouts/Layout.astro

```astro
---
import "../styles/global.css";
import { clinic, hours, faqs, seo } from "../data/site.ts";

interface Props {
	title?: string;
	description?: string;
}

const { title = seo.title, description = seo.description } = Astro.props;

const canonical = new URL(Astro.url.pathname, seo.siteUrl).href;
const fullStreet = `${clinic.address.line1}, ${clinic.address.line2}`;

// MedicalClinic structured data for Google local search.
const clinicSchema = {
	"@context": "https://schema.org",
	"@type": "MedicalClinic",
	"@id": `${seo.siteUrl}/#clinic`,
	name: clinic.name,
	url: seo.siteUrl,
	image: `${seo.siteUrl}/favicon.svg`,
	telephone: clinic.phoneHref.replace("tel:", ""),
	email: clinic.email,
	priceRange: "₹₹",
	currenciesAccepted: "INR",
	address: {
		"@type": "PostalAddress",
		streetAddress: fullStreet,
		addressLocality: clinic.address.locality,
		addressRegion: clinic.address.region,
		postalCode: clinic.address.postalCode,
		addressCountry: clinic.address.country,
	},
	areaServed: { "@type": "City", name: "Ranchi" },
	hasMap: clinic.mapsHref,
	availableService: [
		{ "@type": "MedicalProcedure", name: "Physician Consultation" },
		{ "@type": "MedicalTherapy", name: "Physiotherapy" },
		{ "@type": "MedicalTest", name: "Diagnostics & Lab Tests" },
		{ "@type": "MedicalProcedure", name: "Adult Vaccination" },
	],
	openingHoursSpecification: hours.map((h) => ({
		"@type": "OpeningHoursSpecification",
		dayOfWeek: h.days,
		opens: h.opens,
		closes: h.closes,
	})),
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map((f) => ({
		"@type": "Question",
		name: f.question,
		acceptedAnswer: { "@type": "Answer", text: f.answer },
	})),
};
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />

		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="keywords" content={seo.keywords.join(", ")} />
		<link rel="canonical" href={canonical} />

		<!-- Local / geo signals -->
		<meta name="geo.region" content="IN-JH" />
		<meta name="geo.placename" content="Ranchi, Jharkhand" />

		<!-- Open Graph -->
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content={clinic.name} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:url" content={canonical} />
		<meta property="og:locale" content="en_IN" />

		<!-- Twitter -->
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />

		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			rel="stylesheet"
		/>

		<!-- Structured data -->
		<script
			type="application/ld+json"
			set:html={JSON.stringify(clinicSchema)}
		/>
		<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
	</head>
	<body>
		<slot />
	</body>
</html>
```

---

## src/pages/index.astro

```astro
---
import Layout from "../layouts/Layout.astro";
import TopBar from "../components/sections/TopBar.astro";
import Header from "../components/sections/Header.astro";
import Hero from "../components/sections/Hero.astro";
import TrustStrip from "../components/sections/TrustStrip.astro";
import Services from "../components/sections/Services.astro";
import WhyChooseUs from "../components/sections/WhyChooseUs.astro";
import Doctors from "../components/sections/Doctors.astro";
import About from "../components/sections/About.astro";
import Faq from "../components/sections/Faq.astro";
import ContactInfo from "../components/sections/ContactInfo.astro";
import Footer from "../components/sections/Footer.astro";
import BookingModal from "../components/sections/BookingModal.astro";
---

<Layout>
	<TopBar />
	<Header />
	<main>
		<Hero />
		<TrustStrip />
		<Services />
		<WhyChooseUs />
		<Doctors />
		<About />
		<Faq />
		<ContactInfo />
	</main>
	<Footer />
	<BookingModal />
</Layout>
```

---

## src/components/ui/Button.astro

```astro
---
/**
 * Button - link styled as a button. Variants and sizes keep CTAs consistent.
 */
interface Props {
	href: string;
	variant?: "primary" | "outline" | "ghost";
	size?: "md" | "lg";
	class?: string;
	[key: string]: unknown;
}

const {
	href,
	variant = "primary",
	size = "md",
	class: className = "",
	...rest
} = Astro.props;

const base =
	"inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-colors duration-200 focus-visible:outline-none";

const variants = {
	primary: "bg-brand text-white hover:bg-brand-dark",
	outline: "border border-brand text-brand hover:bg-brand-tint",
	ghost: "text-ink hover:text-brand",
};

const sizes = {
	md: "px-5 py-2.5 text-sm",
	lg: "px-7 py-3.5 text-base",
};
---

<a
	href={href}
	class={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
	{...rest}
>
	<slot />
</a>
```

---

## src/components/ui/Icon.astro

```astro
---
/**
 * Icon - single home for all inline line icons used across the site.
 * Stroke-based, inherits `currentColor`, sized via the `class` prop.
 * Add new icons by extending the `paths` map below.
 */
interface Props {
	name:
		| "stethoscope"
		| "physio"
		| "diagnostics"
		| "pharmacy"
		| "vaccine"
		| "doctor"
		| "lab"
		| "clinic"
		| "wallet"
		| "phone"
		| "whatsapp"
		| "mail"
		| "clock"
		| "pin"
		| "cross"
		| "arrow-right"
		| "check";
	class?: string;
}

const { name, class: className = "h-6 w-6" } = Astro.props;

// Each entry is the inner markup of a 24x24 viewBox icon.
const paths: Record<string, string> = {
	stethoscope:
		'<path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M10 17a6 6 0 0 0 6-6" /><circle cx="18" cy="9" r="2" /><path d="M4 3H6M14 3h2" />',
	physio:
		'<circle cx="12" cy="4" r="2" /><path d="M12 7v6m0 0 4 4m-4-4-4 2m4-8 5 2m-10 0 1 2" />',
	diagnostics:
		'<path d="M9 3h6M10 3v5l-4.5 9A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 8V3" /><path d="M7 14h10" />',
	pharmacy:
		'<rect x="3" y="3" width="18" height="18" rx="3" /><path d="M12 8v8M8 12h8" />',
	vaccine:
		'<path d="m18 2 4 4M17 3l4 4-9 9-4 1 1-4 8-8z" /><path d="m9 11 4 4M7 13l-4 4 3 3 4-4" />',
	doctor:
		'<circle cx="12" cy="7" r="3" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /><path d="M12 14v3m-1.5-1.5h3" />',
	lab: '<path d="M9 3v6l-5 8a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-5-8V3" /><path d="M8 3h8" /><circle cx="11" cy="16" r="1" /><circle cx="14" cy="13" r="1" />',
	clinic:
		'<path d="M3 21V9l9-6 9 6v12" /><path d="M3 21h18" /><path d="M12 7v4m-2-2h4" /><path d="M9 21v-5h6v5" />',
	wallet:
		'<rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16" cy="14" r="1.3" />',
	phone:
		'<path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />',
	whatsapp:
		'<path d="M3 21l1.5-5A8 8 0 1 1 8 19.5L3 21z" /><path d="M9 9c0 4 3 6 6 6 .5 0 1-1 1-1.5L14 12l-1.5 1c-1-.5-2-1.5-2.5-2.5L11 9 9.5 7.5C9 7.5 9 8 9 9z" />',
	mail: '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />',
	clock: '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />',
	pin: '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />',
	cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />',
	"arrow-right": '<path d="M5 12h14M13 6l6 6-6 6" />',
	check: '<path d="m5 13 4 4L19 7" />',
};
---

<svg
	class={className}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	set:html={paths[name]}
/>
```

---

## src/components/ui/Section.astro

```astro
---
/**
 * Section - consistent vertical rhythm and centered, max-width content.
 * `tone` switches the background; `id` enables anchor navigation.
 */
interface Props {
	id?: string;
	tone?: "surface" | "alt" | "tint";
	class?: string;
}

const { id, tone = "surface", class: className = "" } = Astro.props;

const tones = {
	surface: "bg-surface",
	alt: "bg-surface-alt",
	tint: "bg-brand-tint",
};
---

<section id={id} class={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}>
	<div class="mx-auto w-full max-w-content px-5 sm:px-8">
		<slot />
	</div>
</section>
```

---

## src/components/ui/SectionHeading.astro

```astro
---
/**
 * SectionHeading - eyebrow + title + optional subtitle, used to open sections.
 */
interface Props {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	align?: "center" | "left";
}

const { eyebrow, title, subtitle, align = "center" } = Astro.props;

const alignment =
	align === "center" ? "text-center mx-auto" : "text-left";
---

<div class={`max-w-2xl ${alignment}`}>
	{
		eyebrow && (
			<p class="text-sm font-semibold uppercase tracking-wider text-brand">
				{eyebrow}
			</p>
		)
	}
	<h2 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
		{title}
	</h2>
	{
		subtitle && (
			<p class="mt-4 text-lg leading-relaxed text-ink-muted">{subtitle}</p>
		)
	}
</div>
```

---

## src/components/ui/Wordmark.astro

```astro
---
/**
 * Wordmark - text-based brand mark (no logo asset exists yet).
 * A small medical-cross glyph + "Devra" in brand red and a muted suffix.
 * `tone="light"` renders on dark backgrounds (e.g. footer).
 */
import Icon from "./Icon.astro";

interface Props {
	tone?: "default" | "light";
	class?: string;
}

const { tone = "default", class: className = "" } = Astro.props;

const suffixColor = tone === "light" ? "text-white/70" : "text-ink-muted";
const primaryColor = tone === "light" ? "text-white" : "text-brand";
---

<a
	href="#top"
	class={`group inline-flex items-center gap-2.5 ${className}`}
	aria-label="Devra Clinic & Diagnostics, home"
>
	<span
		class="flex h-9 w-9 items-center justify-center rounded-card bg-brand text-white transition-transform duration-200 group-hover:scale-105"
	>
		<Icon name="cross" class="h-5 w-5" />
	</span>
	<span class="text-lg font-extrabold leading-none tracking-tight">
		<span class={primaryColor}>Devra</span>
		<span class={`block text-xs font-semibold ${suffixColor}`}>
			Clinic &amp; Diagnostics
		</span>
	</span>
</a>
```

---

## src/components/sections/TopBar.astro

```astro
---
/**
 * TopBar - thin utility strip above the header: location, open days and a
 * click-to-call number. Reinforces "real local clinic" trust at first glance.
 */
import Icon from "../ui/Icon.astro";
import { clinic } from "../../data/site.ts";
---

<div class="bg-brand-darker text-white">
	<div
		class="mx-auto flex h-9 w-full max-w-content items-center justify-between gap-4 px-5 text-xs sm:px-8"
	>
		<span class="inline-flex min-w-0 items-center gap-1.5">
			<Icon name="pin" class="h-3.5 w-3.5 shrink-0" />
			<span class="truncate">Ranchi, Jharkhand</span>
		</span>
		<span class="hidden items-center gap-1.5 whitespace-nowrap sm:inline-flex">
			<Icon name="clock" class="h-3.5 w-3.5" />
			Open 7 days a week
		</span>
		<a
			href={clinic.phoneHref}
			class="inline-flex shrink-0 items-center gap-1.5 font-semibold whitespace-nowrap transition-colors hover:text-white/80"
		>
			<Icon name="phone" class="h-3.5 w-3.5" />
			{clinic.phoneDisplay}
		</a>
	</div>
</div>
```

---

## src/components/sections/Header.astro

```astro
---
/**
 * Header - sticky top bar: wordmark, anchor nav, click-to-call, and a primary
 * "Book Appointment" CTA. Nav links collapse on small screens; the call link
 * and CTA stay reachable.
 */
import Wordmark from "../ui/Wordmark.astro";
import Button from "../ui/Button.astro";
import Icon from "../ui/Icon.astro";
import { clinic, nav } from "../../data/site.ts";
---

<header
	class="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur"
>
	<div
		class="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5 sm:px-8"
	>
		<Wordmark />

		<nav aria-label="Primary" class="hidden items-center gap-8 md:flex">
			{
				nav.map((item) => (
					<a
						href={item.href}
						class="text-sm font-medium text-ink-muted transition-colors hover:text-brand"
					>
						{item.label}
					</a>
				))
			}
		</nav>

		<div class="flex items-center gap-3">
			<a
				href={clinic.phoneHref}
				class="hidden items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand sm:inline-flex"
			>
				<Icon name="phone" class="h-4 w-4 text-brand" />
				{clinic.phoneDisplay}
			</a>
			<Button href={clinic.whatsappHref} data-booking-trigger="true">
				Book Appointment
			</Button>
		</div>
	</div>
</header>
```

---

## src/components/sections/Hero.astro

```astro
---
/**
 * Hero - two-column intro. Left: location-rich headline, supporting copy,
 * CTAs and trust chips. Right: a "visit us" info card with quick facts that
 * make the clinic feel real and local (hours, address, credentials).
 */
import Button from "../ui/Button.astro";
import Icon from "../ui/Icon.astro";
import { clinic, hours, trustChips } from "../../data/site.ts";
---

<section id="top" class="relative overflow-hidden bg-surface">
	<!-- subtle brand accent -->
	<div
		class="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-tint blur-3xl"
		aria-hidden="true"
	>
	</div>

	<div
		class="relative mx-auto grid w-full max-w-content gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
	>
		<!-- left: message -->
		<div>
			<p
				class="inline-flex items-center gap-2 rounded-pill bg-brand-tint px-4 py-1.5 text-sm font-semibold text-brand-dark"
			>
				<Icon name="clinic" class="h-4 w-4" />
				Your neighbourhood clinic in Ranchi
			</p>

			<h1
				class="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl"
			>
				{clinic.tagline}
			</h1>

			<p class="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
				{clinic.subheading}
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-4">
				<Button href={clinic.whatsappHref} size="lg" data-booking-trigger="true">
					Book Appointment
					<Icon name="arrow-right" class="h-4 w-4" />
				</Button>
				<Button href={clinic.phoneHref} variant="outline" size="lg">
					<Icon name="phone" class="h-4 w-4" />
					Call Now
				</Button>
			</div>

			<ul class="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-sm font-medium text-ink-muted">
				{
					trustChips.map((chip) => (
						<li class="inline-flex items-center gap-2">
							<Icon name="check" class="h-4 w-4 text-brand" />
							{chip}
						</li>
					))
				}
			</ul>
		</div>

		<!-- right: visit info card -->
		<div class="rounded-card border border-line bg-surface p-6 shadow-card sm:p-7">
			<h2 class="text-lg font-bold text-ink">Visit Devra Clinic</h2>
			<ul class="mt-5 space-y-4 text-sm">
				<li class="flex gap-3">
					<Icon name="clock" class="h-5 w-5 shrink-0 text-brand" />
					<span class="text-ink-muted">
						<span class="font-semibold text-ink">Open 7 days</span><br />
						Mon to Sat: {hours[0].display}<br />
						Sunday: {hours[1].display}
					</span>
				</li>
				<li class="flex gap-3">
					<Icon name="pin" class="h-5 w-5 shrink-0 text-brand" />
					<span class="min-w-0 text-ink-muted">
						{clinic.address.line1},<br />
						{clinic.address.line2}, Ranchi 834012
					</span>
				</li>
				<li class="flex gap-3">
					<Icon name="doctor" class="h-5 w-5 shrink-0 text-brand" />
					<span class="text-ink-muted">Care by qualified doctors</span>
				</li>
				<li class="flex gap-3">
					<Icon name="lab" class="h-5 w-5 shrink-0 text-brand" />
					<span class="text-ink-muted">Accredited diagnostics lab</span>
				</li>
			</ul>
			<a
				href={clinic.mapsHref}
				class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
			>
				Get directions
				<Icon name="arrow-right" class="h-4 w-4" />
			</a>
		</div>
	</div>
</section>
```

---

## src/components/sections/TrustStrip.astro

```astro
---
/**
 * TrustStrip - a band of concrete credibility signals confirmed by the clinic.
 * Specific values (doctor name, accreditation body, year) come from site data
 * and currently render as clearly-marked placeholders until provided.
 */
import Icon from "../ui/Icon.astro";
import { clinic } from "../../data/site.ts";

const items = [
	{
		icon: "doctor" as const,
		title: "Qualified doctors",
		detail: `${clinic.doctor.name}, ${clinic.doctor.qualification}`,
	},
	{
		icon: "lab" as const,
		title: "Accredited lab",
		detail: clinic.labAccreditation,
	},
	{
		icon: "clinic" as const,
		title: "Trusted locally",
		detail: `Serving Ranchi since ${clinic.establishedYear}`,
	},
	{
		icon: "wallet" as const,
		title: "Transparent pricing",
		detail: "Clear, fair costs with no surprises",
	},
];
---

<section class="border-y border-line bg-brand-tint">
	<div class="mx-auto w-full max-w-content px-5 py-8 sm:px-8">
		<ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{
				items.map((item) => (
					<li class="flex items-start gap-3">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-surface text-brand shadow-card">
							<Icon name={item.icon} class="h-5 w-5" />
						</span>
						<span class="min-w-0">
							<span class="block text-sm font-bold text-ink">{item.title}</span>
							<span class="block text-sm text-ink-muted">{item.detail}</span>
						</span>
					</li>
				))
			}
		</ul>
	</div>
</section>
```

---

## src/components/sections/Services.astro

```astro
---
/**
 * Services - responsive grid of all clinic services.
 */
import Section from "../ui/Section.astro";
import SectionHeading from "../ui/SectionHeading.astro";
import ServiceCard from "./ServiceCard.astro";
import { services } from "../../data/site.ts";
---

<Section id="services" tone="alt">
	<SectionHeading
		eyebrow="What we offer"
		title="Healthcare services in Ranchi, under one roof"
		subtitle="From everyday consultations to diagnostics and medicines, we cover the essentials your family needs most."
	/>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{services.map((service) => <ServiceCard service={service} />)}
	</div>
</Section>
```

---

## src/components/sections/ServiceCard.astro

```astro
---
/**
 * ServiceCard - one service tile: icon badge, name, description.
 * Presentational; receives a single Service from the site data.
 */
import Icon from "../ui/Icon.astro";
import type { Service } from "../../data/site.ts";

interface Props {
	service: Service;
}

const { service } = Astro.props;
---

<article
	class="group flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
>
	<span
		class="flex h-12 w-12 items-center justify-center rounded-card bg-brand-tint text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white"
	>
		<Icon name={service.icon} class="h-6 w-6" />
	</span>
	<h3 class="mt-5 text-lg font-bold text-ink">{service.name}</h3>
	<p class="mt-2 text-sm leading-relaxed text-ink-muted">
		{service.description}
	</p>
</article>
```

---

## src/components/sections/WhyChooseUs.astro

```astro
---
/**
 * WhyChooseUs - trust points that explain why patients choose Devra.
 */
import Section from "../ui/Section.astro";
import SectionHeading from "../ui/SectionHeading.astro";
import Icon from "../ui/Icon.astro";
import { trustPoints } from "../../data/site.ts";
---

<Section id="why-us" tone="surface">
	<SectionHeading
		eyebrow="Why Devra"
		title="Why families in Ranchi choose Devra"
		subtitle="A clinic built around what matters to patients: accurate answers, less waiting, and a team that listens."
	/>

	<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{
			trustPoints.map((point) => (
				<div class="flex flex-col items-start">
					<span class="flex h-12 w-12 items-center justify-center rounded-card bg-brand text-white">
						<Icon name={point.icon} class="h-6 w-6" />
					</span>
					<h3 class="mt-5 text-lg font-bold text-ink">{point.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink-muted">
						{point.description}
					</p>
				</div>
			))
		}
	</div>
</Section>
```

---

## src/components/sections/Doctors.astro

```astro
---
/**
 * Doctors - meet-the-team grid. Builds trust by showing the people behind
 * the care. Cards come from the `doctors` array in site data.
 */
import Section from "../ui/Section.astro";
import SectionHeading from "../ui/SectionHeading.astro";
import DoctorCard from "./DoctorCard.astro";
import { doctors } from "../../data/site.ts";
---

<Section id="doctors" tone="alt">
	<SectionHeading
		eyebrow="Our team"
		title="Meet the doctors at Devra Clinic"
		subtitle="Your care in Ranchi is led by a qualified, approachable clinical team."
	/>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{doctors.map((doctor) => <DoctorCard doctor={doctor} />)}
	</div>
</Section>
```

---

## src/components/sections/DoctorCard.astro

```astro
---
/**
 * DoctorCard - one team member: avatar, name, role, qualification, short bio.
 * Presentational; receives a single Doctor from the site data. No photos yet,
 * so a brand-tinted icon avatar stands in.
 */
import Icon from "../ui/Icon.astro";
import type { Doctor } from "../../data/site.ts";

interface Props {
	doctor: Doctor;
}

const { doctor } = Astro.props;
---

<article
	class="flex flex-col items-center rounded-card border border-line bg-surface p-6 text-center shadow-card transition-shadow duration-200 hover:shadow-card-hover"
>
	<span
		class="flex h-20 w-20 items-center justify-center rounded-pill bg-brand-tint text-brand"
	>
		<Icon name="doctor" class="h-10 w-10" />
	</span>
	<h3 class="mt-4 text-lg font-bold text-ink">{doctor.name}</h3>
	<p class="mt-0.5 text-sm font-semibold text-brand">{doctor.role}</p>
	<p class="mt-1 text-sm text-ink-subtle">{doctor.qualification}</p>
	<p class="mt-3 text-sm leading-relaxed text-ink-muted">{doctor.bio}</p>
</article>
```

---

## src/components/sections/About.astro

```astro
---
/**
 * About - local story + clinic highlights. Builds trust and carries the
 * Ranchi keyword naturally for local SEO.
 */
import Section from "../ui/Section.astro";
import Icon from "../ui/Icon.astro";
import { clinic } from "../../data/site.ts";

const highlights = [
	"Open 7 days a week",
	"Walk-ins welcome",
	"5 services under one roof",
	"In-house pharmacy and lab",
	"Care by qualified doctors",
	"Transparent, fair pricing",
];
---

<Section id="about" tone="surface">
	<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
		<div>
			<p class="text-sm font-semibold uppercase tracking-wider text-brand">
				About the clinic
			</p>
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
				Family healthcare, rooted in Ranchi
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-ink-muted">
				{clinic.intro}
			</p>
			<p class="mt-4 leading-relaxed text-ink-muted">
				Care is led by qualified doctors and supported by an accredited
				diagnostics lab and in-house pharmacy, so you can consult, get tested
				and collect your medicines in a single, unhurried visit close to home.
			</p>

			<dl class="mt-8 grid grid-cols-2 gap-6">
				<div>
					<dt class="text-sm font-medium text-ink-muted">Serving Ranchi since</dt>
					<dd class="mt-1 text-2xl font-extrabold text-brand">
						{clinic.establishedYear}
					</dd>
				</div>
				<div>
					<dt class="text-sm font-medium text-ink-muted">Services in one place</dt>
					<dd class="mt-1 text-2xl font-extrabold text-brand">5</dd>
				</div>
			</dl>
		</div>

		<div class="rounded-card border border-line bg-surface-alt p-7">
			<h3 class="flex items-center gap-2 text-lg font-bold text-ink">
				<Icon name="clinic" class="h-5 w-5 text-brand" />
				What to expect at Devra Clinic
			</h3>
			<ul class="mt-5 grid gap-3 sm:grid-cols-2">
				{
					highlights.map((item) => (
						<li class="flex items-start gap-2.5 text-sm text-ink">
							<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
							{item}
						</li>
					))
				}
			</ul>
			<a
				href={clinic.mapsHref}
				class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
			>
				Find us on the map
				<Icon name="arrow-right" class="h-4 w-4" />
			</a>
		</div>
	</div>
</Section>
```

---

## src/components/sections/Faq.astro

```astro
---
/**
 * Faq - accordion of common questions. Mirrors the FAQPage JSON-LD in Layout,
 * which helps the page earn rich results in Google for Ranchi searches.
 * Uses native <details>/<summary> so it works without JavaScript.
 */
import Section from "../ui/Section.astro";
import SectionHeading from "../ui/SectionHeading.astro";
import { faqs } from "../../data/site.ts";
---

<Section id="faq" tone="alt">
	<SectionHeading
		eyebrow="FAQ"
		title="Questions patients in Ranchi ask"
		subtitle="Everything you need to know before your first visit to Devra Clinic & Diagnostics."
	/>

	<div class="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-card border border-line bg-surface">
		{
			faqs.map((faq) => (
				<details class="group px-5 py-4 sm:px-6">
					<summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
						{faq.question}
						<span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-brand-tint text-brand transition-transform duration-200 group-open:rotate-45">
							<svg
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								aria-hidden="true"
							>
								<path d="M12 5v14M5 12h14" />
							</svg>
						</span>
					</summary>
					<p class="mt-3 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
				</details>
			))
		}
	</div>
</Section>
```

---

## src/components/sections/ContactInfo.astro

```astro
---
/**
 * ContactInfo - visit details: hours, location and ways to reach the clinic,
 * with a clear "book / call" prompt. All values come from site data so the
 * placeholders can be swapped in one place.
 */
import Section from "../ui/Section.astro";
import SectionHeading from "../ui/SectionHeading.astro";
import Button from "../ui/Button.astro";
import Icon from "../ui/Icon.astro";
import { clinic, hours } from "../../data/site.ts";
---

<Section id="contact" tone="alt">
	<SectionHeading
		eyebrow="Visit us"
		title="Visit Devra Clinic in Ranchi"
		subtitle="Walk in or book ahead. We're here for you through the week."
	/>

	<div class="mt-12 grid gap-6 lg:grid-cols-3">
		<!-- Hours -->
		<div class="rounded-card border border-line bg-surface p-6 shadow-card">
			<span
				class="flex h-11 w-11 items-center justify-center rounded-card bg-brand-tint text-brand"
			>
				<Icon name="clock" class="h-6 w-6" />
			</span>
			<h3 class="mt-5 text-lg font-bold text-ink">Opening hours</h3>
			<dl class="mt-4 space-y-3">
				{
					hours.map((slot) => (
						<div class="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
							<dt class="text-sm font-medium text-ink">{slot.label}</dt>
							<dd class="text-sm text-ink-muted">{slot.display}</dd>
						</div>
					))
				}
			</dl>
		</div>

		<!-- Location -->
		<div class="rounded-card border border-line bg-surface p-6 shadow-card">
			<span
				class="flex h-11 w-11 items-center justify-center rounded-card bg-brand-tint text-brand"
			>
				<Icon name="pin" class="h-6 w-6" />
			</span>
			<h3 class="mt-5 text-lg font-bold text-ink">Our location</h3>
			<address class="mt-4 not-italic text-sm leading-relaxed text-ink-muted">
				{clinic.address.line1},<br />
				{clinic.address.line2},<br />
				{clinic.address.locality}, {clinic.address.region}
				{clinic.address.postalCode}
			</address>
			<a
				href={clinic.mapsHref}
				class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
			>
				Get directions
				<Icon name="arrow-right" class="h-4 w-4" />
			</a>
		</div>

		<!-- Reach us -->
		<div
			class="flex flex-col rounded-card bg-brand p-6 text-white shadow-card"
		>
			<span
				class="flex h-11 w-11 items-center justify-center rounded-card bg-white/15"
			>
				<Icon name="phone" class="h-6 w-6" />
			</span>
			<h3 class="mt-5 text-lg font-bold">Reach us directly</h3>
			<ul class="mt-4 space-y-3 text-sm">
				<li>
					<a
						href={clinic.phoneHref}
						class="inline-flex items-center gap-2 hover:underline"
					>
						<Icon name="phone" class="h-4 w-4" />
						{clinic.phoneDisplay}
					</a>
				</li>
				<li>
					<a
						href={clinic.whatsappHref}
						class="inline-flex items-center gap-2 hover:underline"
					>
						<Icon name="whatsapp" class="h-4 w-4" />
						{clinic.whatsappDisplay}
					</a>
				</li>
				<li>
					<a
						href={`mailto:${clinic.email}`}
						class="flex min-w-0 items-center gap-2 hover:underline"
					>
						<Icon name="mail" class="h-4 w-4 shrink-0" />
						<span class="break-all">{clinic.email}</span>
					</a>
				</li>
			</ul>
			<div class="mt-auto pt-6">
				<Button
					href={clinic.whatsappHref}
					variant="ghost"
					data-booking-trigger="true"
					class="bg-white text-brand hover:bg-white/90 hover:text-brand-dark"
				>
					Book on WhatsApp
				</Button>
			</div>
		</div>
	</div>
</Section>
```

---

## src/components/sections/Footer.astro

```astro
---
/**
 * Footer - wordmark, quick links, contact line and copyright.
 */
import Wordmark from "../ui/Wordmark.astro";
import Icon from "../ui/Icon.astro";
import { clinic, nav } from "../../data/site.ts";

const year = new Date().getFullYear();
---

<footer class="bg-ink text-white/70">
	<div class="mx-auto w-full max-w-content px-5 py-14 sm:px-8">
		<div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
			<div class="max-w-sm">
				<Wordmark tone="light" />
				<p class="mt-4 text-sm leading-relaxed">
					{clinic.intro}
				</p>
			</div>

			<div class="grid grid-cols-2 gap-10 sm:gap-16">
				<div class="min-w-0">
					<h4 class="text-sm font-semibold text-white">Explore</h4>
					<ul class="mt-4 space-y-2.5 text-sm">
						{
							nav.map((item) => (
								<li>
									<a
										href={item.href}
										class="transition-colors hover:text-white"
									>
										{item.label}
									</a>
								</li>
							))
						}
					</ul>
				</div>
				<div class="min-w-0">
					<h4 class="text-sm font-semibold text-white">Get in touch</h4>
					<ul class="mt-4 space-y-2.5 text-sm">
						<li>
							<a
								href={clinic.phoneHref}
								class="flex min-w-0 items-center gap-2 transition-colors hover:text-white"
							>
								<Icon name="phone" class="h-4 w-4 shrink-0" />
								<span class="break-all">{clinic.phoneDisplay}</span>
							</a>
						</li>
						<li>
							<a
								href={`mailto:${clinic.email}`}
								class="flex min-w-0 items-center gap-2 transition-colors hover:text-white"
							>
								<Icon name="mail" class="h-4 w-4 shrink-0" />
								<span class="break-all">{clinic.email}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div
			class="mt-12 border-t border-white/10 pt-6 text-xs text-white/50"
		>
			© {year} {clinic.name}. All rights reserved.
		</div>
	</div>
</footer>
```

---

## src/components/sections/BookingModal.astro

```astro
---
/**
 * BookingModal - native <dialog> that collects patient details and opens
 * WhatsApp with a pre-filled message built from the form values.
 *
 * Trigger it from anywhere by adding `data-booking-trigger` to a link/button.
 * The trigger's own href (the plain wa.me link) is the no-JS fallback: if the
 * script never runs, clicking still opens WhatsApp normally.
 */
import Icon from "../ui/Icon.astro";
import { clinic, services } from "../../data/site.ts";
---

<dialog
	id="booking-dialog"
	data-whatsapp={clinic.whatsappNumber}
	class="m-auto w-[calc(100%-2rem)] max-w-lg rounded-card border border-line bg-surface p-0 shadow-card backdrop:bg-ink/50 backdrop:backdrop-blur-sm"
	aria-labelledby="booking-title"
>
	<form method="dialog" class="contents">
		<!-- header -->
		<div class="flex items-start justify-between gap-4 border-b border-line p-6">
			<div>
				<h2 id="booking-title" class="text-xl font-bold text-ink">
					Book an appointment
				</h2>
				<p class="mt-1 text-sm text-ink-muted">
					Fill in a few details and we'll continue on WhatsApp.
				</p>
			</div>
			<button
				type="submit"
				value="cancel"
				class="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-pill text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink"
				aria-label="Close"
			>
				<svg
					class="h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					aria-hidden="true"
				>
					<path d="M6 6l12 12M18 6 6 18"></path>
				</svg>
			</button>
		</div>
	</form>

	<!-- booking form (separate form so submit runs the script, not dialog close) -->
	<form id="booking-form" class="grid gap-4 p-6" novalidate>
		<div class="grid gap-1.5">
			<label for="bk-name" class="text-sm font-semibold text-ink">
				Patient name <span class="text-brand">*</span>
			</label>
			<input
				id="bk-name"
				name="name"
				type="text"
				required
				autocomplete="name"
				placeholder="Full name"
				class="rounded-card border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none"
			/>
		</div>

		<div class="grid gap-1.5">
			<label for="bk-phone" class="text-sm font-semibold text-ink">
				Phone number <span class="text-brand">*</span>
			</label>
			<input
				id="bk-phone"
				name="phone"
				type="tel"
				required
				inputmode="tel"
				autocomplete="tel"
				placeholder="e.g. 98765 43210"
				class="rounded-card border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none"
			/>
		</div>

		<div class="grid gap-1.5">
			<label for="bk-service" class="text-sm font-semibold text-ink">
				Service
			</label>
			<select
				id="bk-service"
				name="service"
				class="rounded-card border border-line bg-surface px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
			>
				{services.map((s) => <option value={s.name}>{s.name}</option>)}
				<option value="General enquiry">General enquiry</option>
			</select>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			<div class="grid gap-1.5">
				<label for="bk-date" class="text-sm font-semibold text-ink">
					Preferred date
				</label>
				<input
					id="bk-date"
					name="date"
					type="date"
					class="rounded-card border border-line bg-surface px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
				/>
			</div>
			<div class="grid gap-1.5">
				<label for="bk-time" class="text-sm font-semibold text-ink">
					Preferred time
				</label>
				<input
					id="bk-time"
					name="time"
					type="time"
					class="rounded-card border border-line bg-surface px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
				/>
			</div>
		</div>

		<div class="grid gap-1.5">
			<label for="bk-notes" class="text-sm font-semibold text-ink">
				Notes <span class="font-normal text-ink-subtle">(optional)</span>
			</label>
			<textarea
				id="bk-notes"
				name="notes"
				rows="3"
				placeholder="Anything we should know before your visit?"
				class="resize-none rounded-card border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none"
			></textarea>
		</div>

		<p id="bk-error" class="hidden text-sm font-medium text-brand-dark"></p>

		<button
			type="submit"
			class="mt-1 inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
		>
			<Icon name="whatsapp" class="h-5 w-5" />
			Continue on WhatsApp
		</button>
	</form>
</dialog>

<script>
	const dialog = document.getElementById(
		"booking-dialog",
	) as HTMLDialogElement | null;
	const form = document.getElementById(
		"booking-form",
	) as HTMLFormElement | null;
	const errorEl = document.getElementById("bk-error");

	if (dialog && form) {
		const number = dialog.dataset.whatsapp ?? "";

		const openDialog = (event: Event) => {
			event.preventDefault();
			if (errorEl) errorEl.classList.add("hidden");
			dialog.showModal();
		};

		// Wire every booking trigger on the page.
		document
			.querySelectorAll<HTMLElement>("[data-booking-trigger]")
			.forEach((el) => el.addEventListener("click", openDialog));

		// Click on the backdrop closes the dialog.
		dialog.addEventListener("click", (event) => {
			if (event.target === dialog) dialog.close();
		});

		const line = (label: string, value: string) =>
			value.trim() ? `${label}: ${value.trim()}\n` : "";

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const data = new FormData(form);
			const name = String(data.get("name") ?? "").trim();
			const phone = String(data.get("phone") ?? "").trim();

			if (!name || !phone) {
				if (errorEl) {
					errorEl.textContent =
						"Please enter the patient name and phone number.";
					errorEl.classList.remove("hidden");
				}
				return;
			}

			let message = "Hello Devra Clinic, I'd like to book an appointment.\n\n";
			message += line("Name", name);
			message += line("Phone", phone);
			message += line("Service", String(data.get("service") ?? ""));
			message += line("Preferred date", String(data.get("date") ?? ""));
			message += line("Preferred time", String(data.get("time") ?? ""));
			message += line("Notes", String(data.get("notes") ?? ""));

			const url = `https://wa.me/${number}?text=${encodeURIComponent(message.trim())}`;
			window.open(url, "_blank", "noopener");
			dialog.close();
			form.reset();
		});
	}
</script>
```
