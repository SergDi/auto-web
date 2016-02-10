import NewsService from './news.service/news.service';
import './news.service/newsResourceMock';

import NewsDetailController from './news-detail/news-detail';
import NewsEditController from './news-edit/news-edit';

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
            template: require('./news.html'),
            controller: 'newsController',
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

export class NewsController {

    static $inject = ['model', 'newsService',];

    constructor(private model:app.INews[], private newsService:app.INewsResource) {

    }
}

export default angular.module('news', ['ui.router','newsResourceMock'])
    .config(routing)
    .controller('newsController', NewsController)
    .controller('newsDetailController', NewsDetailController)
    .controller('newsEditController', NewsEditController)
    .factory('newsService', ["$resource", NewsService])
    .name;