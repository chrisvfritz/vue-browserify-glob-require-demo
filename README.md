# Vue Browserify Glob Require Demo

A simple browserify setup appropriate for non-SPAs where you just want to register reusable components.

## Backend Integration

1. Copy `package.json` and `.babelrc` to the root of your project.
2. Update references to `src` in `package.json` to where you want to keep your JavaScript (e.g. `frontend/javascript`).
3. Copy the files in `src` to the folder you used in step 2.
4. Update references to `dist` in `package.json` to your backend's asset pipeline or public folder (e.g. `app/assets/javascripts` or `public/assets` in Rails)
5. In your layout file(s), add a `script` tag to the end of your `body`, pointing to your JavaScript build (e.g. `/assets/build.js`).
6. Update the `serve` script in `package.json` to a command that will run your backend server. After that, you will be able to run browserify and your backend server with `npm run dev`.
7. Update your deployment script to include `npm run build` _before_ any asset compilation process your backend might use (e.g. before `rake assets:precompile` in Rails).
8. Profit!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).
