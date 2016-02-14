import 'ng-tags-input';
import 'ng-tags-input/build/ng-tags-input.css';
import 'ng-tags-input/build/ng-tags-input.bootstrap.min.css';

import './tagsHttpMock'

function routing(tagsInputConfigProvider) {
    tagsInputConfigProvider
        .setDefaults('tagsInput', {
            placeholder: 'New tag',
            minLength: 3,
            addOnEnter: true
        })
        .setDefaults('autoComplete', {
            debounceDelay: 200,
            loadOnDownArrow: true,
            loadOnEmpty: false
        })
}

export class TagsController {

    static $inject = ['$http'];

    constructor(private  $http){

    }

    public loadTags(query) {

        return this.$http.get('/api/tags?query=' + query);
    };
}

var TagsComponent = {
    bindings: {
        model: '='
    },
    controller:TagsController,
    template:`
        <tags-input ng-model="$ctrl.model">
            <auto-complete source="$ctrl.loadTags($query)"></auto-complete>
        </tags-input>`
};

export default angular.module('tags', ['ui.router','tagsHttpMock', 'ngTagsInput'])
    .config(routing)
    .component('tags', TagsComponent)
    .name;