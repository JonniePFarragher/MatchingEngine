<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Project Overview</h1>
  <p>
    This Cypress project automates the validation of supported product listings on the 
    <a href="https://www.matchingengine.com/" target="_blank">Matching Engine</a> website. 
    It ensures that the expected product names match those displayed on the site, verifying data consistency and correctness.
  </p>

  <h2>Features</h2>
  <ul>
    <li><strong>Visit Website:</strong> Opens the Matching Engine website.</li>
    <li><strong>Navigate Modules:</strong> Interacts with the navigation bar to access the Repertoire Management Module.</li>
    <li><strong>Scroll and Verify:</strong> Scrolls to the "Additional Features" section and verifies the list of supported products.</li>
    <li><strong>Validation:</strong> Ensures the listed product names are correctly displayed and match the expected values.</li>
  </ul>

  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js and npm installed on your machine.</li>
    <li>Cypress installed as a development dependency.</li>
  </ul>

  <h2>Test Details</h2>
  <h3>Test Steps</h3>
  <ol>
    <li>
      <strong>Visit Website:</strong>
      <pre><code>cy.visit('https://www.matchingengine.com/');</code></pre>
      Opens the Matching Engine website.
    </li>
    <li>
      <strong>Navigate to Repertoire Management Module:</strong>
      <ul>
        <li>Click "Modules" in the navigation menu.</li>
        <li>Click "Repertoire Management Module."</li>
      </ul>
    </li>
    <li>
      <strong>Scroll and Verify Products:</strong>
      <ul>
        <li>Scroll to the "Additional Features" section.</li>
        <li>Verify the list of products under "There are several types of Product Supported:".</li>
      </ul>
    </li>
    <li>
      <strong>Validation:</strong>
      <ul>
        <li>Clean unwanted characters (like <code>&nbsp;</code>) and trim the text.</li>
        <li>Assert that the cleaned text matches the expected product names.</li>
      </ul>
    </li>
  </ol>

  <h3>Expected Products</h3>
  <p>The test validates the following list of products:</p>
  <ul>
    <li>Cue Sheet / AV Work</li>
    <li>Recording</li>
    <li>Bundle</li>
    <li>Advertisement</li>
  </ul>
</body>
</html>
