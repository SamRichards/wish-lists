app.service('RoutingService', function(){
    var path, previousPage;

    return{
        setPath : function(newPath){
            path = newPath;
        },
        getPath : function(){
            return path;
        },
        setPrevious : function(newPrevious) {
            previousPage = newPrevious;
        }, 
        getPrevious : function() {
            return previousPage;
        }
    }
});
