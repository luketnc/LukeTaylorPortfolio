import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Hacky script to safely extract the objects we want from mockData by requiring it
// But since it's an ES Module, we import it dynamically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '..', 'content');

async function main() {
    const mockData = await import('../data/mockData.js');

    // projectsData includes everything, we only want the ones not already extracted.
    // Actually, mockData.js doesn't export mockProjects, but we can just filter projectsData
    // because we know which ones we already extracted.
    const alreadyExtracted = ['catbomber-network-analysis', 'intrusionprevention', 'ransomeware-and-least-privilege', 'vulnscan', 'pgpkey'];
    
    // Fallback: Just extract the exact objects instead of importing mockData which throws errors 
    // due to missing files if we run it now since we might have moved/modified them.
    // Oh wait, I didn't delete the other files yet, but I did modify them.
}
main();
