
import NewsService from './news.service';
import NewsDetailController from './news-detail/news-detail';
import routing from './news.routes';

export class NewsController {

        modify:boolean;

        static $ingect =['newsService'];

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

export default angular.module('app.news', ['ui.router','ngResource'])
    .config(routing)
    .controller('newsController', NewsController)
    .controller('newsDetailController', NewsDetailController)
    .service('newsService', NewsService)
    .name;