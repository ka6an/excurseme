// If mode is 'production' switch 'BASE' value to 'https://api.excurse.me'
// Otherwise left an empty string

// https://hub.excurse.me
// TO-DO: configure webpack to automatically set URL based on env mode
const URLS = {
  BASE: 'https://api.excurse.me',
  HUB: 'https://hub.excurse.me'
};

export default URLS;
