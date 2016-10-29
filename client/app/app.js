import 'jquery';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import RouterConfig from './app.router';

import MainController from './main/main.controller';

angular.module('app', [ uiRouter ])
  .config(($locationProvider) => { "ngInject"; $locationProvider.html5Mode(true).hashPrefix('!');})
  .config(RouterConfig)
  .component('app', AppComponent)
  .controller('MainController', MainController);
