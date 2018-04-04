'use strict';

import app from './module';

import './services/sampleService';

import './controllers/sample.ctrl';

/**
 * Route configuration for the RDash module.
 */
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/sample');

        // Application routes
        $stateProvider
            .state('sample', {
                url: '/sample',
                controller: 'SampleCtrl',
                templateUrl: 'panel-widgets/src/templates/page-layout.html',
                title: 'Sample Page',
                sidebar: true,
                icon: 'tachometer'
            });
    }
]);