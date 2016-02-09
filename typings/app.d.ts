declare function require(string): any;

declare module app {

    interface INews {
        id:number;
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

    interface INewsResource extends angular.resource.IResource<INews> {
        query(any);
        create();
        get(any);
        remove();
        update();
    }
}