# gatsby-plugin-etracker-analytics

## Description

Gatsby plugin to add etracker analytics to your site.

## How to install

NPM
`npm install --save gatsby-plugin-etracker-analytics`

Yarn
`yarn add gatsby-plugin-etracker-analytics`

## Usage

```javascript
// In your gatsby-config.js

plugins: [
  {
    resolve: `gatsby-plugin-etracker-analytics`,
    options: {
      secureCode: `YOUR_ETRACKER_SECURE_CODE` // required
    },
  },
];
```

### Configuration

The plugin is configurable, here are the configs by default.

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-etracker-analytics`,
    options: {
      secureCode: `YOUR_ETRACKER_SECURE_CODE`, // required
      // optional fields, default values
      respectDnt: true,
      blockCookies: true,
      // If this option is enabled, tracking will only work when the cookie named `controlCookieName` is not false.
      isCookieConsentEnabled: true,
      controlCookieName: `cookie_control_consent`
    },
  },
];
```

## License

MIT
