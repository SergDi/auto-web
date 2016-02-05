routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider:ng.ILocationProvider) {
    $locationProvider.html5Mode({enabled:true, requireBase:false});
    $urlRouterProvider.otherwise('/');
}