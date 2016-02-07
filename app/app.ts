import 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'bootstrap/dist/css/bootstrap.css'

import './common/services/newsResourceMock';

import news from './news/news';

routing.$inject = ['$urlRouterProvider', '$locationProvider'];
function routing($urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
    $urlRouterProvider.when("", "/news");
    $urlRouterProvider.when("/", "/news");

}

function App() {
    return {
        restrict: 'E',
        template: '<ui-view/>',
        controller: AppController,
        controllerAs: 'App'
    }
}

class AppController {

    constructor() {

    }
}
angular.module('app',
    ['ui.router', 'ngResource', 'newsResourceMock', news])
    .config(routing)
    .directive('app', App);

angular.bootstrap(document, ['app']);