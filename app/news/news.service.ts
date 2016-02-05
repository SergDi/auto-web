
    export default class NewsService{

        static $ingect =['$resource'];

        constructor(private $resource:angular.resource.IResourceService){

        }

        get():angular.resource.IResourceClass<app.INewsResource>{
            return this.$resource("/api/news/:id");
        }
    }
