var rsr = new ScaleRaphael("figure1", 800, 800);

function resizePaper(){
  var win = $(this);
  rsr.changeSize(win.width(), win.height(), true, false);
}
resizePaper();
$(window).resize(resizePaper);

var content = [];

var group_a = rsr.set();

//Flexibility
var flexibility = rsr.rect(82.264, 387.145, 109, 44.193).attr({
  x: '82.264',
  y: '387.145',
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data({
  'id': 'flexibility',
  'content_data':  '<b>Flexibility</b><br>The degree to which an individual is able to perform other team members’ tasks, often associated with the elements of the organizational social system.'
});
content.push(flexibility);

var text_ay = rsr.text(0, 0, 'Flexibility').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '20',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 137 411").data('id', 'text_ay');
group_a.attr({
  'parent': 'Layer_6',
  'name': 'group_a'
});
var group_b = rsr.set();

//Control
var control = rsr.rect(608.736, 387.145, 109, 44.193).attr({
  x: '608.736',
  y: '387.145',
    fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data({
  'id': 'control',
  'content_data':  '<b>Control</b><br>The degree to which an individual is unable to perform, often associated with the elements of the technical subsystem.'
});
content.push(control);

var text_ba = rsr.text(0, 0, 'Control').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '20',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 664 411").data('id', 'text_ba');
group_b.attr({
  'parent': 'Layer_6',
  'name': 'group_b'
});
var group_c = rsr.set();

//Sociotechnical System
var sociotechnical_system = rsr.rect(297.768, 244.248, 204.465, 65.872).attr({
  x: '297.768',
  y: '244.248',
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data({
  'id': 'sociotechnical_system',
  'content_data':  '<b>Sociotechnical System</b><br>Sociotechnical systems interrelate socio- (of people and society) and technical (of machines and technology) elements to accomplish system objectives.'
});
content.push(sociotechnical_system);

var text_bc = rsr.text(0, 0, 'Sociotechnical\nSystem').attr({
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  "font-family": 'Helvetica',
  "font-size": '14',
  'fill': '#000000'
}).transform("m1 0 0 1 400 278").data('id', 'text_bc');
group_c.attr({
  'parent': 'Layer_6',
  'name': 'group_c'
});
var group_d = rsr.set();

//Situation Actor Process
var sap = rsr.ellipse(399.998, 149.497, 75.232, 29.251).attr({
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data({
  'id': 'sap',
  'content_data':  '<b>Situation Actor Process</b><br>A ‘situation’ to be managed, an ‘actor’ or a group of actors to deal with the situation, and a ‘process’ or a set of processes that respond to the situation and recreate it.'
});
content.push(sap);

var text_bd = rsr.text(0, 0, 'SAP').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '16',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 400 147").data('id', 'text_bd');

//Learning Action Performance
var lap = rsr.ellipse(400, 650.504, 75.232, 29.25).attr({
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data({
  'id': 'lap',
  'content_data':  '<b>Learning Action Performance</b><br>Learning is related to the lessons of previous cases or linked directly with the case under consideration.'
});
content.push(lap);

var text_bf = rsr.text(0, 0, 'LAP').attr({
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '15',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 400 652").data('id', 'text_bf');


//Social Subsystem
var social_subsystem = rsr.ellipse(309.396, 410.303, 75.232, 29.25);
social_subsystem.attr({
  fill: '#f1f1f1',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  'stroke-opacity': '1'
}).data({
  'id': 'social-subsystem',
  'content_data':  '<b>Social Subsystem</b><br>Comprised of structure and people: consideration of the attributes of actors, including attitudes, skills, values and relationships.'
});
content.push(social_subsystem);

//Technical Subsystem
var technical_subsystem = rsr.ellipse(490.611, 410.303, 75.233, 29.25);
technical_subsystem.attr({
  fill: '#f1f1f1',
  stroke: '#265C88',
  'stroke-width': '4',
  'stroke-miterlimit': '10',
  'stroke-opacity': '1'
}).data({
    'id': 'technical_subsystem',
    'content_data':  '<b>Technical Subsystem</b><br>Comprised of technology and tasks: consideration of the attributes of tools, work techniques, procedures, knowledge, devices and relationships.'
});
content.push(technical_subsystem);

var text_bh = rsr.text(0, 0, 'Social\nSubsystem').attr({
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000',
  "font-family": 'Helvetica',
  "font-size": '14'
}).transform("m1 0 0 1 309 410").data('id', 'text_bh');
var text_bi = rsr.text(0, 0, 'Technical\nSubsystem').attr({
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  "font-family": 'Helvetica',
  "font-size": '14',
  'fill': '#000000'
}).transform("m1 0 0 1 493 410").data('id', 'text_bi');

//Organizational Concern
var organizational_concern = rsr.ellipse(400.002, 524.881, 75.232, 29.25).attr({
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data({
    'id': 'organizational_concern',
    'content_data':  '<b>Organizational Concern</b><br>We would like to hear from you.'
});
content.push(organizational_concern);

var text_bl = rsr.text(0, 0, 'Organizational\nConcern').attr({
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1',
  "font-family": 'Helvetica',
  "font-size": '14',
  'fill': '#000000'
}).transform("m1 0 0 1 400 525").data('id', 'text_bl');

var group_h = rsr.set();
group_h.attr({
  'parent': 'Layer_6',
  'name': 'group_h'
});
var group_i = rsr.set();
group_i.attr({
  'parent': 'Layer_6',
  'name': 'group_i'
});
var group_j = rsr.set();
var path_bn = rsr.path("M 203.354,416.223 191.264,409.242 203.354,402.262 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bn');
group_j.attr({
  'parent': 'Layer_6',
  'name': 'group_j'
});
var group_k = rsr.set();
var path_bo = rsr.path("M 222.074,416.223 234.163,409.242 222.074,402.262 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bo');
group_k.attr({
  'parent': 'Layer_6',
  'name': 'group_k'
});
var group_l = rsr.set();
group_l.attr({
  'parent': 'Layer_6',
  'name': 'group_l'
});
var group_m = rsr.set();
group_m.attr({
  'parent': 'Layer_6',
  'name': 'group_m'
});
var group_n = rsr.set();
var path_bp = rsr.path("M 577.934,416.223 565.845,409.242 577.934,402.262 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bp');
group_n.attr({
  'parent': 'Layer_6',
  'name': 'group_n'
});
var group_o = rsr.set();
var path_bq = rsr.path("M 596.654,416.223 608.744,409.242 596.654,402.262 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bq');
group_o.attr({
  'parent': 'Layer_6',
  'name': 'group_o'
});
var group_p = rsr.set();
group_p.attr({
  'parent': 'Layer_6',
  'name': 'group_p'
});
var group_q = rsr.set();
group_q.attr({
  'parent': 'Layer_6',
  'name': 'group_q'
});
var group_r = rsr.set();
var path_br = rsr.path("M 327.899,366.253 325.77,380.05 338.783,374.998 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_br');
group_r.attr({
  'parent': 'Layer_6',
  'name': 'group_r'
});
var group_s = rsr.set();
group_s.attr({
  'parent': 'Layer_6',
  'name': 'group_s'
});
var group_t = rsr.set();
group_t.attr({
  'parent': 'Layer_6',
  'name': 'group_t'
});
var group_u = rsr.set();
var path_bs = rsr.path("M 467.146,374.998 480.159,380.05 478.029,366.253 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bs');
group_u.attr({
  'parent': 'Layer_6',
  'name': 'group_u'
});
var group_v = rsr.set();
group_v.attr({
  'parent': 'Layer_6',
  'name': 'group_v'
});
var group_w = rsr.set();
group_w.attr({
  'parent': 'Layer_6',
  'name': 'group_w'
});
var group_x = rsr.set();
var path_bt = rsr.path("M 406.982,566.221 400.002,554.131 393.021,566.22 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bt');
group_x.attr({
  'parent': 'Layer_6',
  'name': 'group_x'
});
var group_y = rsr.set();
group_y.attr({
  'parent': 'Layer_6',
  'name': 'group_y'
});
var group_z = rsr.set();
group_z.attr({
  'parent': 'Layer_6',
  'name': 'group_z'
});
var group_aa = rsr.set();
var path_bu = rsr.path("M 361.884,490.683 374.938,495.629 372.696,481.85 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bu');
group_aa.attr({
  'parent': 'Layer_6',
  'name': 'group_aa'
});
var group_ab = rsr.set();
group_ab.attr({
  'parent': 'Layer_6',
  'name': 'group_ab'
});
var group_ac = rsr.set();
group_ac.attr({
  'parent': 'Layer_6',
  'name': 'group_ac'
});
var group_ad = rsr.set();
var path_bv = rsr.path("M 431.424,482.85 429.182,496.629 442.236,491.683 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bv');
group_ad.attr({
  'parent': 'Layer_6',
  'name': 'group_ad'
});
var group_ae = rsr.set();
group_ae.attr({
  'parent': 'Layer_6',
  'name': 'group_ae'
});
var group_af = rsr.set();
group_af.attr({
  'parent': 'Layer_6',
  'name': 'group_af'
});
var group_ag = rsr.set();
var path_bw = rsr.path("M 406.985,190.321 400.005,178.231 393.023,190.321 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bw');
group_ag.attr({
  'parent': 'Layer_6',
  'name': 'group_ag'
});
var group_ah = rsr.set();
group_ah.attr({
  'parent': 'Layer_6',
  'name': 'group_ah'
});
var group_ai = rsr.set();
var path_bx = rsr.path("M290.651,147.666 C142.14,156.696,134.652,306.337,136.037,353.8").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_bx');
group_ai.attr({
  'parent': 'Layer_6',
  'name': 'group_ai'
});
var group_aj = rsr.set();
var path_by = rsr.path("M 287.388,137.883 305,147.238 288.093,157.816 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_by');
group_aj.attr({
  'parent': 'Layer_6',
  'name': 'group_aj'
});
var group_ak = rsr.set();
var path_bz = rsr.path("M 126.03,351.39 136.881,368.123 145.949,350.361 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bz');
group_ak.attr({
  'parent': 'Layer_6',
  'name': 'group_ak'
});
var group_al = rsr.set();
group_al.attr({
  'parent': 'Layer_6',
  'name': 'group_al'
});
var group_am = rsr.set();
var path_ca = rsr.path("M504.963,648.334 c169.975-7.03,170.445-139.468,165.834-183.638").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_ca');
group_am.attr({
  'parent': 'Layer_6',
  'name': 'group_am'
});
var group_an = rsr.set();
var path_cb = rsr.path("M 508.131,658.154 490.612,648.625 507.623,638.216 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_cb');
group_an.attr({
  'parent': 'Layer_6',
  'name': 'group_an'
});
var group_ao = rsr.set();
var path_cc = rsr.path("M 680.957,466.254 668.735,450.495 661.195,468.958 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_cc');
group_ao.attr({
  'parent': 'Layer_6',
  'name': 'group_ao'
});
var group_ap = rsr.set();
group_ap.attr({
  'parent': 'Layer_6',
  'name': 'group_ap'
});
var group_aq = rsr.set();
var path_cd = rsr.path("M137.114,464.846 c5.787,174.975,117.71,186.603,157.991,185.088").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cd');
group_aq.attr({
  'parent': 'Layer_6',
  'name': 'group_aq'
});
var group_ar = rsr.set();
var path_ce = rsr.path("M 127.323,467.999 136.881,450.495 147.263,467.522 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_ce');
group_ar.attr({
  'parent': 'Layer_6',
  'name': 'group_ar'
});
var group_as = rsr.set();
var path_cf = rsr.path("M 293.003,659.983 309.396,648.625 291.363,640.105 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_cf');
group_as.attr({
  'parent': 'Layer_6',
  'name': 'group_as'
});
var group_at = rsr.set();
group_at.attr({
  'parent': 'Layer_6',
  'name': 'group_at'
});
var group_au = rsr.set();
var path_cg = rsr.path("M517.099,147.666 C665.61,156.696,673.098,306.337,671.713,353.8").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M400.003 245.352L400.005 188.278").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M328.77 439.111L368.582 487.849").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M400 621.252L400.002 564.178").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M424.374 310.613L473.867 372.218").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M381.555 310.613L332.062 372.218").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M575.892 409.242L598.697 409.242").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M201.311 409.242L224.116 409.242").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var path_cg = rsr.path("M475.351 440.111L435.537 488.849").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  parent: 'Layer_6',
  'stroke-opacity': '1'
}).data('id', 'path_cg');
group_au.attr({
  'parent': 'Layer_6',
  'name': 'group_au'
});
var group_av = rsr.set();
var path_ch = rsr.path("M 519.657,157.816 502.75,147.238 520.362,137.883 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_ch');
group_av.attr({
  'parent': 'Layer_6',
  'name': 'group_av'
});
var group_aw = rsr.set();
var path_ci = rsr.path("M 661.801,350.361 670.869,368.123 681.719,351.39 z").attr({
  fill: '#265C88',
  parent: 'Layer_6',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_ci');
group_aw.attr({
  'parent': 'Layer_6',
  'name': 'group_aw'
});

for (var i = 0; i < content.length; i++) {

  content[i].mouseover(function(e){
    this.node.style.opacity = 0.6;
    document.getElementById('content_out').innerHTML = this.data('content_data');
  });

  content[i].mouseout(function(e){
    this.node.style.opacity = 1;
  });
}
