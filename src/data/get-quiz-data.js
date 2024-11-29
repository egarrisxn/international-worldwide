export const nextjsQuestions = [
  {
    question: 'Which company created Next.js?',
    options: ['Google', 'Vercel', 'Facebook', 'Amazon'],
    answer: 1 // Vercel
  },
  {
    question: 'What method fetches data on every request in Next.js?',
    options: [
      'getStaticProps',
      'getServerSideProps',
      'getInitialProps',
      'useEffect'
    ],
    answer: 1 // getServerSideProps
  },
  {
    question: 'What is the default rendering behavior in Next.js?',
    options: [
      'Client-side rendering',
      'Static Site Generation',
      'Server-side rendering',
      'Dynamic rendering'
    ],
    answer: 2 // Static Site Generation
  },
  {
    question:
      'Which component wraps your app for global settings in Next.js App Router?',
    options: ['_app.js', 'layout.js', '_document.js', 'page.js'],
    answer: 1 // layout.js
  },
  {
    question: 'Which hook is exclusive to Next.js for routing?',
    options: ['useNavigate', 'useRouter', 'useHistory', 'useRoutes'],
    answer: 1 // useRouter
  },
  {
    question: 'How do you enable dynamic routes in Next.js?',
    options: [
      'Create a `routes.js` file',
      'Use the `DynamicRoutes` API',
      'Add `[param]` files in the `pages` or `app` directory',
      'Add routes to `next.config.js`'
    ],
    answer: 2 // Add `[param]` files
  },
  {
    question: 'What does ISR stand for in Next.js?',
    options: [
      'Immediate Server Rendering',
      'Incremental Static Regeneration',
      'Internal State Routing',
      'In-memory Server Rendering'
    ],
    answer: 1 // Incremental Static Regeneration
  },
  {
    question: 'How do you specify a fallback page for a dynamic route?',
    options: [
      'Using `getStaticProps`',
      'Using `fallback: true` in `getStaticPaths`',
      'Using `useRouter`',
      'Adding a `[fallback].js` file'
    ],
    answer: 1 // fallback: true
  },
  {
    question: 'What command starts the Next.js development server?',
    options: ['npm run dev', 'npm run start', 'npx next-dev', 'npm build'],
    answer: 0 // npm run dev
  },
  {
    question: 'What feature does Next.js offer for multilingual websites?',
    options: ['SSR', 'I18n', 'Dynamic Imports', 'Static Exports'],
    answer: 1 // I18n
  }
];

export const reactQuestions = [
  {
    question: 'What is React primarily used for?',
    options: [
      'Backend development',
      'Building user interfaces',
      'Database management',
      'Server-side rendering'
    ],
    answer: 1 // Building user interfaces
  },
  {
    question: 'Who developed React?',
    options: ['Google', 'Facebook (Meta)', 'Microsoft', 'Apple'],
    answer: 1 // Facebook (Meta)
  },
  {
    question: 'What is JSX?',
    options: [
      'A JavaScript library',
      'A syntax extension for JavaScript',
      'A type-checking tool',
      'A CSS framework'
    ],
    answer: 1 // A syntax extension for JavaScript
  },
  {
    question:
      'Which React hook is used to manage state in a functional component?',
    options: ['useEffect', 'useState', 'useReducer', 'useRef'],
    answer: 1 // useState
  },
  {
    question: 'What does the `useEffect` hook do?',
    options: [
      'Manages component lifecycle events',
      'Manages state updates',
      'Directly interacts with the DOM',
      'Handles routing in React'
    ],
    answer: 0 // Manages component lifecycle events
  },
  {
    question: 'What is the virtual DOM in React?',
    options: [
      'A replica of the real DOM stored in memory',
      'A tool for database queries',
      'A method for server-side rendering',
      'A browser API for DOM manipulation'
    ],
    answer: 0 // A replica of the real DOM stored in memory
  },
  {
    question: 'How do you pass data from a parent to a child component?',
    options: ['Using props', 'Using state', 'Using context', 'Using Redux'],
    answer: 0 // Using props
  },
  {
    question: 'What does `useRef` do in React?',
    options: [
      'Manages state updates',
      'Creates a reference to a DOM element or value',
      'Handles asynchronous operations',
      'Sets up routing'
    ],
    answer: 1 // Creates a reference to a DOM element or value
  },
  {
    question: 'What is the purpose of React keys?',
    options: [
      'To identify unique elements in a list',
      'To manage state updates',
      'To optimize API calls',
      'To control routing'
    ],
    answer: 0 // To identify unique elements in a list
  },
  {
    question: 'What is React’s Context API used for?',
    options: [
      'Managing complex state',
      'Sharing data across components without props drilling',
      'Handling form submissions',
      'Optimizing performance'
    ],
    answer: 1 // Sharing data across components without props drilling
  }
];

export const vercelQuestions = [
  {
    question: 'What is Vercel primarily used for?',
    options: [
      'Game development',
      'Static and dynamic web hosting',
      'Mobile app hosting',
      'Cloud storage'
    ],
    answer: 1 // Static and dynamic web hosting
  },
  {
    question: 'Which framework was created by Vercel?',
    options: ['React', 'Next.js', 'Vue.js', 'Svelte'],
    answer: 1 // Next.js
  },
  {
    question: 'What command deploys a project to Vercel?',
    options: ['vercel deploy', 'vc deploy', 'vercel push', 'deploy-now'],
    answer: 0 // vercel deploy
  },
  {
    question: 'What type of functions does Vercel provide for backend logic?',
    options: [
      'Serverless functions',
      'Dedicated servers',
      'Containers',
      'Stateful functions'
    ],
    answer: 0 // Serverless functions
  },
  {
    question: 'What does Vercel’s edge network optimize for?',
    options: [
      'Game performance',
      'Static site generation',
      'Global delivery and caching',
      'Database queries'
    ],
    answer: 2 // Global delivery and caching
  },
  {
    question: 'What is the name of Vercel’s preview deployment system?',
    options: [
      'Preview Mode',
      'Branch Deployments',
      'Test Builds',
      'Deploy Previews'
    ],
    answer: 3 // Deploy Previews
  },
  {
    question: 'What is the default branch for production deployment on Vercel?',
    options: ['main', 'master', 'production', 'deploy'],
    answer: 0 // main
  },
  {
    question: 'Which feature of Vercel allows collaboration on deployments?',
    options: ['Access Tokens', 'Teams', 'Deployment Hooks', 'Shared URLs'],
    answer: 1 // Teams
  },
  {
    question: 'Can you deploy non-Next.js projects to Vercel?',
    options: [
      'Yes',
      'No',
      'Only if it’s a React project',
      'Only if it’s a Node.js project'
    ],
    answer: 0 // Yes
  },
  {
    question: 'What does Vercel automatically configure for every deployment?',
    options: [
      'Continuous integration',
      'Database connections',
      'HTTPS and domains',
      'API routes'
    ],
    answer: 2 // HTTPS and domains
  }
];
