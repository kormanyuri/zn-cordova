/**
 * Created by korman on 25.11.16.
 */

define(['backbone', 'model/CouponModel'], function(Backbone, CouponModel){
    //console.log(requirejs.s.contexts._.config.urlRoot );
    var urlRoot = requirejs.s.contexts._.config.urlRoot;

    return Backbone.Collection.extend({
        url: function(){
            return urlRoot + 'en/pass/api/user-coupon/received/list?apikey=' + window.localStorage.getItem('token')
        },
        model: CouponModel,
        sync: function(method, collection, options){
            console.log(options);
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        }
    });
});