var rsr = new ScaleRaphael("figure3", 800, 800);

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
Layer_3.attr({
  'id': 'Layer_3',
  'parent': 'Layer_1',
  'name': 'Layer_3'
});
var Layer_2 = rsr.set();

//Data Collection
var data_collection = rsr.rect(81, 368.123, 109, 65.872).attr({
  x: '81',
  y: '368.123',
  fill: '#f1f1f1',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'data_collection',
  'content_data':  '<b>Data Collection</b><br>Employ the most rigorous methods possible within the practical constraints imposed by the nature of the assignment.'
});
content.push(data_collection);

//Data Interpretation
var data_interpretation = rsr.rect(215, 368.123, 109, 65.872).attr({
  x: '215',
  y: '368.123',
  fill: '#f1f1f1',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'data_interpretation',
  'content_data':  '<b>Data Interpretation</b><br>Sort out conflicting opinions and perspectives about the organization and construct an independent assessment.'
});
content.push(data_interpretation);

//Preliminary Diagnosis
var preliminary_diagnosis = rsr.rect(346, 368.123, 109, 65.872).attr({
  x: '346',
  y: '368.123',
  fill: '#f1f1f1',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'preliminary_diagnosis',
  'content_data':  '<b>Preliminary Diagnosis</b><br>Identify patterns in the data and form an initial hypothesis that leads to a preliminary diagnosis.'
});
content.push(preliminary_diagnosis);

//Testing Preliminary Diagnosis
var testing = rsr.rect(479, 368.123, 109, 65.872).attr({
  x: '479',
  y: '368.123',
  fill: '#f1f1f1',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'testing',
  'content_data':  '<b>Test Preliminary Diagnoses</b><br>Examine cause-effect relationships through an iterative process of hypothesis formation, testing, revision, and testing of the revised hypothesis.'
});
content.push(testing);

//Final Diagnosis
var final_diagnosis = rsr.rect(610, 368.123, 109, 65.872).attr({
  x: '610',
  y: '368.123',
  fill: '#f1f1f1',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'final_diagnosis',
  'content_data':  '<b>Final Diagnoses</b><br>Explain multiple factors in a statement of the probable results of intervening or not intervening, recommendations and next steps.'
});
content.push(final_diagnosis);

//Knowledge of Symptoms
var knowledge_of_symptoms = rsr.circle(202, 235, 64).attr({
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'knowledge_of_symptoms',
  'content_data':  '<b>Knowledge of Symptoms</b><br>Gather data on important criteria that allow for comparisons between units or between entire organizations of the situation, actor and process.'
});
content.push(knowledge_of_symptoms);

//Knowledge of Systems
var knowledge_of_systems = rsr.circle(400, 235, 64).attr({
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'knowledge_of_systems',
  'content_data':  '<b>Knowledge of Systems</b><br>Discover relevant components, the nature of relations among the components, and the interdependencies.'
});
content.push(knowledge_of_systems);

//Knowledge of Solutions
var knowledge_of_solutions = rsr.circle(598, 235, 64).attr({
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'knowledge_of_solutions',
  'content_data':  '<b>Knowledge of Solutions</b><br>Isolate causes or predictors of variables linked to a particular pain point.'
});
content.push(knowledge_of_solutions);

