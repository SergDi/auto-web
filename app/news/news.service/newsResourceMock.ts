import 'angular-mocks/ngMockE2E';

    var mockResource = angular
        .module('newsResourceMock',
            ["ngMockE2E"]);

    mockResource.run(mockRun);

    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var items: app.INews[] = [];
        var item: app.INews;

        var items = getItems();

        var newsUrl = "/api/news";

        $httpBackend.whenGET(replaceUrl(newsUrl)).respond(function(method, url, data, headers, params) {

            if(params)
                for(var i in params){
                    items = getItems();
                    items = items.filter(f =>
                    {
                        if(angular.isArray(f[i]))
                            return f[i].some(c => {return c ==  params[i]})
                        else
                            f[i] == params[i];
                    });
                }

            return [200, items, {}];
        });

        var editingRegex = new RegExp(newsUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {

            var item = { "id": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parseInt(parameters[length - 1]);

            if (id > 0) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == id) {
                        item = items[i];
                        break;
                    }
                }
            }
            return [200, item, {}];
        });

        $httpBackend.whenPOST(newsUrl).respond(function(method, url, data:string, headers){

            var item = angular.fromJson(data);
            items.push(item);

            return [200, {}, {}];
        });

        $httpBackend.whenPUT(newsUrl).respond(function(method, url, data:string, headers){

            var item = angular.fromJson(data);
            items = items.filter(f => {return f.id != item.id});
            items.push(item);

            return [200, {}, {}];
        });

        $httpBackend.whenDELETE(editingRegex).respond(function(method, url, data:string, headers, params){

            var parameters = url.split('/');
            var length = parameters.length;
            var id = parseInt(parameters[length - 1]);

            items = items.filter(f => {return f.id != id});

            return [200, {}, {}];
        });


        $httpBackend.whenGET(replaceUrl('/api/tags')).respond(function(method, url, data, headers, params) {

            var result = [];

            var tags = ['tag1','tag2','tag3','tag4','sample'];

            for(var i in params){

                var query = params[i];

                for (var i in tags) {
                    if (tags[i].match(query)) {
                        result.push(tags[i]);
                    }
                }
            }

            return [200, result, {}];
        });


        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();

    }

function  replaceUrl(url){

    return new RegExp(
        "^" +
        url.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&") + /* escape special chars */
        "(?:\\?.*)?$");
}


function getItems(): app.INews[]{

    return[ {
        id:1,
        title:'Post Title',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?',
        createDate:'01.01.2016',
        location:'010101',
        tags:['tag1','tag2','tag3'],
        opportunityСomment:true,
        hot:true,
        approve:false,
    },{
        id:2,
        title:'Post Title',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?',
        createDate:'01.01.2016',
        location:'010101',
        tags:['tag4','tag2','tag3'],
        opportunityСomment:true,
        hot:true,
        approve:false,
    },{
        id:3,
        title:'title',
        description:'description',
        body:'body',
        createDate:'010101',
        location:'010101',
        tags:['tag2','tag3','tag4'],
        opportunityСomment:true,
        hot:true,
        approve:false,
    }];

}

