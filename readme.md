# Angular Beanie
> Effortlessly update the document title from any route. Inspired by [react-helmet](https://github.com/nfl/react-helmet)

## Installation
- Run `npm install angular-beanie`
- In your angular module definition, take on `beanie` as a dependency.
  
  ```javascript
  angular.module('my-awesome-app', ['beanie']);
  ```

## Usage
In any component, you can use `<beanie title="My awesome title" />` to set the document title.
The title template can be configured in the following way:

```javascript
angular.module('my-app', ['beanie'])
    .config(function (beanieConfig) {
        angular.extend(beanieConfig, {
            titleTemplate: '%title% | My Awesome App'
        });
    });
```

If a beanie component is used now, the `%title%` portion of the template will be replaced with the beanie title.

```html
<beanie title="Home" />
```

On the home route's component would set the document title to `Home | My Awesome App`

## Contributing
- Fork and clone the project
- Get the [yarn package manager](https://yarnpkg.com/en/docs/install) and run `yarn install`
- You're good to go!

## License
[MIT](./LICENSE.md)
