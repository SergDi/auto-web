/// <reference path="../typings/tsd.d.ts" />

declare function require(string): any;

declare module app {

    interface INews {

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

    }
}