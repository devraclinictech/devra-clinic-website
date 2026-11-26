/**
 * Devra Clinic & Diagnostics - central site content (single source of truth).
 *
 * Everything on the page and in the SEO/structured data reads from here, so
 * content is edited in one place. Values below come from the clinic's own
 * posters, rate charts and the details they provided.
 *
 * A couple of values worth reconfirming before/at launch:
 *   - clinic.email       (carried over; confirm it is monitored)
 *   - seo.siteUrl        (live domain once registered)
 */

export const clinic = {
	name: "Devra Clinic & Diagnostics",
	shortName: "Devra Clinic",

	// Location-rich tagline for both humans and search engines.
	tagline: "Trusted clinic & diagnostic centre in Ranchi",
	subheading:
		"Physician consultations, advanced physiotherapy with Class 3B laser therapy, lab diagnostics, pharmacy and adult vaccination for families across Ranchi, all under one roof.",
	intro:
		"Devra Clinic & Diagnostics is one of Ranchi's trusted healthcare centres, offering comprehensive medical care, advanced physiotherapy with laser therapy, vaccination, diagnostics and pharmacy services under one roof.",

	establishedYear: "2019",

	/* ---- Contact ---- */
	phoneDisplay: "+91 77590 48442",
	phoneHref: "tel:+917759048442",
	whatsappDisplay: "+91 77590 48442",
	whatsappHref: "https://wa.me/917759048442",
	whatsappNumber: "917759048442", // digits only, used to build booking links
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
	// "Get directions" - opens turn-by-turn directions to the clinic pin.
	mapsHref:
		"https://www.google.com/maps/dir/?api=1&destination=23.3890071,85.3755477",
	// Google Business Profile (for viewing the listing / existing reviews).
	gmbHref: "https://share.google/SxnwrnPh3tk2O9hhB",
	// Direct "write a review" link (opens the Google review dialog).
	reviewHref: "https://g.page/r/CeUwtSv9ukpjEBM/review",
	// Social profiles (shown in the footer and added to schema sameAs).
	socials: [
		{
			label: "Instagram",
			href: "https://www.instagram.com/devraclinicranchi/",
			icon: "instagram",
		},
		{
			label: "Facebook",
			href: "https://www.facebook.com/p/DEVRA-Clinic-Diagnostics-61578279812684/",
			icon: "facebook",
		},
	],
	// Coordinates from the Google Maps listing (used in local-business schema).
	geo: { latitude: 23.3890071, longitude: 85.3755477 },
} as const;

/** Headline credibility stats from the clinic's own record. */
export const stats = {
	patientsServed: "13,000+",
	yearsServing: "7+",
	regions: "Jharkhand, Bihar & West Bengal",
} as const;

/**
 * Opening hours. `opens`/`closes` use 24-hour HH:MM for the SEO schema.
 */
export const hours = [
	{
		label: "Monday to Saturday",
		display: "8:30 AM to 8:00 PM",
		days: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		opens: "08:30",
		closes: "20:00",
	},
	{
		label: "Sunday",
		display: "9:00 AM to 11:30 AM",
		days: ["Sunday"],
		opens: "09:00",
		closes: "11:30",
	},
] as const;

export type Service = {
	name: string;
	/** URL slug for the service landing page at /services/<slug>. */
	slug: string;
	/** Short line used on service cards. */
	description: string;
	/** Longer intro paragraph for the service landing page. */
	intro: string;
	/** Key points shown as a checklist on the landing page. */
	highlights: string[];
	icon:
		| "stethoscope"
		| "physio"
		| "diagnostics"
		| "pharmacy"
		| "vaccine"
		| "nutrition"
		| "shield"
		| "home"
		| "monitor";
};

