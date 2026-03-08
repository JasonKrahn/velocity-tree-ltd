import { siteConfig } from "@/lib/config";

export async function GET() {
  const content = `
# Velocity Land & Tree Services - AI Context

## Overview
Velocity Land & Tree Services is a professional land preparation company based in Blumenort, Manitoba. We specialize in heavy-duty land clearing, forestry mulching, and certified septic installations for farms, acreages, developers, and rural homeowners across southeast Manitoba.

## Core Information
- Name: ${siteConfig.name}
- Location: ${siteConfig.address.locality}, ${siteConfig.address.region}, ${siteConfig.address.country}
- Service Area: ${siteConfig.serviceAreas.join(", ")}
- Phone: ${siteConfig.phoneFormatted}
- Website: ${siteConfig.url}

## Services Provided
${siteConfig.mainServices.map(s => `- ${s.name}: ${s.description}`).join("\n")}

## Frequently Asked Questions
${siteConfig.faqs.map(f => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Target Audience
- Farms and Acreage owners needing agricultural land clearing or forestry mulching.
- Home Builders and Real Estate Developers requiring commercial and residential lot clearing and site development in Manitoba.
- Rural Homeowners needing culvert installation, driveway grading, or new septic systems.

## Key Differentiators
- Licensed Arborist on staff for expert tree health and forestry management.
- 12-Year Red Seal Electrician ensuring site safety and precision utility coordination.
- Certified Septic Expert for province-compliant system designs and installations.
- Eco-friendly forestry mulching that turns overgrowth into nutrient-rich ground cover without burn piles.
  `;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
