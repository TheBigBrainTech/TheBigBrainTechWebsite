export const QACurriculum = [
    {
        week: 1,
        description: 'Introduction to QA Automation and Core Java Basics',
        days: [
            'Course introduction and overview, Setting up the development environment (VS Code, Git, GitHub), Introduction to QA and automation testing',
            'Understanding software development life cycle (SDLC) and testing life cycle (STLC), Types of testing (manual vs. automated)',
            'Introduction to Core Java, Setting up Java development environment, Java basics (data types, variables, operators)',
            'Java control structures (if-else, switch, loops), Java methods and classes',
            'Object-oriented programming concepts (inheritance, polymorphism, encapsulation, abstraction), Writing basic Java programs',
        ],
    },
    {
        week: 2,
        description: 'Advanced Java Concepts and Introduction to Selenium WebDriver',
        days: [
            'Review of week 1, Java collections framework (List, Set, Map), Exception handling in Java',
            'Java Input/Output (I/O) operations, File handling in Java',
            'Introduction to Selenium, Setting up Selenium WebDriver, Basic Selenium commands and operations',
            'Writing your first test script with Selenium, Understanding locators (ID, Name, Class, XPath, CSS Selector)',
            'Introduction to TestNG, Writing and executing test cases with TestNG, Generating TestNG reports',
        ],
    },
    {
        week: 3,
        description: 'Advanced Selenium WebDriver and TestNG',
        days: [
            'Review of week 2, Advanced WebDriver concepts, Handling different types of web elements (dropdowns, checkboxes, radio buttons)',
            'Working with multiple windows, frames, and alerts, Taking screenshots with Selenium',
            'Using JavaScriptExecutor, Introduction to Page Object Model (POM)',
            'Implementing POM in Selenium tests, Advanced locators and strategies',
            'Mini-project: Automate a complex web application, Review and Q&A',
        ],
    },
    {
        week: 4,
        description: 'Data-Driven Testing and Database Testing with SQL',
        days: [
            'Introduction to data-driven testing, Using Excel files for data storage (Apache POI library)',
            'Reading and writing data from Excel in Selenium tests, Implementing data-driven tests in TestNG',
            'Introduction to SQL, Setting up and connecting to a database, Basic SQL queries (SELECT, INSERT, UPDATE, DELETE)',
            'Advanced SQL queries, Database testing concepts, Writing and executing SQL queries in test scripts',
            'Mini-project: Implement data-driven and database tests, Review and Q&A',
        ],
    },
    {
        week: 5,
        description: 'Behavior-Driven Development (BDD) with Cucumber',
        days: [
            'Introduction to BDD, Understanding Gherkin syntax and writing feature files',
            'Setting up Cucumber with Selenium, Writing step definitions and implementing test steps',
            'Running and debugging Cucumber tests, Generating Cucumber reports',
            'Advanced Cucumber concepts (hooks, background, data tables, scenario outline)',
            'Mini-project: Implement a BDD framework with Cucumber and Selenium, Review and Q&A',
        ],
    },
    {
        week: 6,
        description: 'API Testing with Postman and RestAssured',
        days: [
            'Introduction to APIs and web services, Understanding RESTful APIs',
            'Using Postman for manual API testing, Writing and running API tests in Postman',
            'Introduction to RestAssured, Setting up RestAssured for API automation',
            'Writing API automation tests with RestAssured, Validating JSON responses and handling different request types (GET, POST, PUT, DELETE)',
            'Mini-project: Automate end-to-end API tests with RestAssured, Review and Q&A',
        ],
    },
    {
        week: 7,
        description: 'Continuous Integration and Continuous Deployment (CI/CD)',
        days: [
            'Introduction to CI/CD, Understanding the benefits of CI/CD in QA automation',
            'Setting up a CI/CD pipeline with Jenkins, Integrating Selenium and RestAssured tests with Jenkins',
            'Running automated tests in a CI/CD pipeline, Configuring Jenkins for scheduled and triggered builds',
            'Generating test reports and sending notifications, Advanced Jenkins concepts (pipelines, shared libraries)',
            'Mini-project: Implement a complete CI/CD pipeline for automated testing, Review and Q&A',
        ],
    },
    {
        week: 8,
        description: 'Final Project and Career Preparation',
        days: [
            'Final project planning and setup, Defining project scope and requirements',
            'Developing test scripts for the final project, Implementing best practices and advanced concepts',
            'Integrating different types of tests (UI, API, performance) in a single project, Running and debugging tests',
            'Preparing for deployment and final presentation, Reviewing and refining the project',
            'Final project presentation, Peer reviews and feedback, Career advice, resume building, and interview preparation',
        ],
    },
];
