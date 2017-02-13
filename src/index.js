const angular = require('angular');

angular.module('beanie', [])
    .component('beanie', {
        controller: () => {
            $onInit: () => {
                document.title = this.title
            }
        },
        bindings: {
            title: '@'
        }
    });