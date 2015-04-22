Stage(function(stage) {

  stage.viewbox(100, 100);

  var toggle = true;
  Stage.anim('rainbow').appendTo(stage).pin('align', 0.5).fps(4).on(
      Stage.Mouse.CLICK, function(point) {
        if (toggle) {
          console.log('play');
          this.play();
        } else {
          console.log('stop');
          this.stop();
        }
        toggle = !toggle;
      });

});