//Knowledge of Standards
var knowledge_of_standards = rsr.circle(400, 564, 64).attr({
  fill: 'white',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data({
  'id': 'knowledge_of_standards',
  'content_data':  '<b>Knowledge of Standards</b><br>Specify the desired state-of-affairs for key measures of employee and organizational health and performance.'
});
content.push(knowledge_of_standards);


var path_aq = rsr.path("M645.666,341.493").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data('id', 'path_aq');
var path_ar = rsr.path("M221.538,341.493").attr({
  fill: 'none',
  stroke: '#265C88',
  "stroke-width": '4',
  "stroke-miterlimit": '10',
  parent: 'Layer_2',
  'stroke-opacity': '1'
}).data('id', 'path_ar');
var text_as = rsr.text(0, 0, 'Knowledge\nof\nSymptoms').attr({
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1',
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '17',
  'fill': '#000000'
}).transform("m1 0 0 1 204 235").data('id', 'text_as');
var text_at = rsr.text(0, 0, 'Knowledge\nof\nSystems').attr({
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1',
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '17',
  'fill': '#000000'
}).transform("m1 0 0 1 401 235").data('id', 'text_at');
var text_au = rsr.text(0, 0, 'Knowledge\nof\nSolutions').attr({
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1',
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '17',
  'fill': '#000000'
}).transform("m1 0 0 1 600 235").data('id', 'text_au');
var text_av = rsr.text(0, 0, 'Knowledge\nof\nStandards').attr({
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1',
  "font-family": 'Helvetica',
  "font-weight": 'Bold',
  "font-size": '17',
  'fill': '#000000'
}).transform("m1 0 0 1 400 565").data('id', 'text_av');
var text_aw = rsr.text(0, 0, 'Data\nCollection').attr({
  parent: 'Layer_2',
  "font-family": 'Helvetica',
  "font-size": '14',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 135 400").data('id', 'text_aw');
var text_ax = rsr.text(0, 0, 'Data\nInterpretation').attr({
  parent: 'Layer_2',
  "font-family": 'Helvetica',
  "font-size": '14',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 270 400").data('id', 'text_ax');
var text_ay = rsr.text(0, 0, 'Preliminary\nDiagnoses').attr({
  parent: 'Layer_2',
  "font-family": 'Helvetica',
  "font-size": '14',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 400 400").data('id', 'text_ay');
var text_az = rsr.text(0, 0, 'Test\nPreliminary\nDiagnoses').attr({
  parent: 'Layer_2',
  "font-family": 'Helvetica',
  "font-size": '14',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 533 400").data('id', 'text_az');
var text_ba = rsr.text(0, 0, 'Final\nDiagnosis').attr({
  parent: 'Layer_2',
  "font-family": 'Helvetica',
  "font-size": '14',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("m1 0 0 1 663 400").data('id', 'text_ba');
Layer_2.attr({
  'id': 'Layer_2',
  'name': 'Layer_2'
});
var group_a = rsr.set();
group_a.attr({
  'parent': 'Layer_2',
  'name': 'group_a'
});
var group_b = rsr.set();
group_b.attr({
  'parent': 'Layer_2',
  'name': 'group_b'
});
var group_c = rsr.set();
var path_bb = rsr.path("M 202.91,408.039 215,401.059 202.91,394.078 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bb');
group_c.attr({
  'parent': 'Layer_2',
  'name': 'group_c'
});
var group_d = rsr.set();
group_d.attr({
  'parent': 'Layer_2',
  'name': 'group_d'
});
var group_e = rsr.set();
group_e.attr({
  'parent': 'Layer_2',
  'name': 'group_e'
});
var group_f = rsr.set();
var path_bc = rsr.path("M 333.91,408.039 346,401.059 333.91,394.078 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bc');
group_f.attr({
  'parent': 'Layer_2',
  'name': 'group_f'
});
var group_g = rsr.set();
group_g.attr({
  'parent': 'Layer_2',
  'name': 'group_g'
});
var group_h = rsr.set();
group_h.attr({
  'parent': 'Layer_2',
  'name': 'group_h'
});
var group_i = rsr.set();
var path_bd = rsr.path("M 466.91,408.039 479,401.059 466.91,394.078 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var group_j = rsr.set();
group_j.attr({
  'parent': 'Layer_2',
  'name': 'group_j'
});
var group_k = rsr.set();
group_k.attr({
  'parent': 'Layer_2',
  'name': 'group_k'
});
var group_l = rsr.set();
var path_be = rsr.path("M 597.91,408.039 610,401.059 597.91,394.078 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_be');
group_l.attr({
  'parent': 'Layer_2',
  'name': 'group_l'
});
var group_m = rsr.set();
group_m.attr({
  'parent': 'Layer_2',
  'name': 'group_m'
});
var group_n = rsr.set();
group_n.attr({
  'parent': 'Layer_2',
  'name': 'group_n'
});
var group_o = rsr.set();
var path_bf = rsr.path("M 591.02,336.906 598,348.995 604.98,336.906 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bf');
group_o.attr({
  'parent': 'Layer_2',
  'name': 'group_o'
});
var group_p = rsr.set();
group_p.attr({
  'parent': 'Layer_2',
  'name': 'group_p'
});
var group_q = rsr.set();
group_q.attr({
  'parent': 'Layer_2',
  'name': 'group_q'
});
var group_r = rsr.set();
var path_bg = rsr.path("M 195.52,336.906 202.5,348.995 209.48,336.906 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bg');
group_r.attr({
  'parent': 'Layer_2',
  'name': 'group_r'
});
var group_s = rsr.set();
group_s.attr({
  'parent': 'Layer_2',
  'name': 'group_s'
});
var group_t = rsr.set();
group_t.attr({
  'parent': 'Layer_2',
  'name': 'group_t'
});
var group_u = rsr.set();
var path_bh = rsr.path("M 229.48,330.012 221.538,341.493 235.451,342.633 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bh');
group_u.attr({
  'parent': 'Layer_2',
  'name': 'group_u'
});
var group_v = rsr.set();
group_v.attr({
  'parent': 'Layer_2',
  'name': 'group_v'
});
var group_w = rsr.set();
group_w.attr({
  'parent': 'Layer_2',
  'name': 'group_w'
});
var group_x = rsr.set();
var path_bi = rsr.path("M 564.949,342.646 578.861,341.493 570.908,330.02 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bi');
group_x.attr({
  'parent': 'Layer_2',
  'name': 'group_x'
});
var group_y = rsr.set();
group_y.attr({
  'parent': 'Layer_2',
  'name': 'group_y'
});
var group_z = rsr.set();
group_z.attr({
  'parent': 'Layer_2',
  'name': 'group_z'
});
var group_aa = rsr.set();
var path_bj = rsr.path("M 142.48,446.084 135.5,433.995 128.52,446.084 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bj');
group_aa.attr({
  'parent': 'Layer_2',
  'name': 'group_aa'
});
var group_ab = rsr.set();
group_ab.attr({
  'parent': 'Layer_2',
  'name': 'group_ab'
});
var group_ac = rsr.set();
group_ac.attr({
  'parent': 'Layer_2',
  'name': 'group_ac'
});
var group_ad = rsr.set();
var path_bk = rsr.path("M 214.633,449.312 200.804,451.218 209.367,462.243 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bk');
group_ad.attr({
  'parent': 'Layer_2',
  'name': 'group_ad'
});
var group_ae = rsr.set();
group_ae.attr({
  'parent': 'Layer_2',
  'name': 'group_ae'
});
var group_af = rsr.set();
group_af.attr({
  'parent': 'Layer_2',
  'name': 'group_af'
});

//Added (25)
var path_bd = rsr.path("M324 401.059L335.953 401.059").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M190 401.059L204.953 401.059").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M455 401.059L468.953 401.059").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M588 401.059L599.953 401.059").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M598 299.507L598 338.948").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-dasharray': '-',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M202.5 299.507L202.5 338.948").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-dasharray': '-',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M353.306 279.152L230.62 337.196").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-dasharray': '-',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M447.293 279.399L569.775 337.205").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-dasharray': '-',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M358.972 515.639L210.108 455.008").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-dasharray': '-',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M441.606 515.639L589.741 453.249").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-dasharray': '-',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});

var path_bd = rsr.path("M533.5 433.995L533.5 469").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M535.5 466.995L135.5 466.995").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});
var path_bd = rsr.path("M135.5 469L135.5 444.042").attr({
  fill: '#none',
  stroke: '#265C88',
  parent: 'Layer_2',
  "stroke-width": '4',
  'stroke-opacity': '1'
}).data('id', 'path_bd');
group_i.attr({
  'parent': 'Layer_2',
  'name': 'group_i'
});

var group_ag = rsr.set();
var path_bl = rsr.path("M 590.568,460.476 599,449.35 585.148,447.608 z").attr({
  fill: '#265C88',
  parent: 'Layer_2',
  'stroke-width': '0',
  'stroke-opacity': '1'
}).data('id', 'path_bl');
group_ag.attr({
  'parent': 'Layer_2',
  'name': 'group_ag'
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
