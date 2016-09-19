import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service('session'),

    actions: {
        save(user){
            this.set('errorMessage', '');
            let newUser = user;
            newUser.save()           
                .catch(() => {
                    this.set('errorMessage', 'User already exists');
                })
                .then(()=>{  
                    if(this.get('errorMessage') === '')
                    {
                        this.set('errorMessage', 'You can login now with your user and password.');
                    }
                });
        }
    }

});
