// Compiled by ClojureScript 1.10.520 {}
goog.provide('mushrooms.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
mushrooms.core.field_size = (700);
mushrooms.core.pulse = (function mushrooms$core$pulse(low,high,rate){
var diff = (high - low);
var half = (diff / (2));
var mid = (low + half);
var s = (quil.core.millis.call(null) / 1000.0);
var x = quil.core.sin.call(null,(s * (1.0 / rate)));
return (mid + (x * half));
});
mushrooms.core.load_image = (function mushrooms$core$load_image(image){
var path = ["/",cljs.core.name.call(null,image),".svg"].join('');
return quil.core.load_image.call(null,path);
});
mushrooms.core.draw_image = (function mushrooms$core$draw_image(state,k,p__28041){
var vec__28042 = p__28041;
var x = cljs.core.nth.call(null,vec__28042,(0),null);
var y = cljs.core.nth.call(null,vec__28042,(1),null);
return quil.core.image.call(null,cljs.core.get.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),k], null)),x,y);
});
mushrooms.core.wrap = (function mushrooms$core$wrap(p__28045){
var vec__28046 = p__28045;
var x = cljs.core.nth.call(null,vec__28046,(0),null);
var y = cljs.core.nth.call(null,vec__28046,(1),null);
var v = cljs.core.nth.call(null,vec__28046,(2),null);
if((x < (- mushrooms.core.field_size))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mushrooms.core.field_size,(cljs.core.rand_int.call(null,mushrooms.core.field_size) - (mushrooms.core.field_size / (2))),v], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,v], null);
}
});
mushrooms.core.move_skull = (function mushrooms$core$move_skull(p__28049){
var vec__28050 = p__28049;
var x = cljs.core.nth.call(null,vec__28050,(0),null);
var y = cljs.core.nth.call(null,vec__28050,(1),null);
var v = cljs.core.nth.call(null,vec__28050,(2),null);
return mushrooms.core.wrap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - v),y,v], null));
});
mushrooms.core.random_skull = (function mushrooms$core$random_skull(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,((2) * mushrooms.core.field_size)),(cljs.core.rand_int.call(null,mushrooms.core.field_size) - (mushrooms.core.field_size / (2)))], null);
});
mushrooms.core.setup = (function mushrooms$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

quil.core.image_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wild-skulls","wild-skulls",555419517),cljs.core.take.call(null,(9),cljs.core.repeatedly.call(null,mushrooms.core.random_skull)),new cljs.core.Keyword(null,"head","head",-771383919),mushrooms.core.load_image.call(null,"skull-head"),new cljs.core.Keyword(null,"jaw","jaw",-1703590075),mushrooms.core.load_image.call(null,"jaw")], null);
});
mushrooms.core.update_state = (function mushrooms$core$update_state(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wild-skulls","wild-skulls",555419517)], null),(function (p1__28053_SHARP_){
return cljs.core.map.call(null,mushrooms.core.move_skull,p1__28053_SHARP_);
}));
});
mushrooms.core.skull = (function mushrooms$core$skull(x,y,state){
quil.core.rotate.call(null,mushrooms.core.pulse.call(null,-0.02,0.02,0.5));

quil.core.translate.call(null,mushrooms.core.pulse.call(null,(1),(50),0.25),(0));

quil.core.image.call(null,cljs.core.get.call(null,state,new cljs.core.Keyword(null,"head","head",-771383919)),x,y);

quil.core.translate.call(null,(0),mushrooms.core.pulse.call(null,(1),(100),0.25));

return quil.core.image.call(null,cljs.core.get.call(null,state,new cljs.core.Keyword(null,"jaw","jaw",-1703590075)),x,y);
});
mushrooms.core.wild_skull = (function mushrooms$core$wild_skull(x,y,state,scale){
var tr__21251__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto__);

quil.core.scale.call(null,scale);

return mushrooms.core.skull.call(null,x,y,state);
}finally {quil.core.pop_matrix.call(null);
}});
mushrooms.core.draw_skulls = (function mushrooms$core$draw_skulls(state,skulls){
var seq__28054 = cljs.core.seq.call(null,skulls);
var chunk__28055 = null;
var count__28056 = (0);
var i__28057 = (0);
while(true){
if((i__28057 < count__28056)){
var vec__28064 = cljs.core._nth.call(null,chunk__28055,i__28057);
var x = cljs.core.nth.call(null,vec__28064,(0),null);
var y = cljs.core.nth.call(null,vec__28064,(1),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.scale.call(null,0.5);

mushrooms.core.skull.call(null,x,y,state);

quil.core.pop_matrix.call(null);


var G__28070 = seq__28054;
var G__28071 = chunk__28055;
var G__28072 = count__28056;
var G__28073 = (i__28057 + (1));
seq__28054 = G__28070;
chunk__28055 = G__28071;
count__28056 = G__28072;
i__28057 = G__28073;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28054);
if(temp__5735__auto__){
var seq__28054__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28054__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28054__$1);
var G__28074 = cljs.core.chunk_rest.call(null,seq__28054__$1);
var G__28075 = c__4550__auto__;
var G__28076 = cljs.core.count.call(null,c__4550__auto__);
var G__28077 = (0);
seq__28054 = G__28074;
chunk__28055 = G__28075;
count__28056 = G__28076;
i__28057 = G__28077;
continue;
} else {
var vec__28067 = cljs.core.first.call(null,seq__28054__$1);
var x = cljs.core.nth.call(null,vec__28067,(0),null);
var y = cljs.core.nth.call(null,vec__28067,(1),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.scale.call(null,0.5);

mushrooms.core.skull.call(null,x,y,state);

quil.core.pop_matrix.call(null);


var G__28078 = cljs.core.next.call(null,seq__28054__$1);
var G__28079 = null;
var G__28080 = (0);
var G__28081 = (0);
seq__28054 = G__28078;
chunk__28055 = G__28079;
count__28056 = G__28080;
i__28057 = G__28081;
continue;
}
} else {
return null;
}
}
break;
}
});
mushrooms.core.draw_state = (function mushrooms$core$draw_state(state){
quil.core.clear.call(null);

mushrooms.core.skull.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)),state);

