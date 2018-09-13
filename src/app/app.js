import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import bootstrap from 'angular-ui-bootstrap';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';

// todo remove the following and use only angular-ui-bootstrap
import 'jquery-ui';

// this loads the css for the app
import '../style/bootstrap.scss';
import '../style/app.scss';

import run from './app.run';
import theme from './app.theme';
import routing from './app.routes';
import router from './utils/router';
import postInterceptor from './postInterceptor';
import autofocus from './directives/autofocus.directive';
import textOverflowTooltip from './directives/textOverflowTooltip.directive';
import showErrors from './directives/showErrors.directive';
import mdPopover from './directives/mdPopover.directive';
import mdSticky from './directives/mdSticky.directive';
import ngImageGallery from './directives/ngImageGallery.directive';
import trustedHtml from './filters/html.filter';

import about from './views/about';
import home from './views/home';
import containerPage from './components/container-page';
import notFound from './views/not-found';
import contact from './views/contact';
import login from './views/login';
import templates from './views/templates';
import project from './views/project';
import createProject from './views/create-project';
import expeditions from './views/expeditions';
import validation from './views/validation';
import query from './views/query';
import dashboard from './views/dashboard';
import record from './views/record';
import photoUpload from './views/photo-upload';
import plateViewer from './views/plate-viewer';

import projectService from './services/project.service';
import userService from './services/user.service';

import app from './app.component';
import auth from './components/auth';
import header from './components/header';
import navigation from './components/navigation';
import mdFileUpload from './components/md-file-upload';
// import lookup from './components/lookup';
import users from './components/users';
import projectSelectorDialog from './components/project-selector-dialog';

import catcher from './utils/exceptions';
import Toaster from './utils/toaster';
import projectViewHook from './projectView.hook';
import fimsMdDialog from './utils/fimsMdDialog';

const dependencies = [
  uirouter,
  router,
  postInterceptor,
  autofocus,
  textOverflowTooltip,
  showErrors,
  mdPopover,
  mdSticky,
  ngImageGallery,
  trustedHtml,
  bootstrap,
  ngMaterial,
  ngAnimate,
  projectService,
  userService,
  containerPage,
  header,
  navigation,
  mdFileUpload,
  about,
  home,
  contact,
  notFound,
  login,
  query,
  dashboard,
  record,
  photoUpload,
  plateViewer,
  auth,
  templates,
  expeditions,
  validation,
  project,
  createProject,
  users,
  projectSelectorDialog,
  // lookup,
];

// attach global objects for easy access throughout app
angular.catcher = catcher;

export default angular
  .module('biscicolApp', dependencies)
  .component('app', app)
  .run(
    /* ngInject */ $mdToast => {
      angular.toaster = Toaster($mdToast);
    },
  )
  .run(routing)
  .run(run)
  .run(projectViewHook)
  .config(fimsMdDialog)
  .config(theme);
