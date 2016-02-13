export default class NewsListController {

    static $inject = ['model', 'newsService',];

    constructor(private model:app.INews[], private newsService:app.INewsResource) {

    }
}