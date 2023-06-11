# The store front for MyWorkshop.ca

Day to day stories is stored in folder

```bash
# on my local MacBook pro
cd ~/rd/platform/myworkshop; ls -la
cd ~/rd/platform/myworkshop; mkdir -v stories

# start the readme
cd ~/rd/platform/myworkshop; touch stories/README.md
```

vim editor command
```vim
vert new ~/rd/platform/myworkshop/stories/README.md
```

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

## lessons

Quick memo for lessons on MyWorkshop.
Each leason should have a dedicated git repository on GitHub under
organization [MyWorkshopCA](https://github.com/myworkshopca).
Here is just a quick memo for how wy get started for each leason.
We should reference the corresponding git repo for more details.

### DataScienceBasic

**Sat 27 May 2023 08:59:29 EDT**
Created the Git repo: [](https://github.com/myworkshopca/DataScienceBasic)

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
