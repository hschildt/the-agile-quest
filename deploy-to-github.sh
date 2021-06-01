#!/bin/zsh

# See: https://dzone.com/articles/how-to-deploy-an-angular-application-to-github
# ng build --configuration production --base-href https://kaljarv.github.io/the-agile-quest/

# git checkout -b gh-pages
git switch gh-pages
ng build --output-path docs --base-href /the-agile-quest/
cp docs/index.html docs/404.html
git add .
git commit -m "Deploy to GH pages"
# git push --set-upstream origin gh-pages
git push
git switch master