
import NewsService from './news.service';
import NewsDetailController from './news-detail/news-detail';

export class NewsController {

        modify:boolean;

        static $inject =['newsService'];

        //constructor(private model:app.INewsResource){
        constructor(private newsService:NewsService){
                console.log(newsService);
        }

        del(){
          //  this.model.$delete();
        }

        edit(){

        }

        approve(){

        }
}

export default angular.module('news', [])
    .controller('newsController', NewsController)
    .controller('newsDetailController', NewsDetailController)
    .service('newsService', NewsService)
    .name;