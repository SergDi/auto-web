import 'angular';
import 'angular-ui-router';
import 'angular-resource';

import routing from './app.config';

<<<<<<< HEAD
import news from './news/news';
=======
function App () {
  return {
    restrict: 'E',
    template: '<h1>{{ vm.name }}</h1>',
    controller: AppController,
    controllerAs: 'vm'
  }
}
>>>>>>> parent of 44fcba4... reorder

class AppController {

  name: string;

  constructor() {
    this.name = "auto-web";
  }

}

angular.module('app', ['ui.router'])
    .config(routing)
    .directive('app', App);

angular.bootstrap(document, ['app']);