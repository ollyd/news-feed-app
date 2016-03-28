# A configurable news feed

Uses Webpack to bundle all JavaScript and CSS dependencies.

## Loaders

For JavaScript:

* [babel](http://babeljs.io/) - Turns ES6+ code into ES5-friendly code
* [eslint](http://eslint.org/) - Add lint rules to enforce best practices, supports ES6, React, and JSX as well
* [jshint](https://github.com/webpack/jshint-loader) - Similar to above
* [handlebars](https://github.com/altano/handlebars-loader), [mustache](https://github.com/deepsweet/mustache-loader), [ejs](https://github.com/okonet/ejs-loader), etc - Various flavors of templating

For CSS:

* [sass]() - Extends CSS with more traditional programming mechanisms (mixins, functions, etc.)

## Plug-ins

* [HotModuleReplacementPlugin](http://webpack.github.io/docs/list-of-plugins.html#hotmodulereplacementplugin) - Replaces JavaScript/CSS modules without reloading the browser
* [I18n](https://github.com/webpack/i18n-webpack-plugin) - Create locale-specific bundles with translations baked in
* [Rewire](https://github.com/jhnns/rewire-webpack) - Modify behavior of modules for easier unit testing in node.js
* [UglifyJs](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) - Minifies JavaScript output in bundles (use in a production config)

## Testing

[Mocha](https://mochajs.org) & [Should](http://shouldjs.github.io/)
