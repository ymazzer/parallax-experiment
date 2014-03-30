angular.module('wording', [])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'site.title': 'Yannis Mazzer\'s website'
        });
        
        $translateProvider.translations('fr', {
            'site.title': 'Site web de Yannis Mazzer'
        });
        $translateProvider.preferredLanguage('en');
        moment.lang('en');
    }]);