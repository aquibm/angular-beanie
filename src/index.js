const angular = require('angular');
const beanieComponent = require('./beanieComponent');
const beanieConfig = require('./beanieConfig');

angular.module('beanie', [])
    .component('beanie', beanieComponent)
    .constant('beanieConfig', beanieConfig);
