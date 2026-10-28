# Portfolio

    npm install
    npm run dev      # local dev server
    npm run build    # production build into dist/

Edit `src/data.js` to change your name, bio, skills, projects and social links.

Deploy: push to GitHub, then Netlify > Add new site > Import from Git. Build command `npm run build`, publish directory `dist` (already set in netlify.toml).

Project images: save screenshots in `public/projects/` and set `image: '/projects/name.png'` for a project in `src/data.js`.
