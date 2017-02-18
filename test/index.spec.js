var $rootScope, $compile;
angular.module('app', ['beanie']);

beforeEach(function() {
    module('app');
});

beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
}));

describe('beanie component tests', function() {
    it('should be able to change the title', function () {
        const title = 'Hello world!';
        addBeanie(title);
        expect(document.title).toBe(title);
    });
    
    it('should not change the title when supplied an empty title', function() {
        const initialTitle = setDocumentTitle('Initial title');
        addBeanie('');
        expect(document.title).toBe(initialTitle);
    });
});

function setDocumentTitle(title) {
    document.title = title;
    return title;
}

function addBeanie(title) {
    const scope = $rootScope.$new();
    const element = angular.element('<beanie title="' + title + '" />');

    $compile(element)(scope);
    scope.$apply();
}
