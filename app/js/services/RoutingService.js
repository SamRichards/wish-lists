app.service('RoutingService', function(){
    //at the moment this service is storing the path for the navigation bar, but this could evetually store the previous and next website url visits.
    var path;
    return{
        setPath : function(newPath){
            path = newPath;
        },
        getPath : function(){
            return path;
        }
    }
});
