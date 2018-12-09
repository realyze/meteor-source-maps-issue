import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import {foo} from '../imports/source_map_test'
import {bar} from '../imports/nested/source_map_test'

console.log('imported values', foo, bar);

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
