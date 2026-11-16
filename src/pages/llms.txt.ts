import type { APIRoute } from "astro";
import {
	clinic,
	stats,
	hours,
	services,
	doctors,
	physioPackages,
	physioPackagesNote,
	diagnosticTests,
	otherServices,
	faqs,
	seo,
} from "../data/site.ts";

// Generated from site.ts so it stays in sync with the site content.
// https://llmstxt.org
export const GET: APIRoute = () => {
	const addr = `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.locality}, ${clinic.address.region} ${clinic.address.postalCode}`;

	const body = `# ${clinic.name}

> ${clinic.tagline}. Serving ${stats.patientsServed} patients across ${stats.regions} since ${clinic.establishedYear}.

${clinic.intro}

## Contact & location
- Phone / WhatsApp: ${clinic.phoneDisplay}
- Email: ${clinic.email}
- Address: ${addr}
- Google Maps: ${clinic.mapsHref}
- Book / review: ${clinic.reviewHref}

## Hours
${hours.map((h) => `- ${h.label}: ${h.display}`).join("\n")}

## Services
${services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## Doctors
${doctors
	.map(
		(d) =>
			`- ${d.name} - ${d.role} (${d.qualification}).${d.fee ? ` Fee: ${d.fee}.` : ""} Timings: ${d.timings.join("; ")}.`,
	)
	.join("\n")}

## Physiotherapy packages
${physioPackages
	.map(
		(p) =>
			`- ${p.name} (${p.sessions}): ${p.price}${p.perSession ? ` (${p.perSession})` : ""}, ${p.validity}.`,
	)
	.join("\n")}
Note: ${physioPackagesNote}

## Diagnostics rate chart
${diagnosticTests.map((t) => `- ${t.name}: ${t.price}`).join("\n")}

## Other services
${otherServices.map((s) => `- ${s.name}: ${s.price}`).join("\n")}

## FAQ
${faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}

## Pages
- Home: ${seo.siteUrl}/
- Services: ${seo.siteUrl}/services
- Doctors: ${seo.siteUrl}/doctors
- Physiotherapy packages: ${seo.siteUrl}/physio-packages
- Diagnostics: ${seo.siteUrl}/diagnostics
- About: ${seo.siteUrl}/about
- Visit us: ${seo.siteUrl}/visit-us
`;

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
