function beanieController() {
    return {
        $onInit: function() {
            if(!this.title) return;
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
