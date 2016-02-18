routing.$inject = ['$stateProvider'];
function routing($stateProvider) {

    $stateProvider
        .state('profile', {
            url: '/profile',
            template: require('./profile.html'),
            controller: 'profileController',
            controllerAs: 'vm'
        });
}

export class ProfileController {

    constructor() {

    }

}

export default angular.module('login', ['ui.router'])
    .config(routing)
    .controller('profileController', ProfileController)
    .name;
