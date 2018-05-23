// var coastData = [3100000000,4700000000,-1500000000]
// var inlandData = [1200000000,1000000000,200000000]
//
// var coastData = [31,47,-15]
// var inlandData = [12,10,2]


var width = 800,
  height = 600;

var svg = d3.select('#CBObarchart').append('svg')
  .attr('width', width)
  .attr('height', height)

svg.append("line")
	.attr("x1", width/8)
	.attr("y1", height/6)
	.attr("x2", width/8)
	.attr("y2", height)
	.style("stroke-width", 2)
	.style("stroke", "black");

svg.append("line")
	.attr("x1", width/8)
	.attr("y1", height*4/6)
	.attr("x2", width*7/8)
	.attr("y2", height*4/6)
	.style("stroke-width", 2)
	.style("stroke", "black");

var premiums = svg.append("rect")
  .attr("x",width*1.5/8)
  .attr("y",244)
  .attr("width", 100)
  .attr("height", 155)
  .style("fill","#ffba49");

var expectedCosts = svg.append("rect")
  .attr("x",width*3.5/8)
  .attr("y",164)
  .attr("width", 100)
  .attr("height", 235)
  .style("fill","#ffba49");

var shortfall = svg.append("rect")
  .attr("x",width*5.5/8)
  .attr("y",401)
  .attr("width", 100)
  .attr("height", 75)
  .style("fill","#ffba49");

var toggle = svg.append("g")
  .attr('transform','translate(600,50)')

  toggle.append("text")
  .text('Coastal Counties')
  .attr("x",50)
  .attr("y",30)

  toggle.append("text")
  .text('Inland Counties')
  .attr("x",50)
  .attr("y",75)

var coastToggle = toggle.append("circle")
  .attr("r",10)
  .attr("cx",25)
  .attr("cy",25)
  .style("fill","#ffba49")
  .style("stroke","black")
  .style("stroke-width",5)
  .on("click", function(d) {
    coastToggle.style("fill","#ffba49");
    inlandToggle.style("fill", "white");
    premiums
      .attr("y",244)
      .attr("height", 155)
      .style("fill","#ffba49");

    expectedCosts
      .attr("y",164)
      .attr("height", 235)
      .style("fill","#ffba49");

    shortfall
      .attr("y",401)
      .attr("height", 75)
      .style("fill","#ffba49");
  });

var inlandToggle = toggle.append("circle")
  .attr("r",10)
  .attr("cx",25)
  .attr("cy",70)
  .style("fill","white")
  .style("stroke","black")
  .style("stroke-width",5)
  .on("click", function(d) {
    coastToggle.style("fill","white");
    inlandToggle.style("fill", "#a63446");
    premiums
      .attr("y",339)
      .attr("height", 60)
      .style("fill","#a63446");

    expectedCosts
      .attr("y",349)
      .attr("height", 50)
      .style("fill","#a63446");

    shortfall
      .attr("y",389)
      .attr("height", 10)
      .style("fill","#a63446");
  });

svg.append("text")
  .text("Premiums")
  .attr("x",165)
  .attr("y",420)

svg.append("text")
  .text("Expected Costs")
  .attr("x",350)
  .attr("y",420)

svg.append("text")
  .text("Shortfall")
  .attr("x",570)
  .attr("y",420)

svg.append("text")
  .text("$4 million")
  .attr("x",20)
  .attr("y",205)

svg.append("text")
  .text("$2 million")
  .attr("x",20)
  .attr("y",305)

svg.append("text")
  .text("-$2 million")
  .attr("x",20)
  .attr("y",510)