return mushrooms.core.draw_skulls.call(null,state,new cljs.core.Keyword(null,"wild-skulls","wild-skulls",555419517).cljs$core$IFn$_invoke$arity$1(state));
});
mushrooms.core.mushrooms = (function mushrooms$core$mushrooms(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mushrooms",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,mushrooms.core.update_state))?(function() { 
var G__28082__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.update_state,args);
};
var G__28082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28083__i = 0, G__28083__a = new Array(arguments.length -  0);
while (G__28083__i < G__28083__a.length) {G__28083__a[G__28083__i] = arguments[G__28083__i + 0]; ++G__28083__i;}
  args = new cljs.core.IndexedSeq(G__28083__a,0,null);
} 
return G__28082__delegate.call(this,args);};
G__28082.cljs$lang$maxFixedArity = 0;
G__28082.cljs$lang$applyTo = (function (arglist__28084){
var args = cljs.core.seq(arglist__28084);
return G__28082__delegate(args);
});
G__28082.cljs$core$IFn$_invoke$arity$variadic = G__28082__delegate;
return G__28082;
})()
:mushrooms.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,mushrooms.core.setup))?(function() { 
var G__28085__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.setup,args);
};
var G__28085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28086__i = 0, G__28086__a = new Array(arguments.length -  0);
while (G__28086__i < G__28086__a.length) {G__28086__a[G__28086__i] = arguments[G__28086__i + 0]; ++G__28086__i;}
  args = new cljs.core.IndexedSeq(G__28086__a,0,null);
} 
return G__28085__delegate.call(this,args);};
G__28085.cljs$lang$maxFixedArity = 0;
G__28085.cljs$lang$applyTo = (function (arglist__28087){
var args = cljs.core.seq(arglist__28087);
return G__28085__delegate(args);
});
G__28085.cljs$core$IFn$_invoke$arity$variadic = G__28085__delegate;
return G__28085;
})()
:mushrooms.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,mushrooms.core.draw_state))?(function() { 
var G__28088__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.draw_state,args);
};
var G__28088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28089__i = 0, G__28089__a = new Array(arguments.length -  0);
while (G__28089__i < G__28089__a.length) {G__28089__a[G__28089__i] = arguments[G__28089__i + 0]; ++G__28089__i;}
  args = new cljs.core.IndexedSeq(G__28089__a,0,null);
} 
return G__28088__delegate.call(this,args);};
G__28088.cljs$lang$maxFixedArity = 0;
G__28088.cljs$lang$applyTo = (function (arglist__28090){
var args = cljs.core.seq(arglist__28090);
return G__28088__delegate(args);
});
G__28088.cljs$core$IFn$_invoke$arity$variadic = G__28088__delegate;
return G__28088;
})()
:mushrooms.core.draw_state));
});
goog.exportSymbol('mushrooms.core.mushrooms', mushrooms.core.mushrooms);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20845__20846__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20845__20846__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),mushrooms.core.mushrooms,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mushrooms"], null));
}

//# sourceMappingURL=core.js.map?rel=1575906781788
