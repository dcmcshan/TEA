# TEA Foundation

Landing page for the TEA Foundation featuring a tri-column typing showcase of the foundation's pillars. The animation cycles through curated vocabulary for each anchor letter: T, E, and A.

## Local development

Open `index.html` directly in a browser or serve the directory with any static file server.

```bash
npx serve .
```

### Additional pages

- `revillaging.html` captures the Revillaging Strategy Sessions vision sketch with guided prompts.

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
