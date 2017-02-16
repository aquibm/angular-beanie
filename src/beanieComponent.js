function beanieController($document) {
    return {
        $onInit: function() {
            console.log('Injected');
            $document[0].title = this.title;
        }
    };
}

module.exports = {
    controller: beanieController,
    bindings: {
        title: '@'
    }
};
