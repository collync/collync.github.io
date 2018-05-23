var margin = {top: 20, right: 150, bottom: 60, left: 100},
    width = 1000 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var parseDate = d3.timeParse('%Y');

var x = d3.scaleTime()
    .range([0, width]);

var y = d3.scaleLinear()
    .range([height, 0]);

var color = d3.scaleOrdinal();

var xAxis = d3.axisBottom()
    .scale(x);

var yAxis = d3.axisLeft()
    .scale(y)

var area = d3.area()
    .x(function(d) { return x(d.data.date); })
    .y0(function(d) { return y(d[0]); })
    .y1(function(d) { return y(d[1]); });

var stack = d3.stack()

var svg = d3.select('#line').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1,
      x = text.attr("x"),
      y = text.attr("y"),
      dy = 0, //parseFloat(text.attr("dy")),
      tspan = text.text(null)
        .append("tspan")
        .attr("x",x)
        .attr("y",y)
        .attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength()>width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word); }}})}

d3.csv('fema_nfip_paid.csv', function(error, data) {
  color
    .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
    .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
  var keys = data.columns.filter(function(key) { return key !== 'date'; });
  data.forEach(function(d) {
    d.date = parseDate(d.date);});

  var maxDateVal = d3.max(data, function(d){
    var vals = d3.keys(d).map(function(key){ return key !== 'date' ? d[key] : 0 });
    return d3.sum(vals);
  });

  // Set domains for axes
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, maxDateVal])

  stack.keys(keys);

  stack.order(d3.stackOrderNone);
  stack.offset(d3.stackOffsetNone);


  var browser = svg.selectAll('.browser')
      .data(stack(data))
    .enter().append('g')
      .attr('class', function(d){ return 'browser ' + d.key; })
      .attr('fill-opacity', 0.5);

  var browserPath = browser.append('path')
      .attr('class', 'area')
      .attr('d', area)
      .attr('data-legend', function(d) {return d.key})
      .style('fill', function(d) { return color(d.key); });

  svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

  svg.append('g')
      .call(yAxis);

  svg.append('text')
    .attr("transform","translate("+(width/2)+" ,"+(height+margin.top+15)+")")
    .style("text-anchor", "middle")
    .text('Year');

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 10)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Total Closed Insurance Claims ($)");

  var legend = svg.append("g")
    .attr("class","legend")
    .attr("transform","translate("+(width+20)+" ,"+(2*margin.top)+")")

      legend.append("circle")
        .attr("cy", 0)
        .attr("r",10)
        .attr('fill-opacity', 0.5)
        .style("fill","#ffba49")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#999","#999","#999","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });
      legend.append("text")
        .attr("x", 15)
        .attr("y", 5)
        .text("Connecticut")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#999","#999","#999","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });

      legend.append("circle")
        .attr("cy", 25)
        .attr("r",10)
        .attr('fill-opacity', 0.5)
        .style("fill","#072eff")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#072eff","#999","#999","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });
      legend.append("text")
        .attr("x", 15)
        .attr("y", 30)
        .text("Maine")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#072eff","#999","#999","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });

      legend.append("circle")
        .attr("cy", 50)
        .attr("r",10)
        .attr('fill-opacity', 0.5)
        .style("fill","#197278")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#197278","#999","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });
      legend.append("text")
        .attr("x", 15)
        .attr("y", 55)
        .text("Massachusetts")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#197278","#999","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });

      legend.append("circle")
        .attr("cy", 75)
        .attr("r",10)
        .attr('fill-opacity', 0.5)
        .style("fill","#91ffe6")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#999","#91ffe6","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });
      legend.append("text")
        .attr("x", 15)
        .attr("y", 80)
        .text("New Hampshire")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#999","#91ffe6","#999","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });

      legend.append("circle")
        .attr("cy", 100)
        .attr("r",10)
        .attr('fill-opacity', 0.5)
        .style("fill","#f46036")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#999","#999","#f46036","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });
      legend.append("text")
        .attr("x", 15)
        .attr("y", 105)
        .text("Rhode Island")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#999","#999","#f46036","#999"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });

      legend.append("circle")
        .attr("cy", 125)
        .attr("r",10)
        .attr('fill-opacity', 0.5)
        .style("fill","#a63446")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#999","#999","#999","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });
      legend.append("text")
        .attr("x", 15)
        .attr("y", 130)
        .text("Vermont")
        .on("mouseover",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#999","#999","#999","#999","#999","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        })
        .on("mouseout",function(d){
          color
            .domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }))
            .range(["#ffba49","#072eff","#197278","#91ffe6","#f46036","#a63446"]);
          browserPath.style('fill',function(d) {return color(d.key);});
        });

  var callouts = svg.append("g")
    .attr("class", "callout")

  var calloutTitle = callouts.append("text")
    .text("")
    .attr("x",100)
    .attr("y",200)
    .style("font-weight", "bold");

  var calloutText = callouts.append("text")
    .text("")
    .attr("x",100)
    .attr("y",220)
    .call(wrap,275)

  var flood2006 = callouts.append("circle")
      .attr("cx", 375)
      .attr("cy", 570)
      .attr("r", 50)
      .attr('fill-opacity', 0)
      .style("fill","#000")
      .style("stroke", "#000")
      .on("mouseover",function(d){
        flood2006.attr('fill-opacity',0.25);
        calloutTitle.text("New England Mother’s Day Flood (2006)").call(wrap,275);
        calloutText.text("A low pressure system in New England produced heavy rains, resulting in the overflow of the Merrimack and Charles Rivers, among others. New Hampshire and Massachusetts were worst affected of all the states in the region.").call(wrap,275);
      })
      .on("mouseout",function(d){
        flood2006.attr('fill-opacity',0);
        calloutTitle.text("");
        calloutText.text("");
      });

  var flood2010 = callouts.append("circle")
      .attr("cx", 525)
      .attr("cy", 525)
      .attr("r", 50)
      .attr('fill-opacity', 0)
      .style("fill","#000")
      .style("stroke", "#000")
      .on("mouseover",function(d){
        flood2010.attr('fill-opacity',0.25);
        calloutTitle.text("Rhode Island Flooding (2010)").call(wrap,275);
        calloutText.text("Three days of torrential rains resulted in extreme flooding in Rhode Island. The Pawtuxet River overflowed its banks; many homeowners saw their property severely damaged, transportation networks were disrupted. The towns of Cranston and Warwick were most severely affected.").call(wrap,275);
      })
      .on("mouseout",function(d){
        flood2010.attr('fill-opacity',0);
        calloutTitle.text("");
        calloutText.text("");
      });

  var flood2011 = callouts.append("circle")
      .attr("cx", 560)
      .attr("cy", 400)
      .attr("r", 50)
      .attr('fill-opacity', 0)
      .style("fill","#000")
      .style("stroke", "#000")
      .on("mouseover",function(d){
        flood2011.attr('fill-opacity',0.25);
        calloutTitle.text("Tropical Storm Irene, Vermont (2011)").call(wrap,275);
        calloutText.text("Flooding occurred as a result of a relatively minor tropical storm. However, the state was generally unprepared for the storm event, resulting in millions in damages. A third of the state was affected by power outages. As a result of the damage, many cities and counties adopted flood preparedness plans. This event is demonstrative of the fact that even areas that are further inland can be unprepared for flooding and severe storm events.").call(wrap,275);
      })
      .on("mouseout",function(d){
        flood2011.attr('fill-opacity',0);
        calloutTitle.text("");
        calloutText.text("");
      });

  var flood2012 = callouts.append("circle")
      .attr("cx", 600)
      .attr("cy", 100)
      .attr("r", 50)
      .attr('fill-opacity', 0)
      .style("fill","#000")
      .style("stroke", "#000")
      .on("mouseover",function(d){
        flood2012.attr('fill-opacity',0.25);
        calloutTitle.text("Superstorm Sandy, Connecticut (2012)").call(wrap,275);
        calloutText.text("Though other states were less adversely affected, Connecticut saw severe damage from the storm. Beyond property damages, there were issues with critical water utility infrastructure, as well as power outages.").call(wrap,275);
      })
      .on("mouseout",function(d){
        flood2012.attr('fill-opacity',0);
        calloutTitle.text("");
        calloutText.text("");
      });



});
