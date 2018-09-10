import angular from 'angular';

import storageService from './storage.service';
import config from '../utils/config';

const { restRoot } = config;

class PlateService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  get(projectId, plateName) {
    if (projectId === undefined) {
      return Promise.reject(new Error('Invalid projectId'));
    }

    return this.$http
      .get(`${restRoot}tissues/plates/${projectId}/${plateName}`)
      .then(({ data }) => data)
      .catch(angular.catcher('Failed to load tissue plates'));
  }

  all(projectId) {
    if (projectId === undefined) {
      return Promise.reject(new Error('Invalid projectId'));
    }

    return this.$http
      .get(`${restRoot}tissues/plates/${projectId}`)
      .then(({ data }) => data)
      .catch(angular.catcher('Failed to load tissue plates'));
  }
}

export default angular
  .module('fims.plateService', [storageService])
  .service('PlateService', PlateService).name;
