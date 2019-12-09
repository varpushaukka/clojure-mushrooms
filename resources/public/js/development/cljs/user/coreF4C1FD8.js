// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.user.coreF4C1FD8');
goog.require('cljs.core');
cljs.user.setup = (function cljs$user$setup(){
q.frame_rate((30));

return q.color_mode(new cljs.core.Keyword(null,"rgb","rgb",1432123467));
});
cljs.user.draw_state = (function cljs$user$draw_state(state){
q.background((51));

var max_scale_h = ((1) - ((1) / (12)));
var max_scale_m = ((1) - ((1) / (60)));
var max_scale_s = ((1) - ((1) / (60)));
var h = q.map_range((((q.hour() > (12)))?(q.hour() - (12)):q.hour()),(0),(11),(0),max_scale_h);
var m = q.map_range(q.minute(),(0),(59),(0),max_scale_m);
var s = q.map_range(q.seconds(),(0),(59),(0),max_scale_s);
var h_a = (q.TWO_PI * h);
var m_a = (q.TWO_PI * m);
var s_a = (q.TWO_PI * s);
q.stroke_weight((8));

q.no_fill();

var halfw = (q.width() / (2));
var halfh = (q.height() / (2));
return q.with_translation(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw,halfh], null),q.with_rotation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * q.HALF_PI)], null),q.stroke((255),(100),(150)),q.with_rotation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_a], null),q.line((0),(0),(60),(0))),q.arc((0),(0),(400),(400),(0),h_a),q.stroke((150),(100),(255)),q.with_rotation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_a], null),q.line((0),(0),(100),(0))),q.arc((0),(0),(360),(360),(0),m_a),q.stroke((150),(255),(100)),q.with_rotation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_a], null),q.line((0),(0),(160),(0))),q.arc((0),(0),(320),(320),(0),s_a)));
});
cljs.user.run_sketch = (function cljs$user$run_sketch(){
return q.defsketch(cljs.user.clock,new cljs.core.Keyword(null,"host","host",-1558485167),"clock",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),cljs.user.setup,new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.user.draw_state,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.fun_mode], null));
});
goog.exportSymbol('cljs.user.run_sketch', cljs.user.run_sketch);

//# sourceMappingURL=coreF4C1FD8.js.map?rel=1575893289552
