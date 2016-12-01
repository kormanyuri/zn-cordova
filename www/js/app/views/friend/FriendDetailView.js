/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/friend/detail'
], function(Marionette, template){

    return Marionette.View.extend({
        el:'#content',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render friend detail');
        }
    });
});