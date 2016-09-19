import Ember from 'ember';

export default Ember.Route.extend({

    model: function(){
        return { name: '', email: '' };
    },
    
    setupController: function (controller, model){
        controller.set('singleAddress', model);
    },

    actions: {
        
    }    
});