export const services: Service[] = [
	{
		name: "Advanced Physiotherapy & Rehabilitation",
		slug: "physiotherapy",
		description:
			"Orthopaedic, sports, post-operative, neurological and geriatric rehab, including Class 3B laser therapy for effective pain management.",
		intro:
			"Our physiotherapy and rehabilitation unit helps you recover movement, strength and confidence after injury, surgery or long-term pain. Sessions are led by qualified physiotherapists and tailored to your condition and goals.",
		highlights: [
			"Orthopaedic and post-operative rehabilitation",
			"Sports injury assessment and recovery",
			"Neurological and geriatric physiotherapy",
			"Class 3B laser therapy for pain management",
			"Personalised exercise and home-care plans",
			"Packages available for longer treatment courses",
		],
		icon: "physio",
	},
	{
		name: "Physician Consultation",
		slug: "physician-consultation",
		description:
			"Experienced doctors in Ranchi for fevers, infections, diabetes, blood pressure, chronic disease management and preventive check-ups.",
		intro:
			"See an experienced physician for everyday illnesses and the ongoing management of long-term conditions. We focus on clear diagnosis, practical treatment and preventive care for the whole family.",
		highlights: [
			"Fever, infections and seasonal illness",
			"Diabetes and blood pressure management",
			"Chronic disease follow-up and monitoring",
			"Preventive health check-ups",
			"Guidance on tests, medicines and referrals",
			"Morning and evening consultation slots",
		],
		icon: "stethoscope",
	},
	{
		name: "Diagnostics & Pathology",
		slug: "diagnostics-pathology",
		description:
			"Accurate blood tests, health screenings and pathology reports from an in-house lab, with quick, dependable turnaround.",
		intro:
			"Accurate lab testing from our in-house pathology lab, so samples are processed on site without transit delays. Reports are quick and dependable, with transparent, up-front pricing.",
		highlights: [
			"Routine blood tests and health screenings",
			"In-house processing for faster reports",
			"Diabetes, thyroid, lipid and vitamin panels",
			"Infection and fever profiles",
			"Clear, up-front rate chart",
			"Home sample collection on request",
		],
		icon: "diagnostics",
	},
	{
		name: "Pharmacy",
		slug: "pharmacy",
		description:
			"An in-house pharmacy so you can collect prescribed medicines before you leave the clinic.",
		intro:
			"An in-house pharmacy so you can collect prescribed medicines before you leave the clinic, with no extra trip required. Our team helps you understand dosage and correct usage.",
		highlights: [
			"Prescribed medicines available on site",
			"Guidance on dosage and usage",
			"Commonly needed medicines in stock",
			"Courier delivery to your home available",
			"Support for repeat prescriptions",
		],
		icon: "pharmacy",
	},
	{
		name: "Adult Vaccination",
		slug: "adult-vaccination",
		description:
			"Recommended adult immunisations administered safely by our clinical team.",
		intro:
			"Protect yourself with recommended adult immunisations, administered safely by our clinical team. We advise on which vaccines are right for your age and health needs.",
		highlights: [
			"Recommended adult vaccines",
			"Administered by trained clinical staff",
			"Advice on timing and boosters",
			"Safe storage and handling of vaccines",
			"At-home vaccination available via Home Service",
		],
		icon: "vaccine",
	},
	{
		name: "Dietician Consultation",
		slug: "dietician-consultation",
		description:
			"Personalised nutrition and lifestyle guidance to support recovery, diabetes and long-term wellness.",
		intro:
			"Personalised nutrition and lifestyle guidance to support recovery, manage diabetes and build long-term wellness. Plans are practical and built around your routine and preferences.",
		highlights: [
			"Diet plans for diabetes and weight management",
			"Nutrition support during recovery",
			"Practical, everyday meal guidance",
			"Lifestyle and habit coaching",
			"Follow-up to track your progress",
		],
		icon: "nutrition",
	},
	{
		name: "Home Service",
		slug: "home-service",
		description:
			"Physiotherapy and adult vaccination at home. Medicine delivery to your door by courier is also available.",
		intro:
			"Care at home for patients who find it difficult to travel. Our team brings physiotherapy and adult vaccination to your door, and medicines can be delivered by courier.",
		highlights: [
			"Home physiotherapy sessions",
			"Adult vaccination at home",
			"Medicine delivery by courier",
			"Convenient for elderly and recovering patients",
			"Scheduled on WhatsApp at your preferred time",
		],
		icon: "home",
	},
	{
		name: "Online Consultation",
		slug: "online-consultation",
		description:
			"Consult our doctors from home over a video call, with your prescription shared on WhatsApp.",
		intro:
			"Consult our doctors from the comfort of home over a video call. Ideal for follow-ups, minor concerns and advice when you cannot visit in person.",
		highlights: [
			"Video consultation with our doctors",
			"Convenient for follow-ups and minor concerns",
			"Prescription shared on WhatsApp",
			"No travel or waiting room",
			"Easy to book on WhatsApp",
		],
		icon: "monitor",
	},
	{
		name: "Online Review of Investigations",
		slug: "online-review-of-investigations",
		description:
			"Share your test reports and get our doctors' expert review and guidance online.",
		intro:
			"Already have test reports? Share them with us and get an expert review and clear guidance online, without a clinic visit. We explain what your results mean and the next steps.",
		highlights: [
			"Expert review of your test reports",
			"Clear explanation of your results",
			"Guidance on next steps and treatment",
			"Share reports easily on WhatsApp",
			"A convenient second-opinion option",
		],
		icon: "monitor",
	},
];

