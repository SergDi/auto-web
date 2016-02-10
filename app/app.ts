import 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'bootstrap/dist/css/bootstrap.css'

import './common/services/filters';

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
        template: `
        <div class="container">
            <div class="page-header">
                <h3 class="text-muted"><a href="/">Logo auto web</a></h3>
            </div>
            <ui-view/>
        </div>
        `,
        controller: AppController,
        controllerAs: 'App'
    }
}

class AppController {

    constructor() {

    }
}
angular.module('app',
    ['ui.router', 'ngResource', 'common.filters', news])
    .config(routing)
    .directive('app', App);

angular.bootstrap(document, ['app']);