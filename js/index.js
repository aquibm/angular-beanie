angular.module('app', [])
  .component('beanie', {
    bindings: {
      title: '@'
    },
    controller: function() {
      return {
        $onInit: function() {
          document.title = this.title;
        }
      }
    }
});