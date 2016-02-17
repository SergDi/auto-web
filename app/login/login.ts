
//import './login.css'

class AuthService {

    constructor(private $http) {

    }

    public login(credentials) {

        return this.$http.post('api/login', credentials)
            .then(function (response) {

                return response.data.user;
            });

    }
}

routing.$inject = ['$stateProvider'];
function routing($stateProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./login.html'),
            controller: 'loginController',
            controllerAs: 'vm'
        });
}

export class LoginController {

    public credentials:any;

    static $inject = ['authService'];

    constructor(private AuthService) {

        this.credentials = {
            username: '',
            password: ''
        }
    }

    public login() {

        this.AuthService.login(this.credentials);
    }
}

export default angular.module('login', ['ui.router'])
    .config(routing)
    .controller('loginController', LoginController)
    .factory('authService', ['$http',($http) => new AuthService($http)])
    .name;


