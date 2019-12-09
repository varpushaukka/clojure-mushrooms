// Compiled by ClojureScript 1.10.520 {}
goog.provide('clock.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
clock.core.setup = (function clock$core$setup(){
quil.core.frame_rate.call(null,(30));

return quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));
});
clock.core.draw_state = (function clock$core$draw_state(state){
quil.core.background.call(null,(51));

var max_scale_h = ((1) - ((1) / (12)));
var max_scale_m = ((1) - ((1) / (60)));
var max_scale_s = ((1) - ((1) / (60)));
var h = quil.core.map_range.call(null,(((quil.core.hour.call(null) > (12)))?(quil.core.hour.call(null) - (12)):quil.core.hour.call(null)),(0),(11),(0),max_scale_h);
var m = quil.core.map_range.call(null,quil.core.minute.call(null),(0),(59),(0),max_scale_m);
var s = quil.core.map_range.call(null,quil.core.seconds.call(null),(0),(59),(0),max_scale_s);
var h_a = (quil.core.TWO_PI * h);
var m_a = (quil.core.TWO_PI * m);
var s_a = (quil.core.TWO_PI * s);
quil.core.stroke_weight.call(null,(8));

quil.core.no_fill.call(null);

var halfw = (quil.core.width.call(null) / (2));
var halfh = (quil.core.height.call(null) / (2));
var tr__21771__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw,halfh], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21771__auto__);

var tr__21777__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * quil.core.HALF_PI)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21777__auto__);

quil.core.stroke.call(null,(255),(100),(150));

var tr__21777__auto___35012__$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_a], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21777__auto___35012__$1);

quil.core.line.call(null,(0),(0),(60),(0));
}finally {quil.core.pop_matrix.call(null);
}
quil.core.arc.call(null,(0),(0),(400),(400),(0),h_a);

quil.core.stroke.call(null,(150),(100),(255));

var tr__21777__auto___35013__$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_a], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21777__auto___35013__$1);

quil.core.line.call(null,(0),(0),(100),(0));
}finally {quil.core.pop_matrix.call(null);
}
quil.core.arc.call(null,(0),(0),(360),(360),(0),m_a);

quil.core.stroke.call(null,(150),(255),(100));

var tr__21777__auto___35014__$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_a], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21777__auto___35014__$1);

quil.core.line.call(null,(0),(0),(160),(0));
}finally {quil.core.pop_matrix.call(null);
}
return quil.core.arc.call(null,(0),(0),(320),(320),(0),s_a);
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
clock.core.run_sketch = (function clock$core$run_sketch(){
clock.core.clock = (function clock$core$run_sketch_$_clock(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"clock",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,clock.core.setup))?(function() { 
var G__35015__delegate = function (args){
return cljs.core.apply.call(null,clock.core.setup,args);
};
var G__35015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35016__i = 0, G__35016__a = new Array(arguments.length -  0);
while (G__35016__i < G__35016__a.length) {G__35016__a[G__35016__i] = arguments[G__35016__i + 0]; ++G__35016__i;}
  args = new cljs.core.IndexedSeq(G__35016__a,0,null);
} 
return G__35015__delegate.call(this,args);};
G__35015.cljs$lang$maxFixedArity = 0;
G__35015.cljs$lang$applyTo = (function (arglist__35017){
var args = cljs.core.seq(arglist__35017);
return G__35015__delegate(args);
});
G__35015.cljs$core$IFn$_invoke$arity$variadic = G__35015__delegate;
return G__35015;
})()
:clock.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,clock.core.draw_state))?(function() { 
var G__35018__delegate = function (args){
return cljs.core.apply.call(null,clock.core.draw_state,args);
};
var G__35018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35019__i = 0, G__35019__a = new Array(arguments.length -  0);
while (G__35019__i < G__35019__a.length) {G__35019__a[G__35019__i] = arguments[G__35019__i + 0]; ++G__35019__i;}
  args = new cljs.core.IndexedSeq(G__35019__a,0,null);
} 
return G__35018__delegate.call(this,args);};
G__35018.cljs$lang$maxFixedArity = 0;
G__35018.cljs$lang$applyTo = (function (arglist__35020){
var args = cljs.core.seq(arglist__35020);
return G__35018__delegate(args);
});
G__35018.cljs$core$IFn$_invoke$arity$variadic = G__35018__delegate;
return G__35018;
})()
:clock.core.draw_state));
});
goog.exportSymbol('clock.core.clock', clock.core.clock);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),clock.core.clock,new cljs.core.Keyword(null,"host-id","host-id",742376279),"clock"], null));
}
});
goog.exportSymbol('clock.core.run_sketch', clock.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1575893634663
