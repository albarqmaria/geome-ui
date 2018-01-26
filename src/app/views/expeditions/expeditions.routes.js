function getStates() {
  return [
    {
      state: 'expeditions',
      config: {
        abstract: true,
        template: '<div ui-view class="admin"></div>',
        resolve: {
          expeditions: /*ngInject*/ ($state, ExpeditionService, ProjectService) => {
            return ExpeditionService.userExpeditions(ProjectService.currentProject().projectId, true)
              .then(({ data }) => data)
              .catch(() => $state.go('home'))},
        },
        params: {
          admin: {
            type: "bool",
            value: false,
          },
        },
        projectRequired: true,
        loginRequired: true,
      },
    },
    {
      state: 'expeditions.list',
      config: {
        url: '/expeditions',
        component: 'fimsExpeditionsList',
      },
    },
    {
      state: 'expeditions.detail',
      config: {
        url: '/expeditions/:id',
        component: 'fimsExpedition',
        redirectTo: "expeditions.detail.settings",
        resolve: {
          expedition: ($state, expeditions, $transition$) => {
            const expedition = expeditions.find(e => e.expeditionId === $transition$.params().id);

            return (expedition) ? expedition : $state.go('expeditions.list');
          },
          backState: () => "expeditions.list",
        },
        params: {
          id: {
            type: "int",
          },
        },
      },
    },
    {
      state: 'expeditions.detail.settings',
      config: {
        url: '/settings',
        views: {
          "details": {
            component: 'fimsExpeditionSettings',
          },
        },
      },
    },
    {
      state: 'expeditions.detail.resources',
      config: {
        url: '/resources',
        views: {
          "details": {
            component: 'fimsExpeditionResources',
          },
        },
      },
    },
    {
      state: 'expeditions.detail.members',
      config: {
        url: '/members',
        views: {
          "details": {
            template: require('../../components/expeditions/expedition-members.html'),
            // controller: "ExpeditionMembersController as vm"
          },
        },
      },
    },
  ];
}


export default (routerHelper) => {
  'ngInject';

  routerHelper.configureStates(getStates());
  routerHelper.redirect('/secure/expeditions.jsp', 'expeditions');
  routerHelper.redirect('/secure/expeditions', 'expeditions');
};