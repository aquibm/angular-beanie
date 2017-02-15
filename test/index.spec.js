var $document;
angular.module('app', ['beanie']);

beforeEach(function() {
    module('app');
});

beforeEach(inject(function(_$rootScope_) {
    debugger;
}));

describe('beanie tests', function() {
    it('should be true', function() {
        expect(true).toBe(true);
    });
});
