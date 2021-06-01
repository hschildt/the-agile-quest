# The Agile Quest Game


Play the game at https://kaljarv.github.io/the-agile-quest/.

## Editing settings and texts

The settings and text strings are collected in two json files found in `/src/assets/data/`.

Texts are fetched from `texts.json` using the string itself (or in some cases an uppercase moniker) as the first key and Angular’s LOCALE_ID as the second. If a translation for the locale is not found en-US is used. If no entry at all for the string is found in `texts.json` the string itself is used.

All texts and titles may contain HTML markup, which will, however, be [sanitized by Angular](https://angular.io/guide/security#sanitization-and-security-contexts) at insertion time. 

Once changed, override these files in the `docs/assets/data` folder.

For the structure of `settings.json`, see `src/app/shared/shared.types.ts` and the json file itself.
 

## Deploying on Github pages

See: https://angular.io/guide/deployment#deploy-to-github-pages

1. Build the project using the Angular CLI with:

`ng build --prod --output-path docs --base-href /the-agile-quest/`

2. When the build is complete, make a copy of `docs/index.html` and name it `docs/404.html`:

`cp docs/index.html docs/404.html`

3. Commit your changes and push.

`git add .`

`git commit -a -m "Deploy on Github pages"`

`git push`

4. Make sure Github is configured to [publish from the docs folder](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch).


## Authors

Game concept and the book on which it is based: prof. Henri Schildt Aalto University.

UX and graphic design: Kiira Keski-Hakuni [Kipsonite](http://kipsonite.com) & Aalto University.

Engineering: Kalle Järvenpää / @kaljarv [Kalle Järvenpää Design](http://kaljarv.com/) & Aalto University.


## Licensing

The software exluding the files listed below is distributed under the MIT license.

Software copyright 2021 Henri Schildt Kalle Järvenpää and Kiira Keski-Hakuni.

Permission is hereby granted free of charge to any person obtaining a copy of this software and associated documentation files (the Software) to deal in the Software without restriction including without limitation the rights to use copy modify merge publish distribute sublicense and/or sell copies of the Software and to permit persons to whom the Software is furnished to do so subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND EXPRESS OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM DAMAGES OR OTHER LIABILITY WHETHER IN AN ACTION OF CONTRACT TORT OR OTHERWISE ARISING FROM OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.