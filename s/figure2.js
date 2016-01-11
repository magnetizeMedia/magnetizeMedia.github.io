var rsr = new ScaleRaphael("figure2", 800, 800);

function resizePaper(){
  var win = $(this);
  rsr.changeSize(win.width(), win.height(), true, false);
}
resizePaper();
$(window).resize(resizePaper);

var content = [];

var Layer_1 = rsr.set();
Layer_1.attr({
  'id': 'Layer_1',
  'name': 'Layer_1'
});
var Layer_3 = rsr.set();
var path_d = rsr.path("M356.847,273.818c0,0,51.223-12.252,86.307,0c25.18,48.763,26.846,113.096,0.356,168.159 c-27.176,10.937-86.663,0.085-86.663,0.085S311.36,361.056,356.847,273.818z").attr({
  fill: '#F1F2F2',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_d');
var text_e = rsr.text(0, 0, 'ReSCI\nOrganizational\nDiagnosis').attr({
  parent: 'Layer_1',
  "font-family": 'Helvetica',
  "font-weight": 'Regular',
  "font-size": '15',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 400 357.248").data('id', 'text_e');
var circle_g = rsr.circle(400, 262, 185).attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-linecap": 'round',
  "stroke-miterlimit": '10',
  parent: 'Layer_1',
  'stroke-opacity': '1'
}).data('id', 'circle_g');
var circle_h = rsr.circle(521, 358, 185).attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-linecap": 'round',
  "stroke-miterlimit": '10',
  parent: 'Layer_1',
  'stroke-opacity': '1'
}).data('id', 'circle_h');
var rect_i = rsr.rect(332.395, 66.794, 135.21, 42).attr({
  x: '332.395',
  y: '66.794',
  fill: '#FFFFFF',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'rect_i');
var circle_j = rsr.circle(278, 358, 185).attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-linecap": 'round',
  "stroke-miterlimit": '10',
  parent: 'Layer_1',
  'stroke-opacity': '1'
}).data('id', 'circle_j');
var circle_k = rsr.circle(400, 453, 185).attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-linecap": 'round',
  "stroke-miterlimit": '10',
  parent: 'Layer_1',
  'stroke-opacity': '1'
}).data('id', 'circle_k');

//Systems
var systems = rsr.text(0, 0, 'Systems').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '23',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 400 85").data({
  'id': 'systems',
  'content_data':  '<b>Systems</b><br>We evaluate the interactions among the components of organizational systems and interpret the interdependencies among the various organizational systems and the impact of environmental factors upon those systems.'
});
content.push(systems);

var group_a = rsr.set();
var rect_m = rsr.rect(332.395, 608.248, 135.21, 42).attr({
  x: '332.395',
  y: '608.248',
  fill: '#FFFFFF',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'rect_m');

//Solutions
var solutions = rsr.text(0, 0, 'Solutions').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '23',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 400 630").data({
  'id': 'solutions',
  'content_data':  '<b>Solutions</b><br>We research relevant literature, observe the work environment, and conduct practical field trials in order to identify potential treatments and recommendations.'
});
content.push(solutions);

group_a.attr({
  'parent': 'Layer_1',
  'name': 'group_a'
});
var group_b = rsr.set();
var rect_o = rsr.rect(638.895, 336.248, 135.21, 42).attr({
  x: '638.895',
  y: '336.248',
  fill: '#FFFFFF',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'rect_o');

//Standards
var standards = rsr.text(0, 0, 'Standards').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '23',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1',
  fill: '#000000'
}).transform("m1 0 0 1 700 357.248").data({
  'id': 'standards',
  'content_data':  '<b>Standards</b><br>We sort observed variations of organizational behavior into random versus systematic categories as a step toward developing standards to indicate the linkage to causes.'
});
content.push(standards);

var group_c = rsr.set();
var rect_q = rsr.rect(25.895, 337.248, 135.21, 42).attr({
  x: '25.895',
  y: '337.248',
  fill: '#FFFFFF',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'rect_q');

//Symptoms
var symptoms = rsr.text(0, 0, 'Symptoms').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '23',
  parent: 'Layer_1',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 90 357.248").data({
  'id': 'symptoms',
  'content_data':  '<b>Symptoms</b><br>We catalogue organizational symptoms and develop systematic methods to detect and measure those symptoms.'
});
content.push(symptoms);

for (var i = 0; i < content.length; i++) {

  content[i].mouseover(function(e){
    this.node.style.opacity = 0.6;
    document.getElementById('content_out').innerHTML = this.data('content_data');
  });

  content[i].mouseout(function(e){
    this.node.style.opacity = 1;
  });
}