// Appointment windows for services that need a booked slot. Days are
// 0=Sunday ... 6=Saturday; times are 24h "HH:MM". Any service not listed here
// is walk-in (or coordinated on WhatsApp) and needs no fixed slot.
const monToSat = <T>(w: T) => ({ 1: w, 2: w, 3: w, 4: w, 5: w, 6: w });

export const bookingWindows: Record<
	string,
	Record<number, [string, string][]>
> = {
	"Physician Consultation": {
		0: [["08:30", "11:00"]],
		...monToSat<[string, string][]>([
			["08:30", "09:45"],
			["17:30", "20:00"],
		]),
	},
	"Advanced Physiotherapy & Rehabilitation": monToSat<[string, string][]>([
		["10:30", "18:30"],
	]),
};

export type Doctor = {
	name: string;
	role: string;
	qualification: string;
	timings: string[];
	fee?: string;
	specialties: string[];
	icon: "stethoscope" | "physio" | "vaccine";
	/** The doctor's own Google Business Profile / Maps listing. */
	profileHref?: string;
	/** Portrait photo path in /public (optional; falls back to an icon). */
	photo?: string;
};

/**
 * Doctors at the main Ranchi clinic. Dr. Radhika Singh (Kuju extension centre
 * only) is intentionally not listed here.
 */
export const doctors: Doctor[] = [
	{
		name: "Dr. Rajesh Kumar Singh",
		role: "Physician · Diabetologist · Critical Care Specialist",
		qualification:
			"MBBS, MD (Medicine), FNB (Critical Care), IDCC (Infectious Diseases), CCECM (Diabetes)",
		timings: [
			"Mon to Sat: 8:30 AM to 10:00 AM & 6:00 PM to 8:00 PM",
			"Sunday: 9:00 AM to 11:00 AM",
		],
		fee: "₹900 consultation (valid for 10 days)",
		profileHref: "https://share.google/IdwkUQkNH4uw36gnl",
		photo: "/images/dr-rajesh.jpg",
		specialties: [
			"General Medicine",
			"Diabetes Management",
			"Hypertension",
			"Fever & Infectious Diseases",
			"Chronic Disease Management",
			"Preventive Health Check-ups",
		],
		icon: "stethoscope",
	},
	{
		name: "Dr. Rahul Kumar Singh",
		role: "Consultant Physiotherapist & Rehabilitation Specialist",
		qualification:
			"BPT, CMT (Musculoskeletal), Fellowship in Orthopaedic Rehabilitation, MHA",
		timings: ["Mon to Sat: 10:00 AM to 7:00 PM"],
		fee: "₹500 per session (package facility available)",
		profileHref: "https://maps.app.goo.gl/41MSxRNfxT33pXiGA",
		photo: "/images/dr-rahul.jpg",
		specialties: [
			"Advanced Physiotherapy",
			"Orthopaedic Rehabilitation",
			"Sports Injury Rehabilitation",
			"Post-Operative Rehabilitation",
			"Neurological Rehabilitation",
			"Geriatric Physiotherapy",
			"Laser Therapy & Pain Management",
		],
		icon: "physio",
	},
];

