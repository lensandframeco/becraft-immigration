export interface ResourceSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
}

export interface ResourceData {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  sections: ResourceSection[];
  cta: string;
}

export const resourcesData: ResourceData[] = [
  // Resources can be added here in the future
];

export function getResourceBySlug(slug: string): ResourceData | undefined {
  return resourcesData.find((r) => r.slug === slug);
}
