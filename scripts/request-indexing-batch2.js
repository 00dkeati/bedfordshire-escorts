#!/usr/bin/env node
const { google } = require('googleapis');
const path = require('path');

const CREDENTIALS_PATH = path.join(process.env.HOME, 'clawd/credentials/waterlooville-sa.json');

const URLS_TO_INDEX = [
  // More towns
  'https://bedfordshireescorts.agency/biggleswade',
  'https://bedfordshireescorts.agency/sandy',
  'https://bedfordshireescorts.agency/ampthill',
  'https://bedfordshireescorts.agency/flitwick',
  'https://bedfordshireescorts.agency/kempston',
  'https://bedfordshireescorts.agency/woburn',
  // Popular type combos
  'https://bedfordshireescorts.agency/bedford/blonde',
  'https://bedfordshireescorts.agency/bedford/gfe',
  'https://bedfordshireescorts.agency/luton/mature',
  'https://bedfordshireescorts.agency/luton/blonde',
  // Guides
  'https://bedfordshireescorts.agency/guides/first-time-booking-escort-bedfordshire',
  'https://bedfordshireescorts.agency/guides/what-is-gfe-girlfriend-experience',
  'https://bedfordshireescorts.agency/guides/escort-etiquette-guide',
  'https://bedfordshireescorts.agency/guides/discreet-booking-tips',
];

async function main() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });
  const client = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: client });

  console.log('Batch 2: Requesting indexing for', URLS_TO_INDEX.length, 'URLs...\n');

  for (const url of URLS_TO_INDEX) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: 'URL_UPDATED' },
      });
      console.log('✅', url);
    } catch (error) {
      console.log('❌', url, '-', error.message);
    }
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('\nDone!');
}

main().catch(console.error);
