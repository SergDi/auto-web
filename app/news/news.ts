    export interface INews  {

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

    export interface INewsResource extends  ng.resource.IResource<INews> {

    }

    export class NewsController {

        modify:boolean;

        constructor(private model:INewsResource){

        }

        delete(){
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

