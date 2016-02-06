import NewsService from './news.service';
import NewsDetailController from './news-detail/news-detail';

routing.$inject = ['$stateProvider'];
function routing($stateProvider) {

        $stateProvider
            .state('news', {
                    url: '/news',
                    template: require('./news.html'),
                    controller: 'newsController',
                    controllerAs: 'vm',
                    resolve:{
                        model:['$stateParams','newsService',
                            function($stateParams, newsService:app.INewsResource){
                                return newsService.query();
                            }]
                    }

            })
            .state('news-detail', {
                    url: '/news-detail/:id',
                    template: require('./news-detail/news-detail.html'),
                    controller: 'newsDetailController',
                    controllerAs: 'vm',
                    resolve:{
                        model:['$stateParams','newsService',
                            function($stateParams, newsService:app.INewsResource){
                                return newsService.get({id:$stateParams.id});
                        }]
                    }
            });
}

export class NewsController {

        static $inject =['model','newsService'];

        constructor(private model:app.INews[],private newsService:app.INewsResource){

        }
}

export default angular.module('news', ['ui.router'])
    .config(routing)
    .controller('newsController', NewsController)
    .controller('newsDetailController', NewsDetailController)
    .factory('newsService', ["$resource", NewsService])
    .name;