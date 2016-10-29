'use strict';

export default class MainController {
  constructor($scope) {
    this.name = 'Vasya';
    this.init($scope);
  }

  init($scope) {
    this.name = 'Initialized';
  }
  
  doSomething() {
    this.name = 'Updated by button';
  }
}

MainController.$inject = ['$scope'];
