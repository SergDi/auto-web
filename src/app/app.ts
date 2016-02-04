import 'angular';

function App () {
  return {
    restrict: 'E',
    template: '<h1>{{ vm.name }}</h1>',
    controller: AppController,
    controllerAs: 'vm'
  }
}

class AppController {

  name: string;

  constructor() {
    this.name = "auto-web";
  }

}

angular.module('app', [])
.directive('app', App);

angular.bootstrap(document, ['app']);