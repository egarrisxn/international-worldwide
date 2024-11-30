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

export const javascriptQuestions = [
  {
    question: 'Which of the following is a JavaScript data type?',
    options: ['String', 'HTML', 'CSS', 'JSON'],
    answer: 0 // String
  },
  {
    question: 'What is the keyword used to declare a variable in JavaScript?',
    options: ['var', 'let', 'const', 'All of the above'],
    answer: 3 // All of the above
  },
  {
    question:
      'Which method is used to parse a JSON string into a JavaScript object?',
    options: ['JSON.stringify', 'JSON.parse', 'parseJSON', 'String.toJSON'],
    answer: 1 // JSON.parse
  },
  {
    question: 'What is the result of `typeof null` in JavaScript?',
    options: ['null', 'object', 'undefined', 'string'],
    answer: 1 // object
  },
  {
    question: 'What does `===` operator check in JavaScript?',
    options: [
      'Equality of value and type',
      'Equality of value only',
      'Inequality of value',
      'None of the above'
    ],
    answer: 0 // Equality of value and type
  },
  {
    question:
      'Which function is used to schedule code execution after a set period?',
    options: ['setTimeout', 'setInterval', 'setTime', 'schedule'],
    answer: 0 // setTimeout
  },
  {
    question: 'What is the scope of a `let` variable declared inside a block?',
    options: ['Global', 'Function', 'Block', 'None of the above'],
    answer: 2 // Block
  },
  {
    question: 'What does the `Array.prototype.map` method do?',
    options: [
      'Sorts the array',
      'Filters the array',
      'Creates a new array with transformed elements',
      'Removes duplicate elements'
    ],
    answer: 2 // Creates a new array with transformed elements
  },
  {
    question: 'Which of the following is not a JavaScript framework/library?',
    options: ['React', 'Angular', 'Django', 'Vue'],
    answer: 2 // Django
  },
  {
    question: 'What is the purpose of the `Promise` object in JavaScript?',
    options: [
      'Handling synchronous operations',
      'Handling asynchronous operations',
      'Performing arithmetic operations',
      'Managing event listeners'
    ],
    answer: 1 // Handling asynchronous operations
  }
];

export const typescriptQuestions = [
  {
    question: 'What is TypeScript?',
    options: [
      'A database management tool',
      'A superset of JavaScript that adds static typing',
      'A CSS preprocessor',
      'A version of JavaScript for older browsers'
    ],
    answer: 1 // A superset of JavaScript that adds static typing
  },
  {
    question: 'Which keyword is used in TypeScript to define a type?',
    options: ['type', 'interface', 'both type and interface', 'typedef'],
    answer: 2 // both type and interface
  },
  {
    question: 'What does the `as` keyword in TypeScript do?',
    options: [
      'Specifies a data type explicitly',
      'Creates an alias for a type',
      'Handles exceptions',
      'Casts an expression to a specific type'
    ],
    answer: 3 // Casts an expression to a specific type
  },
  {
    question: 'What is the file extension for TypeScript files?',
    options: ['.js', '.ts', '.tsx', '.jsx'],
    answer: 1 // .ts
  },
  {
    question: 'What is a major advantage of TypeScript over JavaScript?',
    options: [
      'Improved performance',
      'Static type-checking',
      'Simplified syntax',
      'Automatic UI generation'
    ],
    answer: 1 // Static type-checking
  },
  {
    question: 'How can you define a union type in TypeScript?',
    options: [
      'Using the `&` symbol',
      'Using the `|` symbol',
      'Using `:` before the type',
      'Using `||` between types'
    ],
    answer: 1 // Using the `|` symbol
  },
  {
    question: 'What is the purpose of TypeScript’s `never` type?',
    options: [
      'To represent values that will always be true',
      'To represent unreachable code or functions that never return',
      'To represent optional values',
      'To represent uninitialized variables'
    ],
    answer: 1 // To represent unreachable code or functions that never return
  },
  {
    question:
      'How do you specify an optional property in a TypeScript interface?',
    options: [
      'By appending a `?` to the property name',
      'By using the `optional` keyword',
      'By adding `undefined` as a type',
      'By declaring the property with no type'
    ],
    answer: 0 // By appending a `?` to the property name
  },
  {
    question: 'What command compiles TypeScript files to JavaScript?',
    options: ['tsc', 'compile-ts', 'ts-build', 'typescript-compile'],
    answer: 0 // tsc
  },
  {
    question: 'Which TypeScript feature allows type reuse across code?',
    options: ['Generics', 'Enums', 'Modules', 'Decorators'],
    answer: 0 // Generics
  }
];

