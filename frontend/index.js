import Turbolinks from "turbolinks";

Turbolinks.start();

console.log("hello, world!");

import * as d3 from "d3";

const div = d3.selectAll("div#d3");

d3.selectAll("p").style("color", "blue");
d3.select("body").style("background-color", "black");
d3.selectAll("p").transition().duration(3000).style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

d3.select("body")
  .selectAll("a")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("a")
    .text(function(d) { return "I’m number " + d + "!"; });
