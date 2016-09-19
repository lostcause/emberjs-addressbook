import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

    session: Ember.inject.service('session'),

    model(){
        return this.store.findAll('address');
    },

    actions: {

        createAddress: function(singleAddress){
            var _this = this;
            this.store.createRecord('address', singleAddress).save().then(function(){
                _this.transitionTo('addresses');
            });            
        },

        updateAddress: function(singleAddress){
            console.log('update ' + singleAddress);
            var _this = this;
            singleAddress.save().then(function(){
                _this.transitionTo('addresses');
            });
        },

        deleteAddress: function(id){
            if(confirm('Are you sure you want to delete?'))
            {
                var _this = this;
                this.store.find('address', id).then(function(singleAddress){
                    singleAddress.destroyRecord();
                    _this.transitionTo('addresses');
                });                
            }
        }
    }

});