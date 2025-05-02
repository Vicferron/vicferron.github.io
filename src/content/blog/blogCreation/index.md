---
title: "Building My Tech Portfolio: From Idea to Automated Deployment"
description: "How I designed, developed, and deployed my personal site with Astro, GitHub Pages, and CI/CD"
date: "2025-05-02"
draft: false
---

> "The best time to start was yesterday. The second best time is now."

After weeks of thinking about it, I finally launched my own personal website — a portfolio that showcases my projects, experience, and tech blog.

In this post, I’ll share how I built it, the tools I used, what I learned along the way, and how I automated deployment using GitHub.

---

## 🧭 Why Build My Own Website?

I wanted a central place to share what I do — projects, experience, thoughts, and learning. It had to be minimal, fast, accessible, and most importantly: mine.

I also needed something easy to maintain and deploy without hassle every time I updated content.

---

## 🛠 Tools Used

- **[Astro](https://astro.build)**: a modern framework for building ultra-fast static sites. I liked its simplicity and how easily I could render dynamic content from `.md` files.
- **GitHub Pages**: a free and simple hosting solution for static websites. Just push to the `gh-pages` branch, and it’s online.
- **GitHub Actions**: to automate building and deployment every time I push to `main`.
- **[Tailwind CSS](https://tailwindcss.com)**: already included in the template, great for keeping the design clean and consistent. I was already familiar with it from previous study, which made it easier to customize styles effectively.

---

## 🏗 Site Development

I used [Astro Nano](https://github.com/markhorn-dev/astro-nano) as the base template. It comes with dark mode, accessibility, a clean design, and solid structure.

Here’s what I did:

- Customized the theme, colors, and fonts  
- Replaced the default content with my own  
- Added my professional experience under `/work/`  
- Published my first project under `/projects/`  
- Prepared the blog structure for posts like this one  

This process helped me better understand how Astro handles layouts, components, and content collections.

---

## ⚙️ Automating Deployment

This was one of the most valuable steps: automating the entire workflow.

With the help of ChatGPT, I built a GitHub Actions pipeline that:

1. Triggers on push to `main`  
2. Installs dependencies and builds the project  
3. Copies `index.html` as `404.html` to handle unmatched routes  
4. Adds a `.nojekyll` file to avoid GitHub Pages issues  
5. Pushes the contents of `dist/` to the `gh-pages` branch  

Now, I just write or code, commit, and the site updates itself — no manual steps.

---

## 🚀 Coming Soon

In the next blog post, I’ll dive into some Databricks topics — since that’s what I’m actively working with right now.

Thanks for reading, and see you in the next one!
