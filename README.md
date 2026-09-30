# myworkshopca

My Workshop Official Web Site - the store front for MyWorkshop.ca.

This repository was split out of `leocornus/leocornus-platform` (path `myworkshop/`) on 2026-09-30
with `git subtree split`, preserving the full commit history back to 2021-01-22.

Day to day stories for this project are kept in the platform journal, not in this repository:
`~/rd/platform/journal/<year>/`.

## How to start the dev server

```bash
cd ~/rd/myworkshopca
npm run dev
```

The dev server listens on port 3003 (see `nuxt.config.js`).

Note: this is still a Nuxt 2 / Vue 2 application, which needs an older Node than the current
default. Switch first:

```bash
nvm use 16
```

## How to deploy to GitHub pages

Use the `deploy-nuxt-static-site.sh` script to generate the static site and copy it into the
GitHub Pages repository.

```bash
# check the online doc
cd ~/rd/platform/scripts; ./deploy-nuxt-static-site.sh

# check the target folder content
ls -la ~/rd/sites/myworkshopca.github.com

~/rd/platform/scripts/deploy-nuxt-static-site.sh ~/rd/myworkshopca ~/rd/sites/myworkshopca.github.com
```

The `CNAME` file in the target folder points the site at https://myworkshop.ca.

## lessons

Quick memo for lessons on MyWorkshop. Each lesson should have a dedicated git repository on GitHub
under organization [MyWorkshopCA](https://github.com/myworkshopca). This is just a quick memo for
how we get started on each lesson; reference the corresponding git repo for more details.

### DataScienceBasic

**Sat 27 May 2023 08:59:29 EDT**
Created the Git repo: https://github.com/myworkshopca/DataScienceBasic

Set up local working folder:
```bash
cd ~/rd/myworkshopca; ls -la
cd ~/rd/myworkshopca; git clone git@github.com:myworkshopca/DataScienceBasic.git

# set up git author
cd ~/rd/myworkshopca/DataScienceBasic; git config --list
cd ~/rd/myworkshopca/DataScienceBasic; git config user.name 'Sean Chen'
cd ~/rd/myworkshopca/DataScienceBasic; git config user.email 'sean.chen@leocorn.com'

cd ~/rd/myworkshopca/DataScienceBasic; git log
```

vim command to edit
```vim
vert new ~/rd/myworkshopca/DataScienceBasic/README.md
new ~/rd/myworkshopca/DataScienceBasic/README.md
```
