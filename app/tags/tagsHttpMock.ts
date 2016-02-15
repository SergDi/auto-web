import 'angular-mocks/ngMockE2E';

var mockResource = angular
    .module('tagsHttpMock',
        ["ngMockE2E"]);

mockResource.run(mockRun);

mockRun.$inject = ["$httpBackend"];
function mockRun($httpBackend: ng.IHttpBackendService) : void {

    $httpBackend.whenGET(replaceUrl('/api/tags')).respond(function(method, url, data, headers, params) {

        var result = [];

        var tags = [{text:'tag1'},{text:'tag2'},{text:'tag3'},{text:'tag4'},{text:'sample'}];

        for(var i in params){

            var query = params[i];

            for (var i in tags) {
                if (tags[i].text.match(query)) {
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