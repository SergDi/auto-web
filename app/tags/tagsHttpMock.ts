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

        if(isEmpty(params));
            result = tags;

        return [200, result, {}];
    });

}

function  replaceUrl(url){

    return new RegExp(
        "^" +
        url.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&") + /* escape special chars */
        "(?:\\?.*)?$");
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}