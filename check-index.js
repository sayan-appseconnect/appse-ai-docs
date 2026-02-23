const http = require('http');

console.log('🔍 Checking Typesense search index for documentation...');

const host = process.env.TYPESENSE_HOST || 'localhost';
const port = process.env.TYPESENSE_PORT || 8108;
const apiKey = process.env.TYPESENSE_API_KEY || 'xyz';

const options = {
  hostname: host,
  port: parseInt(port, 10),
  path: '/collections/appse-ai-docs',
  method: 'GET',
  headers: {
    'X-TYPESENSE-API-KEY': apiKey
  }
};

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      try {
        const json = JSON.parse(data);
        const docsCount = json.num_documents;
        
        if (docsCount > 0) {
          console.log(`\n✅ SUCCESS: Index verification passed!`);
          console.log(`📊 Found ${docsCount} documents successfully indexed in Typesense.`);
          process.exit(0);
        } else {
          console.error(`\n⚠️  WARNING: The collection exists, but it contains 0 documents.`);
          console.error(`This likely means the scraper ran but found no valid pages to index.`);
          console.error(`Please check the 'docs-scraper' Docker container logs for details.`);
          process.exit(1);
        }
      } catch (e) {
        console.error('\n❌ ERROR: Failed parsing response from Typesense.', e);
        process.exit(1);
      }
    } else if (res.statusCode === 404) {
      console.error('\n❌ ERROR: Collection not found in Typesense.');
      console.error('The scraper has either not run yet, or it failed before creating the index.');
      process.exit(1);
    } else {
      console.error(`\n❌ ERROR: Typesense API returned status code ${res.statusCode}: ${data}`);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('\n❌ ERROR: Failed to connect to local Typesense server.');
  console.error('Make sure your Docker containers are running (docker-compose up -d).');
  console.error(`Connection Error: ${error.message}`);
  process.exit(1);
});

req.end();
