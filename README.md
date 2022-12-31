# The store front for MyWorkshop.ca

## How to start the dev server

```bash
# using npm run dev to start the dev server.
cd ~/rd/platform/myworkshop
npm run dev
```
## How to deploy to GitHub pages

We will use the script (deploy-nuxt-static-site) to deploy the site to GitHub Pages.

```bash
# check the online doc
cd ~/rd/platform/scripts; ./deploy-nuxt-static-site.sh
# check the folder content
ls -la ~/rd/sites

~/rd/platform/scripts/deploy-nuxt-static-site.sh ~/rd/platform/myworkshop ~/rd/sites/myworkshopca.github.com
```
