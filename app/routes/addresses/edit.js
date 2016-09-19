import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.find('address', params.address_id);
    },

    setupController: function(controller, model){
        controller.set('singleAddress', model);
    }

});
