/// <reference path="../lib.d.ts" />

export default class NewsController {

        modify:boolean;

        constructor(private model:app.INewsResource){

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