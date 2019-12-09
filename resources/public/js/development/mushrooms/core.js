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
mushrooms.core.draw_image = (function mushrooms$core$draw_image(state,k,p__27789){
var vec__27790 = p__27789;
var x = cljs.core.nth.call(null,vec__27790,(0),null);
var y = cljs.core.nth.call(null,vec__27790,(1),null);
return quil.core.image.call(null,cljs.core.get.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),k], null)),x,y);
});
mushrooms.core.setup = (function mushrooms$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

quil.core.image_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),mushrooms.core.load_image.call(null,"skull-head"),new cljs.core.Keyword(null,"jaw","jaw",-1703590075),mushrooms.core.load_image.call(null,"jaw")], null);
});
mushrooms.core.update_state = (function mushrooms$core$update_state(state){
return state;
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
mushrooms.core.draw_state = (function mushrooms$core$draw_state(state){
quil.core.clear.call(null);

mushrooms.core.skull.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)),state);

var n = (5);
var x = (100);
var y = (100);
var scale = 0.5;
while(true){
if((n === (0))){
return null;
} else {
mushrooms.core.wild_skull.call(null,x,y,state,scale);

var G__27793 = (n - (1));
var G__27794 = cljs.core.rand_int.call(null,(1000));
var G__27795 = cljs.core.rand_int.call(null,(1000));
var G__27796 = cljs.core.rand.call(null);
n = G__27793;
x = G__27794;
y = G__27795;
scale = G__27796;
continue;
}
break;
}
});
mushrooms.core.mushrooms = (function mushrooms$core$mushrooms(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mushrooms",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,mushrooms.core.update_state))?(function() { 
var G__27797__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.update_state,args);
};
var G__27797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27798__i = 0, G__27798__a = new Array(arguments.length -  0);
while (G__27798__i < G__27798__a.length) {G__27798__a[G__27798__i] = arguments[G__27798__i + 0]; ++G__27798__i;}
  args = new cljs.core.IndexedSeq(G__27798__a,0,null);
} 
return G__27797__delegate.call(this,args);};
G__27797.cljs$lang$maxFixedArity = 0;
G__27797.cljs$lang$applyTo = (function (arglist__27799){
var args = cljs.core.seq(arglist__27799);
return G__27797__delegate(args);
});
G__27797.cljs$core$IFn$_invoke$arity$variadic = G__27797__delegate;
return G__27797;
})()
:mushrooms.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,mushrooms.core.setup))?(function() { 
var G__27800__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.setup,args);
};
var G__27800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27801__i = 0, G__27801__a = new Array(arguments.length -  0);
while (G__27801__i < G__27801__a.length) {G__27801__a[G__27801__i] = arguments[G__27801__i + 0]; ++G__27801__i;}
  args = new cljs.core.IndexedSeq(G__27801__a,0,null);
} 
return G__27800__delegate.call(this,args);};
G__27800.cljs$lang$maxFixedArity = 0;
G__27800.cljs$lang$applyTo = (function (arglist__27802){
var args = cljs.core.seq(arglist__27802);
return G__27800__delegate(args);
});
G__27800.cljs$core$IFn$_invoke$arity$variadic = G__27800__delegate;
return G__27800;
})()
:mushrooms.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,mushrooms.core.draw_state))?(function() { 
var G__27803__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.draw_state,args);
};
var G__27803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27804__i = 0, G__27804__a = new Array(arguments.length -  0);
while (G__27804__i < G__27804__a.length) {G__27804__a[G__27804__i] = arguments[G__27804__i + 0]; ++G__27804__i;}
  args = new cljs.core.IndexedSeq(G__27804__a,0,null);
} 
return G__27803__delegate.call(this,args);};
G__27803.cljs$lang$maxFixedArity = 0;
G__27803.cljs$lang$applyTo = (function (arglist__27805){
var args = cljs.core.seq(arglist__27805);
return G__27803__delegate(args);
});
G__27803.cljs$core$IFn$_invoke$arity$variadic = G__27803__delegate;
return G__27803;
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

//# sourceMappingURL=core.js.map?rel=1575904499543
