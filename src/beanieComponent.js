function beanieController() {
    return {
        $onInit: function() {
            document.title = this.title;
        }
    };
}

module.exports = {
    controller: beanieController,
    bindings: {
        title: '@'
    }
};
