import 'angular';
import 'angular-ui-router';
import 'angular-resource';

import routing from './app.config';

import news from './news/news.controller';

angular.module('app', ['ui.router', news])
    .config(routing);

angular.bootstrap(document, ['app']);