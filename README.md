# Personal portfolio & blog

This is a small Next.js web application that can be deployed as your personal
portfolio and blog.

It includes:

- Projects, Skills and Contact sections
- A Blog with public listing + individual post pages
- A minimal CMS at `/admin` for creating posts with a simple text/Markdown editor

## Tech stack

- Next.js (App Router)
- React + TypeScript
- File-based blog store (`data/posts.json`)

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Admin / CMS

- Go to `http://localhost:3000/admin`
- Log in with:
  - **Username**: `admin`
  - **Password**: `admin123`
- Create a post by filling in the title and content, then clicking **Publish post**.

Posts are stored in `data/posts.json` and appear on:

- Blog index: `/blog`
- Individual posts: `/blog/YYYY/MM/slug`, for example `/blog/2026/03/my-first-post`

> Note: for a production deployment you should replace the hard-coded credentials
> with environment variables and rotate them as needed.

# porfolio
personal portfolio
