import { services, site, exampleEngagement } from '../content/site.mjs';
import { escapeHtml, pageIntro, sectionHeading, reviewCards, contactBand, textLink } from '../components/ui.mjs';

export default {
  path: '/services/', title: 'Services',
  description: `Technology and AI advisory, hands-on engineering, modernisation and workflow automation. Explore services and fixed-scope ${site.fee} reviews.`,
  render: () => `${pageIntro('What Pafundi Labs does', 'A clearer direction.<br><em>The capability to deliver it.</em>', 'Some problems need an independent assessment. Others need someone to build, connect or improve a system. Start with what the business needs to achieve.')}
    <div class="wrap service-details">${services.map((service) => `<section class="service-detail" id="${service.id}"><div><p class="eyebrow">${service.number} / Service</p><h2>${escapeHtml(service.title)}</h2></div><div><p class="lead lead--small">${escapeHtml(service.description)}</p><h3 class="label">Example engagements</h3><ul class="arrow-list">${service.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join('')}</ul><p class="outcome">${escapeHtml(service.outcome)}</p><div class="service-enquiry"><p>Scope and fees agreed for your engagement.</p>${textLink('Discuss your requirements', '/contact/')}</div></div></section>`).join('')}</div>
    <section class="wrap example-engagement section-space" id="example">
      ${sectionHeading('Illustrative engagement', exampleEngagement.title, exampleEngagement.introduction)}
      <div class="service-grid">${exampleEngagement.stages.map((stage, i) => `
        <article class="service-card"><span class="index">0${i + 1}</span><h3>${escapeHtml(stage.title)}</h3><p>${escapeHtml(stage.text)}</p></article>`).join('')}
      </div>
      <p class="example-next">${escapeHtml(exampleEngagement.next)}</p>
    </section>
    <section class="tinted-section" id="reviews"><div class="wrap section-space">${sectionHeading('Two fixed-price engagements', 'The independent reviews.', 'For a clearly defined assessment, these two reviews have a fixed scope and fee. Broader advisory and delivery projects are scoped and quoted separately.')}${reviewCards()}<p class="section-footnote">Both include a 20-minute walkthrough and a 30-minute implementation discussion. Remote delivery. NDA welcome.</p></div></section>
    <section class="wrap section-space" id="approach">${sectionHeading('How engagements work', 'Start small. Agree the outcome.', 'The reviews are one way to begin. Engineering and automation projects are scoped around the work required.')}<ol class="steps"><li><span class="index">01</span><h3>A conversation</h3><p>Describe the situation, the constraints and the decision or result you need. A short fit check helps establish whether Pafundi Labs can be useful.</p></li><li><span class="index">02</span><h3>A clear scope</h3><p>Agree the inputs, deliverables, timing and fee before work begins. For delivery projects, define a manageable first milestone.</p></li><li><span class="index">03</span><h3>A useful handover</h3><p>Leave with recommendations or working software, the context behind the decisions, and clear next steps for your team.</p></li></ol></section>
    ${contactBand({ title: 'Your problem may not fit a package.', text: 'That is a good reason to talk. Describe what you need to change, and the next step can be scoped around it.' })}`,
};
