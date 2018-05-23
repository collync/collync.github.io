  var width = 720,
  height = 700;

  var albersProjection = d3.geoAlbers()
    .scale( 190000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [width/2,height/2] );

  var path = d3.geoPath()
      .projection(albersProjection);

  var svg = d3.select("#map").append("svg")
      .attr("width", width)
      .attr("height", height);

  var svg2 = d3.select("#chart").append("svg")
      .attr("width", width)
      .attr("height", height);

	var x = d3.scaleLinear()
      .domain([0, 88000000, 127000000, 210000000, 800000000])
      .rangeRound([420, 480]);

  var color = d3.scaleThreshold()
      .domain([0, 88000000, 127000000, 210000000, 800000000])
      .range(d3.schemeBlues[5]);

  var g = svg.append("g")
      .attr("class", "key")
      .attr("transform", "translate(0,40)");

  var tooltip = d3.select("body")
    .append("div")
      .style("position", "absolute")
      .style("font-family", "'Open Sans', sans-serif")
      .style("font-size", "12px")
      .style("z-index", "10")
      .style("background-color", "white")
      .style("padding", "5px")
      .style("opacity", "0.7")
      .style("visibility", "hidden");

  g.selectAll("rect")
    .data(color.range().map(function(d) {
        d = color.invertExtent(d);
        if (d[0] == null) d[0] = x.domain()[0];
        if (d[1] == null) d[1] = x.domain()[1];
        return d;
      }))
    .enter().append("rect")
      .attr("height", 8)
      .attr("x", function(d) { return x(d[0]); })
      .attr("width", function(d) { return x(d[1]) - x(d[0]); })
      .attr("fill", function(d) { return color(d[0]); });

    g.append("text")
        .attr("class", "caption")
        .attr("x", x.range()[0] )
        .attr("y", -6)
        .attr("fill", "#000")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Boston: Total Property Values by Block Group (in 000,000s)");

    g.call(d3.axisBottom(x)
        .tickSize(15)
        .tickFormat(function(x, i) { return i ? x/1000000 : x ; 0})
        .tickValues(color.domain()))
      .select(".domain")
        .remove();

  d3.queue()
    .defer(d3.json, "../boston_BG.json") // Load US Counties
    .defer(d3.csv, "../boston_pv_totals.csv") // Load Unemployment csV
    .await(ready); // Run 'ready' when JSONs are loaded

function ready(error, neigh, calls) {
  if (error) throw error;

  var calls_pct = {}; // Create empty object for holding dataset
    calls.forEach(function(d) {
      console.log(d.sum_pv)
      calls_pct[d.id] = +(d.sum_pv); // Create property for each ID, give it value from rate
   });

  // console.log(calls_pct);

    svg.append("g")
      .attr("class", "neighborhoods")
      .selectAll("path")
        .data(topojson.feature(neigh, neigh.objects.boston_BG).features) // Bind TopoJSON data elements
      .enter().append("path")
        .attr("d", path)
        .style("fill", function(d) {
          return color(calls_pct[d.properties.GEOID]); // get rate value for property matching data ID
          // pass rate value to color function, return color based on domain and range

// console.log(neigh);
        })
        .style("stroke", "white")
        .on("mouseover", function(d){
          return tooltip.style("visibility", "visible").text(d.properties.GEOID + ": " + "ID" + calls_pct[d.properties.GEOID].toFixed(2));
        })
        .on("mousemove", function(d){
          return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px").text(d.properties.GEOID + ": " + "$" + calls_pct[d.properties.GEOID].toFixed(2));
        })
        .on("mouseout", function(d){
          return tooltip.style("visibility", "hidden");
        });


  }
