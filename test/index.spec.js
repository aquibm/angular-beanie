var $rootScope, $compile, beanieConfig, originalConfig;

beforeEach(function() {
    angular.module('app', ['beanie']);

    module('beanie');
    module('app');
});

beforeEach(inject(function(_$rootScope_, _$compile_, _beanieConfig_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    beanieConfig = _beanieConfig_;
    originalConfig = angular.copy(beanieConfig);
}));

afterEach(function() {
    beanieConfig = angular.copy(originalConfig);
    document.title = 'Angular Beanie';
});

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

    it('should be able to use the title template', function() {
        setTitleTemplate('%title% | My Awesome App');

        addBeanie('Home');

        expect(document.title).toBe('Home | My Awesome App');
    });

    it('should be able to replace multiple instances of %title% in the template', function() {
        setTitleTemplate('%title% | My Awesome Site | Page:%title%');

        addBeanie('Users');

        expect(document.title).toBe('Users | My Awesome Site | Page:Users');
    });

    it('should set the document title to the title template if no replacement identifier is present', function() {
        setTitleTemplate('My Awesome Site');

        addBeanie('Some Page');

        expect(document.title).toBe('My Awesome Site');
    });

    it('should not replace partials instances of the title replacement identifier', function() {
        setTitleTemplate('Some Site %title');

        addBeanie('Some Page');

        expect(document.title).toBe('Some Site %title');
    });

    it('should not take into account the title template if it is undefined', function() {
        setTitleTemplate();

        addBeanie('Some Page');

        expect(document.title).toBe('Some Page');
    });

    it('should set the document title to the fallback title when the beanie title is empty', function() {
        setTitleTemplate('%title% | My Awesome Site');
        setFallbackTitle('My Awesome Site');

        addBeanie('');

        expect(document.title).toBe('My Awesome Site');
    });

    it('should not set the document title to the fallback title when the beanie template is not empty', function() {
        setTitleTemplate('%title% | My Awesome Site');
        setFallbackTitle('My Awesome Site');

        addBeanie('Users');

        expect(document.title).toBe('Users | My Awesome Site');
    });

    it('should not consider using the fallback title if the title template is empty', function() {
        const title = 'Set outside of beanie';
        setDocumentTitle(title);
        setTitleTemplate('');
        setFallbackTitle('Some awesome project site');

        addBeanie('');

        expect(document.title).toBe(title);
    });

    it('should not consider using the fallback title if it\'s undefined', function() {
        const title = 'Set outisde of beanie';
        setDocumentTitle(title);
        setFallbackTitle();
        setTitleTemplate('%title% | Some title');

        addBeanie('');

        expect(document.title).toBe(title);
    });
});

function setTitleTemplate(template) {
    angular.extend(beanieConfig, {
        titleTemplate: template
    });
}

function setFallbackTitle(title) {
    angular.extend(beanieConfig, {
        fallbackTitle: title
    });
}

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
