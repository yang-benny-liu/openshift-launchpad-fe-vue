# Openshift Launchpad Frontend Vue

This implements a Vue frontend with Keycloak authentication support. After building this repository, there will be a `/dist` folder which will contain all assets needed for statically hosting the generated frontend.

## Design Rationale

The frontend was built up from scratch using the official [Vue CLI](https://cli.vuejs.org/) distribution. These were the options that were used when scaffolding the initial Frontend:

``` sh
Vue CLI v4.2.2
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, CSS Pre-processors, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
```

We installed the Vuetify framework by running `vue add Vuetify` afterwards.

### Frontend Components

The frontend has the following main component dependencies:

* @dsb-norge/vue-keycloak-js
* axios
* core-js
* nprogress
* vue
* vue-router
* vuetify

### Code Structure

For the most part, we follow the Vue CLI scaffold as it is presented. However, we do also include a Keycloak prototype, and a global base component design in order to facilitate better component reuse. Keycloak authentication is handled by the vue-keycloak-js package, and the minimal BCGov styles are componetized in order to stay out of the way of the application content as much as possible. The navigation bar leverages vue-router, and the router uses webpack lazy-loading in order to optimize network traffic. Any components that start with the name `Base` and are in the app/frontend/src/components/base folder will be globally mounted onto the Vue instance and will be usable anywhere.

## Configuration

This frontend will require some configuration. The API it invokes will be locked down and require a valid JWT Token to access. We will need to configure the application to authenticate using the same Keycloak realm as its associated app. Note that this frontend is currently designed to expect all associated resources to be relative to the original access path.

## Super Quickstart

In [src/main.js](src/main.js), replace `YOURCLIENTHERE`, `YOURREALMHERE` and `YOURAUTHURLHERE` with the appropriate frontend values from Keycloak.

### Project setup

``` sh
npm install
```

### Compiles and hot-reloads for development

``` sh
npm run serve
```

### Compiles and minifies for production

``` sh
npm run build
```

### Run your unit tests

``` sh
npm run test:unit
```

### Lints and fixes files

``` sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
