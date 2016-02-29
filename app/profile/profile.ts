routing.$inject = ['$stateProvider'];
function routing($stateProvider) {

    $stateProvider
        .state('profile', {
            url: '/profile',
            template: require('./profile.html'),
            controller: 'profileController',
            controllerAs: 'vm',
            resolve: {
                model: ['$stateParams',
                    function () {
                        return 'text profile';
                    }]
            }
        });
}

export class ProfileController {

    static $inject =['model'];
    
    constructor(private model) {
        
    }

}

export default angular.module('profile', ['ui.router'])
    .config(routing)
    .controller('profileController', ProfileController)
    .name;
