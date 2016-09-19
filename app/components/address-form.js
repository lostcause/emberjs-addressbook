import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        createAddress: function(){
            let name = this.get('name');
            let email = this.get('email');

            //console.log(this.get('addresses'));

            this.sendAction('action', {name, email});
            this.set('name', '');
            this.set('email', '');
        }
    }

});
