export default class NewsEditController {

    static $inject = ['model', '$state'];

    constructor(private model, private $state) {

    }

    public cancel() {
        this.$state.go('news.list');
    }

    public save() {
        var promise =  this.model.id ? this.model.$update() : this.model.$save();

        promise.then((response) => {
            this.$state.go('news.list', {}, { reload: true });
        }, (response) => {
            console.log(response); //TODO
        });
    }

}