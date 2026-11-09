import { site, reviews, services } from '../content/site.mjs';

export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export const arrow = '<span aria-hidden="true">↗</span>';

export function button(label, href, { outline = false } = {}) {
  return `<a class="button${outline ? ' button--outline' : ''}" href="${escapeHtml(href)}">${escapeHtml(label)}${arrow}</a>`;
}

export function textLink(label, href) {
  return `<a class="text-link" href="${escapeHtml(href)}">${escapeHtml(label)}${arrow}</a>`;
}

export function sectionHeading(eyebrow, title, description = '') {
  return `<div class="section-heading"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h2>${escapeHtml(title)}</h2>${description ? `<p class="section-description">${escapeHtml(description)}</p>` : ''}</div>`;
}

export function pageIntro(eyebrow, title, description) {
  return `<section class="wrap page-intro"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${title}</h1><p class="lead">${escapeHtml(description)}</p></section>`;
}

export function serviceCards() {
  return `<div class="service-grid">${services.map((service) => `<article class="service-card"><span class="index">${service.number}</span><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.short)}</p>${textLink('Explore this service', `/services/#${service.id}`)}</article>`).join('')}</div>`;
}

export function reviewCards() {
  return `<div class="review-grid">${reviews.map((review) => `
    <article class="review-card" id="${review.id}">
      <div class="card-top"><span class="index">${review.number}</span><span class="tag">${escapeHtml(review.audience)}</span></div>
      <h3>${escapeHtml(review.title)}</h3>
      <p>${escapeHtml(review.description)}</p>
      <ul class="arrow-list">${review.outcomes.map((outcome) => `<li>${escapeHtml(outcome)}</li>`).join('')}</ul>
      <div class="review-bottom">
        <p class="price">${site.fee}<span>/ ${site.duration}</span></p>
        ${button('Discuss this review', '/contact/')}
        <a class="download-link" href="${review.pdf}" target="_blank" rel="noopener">Read the one-page outline <span>(PDF)</span>${arrow}<span class="sr-only"> — ${escapeHtml(review.title)} (opens in a new tab)</span></a>
      </div>
    </article>`).join('')}</div>`;
}

export function contactBand({
  title = 'What are you trying to solve?',
  text = 'A technology decision, a system that needs attention, or an idea worth testing. Start with a few lines about the situation.',
  buttonLabel = 'Tell us about it',
  buttonHref = '/contact/',
  eyebrow = 'A useful first conversation',
} = {}) {
  return `<section class="contact-band" id="contact"><div class="wrap contact-band-inner"><div><p class="eyebrow">${escapeHtml(eyebrow)}</p><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></div>${button(buttonLabel, buttonHref, { outline: true })}</div></section>`;
}

export function portrait({ large = false } = {}) {
  return `<figure class="portrait${large ? ' portrait--large' : ''}"><img src="/assets/antonio-800.webp" srcset="/assets/antonio-480.webp 480w, /assets/antonio-800.webp 800w" sizes="(max-width: 760px) 90vw, 40vw" width="800" height="1000" loading="lazy" alt="Antonio Pafundi, founder of Pafundi Labs"><figcaption><span>Antonio Pafundi</span><span>Founder · Engineer · Adviser</span></figcaption></figure>`;
}

export function credibility(items = [
  { title: 'Barclays Rates', detail: 'VP Engineering' },
  { title: 'Man Group', detail: 'Trading technology experience' },
  { title: 'London · Paris · New York', detail: 'Engineering modernisation' },
]) {
  return `<div class="credibility wrap"><p class="eyebrow">Founded on experience in financial technology</p><div>${items.map((item) => `<span>${escapeHtml(item.title)} <small>${escapeHtml(item.detail)}</small></span>`).join('')}</div></div>`;
}