export type PhysioPackage = {
	name: string;
	sessions: string;
	price: string;
	perSession?: string;
	saving?: string;
	description: string;
	validity: string;
	featured?: boolean;
};

export const physioPackages: PhysioPackage[] = [
	{
		name: "Single Session",
		sessions: "1 session",
		price: "₹500",
		description: "Ideal for a quick evaluation or one-time pain relief.",
		validity: "Consultation fee",
	},
	{
		name: "Smart Relief",
		sessions: "3 sessions",
		price: "₹1300",
		perSession: "₹433 / session",
		saving: "Save ₹200",
		description: "Suitable for short-term issues.",
		validity: "Valid for 6 days",
	},
	{
		name: "Extended Care",
		sessions: "6 sessions",
		price: "₹2500",
		perSession: "₹417 / session",
		saving: "Save ₹500",
		description: "Recommended for moderate conditions.",
		validity: "Valid for 10 days",
		featured: true,
	},
	{
		name: "Rehabilitation Care",
		sessions: "10 sessions",
		price: "₹4000",
		perSession: "₹400 / session",
		saving: "Save ₹1000",
		description:
			"Best for post-surgical rehab, chronic pain or neurological recovery.",
		validity: "Valid for 15 days",
	},
];

export const physioPackagesNote =
	"Conditions apply. Package payment to be made at once.";

export type DiagnosticTest = { name: string; price: string };

/** Pathology / diagnostics rate chart (prices in ₹). */
export const diagnosticTests: DiagnosticTest[] = [
	{ name: "Complete Blood Count", price: "₹400" },
	{ name: "CRP", price: "₹450" },
	{ name: "Creatinine", price: "₹170" },
	{ name: "Urea", price: "₹170" },
	{ name: "Sodium", price: "₹200" },
	{ name: "Potassium", price: "₹200" },
	{ name: "Urine R/E", price: "₹150" },
	{ name: "Urine C/S", price: "₹600" },
	{ name: "Uric Acid", price: "₹250" },
	{ name: "MPDA", price: "₹400" },
	{ name: "Typhi Dot", price: "₹500" },
	{ name: "Dengue Test", price: "₹600" },
	{ name: "FBS (Fasting Sugar)", price: "₹120" },
	{ name: "PPBS", price: "₹120" },
	{ name: "HbA1c", price: "₹600" },
	{ name: "TSH", price: "₹300" },
	{ name: "Vitamin B12", price: "₹1200" },
	{ name: "25-OH Vitamin D3", price: "₹1200" },
	{ name: "Anti-CCP", price: "₹1600" },
	{ name: "LFT", price: "₹700" },
	{ name: "Lipid Profile", price: "₹700" },
];

export type OtherService = { name: string; price: string };

export const otherServices: OtherService[] = [
	{ name: "Injection (IM)", price: "₹100" },
	{ name: "Injection (IV)", price: "₹100" },
	{ name: "IV Infusion", price: "₹200 / hr" },
	{ name: "Day Care Bed Charges", price: "₹200 / hr" },
	{ name: "Minor Dressing", price: "₹200" },
];

