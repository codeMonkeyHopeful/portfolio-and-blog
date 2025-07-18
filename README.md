# Code, Projects, and Career Moves

A personal blog and portfolio website by **Ryan Jasinski**, documenting my software engineering work, projects, and job search journey.

---

## 🚀 Features

- Built with **Next.js 13+** using the modern **App Router**
- Styled with **Bootstrap 5** for a clean, responsive layout
- Blog supports both **Markdown** and **Plain Text** posts with frontmatter toggling
- Portfolio section for showcasing projects
- About and Contact pages for professional background and networking
- Ready for self-hosting on a home server with **Traefik** and **Cloudflare**
- Uses import path aliases (`@/` and `~/`) for clean and ergonomic imports

---

## 📁 Project Structure

    /
    ├── app/                   # Next.js App Router pages and layouts
    ├── posts/                 # Blog posts as markdown files
    ├── components/            # Reusable React components
    ├── lib/                   # Utility functions (e.g., post parsing)
    ├── public/                # Static assets (images, favicon)
    ├── styles/                # Global and custom stylesheets
    ├── package.json           # Project dependencies and scripts
    ├── tsconfig.json/jsconfig.json # Import alias configuration
    └── README.md              # This file

---

## 💻 Getting Started

### Prerequisites

- Node.js v18+ (recommended)
- npm or yarn
- A domain pointing to your home server
- Traefik and Cloudflare configured for reverse proxy and HTTPS

### Installation

Clone the repo:

    git clone https://github.com/yourusername/code-projects-career-moves.git
    cd code-projects-career-moves

Install dependencies:

    npm install

Run the development server:

    npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Writing Blog Posts

- Add posts as `.md` files inside the `posts/` directory.
- Use YAML frontmatter to define metadata, e.g.:

      title: "My First Post"
      date: "2025-07-18"
      format: "markdown"  # or "plaintext"

- If `format` is `markdown`, content is rendered as HTML; if `plaintext`, content is shown as plain text.

---

## 🚀 Deployment

Build the production site:

    npm run build

Start production server:

    npm start

Use Traefik on your home server to reverse proxy and handle SSL with Cloudflare.

---

## 📬 Contact / About

Update the `/app/about` and `/app/contact` pages to share your professional bio and contact info.
