
    export class NewsService{

        static $ingect =['$resource'];

        constructor(private $resource:ng.resource.IResourceService){

        }

        get():ng.resource.IResourceClass<INewsResource>{
            return this.$resource("/api/news/:id");
        }
    }

    angular.module('news')
        .service('newsService',NewsService);

