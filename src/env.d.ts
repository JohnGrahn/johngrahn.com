/// <reference types="astro/client" />

declare module '*.yaml' {
    const data: {
        projects: {
            title: string;
            description: string;
            image: string | null;
            liveDemoUrl: string;
            githubUrl: string;
            techStack: string[];
        }[];
        recentProjects: {
            title: string;
            description: string;
        }[];
        latestPosts: {
            title: string;
            description: string;
        }[];
        workExperience: {
            title: string;
            description: string;
            time: string;
            details: string;
        }[];
    };
    export default data;
} 