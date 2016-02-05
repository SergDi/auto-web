routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
        $stateProvider
            .state('news', {
                    url: '/',
                    template: require('./news.html'),
                    controller: 'newsController',
                    controllerAs: 'vm'

            })
             .state('news.detail', {
                    url: '/news/:id',
                    template: require('./news-detail/news-detail.html'),
                    controller: 'newsDetailController',
                    controllerAs: 'vm'
            });
}