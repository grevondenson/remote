export const CATEGORIES = ['All', 'AI Training', 'Expert Talent', 'Chat Moderation', 'Surveys', 'Job Discovery']

export const platforms = [
  {
    id: 'mindrift',
    name: 'Mindrift',
    domain: 'mindrift.ai',
    url: 'https://mindrift.ai',
    category: 'AI Training',
    tags: ['AI Training', 'Expert Work', 'Up to $80/hr'],
    description:
      'Mindrift (by Toloka) connects skilled writers, editors, and domain experts with AI training projects from leading tech companies. Tasks include rating AI outputs, crafting specialized prompts, and evaluating model responses across fields like medicine, law, and STEM. Flexible with no minimum hours.',
  },
  {
    id: 'outlier',
    name: 'Outlier',
    domain: 'outlier.ai',
    url: 'https://outlier.ai',
    category: 'AI Training',
    tags: ['AI Training', 'Scale AI', 'Weekly Pay'],
    description:
      'Operated by Scale AI, Outlier connects subject matter experts in coding, STEM, and writing with AI model training tasks. You craft difficult prompts, rank AI responses, and improve model quality. Pays $15–$50/hr based on your expertise, with weekly PayPal payouts and full schedule freedom.',
  },
  {
    id: 'dataannotation',
    name: 'DataAnnotation Tech',
    domain: 'dataannotation.tech',
    url: 'https://dataannotation.tech',
    category: 'AI Training',
    tags: ['AI Annotation', '$20–$60+/hr', 'Weekly Payouts'],
    description:
      'DataAnnotation Tech pairs you with AI training tasks from coding review to writing evaluation. With 100K+ experts on board, the platform pays $20–$60+/hr for general tasks and $50–$100+ for STEM specialists. Payments land weekly via PayPal with a straightforward onboarding process.',
  },
  {
    id: 'prolific',
    name: 'Prolific',
    domain: 'prolific.com',
    url: 'https://prolific.com',
    category: 'Surveys',
    tags: ['Academic Surveys', 'Ethical Pay', 'AI Research'],
    description:
      'Prolific connects academic researchers and AI developers with study participants for high-quality surveys and human feedback tasks. Known for an ethical minimum pay policy and fast, reliable payouts. Highly trusted by universities and AI labs worldwide for collecting genuine human response data.',
  },
  {
    id: 'alignerr',
    name: 'Alignerr',
    domain: 'alignerr.com',
    url: 'https://alignerr.com',
    category: 'AI Training',
    tags: ['AI Alignment', 'Up to $150/hr', 'Expert Required'],
    description:
      'Alignerr connects subject matter experts across 50+ disciplines to generative AI alignment projects. Contributors help make AI safer and more accurate through specialized tasks. Transparent pay structure offers up to $150/hr with flexible, fully remote scheduling that fits around your life.',
  },
  {
    id: 'handshake',
    name: 'Handshake',
    domain: 'joinhandshake.com',
    url: 'https://joinhandshake.com',
    category: 'Job Discovery',
    tags: ['Job Discovery', 'Remote Roles', 'Entry-Level Friendly'],
    description:
      'Handshake is a leading career platform connecting students, graduates, and professionals with remote job opportunities across thousands of employers. Use it to discover entry-level remote roles, AI training gigs, and work-from-home positions posted by legitimate employers around the world.',
  },
  {
    id: 'mercor',
    name: 'Mercor',
    domain: 'mercor.io',
    url: 'https://mercor.io',
    category: 'Expert Talent',
    tags: ['Premium Platform', 'Up to $200/hr', 'Top AI Labs'],
    description:
      'Mercor is a premium AI talent marketplace matching professionals — ex-bankers, doctors, engineers, lawyers — with AI training projects at OpenAI, Anthropic, and Meta. Paying out $1.5M+ daily to contractors worldwide. Best for those with years of industry experience in a specialized field.',
  },
  {
    id: 'crowdgen',
    name: 'CrowdGen',
    domain: 'crowdgen.com',
    url: 'https://crowdgen.com',
    category: 'Expert Talent',
    tags: ['Appen Platform', '170+ Countries', '$2–$40/hr'],
    description:
      'CrowdGen, powered by Appen (25+ years in AI data), is a global crowdsourcing platform offering data annotation, transcription, translation, and social media evaluation tasks. Paid out $157M+ to contributors worldwide. Projects are competitive but the platform is 100% legitimate.',
  },
  {
    id: 'cloudworkers',
    name: 'Cloudworkers',
    domain: 'cloudworkers.company',
    url: 'https://cloudworkers.company',
    category: 'Chat Moderation',
    tags: ['Chat Moderation', 'Freelance', 'Monthly Pay'],
    description:
      'Cloudworkers is a European chat moderation company hiring remote freelance moderators worldwide. As a moderator, you engage in text-based conversations on social community platforms, keeping chats lively and engaging. Paid monthly via PayPal or bank transfer. Requires a laptop and stable internet.',
  },
  {
    id: 'textingfactory',
    name: 'Texting Factory',
    domain: 'textingfactory.com',
    url: 'https://textingfactory.com',
    category: 'Chat Moderation',
    tags: ['Chat Operator', 'Weekly Pay', '100% Text-Based'],
    description:
      'Texting Factory is a remote text chat operator platform where you work as an entertainment chat agent — 100% text-only, no video or voice required. Pay is based on messages sent, with weekly payouts. Completely flexible scheduling — no minimum hours, work from anywhere with internet.',
  },
  {
    id: 'chatfromhome',
    name: 'Chat from Home',
    domain: 'chatfromhome.com',
    url: 'https://chatfromhomebase.com',
    category: 'Chat Moderation',
    tags: ['Remote Chat', 'No Phone Calls', 'Flexible Hours'],
    description:
      'Chat from Home offers remote chat operator positions where you work as a text-based agent on various online platforms. Everything is text — no phone calls required. Choose your own hours and enjoy weekly or monthly payout options that fit seamlessly around your existing commitments.',
  },
  {
    id: 'attapoll',
    name: 'AttaPoll',
    domain: 'attapoll.com',
    url: 'https://attapoll.com',
    category: 'Surveys',
    tags: ['Mobile App', 'Instant Cashout', 'Beginner Friendly'],
    description:
      'AttaPoll is a top-rated mobile survey app (4.5 stars, 31K+ reviews) that pays you for sharing opinions through short surveys. Surveys pay $0.10–$10 each, with instant cash-outs via PayPal, bank transfer, or gift cards from just $2.50 minimum. Perfect for beginners earning their first remote income.',
  },
  {
    id: 'grapedata',
    name: 'GrapeData',
    domain: 'grape-data.com',
    url: 'https://grape-data.com',
    category: 'Surveys',
    tags: ['B2B Surveys', 'Expert Insights', '48hr Payouts'],
    description:
      'GrapeData specializes in B2B industry surveys, paying professionals well for their field expertise and insights. Participants earn above-average rates per completed survey, with 48-hour PayPal payouts across 100+ countries. Best for those with professional networks or deep industry knowledge.',
  },
  {
    id: 'Telus Digital',
    name: 'Telus Digital',
    domain: 'telus.com/digital',
    url: 'https://telus.com/digital',
    category: 'Job Discovery',
    tags: ['Remote Jobs', 'Tech Industry', 'Global Opportunities'],
    description:
      'Telus Digital is the remote work division of Telus, a major Canadian telecom. They offer a variety of remote job opportunities in tech, customer service, and digital roles. A great platform for discovering legitimate remote positions with a reputable company that values work-life balance.',
  },
  {
    id: 'Imerit',
    name: 'Imerit',
    domain: 'imerit.net',
    url: 'https://imerit.net',
    category: 'Job Discovery',
    tags: ['Remote Jobs', 'Tech Industry', 'Global Opportunities'],
    description:
      'Imerit is a leading platform for remote job opportunities in the tech industry. They offer a variety of positions across different domains, allowing professionals to work from anywhere with a stable internet connection.',
  }
]
