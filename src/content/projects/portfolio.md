---
title: "Portfolio"
description: "My personal portfolio website, showcasing my skills, projects, and experience as a software developer. Built with Astro, Tailwind CSS, and TypeScript."
image: "/src/assets/projects/portfolio-screenshot.png"
liveDemoUrl: "https://johngrahn.com"
githubUrl: "https://github.com/JohnGrahn/johngrahn.com"
techStack: ["Astro", "Tailwind CSS", "TypeScript", "React"]
featured: true
pubDate: "2025-03-16"
---

## About This Project

This website is my online portfolio, designed to showcase my journey and expertise as a software developer. It serves as a central hub where you can explore my projects, learn about my skills and experience, and get in touch with me. The portfolio is built using a modern web development stack, ensuring a fast, responsive, and engaging user experience.

<div align="center">
<img src="/src/assets/projects/portfolio-screenshot.png" alt="Portfolio Website Screenshot" width="800" style="border-radius: 8px;">
</div>

## Features

-   **⚡️ Blazing Fast Performance:** Leveraging Astro's static site generation and partial hydration, the portfolio loads incredibly fast, providing an excellent user experience and improving SEO.
-   **📱 Responsive Design:** The site is fully responsive and works seamlessly across all devices, from mobile phones to large desktops.
-   **🎨 Modern UI with Theme Toggle:** Built with Tailwind CSS and DaisyUI, the portfolio features a clean, modern design. It also includes a theme toggle, allowing users to switch between light and dark modes based on their preference.
-   **📝 Blog Integration:** A dedicated blog section allows me to share my thoughts, insights, and project updates. Posts are written in Markdown for easy editing and formatting.
-   **📂 Project Showcase:** The projects section highlights my key projects, providing details about the technologies used, challenges overcome, and links to live demos and source code.
-   **💼 Resume and Work Experience:**  A detailed resume section outlines my professional experience, education, skills, and certifications.
-   **📞 Contact Information:** Easy-to-find contact details and links to my social media profiles encourage visitors to connect with me.
-   **🦾 CI/CD with GitHub Actions:**  The project is set up with CI/CD using GitHub Actions, automating the build and deployment process for seamless updates.

## Technical Implementation

This portfolio is built using a powerful combination of modern web technologies:

### Frontend (Astro, Tailwind CSS, TypeScript, React)

-   **Astro:** The core framework for building the website. Astro's component-based architecture and focus on performance make it ideal for creating fast, content-driven sites.
-   **Tailwind CSS:** Provides utility-first CSS classes for rapidly styling the site and ensuring a consistent design.
-   **DaisyUI:** A component library built on top of Tailwind CSS, used for pre-designed UI elements like buttons, cards, and navigation bars.
-   **TypeScript:** Adds type safety to the project, improving code quality and reducing errors.
-   **React:** Integrated for interactive elements, like the theme toggle using `useState`.
-   **`src/components/`:** Contains reusable components like `Header.astro`, `Footer.astro`, `ProjectCard.astro`, and `BlogCard.astro`, which structure the site's content and layout.
-   **`src/layouts/`:** Defines layouts for different types of pages, such as `BlogPostLayout.astro` for blog posts and `ProjectLayout.astro` for project details.
-   **`src/pages/`:** Includes the main pages of the site, such as the homepage (`index.astro`), projects page (`projects.astro`), blog (`blog/index.astro`), and resume (`resume.astro`).

### Content Management (Markdown, Content Collections)

-   **Markdown:** Blog posts and project descriptions are written in Markdown, making content creation straightforward and efficient.
-   **Astro Content Collections:**  Provides a structured way to manage content, including validation and automatic TypeScript types for Markdown files.
-   **`src/content/blog/`:** Stores blog posts in Markdown format.
-   **`src/content/projects/`:** Stores project details in Markdown format.
-   **`src/content/resume/`:** Contains the resume content in Markdown.

### Deployment (GitHub Pages, Vercel, Netlify, etc.)

-   **Static Site Generation:** Astro builds the website into static HTML, CSS, and JavaScript files, making it easy to deploy to various hosting platforms.
-   **GitHub Pages:** The portfolio can be easily hosted on GitHub Pages, leveraging its free and reliable hosting service.
-   **Vercel/Netlify:** Alternative hosting platforms like Vercel or Netlify can also be used for deploying the site, providing features like automatic deployments from a Git repository.

## Development Process

The development of this portfolio followed an iterative process:

1. **Planning:** Defining the site's structure, content, and features.
2. **Setup:** Initializing the Astro project and configuring essential tools like Tailwind CSS, TypeScript, and DaisyUI.
3. **Component Creation:** Building reusable components for the header, footer, navigation, project cards, and blog cards.
4. **Layout Design:** Creating layouts for different page types, ensuring consistency across the site.
5. **Content Population:** Writing blog posts, project descriptions, and resume content in Markdown.
6. **Styling:** Applying Tailwind CSS classes and customizing the DaisyUI theme to achieve the desired look and feel.
7. **Testing:** Thoroughly testing the site on different devices and browsers to ensure responsiveness and functionality.
8. **Deployment:** Setting up CI/CD with GitHub Actions and deploying the site to a hosting platform.
9. **Refinement:** Continuously improving the portfolio based on user feedback and evolving web development best practices.

## Get the Code and Explore!

-   **You are already here:** [Visit the Portfolio](https://johngrahn.com)
-   **GitHub Repository:** [Source Code](https://github.com/JohnGrahn/johngrahn.com)

Feel free to explore the live site and delve into the source code on GitHub. I encourage you to use this project as a learning resource and inspiration for your own portfolio website!

## Future Enhancements

-   **Improved SEO:** Implementing further SEO optimizations to improve search engine rankings.
-   **Accessibility Improvements:**  Enhancing accessibility to ensure the site is usable by everyone, including people with disabilities.
-   **Analytics Integration:** Adding analytics to track website traffic and user behavior.
-   **Contact Form:** Implementing a functional contact form for direct communication.

I'm constantly looking for ways to improve my portfolio and add new features. If you have any suggestions or feedback, please don't hesitate to reach out!