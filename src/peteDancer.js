var PeteDancer = function(top, left, timeBetweenSteps) {
  this.node = $('<img class="dancer" src="http://i.imgur.com/4qGrKhL.png">');
  Dancer.call(this, top, left, timeBetweenSteps);
};

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
PeteDancer.prototype = Object.create(Dancer.prototype);
PeteDancer.prototype.constructor = PeteDancer;

PeteDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({maxWidth: '150px'}, 'slow');
  this.$node.animate({maxWidth: '80px'}, 'slow');
//  this.$node.toggle();
};

PeteDancer.prototype.lineUp = function() {
  this.setPosition(200);
};