export type TrustPoint = {
	title: string;
	description: string;
	icon: "clinic" | "users" | "laser" | "lab";
};

export const trustPoints: TrustPoint[] = [
	{
		title: "Serving Ranchi since 2019",
		description:
			"Over seven years of ethical, evidence-based, patient-centred care that families in Ranchi return to.",
		icon: "clinic",
	},
	{
		title: "13,000+ patients served",
		description:
			"Trusted by thousands across Jharkhand and neighbouring Bihar and West Bengal.",
		icon: "users",
	},
	{
		title: "Class 3B laser therapy",
		description:
			"Advanced physiotherapy and rehabilitation with modern laser therapy for effective pain relief.",
		icon: "laser",
	},
	{
		title: "In-house pathology lab",
		description:
			"Samples tested on site, avoiding transit delays and temperature changes that affect accuracy.",
		icon: "lab",
	},
];

/** Short credibility chips shown under the hero. */
export const trustChips: string[] = [
	"Since 2019",
	"13,000+ patients served",
	"Walk-ins welcome",
	"Open 7 days",
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
	{
		question: "Where is Devra Clinic located in Ranchi?",
		answer:
			"We are at Shop No. G5, Ground Floor, Pitamber Estate, Khelgaon More, Deepatoli, Jai Prakash Nagar, Ranchi, Jharkhand 834012. We are easy to reach from across the city.",
	},
	{
		question: "What services does Devra Clinic & Diagnostics offer?",
		answer:
			"We offer physician consultations, advanced physiotherapy with Class 3B laser therapy, diagnostic and pathology tests, an in-house pharmacy, adult vaccination and dietician consultation, so most of your family's healthcare needs are handled in one place.",
	},
	{
		question: "Do I need an appointment or can I walk in?",
		answer:
			"Both work. You are welcome to walk in during opening hours, or book ahead on WhatsApp so we can keep your slot ready and reduce your waiting time.",
	},
	{
		question: "What do physiotherapy sessions and packages cost?",
		answer:
			"A single physiotherapy session is ₹500. We also offer packages: Smart Relief (3 sessions, ₹1300), Extended Care (6 sessions, ₹2500) and Rehabilitation Care (10 sessions, ₹4000), which bring the per-session cost down. Package payment is made at once and conditions apply.",
	},
	{
		question: "Can I get blood tests and reports done here?",
		answer:
			"Yes. Our in-house pathology lab covers common blood tests and health screenings with accurate reports and a quick turnaround. You can see our diagnostics rate chart on this page.",
	},
	{
		question: "How do I book an appointment?",
		answer:
			"Tap any 'Book Appointment' button to share a few details and we will continue on WhatsApp. You can also call us on +91 77590 48442 during opening hours.",
	},
];

/**
 * Primary navigation. `hash` scrolls to the matching section on the homepage
 * (works from any page because it is root-relative); `page` is the dedicated
 * deep-dive page. The header uses `hash`, the footer uses `page`. `header:false`
 * items are shown in the footer only (kept out of the header menu).
 */
export type Testimonial = {
	name: string;
	service?: string;
	rating: number; // 1 to 5
	quote: string;
};

/**
 * Patient testimonials. These are PLACEHOLDERS. Replace each with a real,
 * consented patient quote shown on this page. Only then set
 * `testimonialsPublished` to true, which switches on the Review /
 * AggregateRating structured data (marking up reviews you do not genuinely
 * display, or copying them from Google, violates Google's guidelines).
 */
