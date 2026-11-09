import { site, founderOffers, founderProcess, founderCredibility, bookingLink } from '../content/site.mjs';
import { escapeHtml, sectionHeading, button, textLink, contactBand, credibility } from '../components/ui.mjs';

function offerCards() {
  return `<div class="offer-grid">${founderOffers.map((offer) => `
    <article class="review-card offer-card${offer.secondary ? ' offer-card--secondary' : ''}" id="${offer.id}">
      ${(offer.aliases || []).map((alias) => `<span id="${alias}" class="anchor-alias" aria-hidden="true"></span>`).join('')}
      <span class="index">${offer.number}</span>
      <h3>${escapeHtml(offer.title)}</h3>
      <p class="offer-question">${escapeHtml(offer.question)}</p>
      <p>${escapeHtml(offer.description)}</p>
      <h4 class="label">What you receive</h4>
      <ul class="arrow-list">${offer.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      <div class="review-bottom">
        <p class="price">${escapeHtml(offer.price)}</p>
        ${button('Book a call with Antonio', bookingLink(offer.calService))}
      </div>
    </article>`).join('')}</div>`;
}

export default {
  path: '/review/',
  title: 'Product & technology advisory for founders',
  description: 'Fixed-scope product and technology assessments for business founders. Launch blueprints, scaling reviews and investment readiness from US$1,500.',
  render: () => `<section class="wrap page-intro page-intro--offer">
      <p class="eyebrow">For business founders</p>
      <h1>Independent advice before<br><em>expensive decisions.</em></h1>
      <p class="lead">Make informed product and technology decisions before committing to development, scaling or fundraising. Work directly with Antonio Pafundi on an independent assessment and a written plan for your next steps.</p>
      <div class="actions">${textLink('Explore services', '#offers')}</div>
    </section>
    <div class="credibility-compact">${credibility(founderCredibility)}</div>
    <section class="wrap offer-section" id="offers">
      <p class="eyebrow offer-section-label">Our Services</p>
      ${offerCards()}
      <p class="section-footnote">Starting prices. Delivery within 10 business days of kickoff and receipt of the required materials.</p>
    </section>
    <section class="wrap founder-booking" id="book">
      <div class="founder-booking-copy">
        <p class="eyebrow">Founder-led</p>
        <h2>Work directly with the founder.</h2>
        <p>Every engagement is personally led and delivered by Antonio Pafundi, bringing senior engineering experience directly to your business decisions.</p>
        <div class="actions">${button('Book a call with Antonio', bookingLink())}${textLink('Or email Antonio', `mailto:${site.email}?subject=Product%20%26%20technology%20review`)}</div>
        <p class="confidentiality-note">Confidential discussions. NDA available on request.</p>
      </div>
      <div class="founder-booking-proof">
        <p class="eyebrow">Background</p>
        <ul class="arrow-list">
          <li>VP Engineering, Barclays Rates</li>
          <li>Trading technology experience, Man Group</li>
        </ul>
        ${textLink('More about Antonio', '/about/')}
      </div>
    </section>
    <section class="tinted-section" id="process"><div class="wrap section-space">
      ${sectionHeading('How delivery works', 'A clear path from first conversation to written outcome.', 'Suggested delivery is within 10 business days of kickoff and receipt of the required materials. The introductory call is complimentary; the engagement begins once scope and terms are agreed.')}
      <ol class="steps steps--four">${founderProcess.map((step) => `<li><span class="index">${step.number}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></li>`).join('')}</ol>
    </div></section>
    ${contactBand({
      eyebrow: 'A useful first conversation',
      title: 'Discuss your next product or technology decision.',
      text: 'Book a 15-minute conversation directly with Antonio to discuss your objectives and the right engagement for your business.',
      buttonLabel: 'Book an introductory call',
      buttonHref: bookingLink(),
    })}`,
};
