Checklist System
A Checklist System built using Node.js to evaluate specific conditions based on input data fetched from an API. The results are displayed on a simple dashboard showing the status (Passed or Failed) of each checklist rule.

Features
Dynamic Rule Evaluation: Easily configurable checklist rules stored in a modular file.
API Integration: Fetches input data from an external API endpoint.
Simple Dashboard: Displays evaluation results in a clean and user-friendly table format.
Scalability: Future-proof design makes it easy to add or modify rules.
Prerequisites
Node.js (v16 or above)
npm (v8 or above)
Internet access to fetch data from the API.
Installation and Setup
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd checklist-system
Install Dependencies:

bash
Copy code
npm install
Run the Application:

bash
Copy code
node app.js
Access the Dashboard: Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
Project Structure
perl
Copy code
checklist-system/
├── public/               # Contains static assets (CSS, JS)
├── views/                # EJS templates for rendering the dashboard
├── routes/               # Reserved for route handlers (future-proofing)
├── rules/                # Checklist rules configuration
├── helpers/              # Reusable helper functions
│   ├── fetchData.js      # Fetches input data from the API
│   └── evaluateRules.js  # Evaluates checklist rules dynamically
├── app.js                # Main application logic
├── package.json          # Node.js project dependencies
How it Works
Fetch Input Data:

The system retrieves application data from the API endpoint:
bash
Copy code
http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639
Evaluate Rules:

The checklist rules are stored in rules/checklistRules.js as an array of objects. Each rule has:
A name (description of the rule).
An evaluate function to check the condition against the fetched data.
Display Results:

The evaluation results are displayed on the dashboard, showing which rules passed or failed.
Adding or Modifying Rules
To add or modify rules:

Open the file rules/checklistRules.js.
Add a new rule object to the checklistRules array:
javascript
Copy code
{
    name: "New Rule Name",
    evaluate: (data) => /* logic for the rule */,
}
Save the file and restart the application:
bash
Copy code
node app.js
Example Rules
Here are the current rules in the system:

Condition	Logic
Valuation Fee Paid	isValuationFeePaid must be true.
UK Resident	isUkResident must be true.
Risk Rating Medium	riskRating must be "Medium".
LTV Below 60%	Loan-to-Value (LTV) must be less than 60%. Calculated as:
(Loan Required / Purchase Price) * 100.
File Details
1. app.js
Main entry point for the application.
Sets up the Express server, handles routes, and renders the dashboard.
2. rules/checklistRules.js
Contains the checklist rules.
Rules are modular and can be updated easily.
3. helpers/fetchData.js
Fetches data from the API endpoint using Axios.
4. helpers/evaluateRules.js
Dynamically evaluates all the rules against the fetched data and returns results.
5. views/dashboard.ejs
The EJS template for rendering the dashboard in HTML.
6. public/style.css
CSS for styling the dashboard.
Sample Output
Dashboard Example
Condition	Status
Valuation Fee Paid	Passed
UK Resident	Passed
Risk Rating Medium	Failed
LTV Below 60%	Passed
Dependencies
Express: Web framework for Node.js.
Axios: HTTP client for fetching data from the API.
EJS: Templating engine for rendering HTML.
Body-parser: Middleware for parsing request bodies.
Future Enhancements
Authentication: Secure API calls with authentication headers.
Advanced Frontend: Upgrade the dashboard with a frontend framework like React or Vue.js.
Error Handling: Enhance error reporting and logging for better debugging.
License
This project is open-source and available under the MIT License.

Contact
For questions or feedback, feel free to reach out:

Name: Nandhyala vamsi
Email: nandhyalavamsi94@gmail.com
GitHub: https://github.com/vams-nandhyala/-Transition-Computing-India-Assig.git
Feel free to customize this content as per your project and team!
