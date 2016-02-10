export default function NewsService( $resource:angular.resource.IResourceService){

        return $resource('/api/news/:id', { id: '@_id' }, {
                query:  { method: "GET", isArray: true },
                get:    { method: "GET" },
                remove: { method: "DELETE" },
        });
    }
