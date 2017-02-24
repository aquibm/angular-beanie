function beanieController(beanieConfig) {
    
    function buildTitle(title) {
        const template = beanieConfig.titleTemplate || '';
        const fallback = beanieConfig.fallbackTitle || '';

        if(!title) {
            if(fallback && template) {
                return fallback;
            }

            return document.title;
        }

        if(!template) {
            return title;
        }

        return template.replace(/%title%/ig, title);
    }
    
    return {
        $onInit: function() {
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
