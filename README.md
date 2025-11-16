# TEA Foundation

Landing page for the TEA Foundation featuring a tri-column typing showcase of the foundation's pillars. The animation cycles through curated vocabulary for each anchor letter: T, E, and A.

## Local development

Open `index.html` directly in a browser or serve the directory with any static file server.

```bash
npx serve .
```

### Additional pages

- `about.html` introduces the TEA Foundation mission, pillars, and collaboration pathways.
- `revillaging.html` captures the Revillaging Strategy Sessions vision sketch with guided prompts.
- `projects.html` showcases active initiatives with cards that link to individual project pages such as
  `project-dance-studio.html`.
- `/calendar/tea.ics` serves a subscribable calendar feed generated from curated TEA events.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `TEA` or `tea-foundation`) and leave it empty.
2. Add the remote and push the site:

   ```bash
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git branch -M main
   git add .
   git commit -m "Initial commit: TEA Foundation landing page"
   git push -u origin main
   ```

3. In the GitHub repository, open **Settings → Pages**.
4. Under **Source**, choose `Deploy from a branch` and select the `main` branch and `/ (root)` folder.
5. Save the configuration. GitHub Pages will publish the site at `https://<your-username>.github.io/<your-repo>/` after a short build queue.

For a custom domain, follow the additional instructions under **Settings → Pages** and add a `CNAME` record pointing to the GitHub Pages host.

## Local server with calendar endpoint

The repository includes a small Express server that serves the static site and generates a live iCalendar feed.

```bash
npm install
npm start
```

This makes the site available at `http://localhost:3000/` and exposes the calendar at `http://localhost:3000/calendar/tea.ics`.

To subscribe directly from calendar apps, use the `webcal://localhost:3000/calendar/tea.ics` URL while the server is running.
