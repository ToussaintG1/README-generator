// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `
    - [License](#license)
    `
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    # License
    `
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Test](#test)
  ${renderLicenseLink(data.license)}
  - [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Test Instructions 
  ${data.testIntructions}

  ${renderLicenseSection(data.license)};

  ## Contact 
  Feel free to reach me on any of the platforms below! :)
  - [Github](https://github.com/${data.github})
  - [Email](mailto:${data.email})

  `;
}

module.exports = generateMarkdown;

