import { button, textLink, sectionHeading, serviceCards, contactBand, credibility } from '../components/ui.mjs';

export default {
  path: '/', title: 'Independent technology & AI consultancy',
  description: 'Founder-led technology and AI advisory, engineering and modernisation. Pafundi Labs helps businesses turn technology decisions into practical progress.',
  render: () => `
    <section class="hero wrap">
      <div class="hero-copy"><p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Independent technology & AI consultancy</p><h1>Clear thinking.<br>Practical <em>engineering.</em></h1><p class="lead">Make better technology decisions.<br>Then make them work.</p><p class="hero-detail">Pafundi Labs helps businesses decide what to automate, modernise or build — and turn a clear direction into working software.</p><div class="actions">${button('Explore the services', '/services/')}${textLink('Start a conversation', '/contact/')}</div><p class="hero-founder"><a href="/about/">Founder-led by Antonio Pafundi <span aria-hidden="true">↗</span></a></p></div>
      <aside class="approach-panel" aria-label="The Pafundi Labs approach"><div class="panel-heading"><span class="eyebrow">From decision to delivery</span><span class="panel-monogram" aria-hidden="true">p.</span></div><p class="panel-statement">The right next step.<br>Built on understanding.</p><ol class="approach-list"><li><span>01</span><div><h2>Understand</h2><p>The systems, the constraints, the real problem.</p></div></li><li><span>02</span><div><h2>Decide</h2><p>What matters. What to change. What to leave alone.</p></div></li><li><span>03</span><div><h2>Build</h2><p>A focused improvement, with a useful handover.</p></div></li></ol>${textLink('How engagements work', '/services/#approach')}</aside>
    </section>
    <div id="about">${credibility()}</div>
    <section class="wrap section-space">${sectionHeading('01 / What Pafundi Labs does', 'Clarity where it matters. Progress where it counts.', 'From an independent second opinion to hands-on engineering, shaped around the problem rather than a prescribed solution.')}${serviceCards()}</section>
    <section class="tinted-section" id="reviews"><div class="wrap section-space">
      ${sectionHeading('02 / Ways to work together', 'A defined review. Or a project shaped around you.', 'Choose a focused starting point, or discuss a broader advisory, engineering or automation engagement.')}
      <div class="engagement-grid engagement-grid--three">
        <article class="engagement-card"><p class="eyebrow">Financial services</p><h3>Get an independent second opinion.</h3><p>Two focused reviews for financial management and engineering teams: Technology & AI, or a real-time trading and Python platform.</p>${textLink('View review scopes and prices', '/services/#reviews')}</article>
        <article class="engagement-card"><p class="eyebrow">For founders</p><h3>Decide before you spend.</h3><p>Fixed-scope product and technology assessments for launch, scaling or investment readiness — with clear deliverables and starting prices.</p>${textLink('See founder offers', '/review/')}</article>
        <article class="engagement-card"><p class="eyebrow">Scoped & quoted</p><h3>Move a project forward.</h3><p>For ongoing advice, modernisation, integrations or automation, start with the outcome you need. Scope and fee are agreed after an initial discussion.</p>${textLink('Discuss your project', '/contact/')}</article>
      </div>
    </div></section>
    ${contactBand()}`,
};
