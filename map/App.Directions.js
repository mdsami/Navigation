/**
 *APP  Credit Zmap By  mozartdiniz
 *URL:https://github.com/mozartdiniz/zMaps
 *  MD.Sami<mdsami.diu@gmail.com>
 * Date: 27/01/15
 * Time: 2:01 PM
 */

var App = App || {};

App.Directions = {

    lastRoutes: null,

    // Calls Google's routing service
    service: function (origin, destiny, travelMode, callback) {

        var directionsService = new google.maps.DirectionsService();

        var origem = new google.maps.LatLng(origin.lat, origin.lon);
        var destino = new google.maps.LatLng(destiny.lat, destiny.lon);

        var conf = {
            origin: origem,
            destination: destino,
            travelMode: travelMode,
            provideRouteAlternatives: true
        };

        directionsService.route (conf, callback);

    }

};