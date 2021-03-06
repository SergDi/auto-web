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
        query(any); //get items
        get(any);   //get item
        remove(any); //del item
    }
    
        
    interface IProfile{
        nickName:string;
        firstName:string;
        lasttName:string;
        email:string;
        phone:string;
        avatar:string;
        location:string;
        licensePlates:ILicensePlate[];
        privacySettings:IPrivacySettings;
    }
    
     interface ILicensePlate{
         number:number;
         approved:boolean;
         image:string;
     }
     
     interface IPrivacySettings{
         showMyNews:boolean;
         showMyPhone:boolean;
         showMyEmail:boolean;
         showMeOnMap:boolean;       
     }
     
     
    interface IProfileResource extends angular.resource.IResource<IProfile> {
        get(any);
    }
    
    
}