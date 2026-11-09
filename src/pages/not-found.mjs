import { button, pageIntro } from '../components/ui.mjs';

export default {
  path: '/404.html', title: 'Page not found', noindex: true,
  description: 'This page does not exist. Return to Pafundi Labs.',
  render: () => `${pageIntro('Pafundi Labs / 404', 'A wrong turn.<br><em>A useful next step.</em>', 'This page does not exist. Explore the services or get in touch about what you are trying to solve.')}<div class="wrap section-bottom actions">${button('Back to the homepage', '/')}${button('Explore the services', '/services/', { outline: true })}</div>`,
};
