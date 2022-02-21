$(document).ready(function () {
  // var enableMove = false;
  // var draggableOptions = {
  //   start: function (event, ui) {
  //     //get all selected...
  //     selectedObjs = $(".draggable");
  //   },
  //   drag: function (event, ui) {
  //     var currentLoc = $(this).position();
  //     var orig = ui.originalPosition;

  //     var offsetLeft = currentLoc.left - orig.left;
  //     var offsetTop = currentLoc.top - orig.top;

  //     moveSelected(offsetLeft, offsetTop);
  //   },
  // };
  // function moveSelected(ol, ot) {
  //   console.log(selectedObjs.length);
  //   selectedObjs.each(function () {
  //     $this = $(this);
  //     var pos = $this.position();

  //     var l = $this.context.clientLeft;
  //     var t = $this.context.clientTop;

  //     $this.css("left", l + ol);
  //     $this.css("top", t + ot);
  //   });
  // }
  // $(".draggable").draggable(draggableOptions);
  // $(".draggable").on("click", () => {
  //   console.log("clickkk");
  //   //$(this).css("z-index", "101");
  // });

  $(".draggable")
    .on("mousedown", function (e) {
      console.log("mousedown!");
      enableMove = true;
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      // call a function whenever the cursor moves:
      $(this)
        .parent()
        .on("mousemove", function (e) {
          if (!enableMove) return;
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          $(this).css("top", $(this).offset().top - pos2 + "px");
          $(this).css("left", $(this).offset().left - pos1 + "px");
          console.log(`pos2: ${pos2}, pos1: ${pos1} | `);
        });
    })
    .on("mouseup", function () {
      console.log("ha ha ha! I'm free now.");
      enableMove = false;
      //document.onmouseup = null;
    });

  $("#start-btn").on("click", () => {
    $("#start-menu").toggle();
  });
  console.log("here");
});
