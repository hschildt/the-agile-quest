#!/bin/zsh

# See: https://dzone.com/articles/how-to-deploy-an-angular-application-to-github
# ng build --configuration production --base-href https://kaljarv.github.io/the-agile-quest/

ng build --configuration production --base-href /the-agile-quest/
ngh -no-silent
cp docs/index.html docs/404.html