import 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'bootstrap/dist/css/bootstrap.css'

import './common/services/filters';

import news from './news/news';
import login from './login/login';
import tags from './tags/tags'

routing.$inject = ['$urlRouterProvider', '$locationProvider'];
function routing($urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
    $urlRouterProvider.when("", "/news");
    $urlRouterProvider.when("/", "/news");

}

var AppComponent = {

    controller:AppController,
    template:`
     <div class="container">
            <div class="page-header">
                <h3 class="text-muted"><a href="/">Logo auto web</a></h3>
            </div>
            <ui-view/>
        </div>`
};

class AppController {

    constructor() {
        console.log('AppController');
    }
}

angular.module('app',
    ['ui.router', 'ngResource', 'common.filters', news, login, tags])
    .config(routing)
    .component('app', AppComponent);

angular.bootstrap(document, ['app']);