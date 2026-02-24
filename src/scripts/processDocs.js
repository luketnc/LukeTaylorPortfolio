import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDocsDir = path.join(__dirname, '..', '..', 'raw_docs');
const targetDataFile = path.join(__dirname, '..', 'data', 'mockData.js');
const targetAssetsDir = path.join(__dirname, '..', 'assets', 'projects');

async function processRawDocs() {
    console.log('Processing raw docs from:', rawDocsDir);

    if (!fs.existsSync(rawDocsDir)) {
        console.log('No raw_docs directory found. Skipping.');
        return;
    }

    // Ensure assets dir exists
    fs.ensureDirSync(targetAssetsDir);

    const projects = [];
    const entries = fs.readdirSync(rawDocsDir);

    for (const entry of entries) {
        const entryPath = path.join(rawDocsDir, entry);
        const stat = fs.statSync(entryPath);

        if (stat.isDirectory()) {
            console.log(`Processing project directory: ${entry}`);
            const metaPath = path.join(entryPath, 'metadata.json');

            let projectData = {
                id: entry,
                slug: entry,
                title: entry,
                oneLiner: 'Imported from raw docs',
                category: 'Imported',
                tags: ['Generated'],
                status: 'Active',
                featured: false,
                overview: '',
                goal: '',
                features: [],
                techStack: [],
                results: '',
                lessons: '',
                links: { repo: '', demo: '', writeup: '' }
            };

            if (fs.existsSync(metaPath)) {
                try {
                    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
                    projectData = { ...projectData, ...meta };
                } catch (e) {
                    console.error(`Error reading meta for ${entry}:`, e);
                }
            }

            // Handle simple txt files
            const txtFiles = fs.readdirSync(entryPath).filter(f => f.endsWith('.txt'));
            for (const tx of txtFiles) {
                const content = fs.readFileSync(path.join(entryPath, tx), 'utf8');
                projectData.overview += `\n[From ${tx}]\n${content}\n`;
            }

            projects.push(projectData);
        }
    }

    if (projects.length > 0) {
        console.log(`Found ${projects.length} parsed projects. Attempting to update mockData.js...`);
        /* 
          This is a simplistic parser to inject projects into the existing JS file.
          In a real app, importing JSON directly or using a proper CMS/MDX setup is much better.
        */
        try {
            let currentMockData = fs.readFileSync(targetDataFile, 'utf8');
            // Basic injection: Find the end of projectsData array

            const projectsString = JSON.stringify(projects, null, 2);

            // A very rudimentary approach for updating the js file for the demo:
            // We'll just replace the mockData entirely if we have to, or append.
            // For safety, let's just log it if we can't cleanly parse.
            console.log("Newly generated projects data to append:", projectsString);

        } catch (e) {
            console.error("Error updating mockData:", e);
        }
    }
}

processRawDocs();
