// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license === undefined){
    return "";
  } else{

    return `[![License](https://img.shields.io/badge/License-${license}-blue)](${renderLicenseLink(license)})`

  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
      break;
    case 'GNU':
      return `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'BSD_2':
      return `https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case 'BSD_3':
      return `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    default:
      break;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (lincense === undefined){
    return ""
  } else{

    return `This project is covered by ${license}`

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${renderLicenseBadge(data.license)}

  ## Description

  #${data.description}

  ## Contents

  - [Install](#install)
  - [Usage Guide](#usage)
  - [Application Link](#link)
  - [Contributions Guide](#contribute)
  - [Contributions and Credits](#contributors)
  - [License] (#license)
  - [Questions] (#question)

  ## Installation Guide:

  ${data.install}

  ## Usage Guide:
  
  ${data.usage}

  ## Guidelines for Contribution:

  ${data.contribute}

  ## Contributors and Assets used:

  ${data.contributors}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  For questions, additional projects, and any other inquiries, contact me through:

  E-mail: ${data.email} 

  Or through my profile: https://github.com/${data.name}

  `;
}

module.exports = generateMarkdown;
