import angular from 'angular';
import 'angular-sanitize';
import '@uirouter/angularjs'
import 'angular-cookies';
import 'angular-loading-bar';
import 'angular-ui-bootstrap';

import 'panel-widgets/dist/bundle';

const dependencies = [
    'panel-widgets',
    'ngSanitize',
    'ui.router',
    'ngCookies',
    'angular-loading-bar',
    // 'angular-json-editor'
];

export let app = angular.module('Panel', dependencies).run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.states = $state.get();
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.alerts = [];
        $rootScope.addAlert = function (msg, type) {
            $rootScope.alerts.push({
                type: type,
                msg: msg
            });
        };
        $rootScope.closeAlert = function (index) {
            $rootScope.alerts.splice(index, 1);
        };

    }
]).filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

export default app;