const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const renameFile = promisify(fs.rename);

const sourceServiceFile = path.join(__dirname, 'scripts', 'pull-request-monitor.service');
const destinationServiceFile = '/etc/systemd/system/pull-request-monitor.service';

const sourceAppServiceFile = path.join(__dirname, 'scripts', 'start-app.service');
const destinationAppServiceFile = '/etc/systemd/system/start-app.service';

async function main() {
  try {
    // Copiar o arquivo pull-request-monitor.service
    await copyFile(sourceServiceFile, destinationServiceFile);
    console.log(`pull-request-monitor.service copied to ${destinationServiceFile}`);

    // Mover o arquivo start-app.service
    await renameFile(sourceAppServiceFile, destinationAppServiceFile);
    console.log(`start-app.service moved to ${destinationAppServiceFile}`);
  } catch (error) {
    console.error('Error copying or moving service files:', error);
  }
}

main();
