# An Opinionated ESLint and Prettier Setup for JavaScript

These are the core packages and settings I use for linting and formatting JavaScript in my projects.

The rules are a opinionated and are bing continuously fine-tuned while working with [modern JavaScript](https://javascript.info). This config can be easily extended to accommodate how you and/or your team work though.

This package is heavily inspired by [Wes Bos's `No-Sweat™ Eslint and Prettier Setup`](https://github.com/wesbos/eslint-config-wesbos/)... hence the blatant rip-off of his documentation (thanks [Wes](https://twitter.com/wesbos)!).

## ⚡️ What it Does

- Lints JavaScript based on latest-ish standards with [eslint](https://eslint.org/)
- Fixes formatting mishaps with [Prettier](https://prettier.io/)
- Eslint rules based on [JavaScript Standard Style](https://standardjs.com/)

Custom rules can be [found in the `.eslintrc.js` file.](.eslintrc.js) You can overwrite any of these settings or fork the entire package to create your own.

## 💾 Installing

You can install this package locally (per project) or globally.

Ideally you will want to install this locally per project so that you can have project-specific settings for everyone working on the project.

Installing this package globally allows you to lint and format ad-hoc JavaScript files and projects too. It's nice if you want to spin up a quick protoype or a throwaway project to work through a quick idea.

### Local/Per Project Install

1.  If you don't have a `package.json` file, initialize your project with `yarn init` or `npm init`

1.  Install the package and its peer dependencies:
    <!-- prettier-ignore -->
    ```sh
    yarn add --dev eslint prettier @pauloelias/eslint-config-javascript-standard-core
    ```

    <!-- prettier-ignore -->
    ```sh
    npm install --save-dev eslint prettier @pauloelias/eslint-config-javascript-standard-core
    ```

1.  Create an `.eslintignore` file in the root of your project (alongside your `package.json`) and add the following:
    <!-- prettier-ignore -->
    ```
    node_modules
    ```

1.  Create a `.prettierignore` file in the root of your project (alongside your `package.json`) and add the following:
    <!-- prettier-ignore -->
    ```
    node_modules
    ```

1.  Create an `.eslintrc` file in the root of your project (alongside your `package.json`) and add the following:
    <!-- prettier-ignore -->
    ```js
    {
      "extends": ["@pauloelias/eslint-config-javascript-standard-core"]
    }
    ```

1.  Add the follwing scripts to your `package.json` file:
    <!-- prettier-ignore -->
    ```json
    "scripts": {
      "lint": "eslint .",
      "lint:fix": "eslint . --fix"
    }
    ```

1.  You can lint and/or fix your code manually by running these scripts:
    <!-- prettier-ignore -->
    ```sh
    yarn run lint
    yarn run lint:fix
    ```

    <!-- prettier-ignore -->
    ```sh
    npm run lint
    npm run lint:fix
    ```

### Global Install

1. Install the package and its peer dependencies globally:
   <!-- prettier-ignore -->
   ```sh
    yarn global add eslint prettier @pauloelias/eslint-config-javascript-standard-core
    ```

   <!-- prettier-ignore -->
   ```sh
    npm install -g eslint prettier @pauloelias/eslint-config-javascript-standard-core
    ```

1. Add a global `.eslintrc` file:

ESLint will look for one in your home directory:

- `~/.eslintrc` for mac
- `C:\Users\username\.eslintrc` for windows

Your `.eslintrc` file should look like this:

```js
{
  "extends": ["@pauloelias/eslint-config-javascript-standard-core"]
}
```

To use from the CLI, you can now run `eslint .` or configure your editor (below under "Settings").

## ⚙️ Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your .eslintrc file. The ESLint rules go directly under "rules" while prettier options go under "prettier/prettier". Note that prettier rules overwrite anything in this config (removing semicolons, and using single quotes), so you'll need to include those as well.

<!-- prettier-ignore -->
```js
{
  "extends": ["@pauloelias/eslint-config-javascript-standard-core"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "singleQuote": false
      }
    ]
  }
}
```

### VS Code Settings

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix issues for you. Here are the instructions for VS Code:

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

1. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:
   <!-- prettier-ignore -->
   ```js
    {
      // These are all my auto-save configs
      "editor.formatOnSave": true,
      // turn it off for JS and JSX, we will do this via eslint
      "[javascript]": {
        "editor.formatOnSave": false
      },
      "[javascriptreact]": {
        "editor.formatOnSave": false
      },
      // tell the ESLint plugin to run on save
      "eslint.autoFixOnSave": true,
      // Optional BUT IMPORTANT: If you have the Prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
      "prettier.disableLanguages": ["javascript", "javascriptreact"],
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
    }
    ```
