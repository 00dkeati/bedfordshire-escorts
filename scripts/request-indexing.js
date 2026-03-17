#!/usr/bin/env node
/**
 * Request Google Indexing for Bedfordshire Escorts
 * 
 * Before running: Add zack-688@waterlooville.iam.gserviceaccount.com as OWNER in GSC
 */

const { google } = require('googleapis');
const path = require('path');

const SCOPES = ['https://www.googleapis.com/auth/indexing'];
const CREDENTIALS_PATH = path.join(process.env.HOME, 'clawd/credentials/waterlooville-sa.json');

const URLS_TO_INDEX = [
  'https://bedfordshireescorts.agency/',
  'https://bedfordshireescorts.agency/escorts',
  'https://bedfordshireescorts.agency/bedford',
  'https://bedfordshireescorts.agency/luton',
  'https://bedfordshireescorts.agency/dunstable',
  'https://bedfordshireescorts.agency/leighton-buzzard',
  'https://bedfordshireescorts.agency/guides',
  'https://bedfordshireescorts.agency/services',
  'https://bedfordshireescorts.agency/contact',
  'https://bedfordshireescorts.agency/locations',
];

async function main() {
  // Authenticate
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  const client = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: client });

  console.log('Requesting indexing for', URLS_TO_INDEX.length, 'URLs...\n');

  for (const url of URLS_TO_INDEX) {
    try {
      const result = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log('✅', url);
      console.log('   Notified:', result.data.urlNotificationMetadata?.latestUpdate?.notifyTime || 'success');
    } catch (error) {
      console.log('❌', url);
      console.log('   Error:', error.message);
    }
    
    // Small delay between requests
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\nDone!');
}

main().catch(console.error);
