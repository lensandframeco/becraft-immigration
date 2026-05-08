/**
 * Analytics utility for Becraft Immigration Law.
 * Fires GA4 events via the global gtag() injected by the scaffold.
 *
 * Key conversion events (mark these as conversions in GA4 + import to Google Ads):
 *   - generate_lead  (contact form submitted)
 *   - phone_call_click (phone number clicked)
 *
 * Engagement events (do NOT mark as conversions — avoids inflating Smart Campaigns CPC):
 *   - cta_click
 *   - service_view
 *   - resource_view
 *   - language_switch
 */

declare function gtag(...args: unknown[]): void;

function track(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
}

/** Fire when a contact form is successfully submitted. Primary conversion. */
export function trackLeadSubmission(params: {
  language: 'en' | 'es';
  service?: string;
}) {
  track('generate_lead', {
    event_category: 'contact',
    event_label: params.service || 'general',
    language: params.language,
  });
}

/** Fire when a phone number link is clicked. Primary conversion. */
export function trackPhoneClick(params: {
  phone_number: string;
  location: string;        // e.g. 'nav', 'contact_page', 'service_cta', 'footer'
  language: 'en' | 'es';
}) {
  track('phone_call_click', {
    event_category: 'contact',
    phone_number: params.phone_number,
    location: params.location,
    language: params.language,
  });
}

/** Fire when a primary CTA button is clicked (not form submit, not phone). */
export function trackCtaClick(params: {
  label: string;           // e.g. 'free_consultation', 'schedule_consultation'
  location: string;        // e.g. 'hero', 'service_page', 'about_page'
  language: 'en' | 'es';
}) {
  track('cta_click', {
    event_category: 'engagement',
    cta_label: params.label,
    location: params.location,
    language: params.language,
  });
}

/** Fire when a service/practice area detail page is viewed. Engagement only. */
export function trackServiceView(params: {
  service_name: string;
  service_slug: string;
  language: 'en' | 'es';
}) {
  track('service_view', {
    event_category: 'engagement',
    service_name: params.service_name,
    service_slug: params.service_slug,
    language: params.language,
  });
}

/** Fire when a resource guide is viewed. */
export function trackResourceView(params: {
  resource_name: string;
  resource_slug: string;
  language: 'en' | 'es';
}) {
  track('resource_view', {
    event_category: 'engagement',
    resource_name: params.resource_name,
    resource_slug: params.resource_slug,
    language: params.language,
  });
}

/** Fire when the language toggle is used. */
export function trackLanguageSwitch(params: {
  from: 'en' | 'es';
  to: 'en' | 'es';
}) {
  track('language_switch', {
    event_category: 'engagement',
    from_language: params.from,
    to_language: params.to,
  });
}
