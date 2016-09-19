import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    host: ENV['apiURL'],
    authorizer: 'authorizer:token',
    serverTokenEndpoint: ENV['apiURL']
});