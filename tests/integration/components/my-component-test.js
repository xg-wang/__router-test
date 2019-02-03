import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{my-component}}`);

    assert.equal(this.element.textContent.trim(), '/my-route');
  });

  test('it transitions', async function(assert) {
    await render(hbs`{{my-component}}`);
    await click('button.trigger');
    assert.equal(this.element.textContent.trim(), '/my-route\nmy-route');
  });
});
