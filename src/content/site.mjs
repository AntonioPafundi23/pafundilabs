export const site = {
  name: 'Pafundi Labs',
  origin: 'https://pafundilabs.com',
  email: 'antonio@pafundilabs.com',
  linkedin: 'https://www.linkedin.com/in/antonio-pafundi-143732100/',
  fee: 'US$2,500',
  duration: '3 business days',
  bookingUrl: 'https://cal.com/antonio-pafundi/pafundi-labs',
  bookingServiceParam: 'Which-service-are-you-interested-in',
  navigation: [
    { href: '/services/', label: 'Services' },
    { href: '/financial-services/', label: 'Financial services' },
    { href: '/review/', label: 'For founders' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
  ],
};

export const services = [
  {
    id: 'advisory', number: '01', title: 'Technology & AI advisory',
    short: 'Make the next technology decision with a clearer view of the options.',
    description: 'An independent assessment before committing budget, choosing a vendor or starting a build. Understand the trade-offs, the constraints and what is worth doing first.',
    examples: ['Technology roadmaps and architecture reviews', 'Build-versus-buy and vendor assessments', 'AI opportunities, feasibility and adoption'],
    outcome: 'A decision you can explain. A plan you can act on.',
  },
  {
    id: 'engineering', number: '02', title: 'Engineering & modernisation',
    short: 'Improve the systems the business depends on, with a practical path forward.',
    description: 'Hands-on engineering and technical leadership for existing platforms or a new capability. Start with a bounded problem and improve it without assuming everything needs replacing.',
    examples: ['Python platforms and real-time systems', 'Data flows, APIs and system integrations', 'Testing, observability and delivery workflows'],
    outcome: 'Working software, with the decisions and handover to support it.',
  },
  {
    id: 'automation', number: '03', title: 'Automation & intelligent workflows',
    short: 'Reduce manual work and put useful tools into the hands of your team.',
    description: 'Connect fragmented processes, automate repeatable work and test where AI earns its place. Keep human judgement, data quality and operational controls in the design.',
    examples: ['Reporting and reconciliation workflows', 'Internal tools and focused AI prototypes', 'Document and data-processing automation'],
    outcome: 'Less friction in the work. Clear ownership of the result.',
  },
];

export const reviews = [
  {
    id: 'technology-ai', number: '01', audience: 'For management teams',
    title: 'Technology & AI Review',
    description: 'For financial firms deciding what to automate, buy, build or leave alone.',
    outcomes: ['A prioritised 90-day technology roadmap', 'Your first three recommended investments', 'Build, buy and practical AI recommendations'],
    pdf: '/reviews/technology-ai-review.pdf',
  },
  {
    id: 'trading-platform', number: '02', audience: 'For engineering teams',
    title: 'Real-Time Trading & Python Platform Review',
    description: 'For fintech, trading and quant teams assessing a Python-heavy real-time platform.',
    outcomes: ['A five-page report with prioritised findings', 'Architecture, latency and failure-mode analysis', 'Engineering quality and developer workflow recommendations'],
    pdf: '/reviews/trading-platform-review.pdf',
  },
];

export const founderOffers = [
  {
    id: 'product-strategy',
    aliases: ['launch-blueprint'],
    number: '01',
    title: 'Product Strategy & Launch Blueprint',
    // Must match the Cal.com select option value exactly.
    calService: 'Product Strategy & Launch Blueprint',
    question: 'Is this worth building, what should the first version do, and how should I approach it?',
    description: 'For founders with an idea or early prototype who need to decide what to build, buy or leave out before commissioning development.',
    deliverables: [
      'Product concept assessment and competitor landscape',
      'MVP feature scope and build-versus-buy decisions',
      'Proposed architecture and technology choices',
      'Indicative budget ranges, development phases and launch checklist',
    ],
    price: 'From US$1,500',
    timing: 'Within 10 business days',
  },
  {
    id: 'scaling',
    aliases: ['scaling-assessment'],
    number: '02',
    title: 'Product & Technology Scaling Assessment',
    calService: 'Product & Technology Scaling Assessment',
    question: 'Can my existing product support the next stage of the business?',
    description: 'For companies with a working product preparing for more customers, deployments, integrations or operational load.',
    deliverables: [
      'Map of the current product and technical capabilities',
      'Bottlenecks, failure risks and scaling scenarios',
      'Target architecture sketches where useful',
      'Investment requirements and an implementation sequence',
    ],
    price: 'From US$2,500',
    timing: 'Within 10 business days',
  },
  {
    id: 'investment-readiness',
    aliases: [],
    number: '03',
    title: 'Investment Readiness Assessment',
    calService: 'Investment Readiness Assessment',
    question: 'Is my product and technology strategy ready for investor scrutiny?',
    description: 'For startups approaching a funding round who want an independent view of technical credibility, risks and the engineering roadmap.',
    deliverables: [
      'Product and technology overview suitable for investor conversations',
      'Technical risk register and evidence gaps',
      'Scalability assessment and development roadmap',
      'Anticipated due-diligence questions and how to address them',
    ],
    price: 'From US$2,500',
    timing: 'Within 10 business days',
  },
  {
    id: 'custom',
    aliases: ['strategic-advisory'],
    number: '04',
    title: 'Strategic Product & Technology Advisory',
    calService: 'Custom Product & Technology Advisory',
    question: 'I have a specific decision to make. What are my options?',
    description: 'For a focused engineering or product decision that does not fit a standard package. Scope and fee are agreed before work starts.',
    deliverables: [
      'Agreed decision question and evaluation criteria',
      'Comparison of options, costs and risks',
      'A recommended course of action',
      'Written summary you can share with your team or board',
    ],
    price: 'Quoted individually',
    timing: 'Agreed with scope',
    secondary: true,
  },
];

/** Cal.com booking URL, optionally prefilling the service select. */
export function bookingLink(service = 'Not sure yet') {
  const url = new URL(site.bookingUrl);
  url.searchParams.set(site.bookingServiceParam, service);
  return url.toString();
}

export const founderProcess = [
  {
    number: '01',
    title: 'Introductory conversation',
    text: 'A complimentary 15-minute call with Antonio to discuss objectives, identify the relevant service and confirm the proposed scope.',
  },
  {
    number: '02',
    title: 'Confirm the engagement',
    text: 'Agree the deliverables, fixed price and terms before work begins.',
  },
  {
    number: '03',
    title: 'Kickoff and assessment',
    text: 'A 45-minute working session to establish context, followed by independent product and technology analysis.',
  },
  {
    number: '04',
    title: 'Report and walkthrough',
    text: 'The written assessment, then a dedicated 60-minute session to discuss the conclusions and answer questions.',
  },
];

export const founderCredibility = [
  { title: 'Barclays Rates', detail: 'VP Engineering' },
  { title: 'Man Group', detail: 'Trading technology experience' },
  { title: 'Production Systems', detail: 'Architecture, engineering leadership and technology modernisation' },
];

export const sectors = [
  { title: 'Investment & wealth firms', text: 'Asset and wealth managers, brokers and investment-focused family offices making decisions about platforms, reporting and data.' },
  { title: 'Trading & quant teams', text: 'Teams building and operating real-time systems, with questions about architecture, reliability, Python engineering and delivery.' },
  { title: 'Banks, lenders & payments', text: 'Teams assessing a defined workflow, integration or technology investment across financial operations.' },
];

export const exampleEngagement = {
  title: 'From manual exports to repeatable reporting.',
  introduction: 'An illustrative engagement showing how advisory and engineering can work together. The actual scope, timing and fee would be agreed for the project.',
  stages: [
    {
      title: 'The situation',
      text: 'An operations team downloads CSV files from several systems, matches records in Excel and rebuilds the same report each week. Missing fields and mismatched totals take time to investigate.',
    },
    {
      title: 'The approach',
      text: 'Map the inputs and matching rules, identify where exceptions arise, and assess whether existing tools can handle the workflow. Prototype one report before expanding the work.',
    },
    {
      title: 'The deliverable',
      text: 'A reporting prototype with input validation, a list of unmatched records for human review, and a short runbook explaining how to run it and investigate exceptions.',
    },
  ],
  next: 'Any production rollout would have its own agreed scope, including access controls, monitoring, ownership and handover.',
};
