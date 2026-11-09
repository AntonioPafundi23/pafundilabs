import { site, founderOffers, founderProcess, founderExclusions } from '../content/site.mjs';
import { escapeHtml, sectionHeading, button, textLink, contactBand } from '../components/ui.mjs';

function offerCards() {
  return `<div class="offer-grid">${founderOffers.map((offer) => `
    <article class="review-card offer-card" id="${offer.id}">
      <div class="card-top"><span class="index">${offer.number}</span><span class="tag">${escapeHtml(offer.timing)}</span></div>
      <h3>${escapeHtml(offer.title)}</h3>
      <p class="offer-question">${escapeHtml(offer.question)}</p>
      <p>${escapeHtml(offer.description)}</p>
      <h4 class="label">What you receive</h4>
      <ul class="arrow-list">${offer.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      <div class="review-bottom">
        <p class="price">${escapeHtml(offer.price)}</p>
        ${button('Book an introductory call', site.bookingUrl)}
      </div>
    </article>`).join('')}</div>`;
}

export default {
  path: '/review/',
  title: 'Product & technology advisory for founders',
  description: 'Fixed-scope product and technology assessments for business founders. Launch blueprints, scaling reviews and investment readiness from US$1,500.',
  render: () => `<section class="wrap page-intro page-intro--offer"><p class="eyebrow">For business founders</p><h1>Independent advice before<br><em>expensive decisions.</em></h1><p class="lead">Decide what to build, change or leave alone before committing budget, hiring or fundraising. You buy a clearer decision — not development hours.</p></section>
    <section class="wrap offer-section">
      <p class="eyebrow offer-section-label">Four fixed-scope offers</p>
      ${offerCards()}
      <p class="section-footnote">Scope confirmed before purchase. Payment in full before work begins. Remote delivery. NDA welcome.</p>
    </section>
    <section class="tinted-section" id="process"><div class="wrap section-space">
      ${sectionHeading('How delivery works', 'A fixed process. A written outcome.', 'Suggested delivery is within 10 business days of kickoff and receipt of the required materials. The introductory call confirms fit and scope; it is not the paid engagement.')}
      <ol class="steps steps--four">${founderProcess.map((step) => `<li><span class="index">${step.number}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></li>`).join('')}</ol>
    </div></section>
    <section class="wrap section-space split-section" id="exclusions">
      <div>
        <div class="section-heading">
          <p class="eyebrow">What this is not</p>
          <h2>Clear boundaries keep the offer useful.</h2>
        </div>
        <p>These assessments help you make a better-informed product or technology decision. They are independent: there is no incentive to sell a subsequent software project.</p>
        <p class="scope-note">If you need implementation after the assessment, that is scoped and quoted separately.</p>
      </div>
      <div>
        <h3 class="label">Not included</h3>
        <ul class="arrow-list">${founderExclusions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        <div class="booking-panel">
          <p class="eyebrow">Next step</p>
          <h3>Book a short introductory call.</h3>
          <p>Confirm which offer fits, what will be reviewed, and the materials needed. Then receive the agreement and payment details.</p>
          <div class="actions">${button('Book an introductory call', site.bookingUrl)}${textLink('Or email Antonio', `mailto:${site.email}?subject=Product%20%26%20technology%20review`)}</div>
        </div>
      </div>
    </section>
    ${contactBand({
      title: 'Not sure which offer fits?',
      text: 'Describe the decision in front of you. Antonio will say whether a fixed-scope assessment is useful, or whether a custom advisory engagement makes more sense.',
    })}`,
};
