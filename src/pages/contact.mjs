import { site } from '../content/site.mjs';
import { pageIntro, textLink, escapeHtml } from '../components/ui.mjs';

export default {
  path: '/contact/', title: 'Contact',
  description: 'Tell Pafundi Labs what you are trying to solve. Contact Antonio Pafundi about a review, technology decision or engineering project.',
  render: () => `${pageIntro('Start a conversation', 'What are you<br><em>trying to solve?</em>', 'A question about technology, a system that needs attention, or an idea you want to test. You do not need a finished brief to get in touch.')}
    <section class="wrap contact-page section-bottom"><div class="contact-card"><p class="eyebrow">Direct to Antonio</p><h2>A few lines are enough.</h2><p>Tell Antonio about your business, what you would like to improve and any important constraints. Antonio will suggest a sensible next step and let you know whether Pafundi Labs is the right fit.</p><a class="contact-email" href="mailto:${site.email}?subject=Let%27s%20discuss%20a%20project">${escapeHtml(site.email)} <span aria-hidden="true">↗</span></a><p class="email-help">Use the link to open your email app, or copy the address into the service you use.</p>${textLink('Connect on LinkedIn', site.linkedin)}</div><div class="contact-guidance"><p class="eyebrow">A helpful starting point</p><ol class="contact-prompts"><li><h3>The situation</h3><p>A little about your business and the system, workflow or decision involved.</p></li><li><h3>The outcome</h3><p>What you would like to be different, and why it matters now.</p></li><li><h3>The constraints</h3><p>Any relevant timing, team capacity or technical requirements.</p></li></ol><div class="fit-note"><h3>Start with a short fit check.</h3><p>An initial 10-minute conversation is free. Scope and fees are agreed before an engagement begins.</p></div></div></section>
    `,
};
