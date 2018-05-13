import angular from 'angular';

import './scss/style.scss';

import IndexCtrl from './controllers/index';

angular.module('pubg-api', [])
  .controller('IndexCtrl', IndexCtrl);
