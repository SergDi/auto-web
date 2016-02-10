export default class NewsEditController {

    static $inject = ['newsService', 'model', '$state'];

    constructor(private newsService:app.INewsResource, private model, private $state) {

    }

    public cancel() {

        this.$state.go('news.list');
    }

    public save() {

        var promise = this.model.id ? this.model.$update() : this.model.$save();

        promise.then((response) => {
            this.$state.go('news.list', {}, {reload: true});
        }, (response) => {
            console.log(response); //TODO
        });
    }

    public delete() {

        this.newsService.remove({id: this.model.id}).$promise
            .then((response) => {
                this.$state.go('news.list', {}, {reload: true});
            }, (response) => {
                console.log(response); //TODO
            });
    }

}