import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');
const contentDir = path.join(__dirname, '..', 'content');

const isolatedFiles = [
    'CATBOMBERData.js',
    'IntrusionPrevention.js',
    'Ransomware-least-priv.js',
    'vulnScan.js',
    'pgpkey.js'
];

for (const file of isolatedFiles) {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace export const projectsData = [
    content = content.replace(/export const projectsData = \[\s*/, 'export default ');
    
    // Remove the trailing ]
    content = content.replace(/\]\s*$/, ';');
    
    // Rename to standard .js and move to content/projects
    const outName = file.replace('Data', '').toLowerCase().replace('-least-priv', ''); 
    fs.writeFileSync(path.join(contentDir, 'projects', outName), content, 'utf8');
    console.log(`Migrated ${file}`);
}
