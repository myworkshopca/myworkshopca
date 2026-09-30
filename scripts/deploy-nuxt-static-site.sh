# /bin/bash

# bash script to deploy nuxt static site to target folder.
# The [PROJECT FOLDER] should be a Nuxt project folder.
# The [TARGET FOLDER] should be a GitHub repository set up with GitHub pages.
# The file CNAME in [TARGET FOLDER] will tell the domain we deployed to

if [ "$1" != "" ] && [ "$2" != "" ]; then
    echo "============================================================="
    echo "Working on project folder: $1"
    echo "Target folder: $2"
    echo "============================================================="
else
    echo "Please provide both [PROJECT FOLDER] and [TARGET FOLDER]"
    echo "For example:"
    echo "generate-nuxt-static-site.sh /usr/leocorn/leocornus-platform/babaofood /usr/leocorn/github-pages/bbfuat.github.com"
    exit 1
fi

echo "***************************************************************"
echo "**** Please double check the following before move forward ****"
echo "- project folder"
echo "- target folder"
echo "- the file **nuxt.config.js** to double check the remote endpoint!"
# ==== provide comments:
echo "--------------------------------------------"
echo "Please provide comments for this deployment:"
read comment

# ==== The folder information:

# generate static site on project folder.
cd $1
npm run generate

# remove the _nuxt folder.
rm -rvf $2/_nuxt
# copy all files from games/dist folder to target folder.
cp -vrf $1/dist/* $2/

# commit to github with comments on target folder..
cd $2
git add .
git commit -m "$comment" .
git push

# set up git tags.
# NO need for now
# git tag -a v0.1 -m 'first tag to get start'
# git push origin v0.1
