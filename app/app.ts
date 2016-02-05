import 'angular';
import 'angular-ui-router';
import 'angular-resource';

import news from './news/news';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
function routing($urlRouterProvider, $locationProvider, $stateProvider) {

  $locationProvider.html5Mode({
    enabled:true,
    requireBase:false
  });
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('news', {
          url: '/',
          template: require('./news/news.html'),
          controller: 'newsController',
          controllerAs: 'vm'

      })
      .state('news-detail', {
        url: '/news/:id',
        template: require('./news/news-detail/news-detail.html'),
        controller: 'newsDetailController',
        controllerAs: 'vm'
      });
}

angular.module('app',
    ['ui.router', 'ngResource', news])
    .config(routing);

angular.bootstrap(document, ['app']);