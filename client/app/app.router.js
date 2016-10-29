'use strict';

import AboutController from './about/about.controller';
import AboutTemplate from './about/about.template.html';
import MainTemplate from './main/main.template.html';

export default function RouterConfig($stateProvider) {
  $stateProvider.state('main', {
    url: '/main',
    controller: 'MainController',
    controllerAs: 'main',
    template: MainTemplate
  }).state('about', {
    url: '/about',
    controller: AboutController,
    controllerAs: 'about',
    template: AboutTemplate
  });
}

RouterConfig.$inject = ['$stateProvider'];