export const tailwindcssQuestions = [
  {
    question: 'What is Tailwind CSS?',
    options: [
      'A CSS framework for pre-designed components',
      'A utility-first CSS framework',
      'A CSS-in-JS library',
      'A browser rendering engine'
    ],
    answer: 1 // A utility-first CSS framework
  },
  {
    question: 'What is the primary file used to configure Tailwind CSS?',
    options: [
      'tailwind.config.js',
      'styles.css',
      'tailwind.json',
      'config.css'
    ],
    answer: 0 // tailwind.config.js
  },
  {
    question: 'Which command initializes a Tailwind CSS configuration file?',
    options: [
      'tailwind init',
      'tailwindcss create',
      'npx tailwind init',
      'npx tailwindcss config'
    ],
    answer: 2 // npx tailwind init
  },
  {
    question: 'How are custom colors added in Tailwind CSS?',
    options: [
      'Directly in the HTML',
      'In the tailwind.config.js file under the `extend` property',
      'By using inline CSS styles',
      'By creating a new CSS file'
    ],
    answer: 1 // In the tailwind.config.js file under the `extend` property
  },
  {
    question:
      'What utility class in Tailwind CSS applies padding to all sides?',
    options: ['p', 'px', 'py', 'pd'],
    answer: 0 // p
  },
  {
    question:
      'Which utility class centers an element horizontally in Tailwind CSS?',
    options: ['m-auto', 'center', 'mx-auto', 'align-center'],
    answer: 2 // mx-auto
  },
  {
    question: 'What does the `@apply` directive in Tailwind CSS do?',
    options: [
      'Imports Tailwind CSS into a project',
      'Applies Tailwind utility classes within custom CSS',
      'Generates responsive breakpoints',
      'Compiles CSS faster'
    ],
    answer: 1 // Applies Tailwind utility classes within custom CSS
  },
  {
    question: 'How can you enable dark mode in Tailwind CSS?',
    options: [
      'By adding the `dark` class to elements',
      'By configuring the `darkMode` property in tailwind.config.js',
      'By using inline styles',
      'By downloading a plugin'
    ],
    answer: 1 // By configuring the `darkMode` property in tailwind.config.js
  },
  {
    question: 'Which prefix is used for hover styles in Tailwind CSS?',
    options: ['hover:', 'onhover:', 'hovered:', 'h:'],
    answer: 0 // hover:
  },
  {
    question: 'What is the purpose of `purge` in Tailwind CSS configuration?',
    options: [
      'To remove unused CSS',
      'To clear the cache',
      'To reset styles',
      'To delete custom themes'
    ],
    answer: 0 // To remove unused CSS
  }
];

