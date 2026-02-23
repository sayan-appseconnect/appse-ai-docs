const { execSync } = require('child_process');

console.log('🚀 Starting local Docker environment...');

try {
  // 1. Build and start the stack in detached mode
  execSync('docker-compose --env-file .env.local up --build -d', { stdio: 'inherit' });

  console.log('\n⏳ Waiting for the search scraper and verifier to finish (this may take a minute)...');
  
  // 2. Wait for the verifier container to exit and explicitly capture its status code
  const exitCode = execSync('docker wait docs-verifier').toString().trim();

  // 3. Print the final message from the verifier
  console.log('\n--- Verifier Logs ---');
  execSync('docker logs docs-verifier', { stdio: 'inherit' });
  console.log('---------------------\n');

  if (exitCode !== '0') {
    throw new Error(`Verifier reported failure with exit code ${exitCode}.`);
  }

  // 4. Success path
  console.log('✅ Local build completed! Typesense index verified successfully.');
  console.log('🌐 Your documentation is now running at: http://localhost:3000\n');
  process.exit(0);

} catch (error) {
  // 5. Failure path
  console.error('❌ FATAL: The local build failed because the search indexer did not successfully populate the Typesense database.');
  
  console.log('\n--- Scraper Debug Logs ---');
  try {
    execSync('docker logs docs-scraper', { stdio: 'inherit' });
  } catch (e) {
    // ignore
  }
  
  console.log('\n🛑 Tearing down localized stack due to build failure...');
  try {
    execSync('docker-compose --env-file .env.local stop', { stdio: 'inherit' });
  } catch (e) {
    // ignore
  }
  
  process.exit(1); // Automatically fails the script/build process
}
