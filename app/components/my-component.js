import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  router: service('router'),
  someUrl: computed(function() {
    return this.get('router').urlFor('my-route');
  }),
  actions: {
    async triggerTransition() {
      await this.get('router').transitionTo('my-route');
      this.set('currentURL', this.get('router').currentRouteName);
    }
  }
});
