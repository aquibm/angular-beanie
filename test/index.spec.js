var $document, $rootScope, $compile;
angular.module('app', ['beanie']);

beforeEach(function() {
    module('app');
});

beforeEach(inject(function(_$document_, _$rootScope_, _$compile_) {
    $document = _$document_;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
}));

describe('beanie component tests', function() {
    it('should be able to change the title', function () {
        const title = 'Hello world!';
        const scope = $rootScope.$new();
        const beanieElement = angular.element('<beanie title="' + title + '"></beanie>');
        
        $compile(beanieElement)(scope);
        scope.$apply();

        expect($document[0].title).toBe(title);
    });
});
