# Angular Beanie
> Effortlessly update the document title from any route. Inspired by [react-helmet](https://github.com/nfl/react-helmet)

1. [Installation](#installation)
1. [The Beanie Component](#the-beanie-component)
1. [Using templates](#using-templates)
    1. [Configuring the title template](#configuring-the-title-template)
    1. [Using the template](#using-the-template)
    1. [The fallback title](#the-fallback-title)
1. [Contributing](#contributing)
1. [License](#license)

## Installation
1. Install `angular-beanie` via npm or yarn.

```bash
npm install -S angular-beanie

yarn add angular-beanie
```

2. Inject the beanie module as a dependency to your awesome angular application.

```javascript
angular.module('my-awesome-app', [
    'beanie'
])
```

3. You're ready to use angular beanie!


## The Beanie Component
The easiest way to change the document title is to simply add the beanie component to any of your component templates.
For instance, the following declaration would would set the document title to `Home - My Awesome App`

```html
<beanie title="Home - My Awesome App" /> 
```

## Using Templates
For applications with more than one route, utilizing templates allows us to have a generic site template and modify it 
slightly for each route.

### Configuring the title template
This can be done by modifying  the `beanieConfig` during angular's config phase.
```javascript
angular.module('my-awesome-app', ['beanie'])
    .config(function(beanieConfig) {
        angular.extend(beanieConfig, {
            titleTemplate: '%title% - My Awesome App'
        });
    });
```

### Using the template
Using a configured template is as simple as adding a beanie component with the title set to just the value
to replace `%title%` in the template.

```html
<beanie title="Home" />

<!-- This would set the document title to 'Home - My Awesome App' -->
```

### The fallback title
For instances when the beanie component is not provided with a title **and** a title template is configured, the fallback
title will be used instead, if configured. This is configured in the same way as the title template.

```javascript
angular.module('my-awesome-app', ['beanie'])
    .config(function(beanieConfig)) {
        angular.extend(beanieConfig, {
            titleTemplate: '%title% - My Aesome App',
            fallbackTitle: 'My Aesome App'
        });
    }
```

Adding an empty beanie `<beanie />` to a component would now set the title to the fallback title.

## Contributing
Pull requests welcome, unit tests are strongly encouraged.

### Dev Installation
- Fork and clone the project
- Install the [yarn package manager](https://yarnpkg.com/en/docs/install) and run `yarn install`
- You're good to go!

## License
[MIT](./LICENSE.md)
