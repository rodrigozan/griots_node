const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

const sourceFile = path.join(__dirname, 'scripts', 'pull-request-monitor.service');
const destinationFile = '/etc/systemd/system/pull-request-monitor.service';

async function main() {
  try {
    await copyFile(sourceFile, destinationFile);
    console.log(`Service file copied to ${destinationFile}`);
  } catch (error) {
    console.error('Error copying service file:', error);
  }
}

main();
