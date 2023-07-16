# Blackjack game with use strict and minified

<!-- ## Travis CI badges and github actions
# Logo: Framework, tool, base of the project not all  -->

<!-- Markdown link & img dfn's -->

<!-- [npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/escummy/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/escummy/node-datadog-metrics
[wiki]: https://github.com/escummy/yourproject/wiki -->

 <!-- [![Build Status](https://travis-ci.org/escummy/dillinger.svg?branch=master)](https://travis-ci.org/escummy/dillinger) <img alt="Github workflows" src="https://github.com/thmsgbrt/thmsgbrt/workflows/README%20build/badge.svg"/> <img alt="Contributor Covenant v2.1" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg"/> <img alt="License" src="https://img.shields.io/github/license/escummy/webpack-complete?style=flat-square&labelColor=343b41"/> -->

> 21 blackjack game created in vanilla javascript, covered with use strict to protect possible changes in the browser or developer tools by any user and minified to reduce the total weight file in bytes.

<br>

<!-- ## Snapshots -->

<p align="center">
  <img src="https://github.com/escummy/blackjack-game/assets/90976678/97a1f109-c234-4c4f-8ba8-fe87bbd95a23" width="95%" title="TMDB posters repository by escummy" alt="accessibility text">
</p>

<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy on a live system and clone the repository.

<br>

- (Option 1): Clone the repository with link "https"

```bash
  git clone https://github.com/escummy/blackjack-game.git
```

- (Option 2): Clone the repository with link "SSH"

```bash
  git clone git@github.com:escummy/blackjack-game.git
```

- (Option 3): Download the file.zip to your desktop

<br>

## To run the game

To tun the project you can just drop down the index.html file in the search browser tab and press ENTER, or for the other hand, there are several extensions for Visual Studio Code that allow you to run JavaScript projects on a local server.

> Some of the most popular extensions included are:

- Live Server: This extension lets you start a local development server with a single click. It automatically reloads the page in the browser whenever you make changes to your code.

- Code Runner: This extension allows you to execute JavaScript code snippets directly in Visual Studio Code. You can select the code you want to run and use the keyboard shortcut to get the results in the output window.

- Quokka.js: Quokka.js is a Visual Studio Code extension that provides real-time development experience. It displays the results of your JavaScript code as you type, allowing you to see the values of variables and the results of expressions in real time.

<br>

## To build in prodcution

To build or run the game in production, the game is minified and protected with `use strict`, so you can directly deploy or manage the proyect properly as you want.

<br>

## Learn More

To learn more about Vanilla Javascript, there are many resources and platforms recommended.

> Mozilla Developer Network (MDN):
>
> MDN offers a comprehensive JavaScript guide that covers everything from the basics to advanced topics. It provides detailed explanations, examples, and interactive code snippets. You can access it at: [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

> JavaScript.info:
>
> JavaScript.info is a popular online resource that provides in-depth tutorials and articles on JavaScript. It covers a wide range of topics, from the basics to advanced concepts such as closures, prototypes, and async/await. Visit: [JavaScript.info](https://javascript.info/).

> FreeCodeCamp:
>
> FreeCodeCamp is a platform that offers free interactive coding challenges and tutorials, including a comprehensive curriculum on JavaScript. They cover essential topics and provide hands-on coding exercises to reinforce your learning. Check it out at: [FreeCodeCamp](https://www.freecodecamp.org/).

> Eloquent JavaScript:
>
> "Eloquent JavaScript" is a well-regarded book by Marijn Haverbeke that covers JavaScript from beginner to advanced levels. The book is available online for free and also has a print version. You can access it at: [Eloquent JavaScript](https://eloquentjavascript.net/).

<br>

Remember, practicing coding exercises, working on projects, and experimenting with JavaScript code for gaining hands-on experience deepening your understanding of the language.

> Recomendations: 
> - Check this visual studio code [settings.json](https://github.com/escummy/vscode-settings-json)
> - To install the necessary extensions, add extension 'missing extensions' to your vscode.

<br>

### Build fails to minify

To minify code we have used:

To create a function when cards are deals ramdomly like in the real time, we have different methods to do that, but we are going to use a famous LIBRARY named 'Underscore javascript' where we can find real time functions that Javascript don't have by default

[Underscore javascript](https://underscorejs.org/)

- We click on Underscore.js (v1.13.4)

- Then we go to Download and we have 4 options

> ESM (Development) 65.9 KB, Uncompressed with Plentiful Comments
>
> ESM (Production) 8.59 KB, Minified and Gzipped
>
> UMD (Development) 68.4 KB, Uncompressed with Bountiful Comments
>
>UMD (Production) 7.48 KB, Minified and Gzipped

We select and click on UMD (Production), copy all the entire page and paste in your `underscore-min.js` file.

**NOTE:** Dont't forget to add the following script to your `index.HTML` at the end of your body as bellow, and be sure to change your correct path following your folder three structure:

<br>

```html
 <!-- Game minified to production -->
  <script src="src/js/underscore-min.js"></script>
  <script src="src/js/game-min.js"></script>
```

> Then you can use TOPTAL Online JavaScript Minifier Tool and Compressor, with Fast and Simple API Access, but in this case we only paste the code in the compressor and click on the button to receive the minified game.js code in the output.
>
> [TOPTAL JavaScript Minifier](https://www.toptal.com/developers/javascript-minifier)

<br>

## Latest releases

<!-- Change link path for each repository (automate actions CI/gist)-->

Repositories use [SemVer](http://semver.org/) for versioning, three-digit numbering technique based patter of Major, Minor and Patch fixes, see the [release tags](https://github.com/escummy/blackjack-game/tags) for more details about version available.

<!-- ## Running the tests

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Break down into end to end tests

Explain what these tests test and why

```
npm test
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

-->

<br>

## Contributing

Contributions are always welcome.

See [CONTRIBUTING](.github/CONTRIBUTING.md) for ways to get started, you can colaborate addings features to improve the repository, you can feel free to suggest anything or help solving issues via pull request.

<!-- Please read [CONTRIBUTING.md](https://gist.github.com/escummy/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests. -->

Please adhere to this project [CODE_OF_CONDUCT](.github/CODE_OF_CONDUCT.md), examples of behavior that contributes to a positive environment for our community and adapted from the Contributor Covenant, version 2.0, available at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html

> **[Author]**: Gonzalo Cugiani (Amsterdam, North Holland, Netherlands)
>
> - [www.github.com/github.com/escummy](https://github.com/escummy)
> - [www.linkedin.com/in/gonzalocugiani](https://linkedin.com/in/gonzalocugiani)
> - [www.stackoverflow.com/gonzalocugiani](https://stackoverflow.com/users/20149906/gonzalo-cugiani)

<br>

## About Licenses

A licensor may grant a license under intellectual property laws to authorize a use (such as copying software or using a patented invention) to a licensee, sparing the licensee from a claim of infringement brought by the licensor.

<!-- Change link path for each repository (automate actions CI/gist)-->
License used for this repository <a href="https://github.com/escummy/blackjack-game/blob/main/LICENSE">`[`MIT License`]`</a>

<br><br>

---

<p align="center">. . .</p>

<p align="center">This <i>README</i> file was updated</br>Last refresh: Wednesday, 14 July, 17:31 CET<br/></p>

<br><br><br>
