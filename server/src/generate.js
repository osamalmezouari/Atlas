const { execSync } = require('child_process');

const filesToGenerate = [
  { type: 'controller' },
  { type: 'service' },
  { type: 'module' },
  { type: 'entity' },
];
function generateFiles(folderName) {
  console.log(`Generating files in folder '${folderName}'...`);
  filesToGenerate.forEach(({ type }) => {
    const command = `nest generate ${type} ${folderName}`;
    console.log(`Generating ${type} '${folderName}'...`);
    execSync(command, { stdio: 'inherit' });
  });
}
const folderName = process.argv[2];
if (!folderName) {
  console.error('Error: Please provide a folder name.');
  process.exit(1);
}
generateFiles(folderName);
