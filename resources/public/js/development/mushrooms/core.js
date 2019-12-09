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
mushrooms.core.draw_image = (function mushrooms$core$draw_image(state,k,p__27565){
var vec__27566 = p__27565;
var x = cljs.core.nth.call(null,vec__27566,(0),null);
var y = cljs.core.nth.call(null,vec__27566,(1),null);
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
mushrooms.core.draw_state = (function mushrooms$core$draw_state(state){
quil.core.clear.call(null);

quil.core.rotate.call(null,mushrooms.core.pulse.call(null,-0.02,0.02,0.5));

quil.core.translate.call(null,mushrooms.core.pulse.call(null,(1),(50),0.25),(0));

quil.core.image.call(null,cljs.core.get.call(null,state,new cljs.core.Keyword(null,"head","head",-771383919)),(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

quil.core.translate.call(null,(0),mushrooms.core.pulse.call(null,(1),(100),0.25));

return quil.core.image.call(null,cljs.core.get.call(null,state,new cljs.core.Keyword(null,"jaw","jaw",-1703590075)),(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));
});
mushrooms.core.mushrooms = (function mushrooms$core$mushrooms(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mushrooms",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,mushrooms.core.update_state))?(function() { 
var G__27569__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.update_state,args);
};
var G__27569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27570__i = 0, G__27570__a = new Array(arguments.length -  0);
while (G__27570__i < G__27570__a.length) {G__27570__a[G__27570__i] = arguments[G__27570__i + 0]; ++G__27570__i;}
  args = new cljs.core.IndexedSeq(G__27570__a,0,null);
} 
return G__27569__delegate.call(this,args);};
G__27569.cljs$lang$maxFixedArity = 0;
G__27569.cljs$lang$applyTo = (function (arglist__27571){
var args = cljs.core.seq(arglist__27571);
return G__27569__delegate(args);
});
G__27569.cljs$core$IFn$_invoke$arity$variadic = G__27569__delegate;
return G__27569;
})()
:mushrooms.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,mushrooms.core.setup))?(function() { 
var G__27572__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.setup,args);
};
var G__27572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27573__i = 0, G__27573__a = new Array(arguments.length -  0);
while (G__27573__i < G__27573__a.length) {G__27573__a[G__27573__i] = arguments[G__27573__i + 0]; ++G__27573__i;}
  args = new cljs.core.IndexedSeq(G__27573__a,0,null);
} 
return G__27572__delegate.call(this,args);};
G__27572.cljs$lang$maxFixedArity = 0;
G__27572.cljs$lang$applyTo = (function (arglist__27574){
var args = cljs.core.seq(arglist__27574);
return G__27572__delegate(args);
});
G__27572.cljs$core$IFn$_invoke$arity$variadic = G__27572__delegate;
return G__27572;
})()
:mushrooms.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,mushrooms.core.draw_state))?(function() { 
var G__27575__delegate = function (args){
return cljs.core.apply.call(null,mushrooms.core.draw_state,args);
};
var G__27575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27576__i = 0, G__27576__a = new Array(arguments.length -  0);
while (G__27576__i < G__27576__a.length) {G__27576__a[G__27576__i] = arguments[G__27576__i + 0]; ++G__27576__i;}
  args = new cljs.core.IndexedSeq(G__27576__a,0,null);
} 
return G__27575__delegate.call(this,args);};
G__27575.cljs$lang$maxFixedArity = 0;
G__27575.cljs$lang$applyTo = (function (arglist__27577){
var args = cljs.core.seq(arglist__27577);
return G__27575__delegate(args);
});
G__27575.cljs$core$IFn$_invoke$arity$variadic = G__27575__delegate;
return G__27575;
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

//# sourceMappingURL=core.js.map?rel=1575902603059
