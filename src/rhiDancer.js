var RhiDancer = function(top, left, timeBetweenSteps) {
  this.node = $('<img class="dancer" src="http://i.imgur.com/0AzNemH.png">')
  Dancer.call(this, top, left, timeBetweenSteps);
};

RhiDancer.prototype = Object.create(Dancer.prototype);
RhiDancer.prototype.constructor = RhiDancer;

RhiDancer.prototype.step = function() {
  PeteDancer.prototype.step.call(this);

  // Dancer.prototype.step.call(this);
  // //this.$node.toggle();
  // this.$node.animate({maxWidth: '200px'}, 'slow');
  // this.$node.animate({maxWidth: '80px'}, 'slow');
};

RhiDancer.prototype.lineUp = function() {
  this.setPosition($('body').height() - 200);
};
