# Installation
1. Install git from [here](https://desktop.github.com/) (Using command line is recommended)
2. Install node.js from [here](https://nodejs.org/en/download/)
3. Install ember.
  * Open a terminal window
  * type `npm install --save -g ember-cli`
4. Clone a repository from git `git clone https://github.com/HumbleHominid/reddit_display`
5. Go into the downloaded directory
6. Type `npm install; bower install` to download dependencies
  * If there is an error about not finding bower, run `npm install --save -g bower` and re-run 6
7. Type `emebr s` to run the ember server
8. Go to `https://localhost:4200` on any web browser


## Files
The javascript for component files are located in `$/app/components`. The handlebars for components files are located in `$/app/templates/components`

# reddit-display

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd reddit-display`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