export const testimonials: Testimonial[] = [
	{
		name: "Law Chouhan",
		service: "Physiotherapy",
		rating: 5,
		quote:
			"The clinic has been a truly satisfying experience. The procurement process is excellent and has helped me tremendously throughout my difficult phase, contributing significantly to my faster recovery. The staff is also very kind, supportive, and professional, which made the entire experience even better.",
	},
	{
		name: "Sarita Singh",
		service: "Physician consultation",
		rating: 5,
		quote:
			"The doctors at Devra Clinic are highly professional, caring, and compassionate. Their thorough approach to treatment and clear explanations made me feel comfortable and at ease throughout the process. The doctor and the entire team are very friendly, supportive, and cooperative, and they genuinely care about their patients. I highly recommend Devra Clinic for their exceptional care and dedication. Keep up the great work!",
	},
	{
		name: "Chandan Singh",
		service: "Immunization",
		rating: 5,
		quote:
			"I had an excellent experience at this immunization center. The staff was highly professional, courteous, and supportive, and they explained the entire process clearly and patiently. The vaccines were administered with proper hygiene, care, and attention to safety. I felt completely comfortable and confident throughout the visit. I highly recommend this immunization center to families, especially for children. Excellent service and a caring team!",
	},
];

/** Turn on ONLY when the testimonials above are real, consented reviews. */
export const testimonialsPublished = false;

export type GalleryImage = { src: string; alt: string; caption: string };

/**
 * Clinic photos. Drop the matching files into /public/images (see the README
 * there). Alt text is written for accessibility and local SEO.
 */
export const gallery: GalleryImage[] = [
	{
		src: "/images/reception.jpg",
		alt: "Reception and waiting area at Devra Clinic & Diagnostics, Ranchi",
		caption: "Reception & waiting area",
	},
	{
		src: "/images/physiotherapy.jpg",
		alt: "Physiotherapy and rehabilitation room with exercise equipment",
		caption: "Physiotherapy & rehab",
	},
	{
		src: "/images/laser-therapy.jpg",
		alt: "Class 3B laser therapy machine used for pain management",
		caption: "Class 3B laser therapy",
	},
	{
		src: "/images/lab.jpg",
		alt: "In-house pathology and diagnostics laboratory with analysers",
		caption: "In-house pathology lab",
	},
	{
		src: "/images/treatment-room.jpg",
		alt: "Physiotherapy treatment room with traction table at Devra Clinic",
		caption: "Treatment room",
	},
	{
		src: "/images/storefront.jpg",
		alt: "Devra Clinic & Diagnostics storefront and signboard in Ranchi",
		caption: "Our clinic entrance",
	},
];

export const nav = [
	{ label: "Services", hash: "/#services", page: "/services", header: true },
	{ label: "Doctors", hash: "/#doctors", page: "/doctors", header: true },
	{ label: "Physio Packages", hash: "/#packages", page: "/physio-packages", header: true },
	{ label: "Diagnostics", hash: "/#rates", page: "/diagnostics", header: true },
	{ label: "About", hash: "/#about", page: "/about", header: false },
	{ label: "Visit Us", hash: "/#contact", page: "/visit-us", header: false },
] as const;

/** SEO / site-wide config. */
export const seo = {
	// Replace with the live domain once registered (used for canonical + OG).
	siteUrl: "https://www.devraclinic.com",
	// Social share image (1200x630), served from /public.
	ogImage: "/og.png",
	title:
		"Devra Clinic & Diagnostics | Clinic, Physiotherapy & Diagnostics in Ranchi",
	description:
		"Devra Clinic & Diagnostics in Ranchi offers physician consultations, advanced physiotherapy with laser therapy, blood tests & diagnostics, pharmacy and adult vaccination. Serving 13,000+ patients since 2019. Walk in or book on WhatsApp.",
	keywords: [
		"clinic in Ranchi",
		"diagnostic centre in Ranchi",
		"physiotherapy in Ranchi",
		"laser therapy physiotherapy Ranchi",
		"doctor in Ranchi",
		"diagnostic lab in Ranchi",
		"blood test lab in Ranchi",
		"pathology lab Ranchi",
		"blood test price in Ranchi",
		"pharmacy in Ranchi",
		"adult vaccination Ranchi",
	],
} as const;
