import 'angular-mocks/ngMockE2E';

var mockResource = angular
    .module('tagsHttpMock',
        ["ngMockE2E"]);

mockResource.run(mockRun);

mockRun.$inject = ["$httpBackend"];
function mockRun($httpBackend: ng.IHttpBackendService) : void {

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

}

function  replaceUrl(url){

    return new RegExp(
        "^" +
        url.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&") + /* escape special chars */
        "(?:\\?.*)?$");
}