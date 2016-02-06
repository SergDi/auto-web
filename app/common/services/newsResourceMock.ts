import 'angular-mocks/ngMockE2E';

    var mockResource = angular
        .module('newsResourceMock',
            ["ngMockE2E"]);

    mockResource.run(mockRun);

    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var items: app.INews[] = [];
        var item: app.INews;

        item = {
            id:1,
            title:'title',
            description:'description',
            body:'body',
            createDate:'010101',
            location:'010101',
            tags:[],
            opportunityСomment:true,
            hot:true,
            approve:false,
        };
        items.push(item);

        item = {
            id:2,
            title:'title',
            description:'description',
            body:'body',
            createDate:'010101',
            location:'010101',
            tags:[],
            opportunityСomment:true,
            hot:true,
            approve:false,
        };
        items.push(item);

        item = {
            id:3,
            title:'title',
            description:'description',
            body:'body',
            createDate:'010101',
            location:'010101',
            tags:[],
            opportunityСomment:true,
            hot:true,
            approve:false,
        };
        items.push(item);

        var newsUrl = "/api/news";

        $httpBackend.whenGET(newsUrl).respond(items);

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

        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function(method, url, data) {
            return [200, items, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }

