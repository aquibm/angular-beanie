function beanieController(beanieConfig) {
    
    function buildTitle(title) {
        const template = beanieConfig.titleTemplate || '';

        if(!template) {
            return title;
        }

        return template.replace(/%title%/ig, title);
    }
    
    return {
        $onInit: function() {
            if(!this.title) return;
            document.title = buildTitle(this.title);
        }
    };
}

beanieController.$inject = [
    'beanieConfig'
];

module.exports = {
    controller: beanieController,
    bindings: {
        title: '@'
    }
};
