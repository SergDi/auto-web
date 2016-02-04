module App.News{

    export class NewsService{

        static $ingect =['$resource'];

        constructor(private $resource:angular.resource.IResourceService){

        }

        get():angular.resource.IResourceClass<INewsResource>{
            return this.$resource("/api/news/:id");
        }
    }

    angular.module('news')
        .service('newsService',NewsService);

}