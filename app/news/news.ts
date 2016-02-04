
module App.News{
    export interface INews {

        title:string;
        description?:string;
        body:string;
        createDate:any;
        location:any;
        tags:any[];
        opportunityСomment:boolean;
        hot:boolean;
        approve:boolean;
    }

    export interface INewsResource extends angular.resource.IResource<INews> {

    }


export default class NewsController {

        modify:boolean;

        constructor(private model:INewsResource){

        }

        del(){
            this.model.$delete();
        }

        edit(){

        }

        approve(){

        }
    }

    angular
        .module('news', [])
        .controller('news', NewsController)

}