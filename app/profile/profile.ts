routing.$inject = ['$stateProvider'];
function routing($stateProvider) {

    $stateProvider
        .state('profile', {
            url: '/profile',
            template: require('./profile.html'),
            controller: 'profileController',
            controllerAs: 'vm',
            resolve: {
                model: ['$stateParams', 'profileService',
                    function ($stateParams, profileService:app.IProfileResource) {
                        return profileService.get({id: $stateParams.id});
                    }]
            }
        });
}

export class ProfileController {

    static $inject =['model'];
    
    constructor(private model) {
        
    }
    
    public save(){
        
      this.model.$save()
      .then((response) => {
              console.log(response); //TODO
        }, (response) => {
            console.log(response); //TODO
        });     
    }

}

export default angular.module('profile', ['ui.router'])
    .config(routing)
    .controller('profileController', ProfileController)
    .name;