export const htmlQuestions = [
  {
    question: 'What does HTML stand for?',
    options: [
      'HyperText Markup Language',
      'HyperText Machine Language',
      'Hyperlink and Text Markup Language',
      'Home Tool Markup Language'
    ],
    answer: 0 // HyperText Markup Language
  },
  {
    question: 'Which tag is used to create a hyperlink in HTML?',
    options: ['<a>', '<link>', '<href>', '<hyperlink>'],
    answer: 0 // <a>
  },
  {
    question: 'What is the purpose of the <head> tag in an HTML document?',
    options: [
      'To define the body content',
      'To contain metadata and links to external resources',
      'To display the main content',
      'To create headings'
    ],
    answer: 1 // To contain metadata and links to external resources
  },
  {
    question: 'Which HTML element is used to insert an image?',
    options: ['<img>', '<image>', '<picture>', '<src>'],
    answer: 0 // <img>
  },
  {
    question:
      'What attribute is used to provide alternative text for an image?',
    options: ['title', 'alt', 'src', 'description'],
    answer: 1 // alt
  },
  {
    question: 'Which tag is used to define a table row in HTML?',
    options: ['<tr>', '<td>', '<th>', '<row>'],
    answer: 0 // <tr>
  },
  {
    question: 'What is the correct HTML tag for the largest heading?',
    options: ['<h1>', '<heading>', '<h6>', '<head>'],
    answer: 0 // <h1>
  },
  {
    question:
      'Which HTML attribute is used to specify a unique identifier for an element?',
    options: ['class', 'id', 'name', 'key'],
    answer: 1 // id
  },
  {
    question: 'How can you create an ordered list in HTML?',
    options: ['<ul>', '<ol>', '<li>', '<list>'],
    answer: 1 // <ol>
  },
  {
    question: 'What does the <form> element in HTML do?',
    options: [
      'Creates a table',
      'Defines a container for multimedia',
      'Collects user input',
      'Displays text content'
    ],
    answer: 2 // Collects user input
  }
];

export const cssQuestions = [
  {
    question: 'What does CSS stand for?',
    options: [
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Creative Style System',
      'Colorful Style Sheets'
    ],
    answer: 0 // Cascading Style Sheets
  },
  {
    question: 'Which property is used to change the text color in CSS?',
    options: ['color', 'text-color', 'font-color', 'background-color'],
    answer: 0 // color
  },
  {
    question: 'What is the correct syntax to apply a class in CSS?',
    options: [
      '.classname { ... }',
      '#classname { ... }',
      '*classname { ... }',
      'classname { ... }'
    ],
    answer: 0 // .classname { ... }
  },
  {
    question: 'Which CSS property controls the size of text?',
    options: ['font-size', 'text-size', 'size', 'font-style'],
    answer: 0 // font-size
  },
  {
    question: 'How do you make a background color transparent in CSS?',
    options: [
      'background-color: none',
      'background-color: transparent',
      'background: invisible',
      'background-opacity: 0'
    ],
    answer: 1 // background-color: transparent
  },
  {
    question: 'What is the default positioning of an element in CSS?',
    options: ['static', 'relative', 'absolute', 'fixed'],
    answer: 0 // static
  },
  {
    question:
      'Which property is used to set the spacing between lines of text?',
    options: ['line-height', 'letter-spacing', 'text-spacing', 'height'],
    answer: 0 // line-height
  },
  {
    question: 'What does the z-index property in CSS do?',
    options: [
      'Controls the size of an element',
      'Controls the stacking order of elements',
      'Controls the visibility of an element',
      'Controls the alignment of text'
    ],
    answer: 1 // Controls the stacking order of elements
  },
  {
    question: 'Which pseudo-class targets the first child of an element?',
    options: [':first', ':first-child', ':child(1)', ':first-element'],
    answer: 1 // :first-child
  },
  {
    question: 'What is the purpose of the @media rule in CSS?',
    options: [
      'To define styles for different screen sizes or devices',
      'To import external CSS files',
      'To specify font properties',
      'To add animations to elements'
    ],
    answer: 0 // To define styles for different screen sizes or devices
  }
];

