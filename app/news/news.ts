import NewsService from './news.service/news.service';
import './news.service/newsResourceMock';

import 'ng-tags-input';
import 'ng-tags-input/build/ng-tags-input.css';


import NewsListController   from './news-list/news-list';
import NewsDetailController from './news-detail/news-detail';
import NewsEditController   from './news-edit/news-edit';

routing.$inject = ['$stateProvider'];
function routing($stateProvider) {

    $stateProvider
        .state('news', {
            abstract: true,
            url: '/news',
            template: '<ui-view/>'
        })
        .state('news.list', {
            url: '?tags',
            template: require('./news-list/news-list.html'),
            controller: 'newsListController',
            controllerAs: 'vm',
            resolve: {
                model: ['$stateParams', 'newsService',
                    function ($stateParams, newsService:app.INewsResource) {
                        return newsService.query($stateParams);
                    }]
            }
        })
        .state('news.detail', {
            url: '/:id',
            template: require('./news-detail/news-detail.html'),
            controller: 'newsDetailController',
            controllerAs: 'vm',
            resolve: {
                model: ['$stateParams', 'newsService',
                    function ($stateParams, newsService:app.INewsResource) {
                        return newsService.get({id: $stateParams.id});
                    }]
            }
        })
        .state('news.edit', {
            url: '/:id/edit',
            template: require('./news-edit/news-edit.html'),
            controller: 'newsEditController',
            controllerAs: 'vm',
            resolve: {
                model: ['$stateParams', 'newsService',
                    function ($stateParams, newsService:app.INewsResource) {
                        return newsService.get({id: $stateParams.id});
                    }]
            }
        });
}

export default angular.module('news', ['ui.router','newsResourceMock', 'ngTagsInput'])
    .config(routing)
    .controller('newsListController', NewsListController)
    .controller('newsDetailController', NewsDetailController)
    .controller('newsEditController', NewsEditController)
    .factory('newsService', ["$resource", NewsService])
    .name;