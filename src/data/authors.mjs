/**
 * @typedef SocialProfile
 * @type {Object}
 * @property {string} github
 * @property {string} facebook
 * @property {string} instagram
 * @property {string} website
 */

/**
 * @typedef Author
 * @type {Object}
 * @property {string} id
 * @property {string} fullName
 * @property {string} email
 * @property {SocialProfile} socialProfiles
 */

/** @type {Array.<Author>} */
export const authors = [
  {
    id: 'sh4hids',
    fullName: 'Shahidul Islam Majumder',
    email: 'hello@shahid.pro',
    socialProfiles: {
      github: 'sh4hids',
      facebook: 'sh4hids',
      instagram: 'sh4hids',
      twitter: 'sh4hids',
      website: 'https://shahid.pro',
    },
  },
];