export const nodejsQuestions = [
  {
    question: 'What is Node.js?',
    options: [
      'A frontend framework',
      'A runtime environment for JavaScript',
      'A database management system',
      'A CSS preprocessor'
    ],
    answer: 1 // A runtime environment for JavaScript
  },
  {
    question: 'Which module is used to create a server in Node.js?',
    options: ['http', 'fs', 'url', 'net'],
    answer: 0 // http
  },
  {
    question: 'How do you install a package in a Node.js project?',
    options: [
      'npm install <package>',
      'node install <package>',
      'install <package>',
      'node get <package>'
    ],
    answer: 0 // npm install <package>
  },
  {
    question:
      'What is the default file name for a Node.js application entry point?',
    options: ['app.js', 'server.js', 'index.js', 'main.js'],
    answer: 2 // index.js
  },
  {
    question: 'Which command initializes a new Node.js project?',
    options: ['npm init', 'node init', 'node create', 'npm start'],
    answer: 0 // npm init
  },
  {
    question: 'What is the purpose of the `fs` module in Node.js?',
    options: [
      'Handling file system operations',
      'Managing HTTP requests',
      'Creating servers',
      'Interacting with databases'
    ],
    answer: 0 // Handling file system operations
  },
  {
    question: 'What does the `require()` function do in Node.js?',
    options: [
      'Imports a module',
      'Exports a function',
      'Runs a Node.js application',
      'Starts the server'
    ],
    answer: 0 // Imports a module
  },
  {
    question: 'Which method is used to read a file synchronously in Node.js?',
    options: [
      'fs.readFile()',
      'fs.readSync()',
      'fs.readFileSync()',
      'fs.syncRead()'
    ],
    answer: 2 // fs.readFileSync()
  },
  {
    question: 'What is the purpose of middleware in Node.js?',
    options: [
      'To connect to the database',
      'To manage HTTP responses',
      'To process requests before they reach the route handler',
      'To serve static files'
    ],
    answer: 2 // To process requests before they reach the route handler
  },
  {
    question:
      'Which framework is commonly used with Node.js for building web applications?',
    options: ['Express', 'React', 'Vue', 'Angular'],
    answer: 0 // Express
  }
];

export const sqlQuestions = [
  {
    question: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Language',
      'Structured Quick Language',
      'System Query Language'
    ],
    answer: 0 // Structured Query Language
  },
  {
    question: 'Which SQL statement is used to retrieve data from a database?',
    options: ['SELECT', 'GET', 'RETRIEVE', 'FETCH'],
    answer: 0 // SELECT
  },
  {
    question: 'What does the WHERE clause in SQL do?',
    options: [
      'Groups rows',
      'Filters rows based on a condition',
      'Sorts the rows',
      'Deletes rows'
    ],
    answer: 1 // Filters rows based on a condition
  },
  {
    question: 'Which SQL statement is used to add a new record to a table?',
    options: ['INSERT INTO', 'ADD RECORD', 'CREATE RECORD', 'NEW RECORD'],
    answer: 0 // INSERT INTO
  },
  {
    question: 'What does the JOIN clause in SQL do?',
    options: [
      'Combines rows from multiple tables',
      'Deletes records from multiple tables',
      'Creates a new table',
      'Updates multiple tables'
    ],
    answer: 0 // Combines rows from multiple tables
  },
  {
    question: 'Which SQL keyword is used to sort the results of a query?',
    options: ['SORT BY', 'ORDER BY', 'GROUP BY', 'FILTER BY'],
    answer: 1 // ORDER BY
  },
  {
    question: 'What does the COUNT function in SQL do?',
    options: [
      'Counts the number of rows in a table',
      'Counts the number of columns in a table',
      'Counts the number of characters in a string',
      'Counts the number of tables in a database'
    ],
    answer: 0 // Counts the number of rows in a table
  },
  {
    question: 'Which SQL statement is used to delete a table from a database?',
    options: ['DROP TABLE', 'DELETE TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'],
    answer: 0 // DROP TABLE
  },
  {
    question: 'What is a primary key in SQL?',
    options: [
      'A unique identifier for a row in a table',
      'A field used for sorting data',
      'A backup key for a table',
      'A key used for indexing columns'
    ],
    answer: 0 // A unique identifier for a row in a table
  },
  {
    question: 'Which SQL clause is used to group rows with the same values?',
    options: ['GROUP BY', 'ORDER BY', 'WHERE', 'HAVING'],
    answer: 0 // GROUP BY
  }
];
