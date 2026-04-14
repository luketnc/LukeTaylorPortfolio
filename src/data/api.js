const projectModules = import.meta.glob('../content/projects/*.js', { eager: true });

// Flatten just in case a module exports an array instead of a single object
export const projectsData = Object.values(projectModules).flatMap(mod => {
    if (!mod || !mod.default) return [];
    if (Array.isArray(mod.default)) {
        return mod.default;
    }
    return [mod.default];
});

import { blogData as rawBlog } from '../content/blog/index.js';
import { toolsData as rawTools } from '../content/tools/index.js';

export const blogData = rawBlog;
export const toolsData = rawTools;
