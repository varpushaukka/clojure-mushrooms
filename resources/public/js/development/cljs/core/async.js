// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25135 = arguments.length;
switch (G__25135) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25136 = (function (f,blockable,meta25137){
this.f = f;
this.blockable = blockable;
this.meta25137 = meta25137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25138,meta25137__$1){
var self__ = this;
var _25138__$1 = this;
return (new cljs.core.async.t_cljs$core$async25136(self__.f,self__.blockable,meta25137__$1));
});

cljs.core.async.t_cljs$core$async25136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25138){
var self__ = this;
var _25138__$1 = this;
return self__.meta25137;
});

cljs.core.async.t_cljs$core$async25136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25137","meta25137",1327095191,null)], null);
});

cljs.core.async.t_cljs$core$async25136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25136";

cljs.core.async.t_cljs$core$async25136.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25136");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25136.
 */
cljs.core.async.__GT_t_cljs$core$async25136 = (function cljs$core$async$__GT_t_cljs$core$async25136(f__$1,blockable__$1,meta25137){
return (new cljs.core.async.t_cljs$core$async25136(f__$1,blockable__$1,meta25137));
});

}

return (new cljs.core.async.t_cljs$core$async25136(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25142 = arguments.length;
switch (G__25142) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25145 = arguments.length;
switch (G__25145) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25148 = arguments.length;
switch (G__25148) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25150 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25150);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25150,ret){
return (function (){
return fn1.call(null,val_25150);
});})(val_25150,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25152 = arguments.length;
switch (G__25152) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___25154 = n;
var x_25155 = (0);
while(true){
if((x_25155 < n__4607__auto___25154)){
(a[x_25155] = (0));

var G__25156 = (x_25155 + (1));
x_25155 = G__25156;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25157 = (i + (1));
i = G__25157;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25158 = (function (flag,meta25159){
this.flag = flag;
this.meta25159 = meta25159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25160,meta25159__$1){
var self__ = this;
var _25160__$1 = this;
return (new cljs.core.async.t_cljs$core$async25158(self__.flag,meta25159__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25160){
var self__ = this;
var _25160__$1 = this;
return self__.meta25159;
});})(flag))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25158.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25159","meta25159",-1580250681,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25158";

cljs.core.async.t_cljs$core$async25158.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25158");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25158.
 */
cljs.core.async.__GT_t_cljs$core$async25158 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25158(flag__$1,meta25159){
return (new cljs.core.async.t_cljs$core$async25158(flag__$1,meta25159));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25158(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25161 = (function (flag,cb,meta25162){
this.flag = flag;
this.cb = cb;
this.meta25162 = meta25162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25163,meta25162__$1){
var self__ = this;
var _25163__$1 = this;
return (new cljs.core.async.t_cljs$core$async25161(self__.flag,self__.cb,meta25162__$1));
});

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25163){
var self__ = this;
var _25163__$1 = this;
return self__.meta25162;
});

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25162","meta25162",-1671101281,null)], null);
});

cljs.core.async.t_cljs$core$async25161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25161";

cljs.core.async.t_cljs$core$async25161.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25161");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25161.
 */
cljs.core.async.__GT_t_cljs$core$async25161 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25161(flag__$1,cb__$1,meta25162){
return (new cljs.core.async.t_cljs$core$async25161(flag__$1,cb__$1,meta25162));
});

}

return (new cljs.core.async.t_cljs$core$async25161(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25164_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25164_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25165_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25165_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25166 = (i + (1));
i = G__25166;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25172 = arguments.length;
var i__4731__auto___25173 = (0);
while(true){
if((i__4731__auto___25173 < len__4730__auto___25172)){
args__4736__auto__.push((arguments[i__4731__auto___25173]));

var G__25174 = (i__4731__auto___25173 + (1));
i__4731__auto___25173 = G__25174;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25169){
var map__25170 = p__25169;
var map__25170__$1 = (((((!((map__25170 == null))))?(((((map__25170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25170):map__25170);
var opts = map__25170__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25167){
var G__25168 = cljs.core.first.call(null,seq25167);
var seq25167__$1 = cljs.core.next.call(null,seq25167);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25168,seq25167__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25176 = arguments.length;
switch (G__25176) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25075__auto___25222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___25222){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___25222){
return (function (state_25200){
var state_val_25201 = (state_25200[(1)]);
if((state_val_25201 === (7))){
var inst_25196 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25202_25223 = state_25200__$1;
(statearr_25202_25223[(2)] = inst_25196);

(statearr_25202_25223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (1))){
var state_25200__$1 = state_25200;
var statearr_25203_25224 = state_25200__$1;
(statearr_25203_25224[(2)] = null);

(statearr_25203_25224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (4))){
var inst_25179 = (state_25200[(7)]);
var inst_25179__$1 = (state_25200[(2)]);
var inst_25180 = (inst_25179__$1 == null);
var state_25200__$1 = (function (){var statearr_25204 = state_25200;
(statearr_25204[(7)] = inst_25179__$1);

return statearr_25204;
})();
if(cljs.core.truth_(inst_25180)){
var statearr_25205_25225 = state_25200__$1;
(statearr_25205_25225[(1)] = (5));

} else {
var statearr_25206_25226 = state_25200__$1;
(statearr_25206_25226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (13))){
var state_25200__$1 = state_25200;
var statearr_25207_25227 = state_25200__$1;
(statearr_25207_25227[(2)] = null);

(statearr_25207_25227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (6))){
var inst_25179 = (state_25200[(7)]);
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25200__$1,(11),to,inst_25179);
} else {
if((state_val_25201 === (3))){
var inst_25198 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25200__$1,inst_25198);
} else {
if((state_val_25201 === (12))){
var state_25200__$1 = state_25200;
var statearr_25208_25228 = state_25200__$1;
(statearr_25208_25228[(2)] = null);

(statearr_25208_25228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (2))){
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25200__$1,(4),from);
} else {
if((state_val_25201 === (11))){
var inst_25189 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
if(cljs.core.truth_(inst_25189)){
var statearr_25209_25229 = state_25200__$1;
(statearr_25209_25229[(1)] = (12));

} else {
var statearr_25210_25230 = state_25200__$1;
(statearr_25210_25230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (9))){
var state_25200__$1 = state_25200;
var statearr_25211_25231 = state_25200__$1;
(statearr_25211_25231[(2)] = null);

(statearr_25211_25231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (5))){
var state_25200__$1 = state_25200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25212_25232 = state_25200__$1;
(statearr_25212_25232[(1)] = (8));

} else {
var statearr_25213_25233 = state_25200__$1;
(statearr_25213_25233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (14))){
var inst_25194 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25214_25234 = state_25200__$1;
(statearr_25214_25234[(2)] = inst_25194);

(statearr_25214_25234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (10))){
var inst_25186 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25215_25235 = state_25200__$1;
(statearr_25215_25235[(2)] = inst_25186);

(statearr_25215_25235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (8))){
var inst_25183 = cljs.core.async.close_BANG_.call(null,to);
var state_25200__$1 = state_25200;
var statearr_25216_25236 = state_25200__$1;
(statearr_25216_25236[(2)] = inst_25183);

(statearr_25216_25236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___25222))
;
return ((function (switch__24980__auto__,c__25075__auto___25222){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_25217 = [null,null,null,null,null,null,null,null];
(statearr_25217[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_25217[(1)] = (1));

return statearr_25217;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_25200){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25218){if((e25218 instanceof Object)){
var ex__24984__auto__ = e25218;
var statearr_25219_25237 = state_25200;
(statearr_25219_25237[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25238 = state_25200;
state_25200 = G__25238;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_25200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_25200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___25222))
})();
var state__25077__auto__ = (function (){var statearr_25220 = f__25076__auto__.call(null);
(statearr_25220[(6)] = c__25075__auto___25222);

return statearr_25220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___25222))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25239){
var vec__25240 = p__25239;
var v = cljs.core.nth.call(null,vec__25240,(0),null);
var p = cljs.core.nth.call(null,vec__25240,(1),null);
var job = vec__25240;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25075__auto___25411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___25411,res,vec__25240,v,p,job,jobs,results){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___25411,res,vec__25240,v,p,job,jobs,results){
return (function (state_25247){
var state_val_25248 = (state_25247[(1)]);
if((state_val_25248 === (1))){
var state_25247__$1 = state_25247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25247__$1,(2),res,v);
} else {
if((state_val_25248 === (2))){
var inst_25244 = (state_25247[(2)]);
var inst_25245 = cljs.core.async.close_BANG_.call(null,res);
var state_25247__$1 = (function (){var statearr_25249 = state_25247;
(statearr_25249[(7)] = inst_25244);

return statearr_25249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25247__$1,inst_25245);
} else {
return null;
}
}
});})(c__25075__auto___25411,res,vec__25240,v,p,job,jobs,results))
;
return ((function (switch__24980__auto__,c__25075__auto___25411,res,vec__25240,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0 = (function (){
var statearr_25250 = [null,null,null,null,null,null,null,null];
(statearr_25250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__);

(statearr_25250[(1)] = (1));

return statearr_25250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1 = (function (state_25247){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25251){if((e25251 instanceof Object)){
var ex__24984__auto__ = e25251;
var statearr_25252_25412 = state_25247;
(statearr_25252_25412[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25413 = state_25247;
state_25247 = G__25413;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = function(state_25247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1.call(this,state_25247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___25411,res,vec__25240,v,p,job,jobs,results))
})();
var state__25077__auto__ = (function (){var statearr_25253 = f__25076__auto__.call(null);
(statearr_25253[(6)] = c__25075__auto___25411);

return statearr_25253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___25411,res,vec__25240,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25254){
var vec__25255 = p__25254;
var v = cljs.core.nth.call(null,vec__25255,(0),null);
var p = cljs.core.nth.call(null,vec__25255,(1),null);
var job = vec__25255;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___25414 = n;
var __25415 = (0);
while(true){
if((__25415 < n__4607__auto___25414)){
var G__25258_25416 = type;
var G__25258_25417__$1 = (((G__25258_25416 instanceof cljs.core.Keyword))?G__25258_25416.fqn:null);
switch (G__25258_25417__$1) {
case "compute":
var c__25075__auto___25419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25415,c__25075__auto___25419,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (__25415,c__25075__auto___25419,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async){
return (function (state_25271){
var state_val_25272 = (state_25271[(1)]);
if((state_val_25272 === (1))){
var state_25271__$1 = state_25271;
var statearr_25273_25420 = state_25271__$1;
(statearr_25273_25420[(2)] = null);

(statearr_25273_25420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (2))){
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25271__$1,(4),jobs);
} else {
if((state_val_25272 === (3))){
var inst_25269 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25271__$1,inst_25269);
} else {
if((state_val_25272 === (4))){
var inst_25261 = (state_25271[(2)]);
var inst_25262 = process.call(null,inst_25261);
var state_25271__$1 = state_25271;
if(cljs.core.truth_(inst_25262)){
var statearr_25274_25421 = state_25271__$1;
(statearr_25274_25421[(1)] = (5));

} else {
var statearr_25275_25422 = state_25271__$1;
(statearr_25275_25422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (5))){
var state_25271__$1 = state_25271;
var statearr_25276_25423 = state_25271__$1;
(statearr_25276_25423[(2)] = null);

(statearr_25276_25423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (6))){
var state_25271__$1 = state_25271;
var statearr_25277_25424 = state_25271__$1;
(statearr_25277_25424[(2)] = null);

(statearr_25277_25424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (7))){
var inst_25267 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
var statearr_25278_25425 = state_25271__$1;
(statearr_25278_25425[(2)] = inst_25267);

(statearr_25278_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25415,c__25075__auto___25419,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async))
;
return ((function (__25415,switch__24980__auto__,c__25075__auto___25419,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0 = (function (){
var statearr_25279 = [null,null,null,null,null,null,null];
(statearr_25279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__);

(statearr_25279[(1)] = (1));

return statearr_25279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1 = (function (state_25271){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25280){if((e25280 instanceof Object)){
var ex__24984__auto__ = e25280;
var statearr_25281_25426 = state_25271;
(statearr_25281_25426[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25427 = state_25271;
state_25271 = G__25427;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = function(state_25271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1.call(this,state_25271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__;
})()
;})(__25415,switch__24980__auto__,c__25075__auto___25419,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async))
})();
var state__25077__auto__ = (function (){var statearr_25282 = f__25076__auto__.call(null);
(statearr_25282[(6)] = c__25075__auto___25419);

return statearr_25282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(__25415,c__25075__auto___25419,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async))
);


break;
case "async":
var c__25075__auto___25428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25415,c__25075__auto___25428,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (__25415,c__25075__auto___25428,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async){
return (function (state_25295){
var state_val_25296 = (state_25295[(1)]);
if((state_val_25296 === (1))){
var state_25295__$1 = state_25295;
var statearr_25297_25429 = state_25295__$1;
(statearr_25297_25429[(2)] = null);

(statearr_25297_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (2))){
var state_25295__$1 = state_25295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25295__$1,(4),jobs);
} else {
if((state_val_25296 === (3))){
var inst_25293 = (state_25295[(2)]);
var state_25295__$1 = state_25295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25295__$1,inst_25293);
} else {
if((state_val_25296 === (4))){
var inst_25285 = (state_25295[(2)]);
var inst_25286 = async.call(null,inst_25285);
var state_25295__$1 = state_25295;
if(cljs.core.truth_(inst_25286)){
var statearr_25298_25430 = state_25295__$1;
(statearr_25298_25430[(1)] = (5));

} else {
var statearr_25299_25431 = state_25295__$1;
(statearr_25299_25431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (5))){
var state_25295__$1 = state_25295;
var statearr_25300_25432 = state_25295__$1;
(statearr_25300_25432[(2)] = null);

(statearr_25300_25432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (6))){
var state_25295__$1 = state_25295;
var statearr_25301_25433 = state_25295__$1;
(statearr_25301_25433[(2)] = null);

(statearr_25301_25433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (7))){
var inst_25291 = (state_25295[(2)]);
var state_25295__$1 = state_25295;
var statearr_25302_25434 = state_25295__$1;
(statearr_25302_25434[(2)] = inst_25291);

(statearr_25302_25434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25415,c__25075__auto___25428,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async))
;
return ((function (__25415,switch__24980__auto__,c__25075__auto___25428,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0 = (function (){
var statearr_25303 = [null,null,null,null,null,null,null];
(statearr_25303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__);

(statearr_25303[(1)] = (1));

return statearr_25303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1 = (function (state_25295){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25304){if((e25304 instanceof Object)){
var ex__24984__auto__ = e25304;
var statearr_25305_25435 = state_25295;
(statearr_25305_25435[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25436 = state_25295;
state_25295 = G__25436;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = function(state_25295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1.call(this,state_25295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__;
})()
;})(__25415,switch__24980__auto__,c__25075__auto___25428,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async))
})();
var state__25077__auto__ = (function (){var statearr_25306 = f__25076__auto__.call(null);
(statearr_25306[(6)] = c__25075__auto___25428);

return statearr_25306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(__25415,c__25075__auto___25428,G__25258_25416,G__25258_25417__$1,n__4607__auto___25414,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25258_25417__$1)].join('')));

}

var G__25437 = (__25415 + (1));
__25415 = G__25437;
continue;
} else {
}
break;
}

var c__25075__auto___25438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___25438,jobs,results,process,async){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___25438,jobs,results,process,async){
return (function (state_25328){
var state_val_25329 = (state_25328[(1)]);
if((state_val_25329 === (7))){
var inst_25324 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
var statearr_25330_25439 = state_25328__$1;
(statearr_25330_25439[(2)] = inst_25324);

(statearr_25330_25439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (1))){
var state_25328__$1 = state_25328;
var statearr_25331_25440 = state_25328__$1;
(statearr_25331_25440[(2)] = null);

(statearr_25331_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (4))){
var inst_25309 = (state_25328[(7)]);
var inst_25309__$1 = (state_25328[(2)]);
var inst_25310 = (inst_25309__$1 == null);
var state_25328__$1 = (function (){var statearr_25332 = state_25328;
(statearr_25332[(7)] = inst_25309__$1);

return statearr_25332;
})();
if(cljs.core.truth_(inst_25310)){
var statearr_25333_25441 = state_25328__$1;
(statearr_25333_25441[(1)] = (5));

} else {
var statearr_25334_25442 = state_25328__$1;
(statearr_25334_25442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (6))){
var inst_25309 = (state_25328[(7)]);
var inst_25314 = (state_25328[(8)]);
var inst_25314__$1 = cljs.core.async.chan.call(null,(1));
var inst_25315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25316 = [inst_25309,inst_25314__$1];
var inst_25317 = (new cljs.core.PersistentVector(null,2,(5),inst_25315,inst_25316,null));
var state_25328__$1 = (function (){var statearr_25335 = state_25328;
(statearr_25335[(8)] = inst_25314__$1);

return statearr_25335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25328__$1,(8),jobs,inst_25317);
} else {
if((state_val_25329 === (3))){
var inst_25326 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25328__$1,inst_25326);
} else {
if((state_val_25329 === (2))){
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25328__$1,(4),from);
} else {
if((state_val_25329 === (9))){
var inst_25321 = (state_25328[(2)]);
var state_25328__$1 = (function (){var statearr_25336 = state_25328;
(statearr_25336[(9)] = inst_25321);

return statearr_25336;
})();
var statearr_25337_25443 = state_25328__$1;
(statearr_25337_25443[(2)] = null);

(statearr_25337_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (5))){
var inst_25312 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25328__$1 = state_25328;
var statearr_25338_25444 = state_25328__$1;
(statearr_25338_25444[(2)] = inst_25312);

(statearr_25338_25444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25329 === (8))){
var inst_25314 = (state_25328[(8)]);
var inst_25319 = (state_25328[(2)]);
var state_25328__$1 = (function (){var statearr_25339 = state_25328;
(statearr_25339[(10)] = inst_25319);

return statearr_25339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25328__$1,(9),results,inst_25314);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___25438,jobs,results,process,async))
;
return ((function (switch__24980__auto__,c__25075__auto___25438,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0 = (function (){
var statearr_25340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__);

(statearr_25340[(1)] = (1));

return statearr_25340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1 = (function (state_25328){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25341){if((e25341 instanceof Object)){
var ex__24984__auto__ = e25341;
var statearr_25342_25445 = state_25328;
(statearr_25342_25445[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25446 = state_25328;
state_25328 = G__25446;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = function(state_25328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1.call(this,state_25328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___25438,jobs,results,process,async))
})();
var state__25077__auto__ = (function (){var statearr_25343 = f__25076__auto__.call(null);
(statearr_25343[(6)] = c__25075__auto___25438);

return statearr_25343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___25438,jobs,results,process,async))
);


var c__25075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto__,jobs,results,process,async){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto__,jobs,results,process,async){
return (function (state_25381){
var state_val_25382 = (state_25381[(1)]);
if((state_val_25382 === (7))){
var inst_25377 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
var statearr_25383_25447 = state_25381__$1;
(statearr_25383_25447[(2)] = inst_25377);

(statearr_25383_25447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (20))){
var state_25381__$1 = state_25381;
var statearr_25384_25448 = state_25381__$1;
(statearr_25384_25448[(2)] = null);

(statearr_25384_25448[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (1))){
var state_25381__$1 = state_25381;
var statearr_25385_25449 = state_25381__$1;
(statearr_25385_25449[(2)] = null);

(statearr_25385_25449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (4))){
var inst_25346 = (state_25381[(7)]);
var inst_25346__$1 = (state_25381[(2)]);
var inst_25347 = (inst_25346__$1 == null);
var state_25381__$1 = (function (){var statearr_25386 = state_25381;
(statearr_25386[(7)] = inst_25346__$1);

return statearr_25386;
})();
if(cljs.core.truth_(inst_25347)){
var statearr_25387_25450 = state_25381__$1;
(statearr_25387_25450[(1)] = (5));

} else {
var statearr_25388_25451 = state_25381__$1;
(statearr_25388_25451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (15))){
var inst_25359 = (state_25381[(8)]);
var state_25381__$1 = state_25381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25381__$1,(18),to,inst_25359);
} else {
if((state_val_25382 === (21))){
var inst_25372 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
var statearr_25389_25452 = state_25381__$1;
(statearr_25389_25452[(2)] = inst_25372);

(statearr_25389_25452[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (13))){
var inst_25374 = (state_25381[(2)]);
var state_25381__$1 = (function (){var statearr_25390 = state_25381;
(statearr_25390[(9)] = inst_25374);

return statearr_25390;
})();
var statearr_25391_25453 = state_25381__$1;
(statearr_25391_25453[(2)] = null);

(statearr_25391_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (6))){
var inst_25346 = (state_25381[(7)]);
var state_25381__$1 = state_25381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25381__$1,(11),inst_25346);
} else {
if((state_val_25382 === (17))){
var inst_25367 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
if(cljs.core.truth_(inst_25367)){
var statearr_25392_25454 = state_25381__$1;
(statearr_25392_25454[(1)] = (19));

} else {
var statearr_25393_25455 = state_25381__$1;
(statearr_25393_25455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (3))){
var inst_25379 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25381__$1,inst_25379);
} else {
if((state_val_25382 === (12))){
var inst_25356 = (state_25381[(10)]);
var state_25381__$1 = state_25381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25381__$1,(14),inst_25356);
} else {
if((state_val_25382 === (2))){
var state_25381__$1 = state_25381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25381__$1,(4),results);
} else {
if((state_val_25382 === (19))){
var state_25381__$1 = state_25381;
var statearr_25394_25456 = state_25381__$1;
(statearr_25394_25456[(2)] = null);

(statearr_25394_25456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (11))){
var inst_25356 = (state_25381[(2)]);
var state_25381__$1 = (function (){var statearr_25395 = state_25381;
(statearr_25395[(10)] = inst_25356);

return statearr_25395;
})();
var statearr_25396_25457 = state_25381__$1;
(statearr_25396_25457[(2)] = null);

(statearr_25396_25457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (9))){
var state_25381__$1 = state_25381;
var statearr_25397_25458 = state_25381__$1;
(statearr_25397_25458[(2)] = null);

(statearr_25397_25458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (5))){
var state_25381__$1 = state_25381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25398_25459 = state_25381__$1;
(statearr_25398_25459[(1)] = (8));

} else {
var statearr_25399_25460 = state_25381__$1;
(statearr_25399_25460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (14))){
var inst_25361 = (state_25381[(11)]);
var inst_25359 = (state_25381[(8)]);
var inst_25359__$1 = (state_25381[(2)]);
var inst_25360 = (inst_25359__$1 == null);
var inst_25361__$1 = cljs.core.not.call(null,inst_25360);
var state_25381__$1 = (function (){var statearr_25400 = state_25381;
(statearr_25400[(11)] = inst_25361__$1);

(statearr_25400[(8)] = inst_25359__$1);

return statearr_25400;
})();
if(inst_25361__$1){
var statearr_25401_25461 = state_25381__$1;
(statearr_25401_25461[(1)] = (15));

} else {
var statearr_25402_25462 = state_25381__$1;
(statearr_25402_25462[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (16))){
var inst_25361 = (state_25381[(11)]);
var state_25381__$1 = state_25381;
var statearr_25403_25463 = state_25381__$1;
(statearr_25403_25463[(2)] = inst_25361);

(statearr_25403_25463[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (10))){
var inst_25353 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
var statearr_25404_25464 = state_25381__$1;
(statearr_25404_25464[(2)] = inst_25353);

(statearr_25404_25464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (18))){
var inst_25364 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
var statearr_25405_25465 = state_25381__$1;
(statearr_25405_25465[(2)] = inst_25364);

(statearr_25405_25465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25382 === (8))){
var inst_25350 = cljs.core.async.close_BANG_.call(null,to);
var state_25381__$1 = state_25381;
var statearr_25406_25466 = state_25381__$1;
(statearr_25406_25466[(2)] = inst_25350);

(statearr_25406_25466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto__,jobs,results,process,async))
;
return ((function (switch__24980__auto__,c__25075__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0 = (function (){
var statearr_25407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__);

(statearr_25407[(1)] = (1));

return statearr_25407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1 = (function (state_25381){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25408){if((e25408 instanceof Object)){
var ex__24984__auto__ = e25408;
var statearr_25409_25467 = state_25381;
(statearr_25409_25467[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25468 = state_25381;
state_25381 = G__25468;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__ = function(state_25381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1.call(this,state_25381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24981__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto__,jobs,results,process,async))
})();
var state__25077__auto__ = (function (){var statearr_25410 = f__25076__auto__.call(null);
(statearr_25410[(6)] = c__25075__auto__);

return statearr_25410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto__,jobs,results,process,async))
);

return c__25075__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25470 = arguments.length;
switch (G__25470) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25473 = arguments.length;
switch (G__25473) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25476 = arguments.length;
switch (G__25476) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25075__auto___25525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___25525,tc,fc){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___25525,tc,fc){
return (function (state_25502){
var state_val_25503 = (state_25502[(1)]);
if((state_val_25503 === (7))){
var inst_25498 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25504_25526 = state_25502__$1;
(statearr_25504_25526[(2)] = inst_25498);

(statearr_25504_25526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (1))){
var state_25502__$1 = state_25502;
var statearr_25505_25527 = state_25502__$1;
(statearr_25505_25527[(2)] = null);

(statearr_25505_25527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (4))){
var inst_25479 = (state_25502[(7)]);
var inst_25479__$1 = (state_25502[(2)]);
var inst_25480 = (inst_25479__$1 == null);
var state_25502__$1 = (function (){var statearr_25506 = state_25502;
(statearr_25506[(7)] = inst_25479__$1);

return statearr_25506;
})();
if(cljs.core.truth_(inst_25480)){
var statearr_25507_25528 = state_25502__$1;
(statearr_25507_25528[(1)] = (5));

} else {
var statearr_25508_25529 = state_25502__$1;
(statearr_25508_25529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (13))){
var state_25502__$1 = state_25502;
var statearr_25509_25530 = state_25502__$1;
(statearr_25509_25530[(2)] = null);

(statearr_25509_25530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (6))){
var inst_25479 = (state_25502[(7)]);
var inst_25485 = p.call(null,inst_25479);
var state_25502__$1 = state_25502;
if(cljs.core.truth_(inst_25485)){
var statearr_25510_25531 = state_25502__$1;
(statearr_25510_25531[(1)] = (9));

} else {
var statearr_25511_25532 = state_25502__$1;
(statearr_25511_25532[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (3))){
var inst_25500 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25502__$1,inst_25500);
} else {
if((state_val_25503 === (12))){
var state_25502__$1 = state_25502;
var statearr_25512_25533 = state_25502__$1;
(statearr_25512_25533[(2)] = null);

(statearr_25512_25533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (2))){
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25502__$1,(4),ch);
} else {
if((state_val_25503 === (11))){
var inst_25479 = (state_25502[(7)]);
var inst_25489 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25502__$1,(8),inst_25489,inst_25479);
} else {
if((state_val_25503 === (9))){
var state_25502__$1 = state_25502;
var statearr_25513_25534 = state_25502__$1;
(statearr_25513_25534[(2)] = tc);

(statearr_25513_25534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (5))){
var inst_25482 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25483 = cljs.core.async.close_BANG_.call(null,fc);
var state_25502__$1 = (function (){var statearr_25514 = state_25502;
(statearr_25514[(8)] = inst_25482);

return statearr_25514;
})();
var statearr_25515_25535 = state_25502__$1;
(statearr_25515_25535[(2)] = inst_25483);

(statearr_25515_25535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (14))){
var inst_25496 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25516_25536 = state_25502__$1;
(statearr_25516_25536[(2)] = inst_25496);

(statearr_25516_25536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (10))){
var state_25502__$1 = state_25502;
var statearr_25517_25537 = state_25502__$1;
(statearr_25517_25537[(2)] = fc);

(statearr_25517_25537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (8))){
var inst_25491 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
if(cljs.core.truth_(inst_25491)){
var statearr_25518_25538 = state_25502__$1;
(statearr_25518_25538[(1)] = (12));

} else {
var statearr_25519_25539 = state_25502__$1;
(statearr_25519_25539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___25525,tc,fc))
;
return ((function (switch__24980__auto__,c__25075__auto___25525,tc,fc){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_25520 = [null,null,null,null,null,null,null,null,null];
(statearr_25520[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_25520[(1)] = (1));

return statearr_25520;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_25502){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25521){if((e25521 instanceof Object)){
var ex__24984__auto__ = e25521;
var statearr_25522_25540 = state_25502;
(statearr_25522_25540[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25541 = state_25502;
state_25502 = G__25541;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_25502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_25502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___25525,tc,fc))
})();
var state__25077__auto__ = (function (){var statearr_25523 = f__25076__auto__.call(null);
(statearr_25523[(6)] = c__25075__auto___25525);

return statearr_25523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___25525,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto__){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto__){
return (function (state_25562){
var state_val_25563 = (state_25562[(1)]);
if((state_val_25563 === (7))){
var inst_25558 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25564_25582 = state_25562__$1;
(statearr_25564_25582[(2)] = inst_25558);

(statearr_25564_25582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (1))){
var inst_25542 = init;
var state_25562__$1 = (function (){var statearr_25565 = state_25562;
(statearr_25565[(7)] = inst_25542);

return statearr_25565;
})();
var statearr_25566_25583 = state_25562__$1;
(statearr_25566_25583[(2)] = null);

(statearr_25566_25583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (4))){
var inst_25545 = (state_25562[(8)]);
var inst_25545__$1 = (state_25562[(2)]);
var inst_25546 = (inst_25545__$1 == null);
var state_25562__$1 = (function (){var statearr_25567 = state_25562;
(statearr_25567[(8)] = inst_25545__$1);

return statearr_25567;
})();
if(cljs.core.truth_(inst_25546)){
var statearr_25568_25584 = state_25562__$1;
(statearr_25568_25584[(1)] = (5));

} else {
var statearr_25569_25585 = state_25562__$1;
(statearr_25569_25585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (6))){
var inst_25545 = (state_25562[(8)]);
var inst_25542 = (state_25562[(7)]);
var inst_25549 = (state_25562[(9)]);
var inst_25549__$1 = f.call(null,inst_25542,inst_25545);
var inst_25550 = cljs.core.reduced_QMARK_.call(null,inst_25549__$1);
var state_25562__$1 = (function (){var statearr_25570 = state_25562;
(statearr_25570[(9)] = inst_25549__$1);

return statearr_25570;
})();
if(inst_25550){
var statearr_25571_25586 = state_25562__$1;
(statearr_25571_25586[(1)] = (8));

} else {
var statearr_25572_25587 = state_25562__$1;
(statearr_25572_25587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (3))){
var inst_25560 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25562__$1,inst_25560);
} else {
if((state_val_25563 === (2))){
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25562__$1,(4),ch);
} else {
if((state_val_25563 === (9))){
var inst_25549 = (state_25562[(9)]);
var inst_25542 = inst_25549;
var state_25562__$1 = (function (){var statearr_25573 = state_25562;
(statearr_25573[(7)] = inst_25542);

return statearr_25573;
})();
var statearr_25574_25588 = state_25562__$1;
(statearr_25574_25588[(2)] = null);

(statearr_25574_25588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (5))){
var inst_25542 = (state_25562[(7)]);
var state_25562__$1 = state_25562;
var statearr_25575_25589 = state_25562__$1;
(statearr_25575_25589[(2)] = inst_25542);

(statearr_25575_25589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (10))){
var inst_25556 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25576_25590 = state_25562__$1;
(statearr_25576_25590[(2)] = inst_25556);

(statearr_25576_25590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25563 === (8))){
var inst_25549 = (state_25562[(9)]);
var inst_25552 = cljs.core.deref.call(null,inst_25549);
var state_25562__$1 = state_25562;
var statearr_25577_25591 = state_25562__$1;
(statearr_25577_25591[(2)] = inst_25552);

(statearr_25577_25591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto__))
;
return ((function (switch__24980__auto__,c__25075__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24981__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24981__auto____0 = (function (){
var statearr_25578 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25578[(0)] = cljs$core$async$reduce_$_state_machine__24981__auto__);

(statearr_25578[(1)] = (1));

return statearr_25578;
});
var cljs$core$async$reduce_$_state_machine__24981__auto____1 = (function (state_25562){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25579){if((e25579 instanceof Object)){
var ex__24984__auto__ = e25579;
var statearr_25580_25592 = state_25562;
(statearr_25580_25592[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25593 = state_25562;
state_25562 = G__25593;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24981__auto__ = function(state_25562){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24981__auto____1.call(this,state_25562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24981__auto____0;
cljs$core$async$reduce_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24981__auto____1;
return cljs$core$async$reduce_$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto__))
})();
var state__25077__auto__ = (function (){var statearr_25581 = f__25076__auto__.call(null);
(statearr_25581[(6)] = c__25075__auto__);

return statearr_25581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto__))
);

return c__25075__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto__,f__$1){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto__,f__$1){
return (function (state_25599){
var state_val_25600 = (state_25599[(1)]);
if((state_val_25600 === (1))){
var inst_25594 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25599__$1,(2),inst_25594);
} else {
if((state_val_25600 === (2))){
var inst_25596 = (state_25599[(2)]);
var inst_25597 = f__$1.call(null,inst_25596);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25599__$1,inst_25597);
} else {
return null;
}
}
});})(c__25075__auto__,f__$1))
;
return ((function (switch__24980__auto__,c__25075__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24981__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24981__auto____0 = (function (){
var statearr_25601 = [null,null,null,null,null,null,null];
(statearr_25601[(0)] = cljs$core$async$transduce_$_state_machine__24981__auto__);

(statearr_25601[(1)] = (1));

return statearr_25601;
});
var cljs$core$async$transduce_$_state_machine__24981__auto____1 = (function (state_25599){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25602){if((e25602 instanceof Object)){
var ex__24984__auto__ = e25602;
var statearr_25603_25605 = state_25599;
(statearr_25603_25605[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25606 = state_25599;
state_25599 = G__25606;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24981__auto__ = function(state_25599){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24981__auto____1.call(this,state_25599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24981__auto____0;
cljs$core$async$transduce_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24981__auto____1;
return cljs$core$async$transduce_$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto__,f__$1))
})();
var state__25077__auto__ = (function (){var statearr_25604 = f__25076__auto__.call(null);
(statearr_25604[(6)] = c__25075__auto__);

return statearr_25604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto__,f__$1))
);

return c__25075__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25608 = arguments.length;
switch (G__25608) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto__){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto__){
return (function (state_25633){
var state_val_25634 = (state_25633[(1)]);
if((state_val_25634 === (7))){
var inst_25615 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25635_25656 = state_25633__$1;
(statearr_25635_25656[(2)] = inst_25615);

(statearr_25635_25656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (1))){
var inst_25609 = cljs.core.seq.call(null,coll);
var inst_25610 = inst_25609;
var state_25633__$1 = (function (){var statearr_25636 = state_25633;
(statearr_25636[(7)] = inst_25610);

return statearr_25636;
})();
var statearr_25637_25657 = state_25633__$1;
(statearr_25637_25657[(2)] = null);

(statearr_25637_25657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (4))){
var inst_25610 = (state_25633[(7)]);
var inst_25613 = cljs.core.first.call(null,inst_25610);
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25633__$1,(7),ch,inst_25613);
} else {
if((state_val_25634 === (13))){
var inst_25627 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25638_25658 = state_25633__$1;
(statearr_25638_25658[(2)] = inst_25627);

(statearr_25638_25658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (6))){
var inst_25618 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
if(cljs.core.truth_(inst_25618)){
var statearr_25639_25659 = state_25633__$1;
(statearr_25639_25659[(1)] = (8));

} else {
var statearr_25640_25660 = state_25633__$1;
(statearr_25640_25660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (3))){
var inst_25631 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25633__$1,inst_25631);
} else {
if((state_val_25634 === (12))){
var state_25633__$1 = state_25633;
var statearr_25641_25661 = state_25633__$1;
(statearr_25641_25661[(2)] = null);

(statearr_25641_25661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (2))){
var inst_25610 = (state_25633[(7)]);
var state_25633__$1 = state_25633;
if(cljs.core.truth_(inst_25610)){
var statearr_25642_25662 = state_25633__$1;
(statearr_25642_25662[(1)] = (4));

} else {
var statearr_25643_25663 = state_25633__$1;
(statearr_25643_25663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (11))){
var inst_25624 = cljs.core.async.close_BANG_.call(null,ch);
var state_25633__$1 = state_25633;
var statearr_25644_25664 = state_25633__$1;
(statearr_25644_25664[(2)] = inst_25624);

(statearr_25644_25664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (9))){
var state_25633__$1 = state_25633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25645_25665 = state_25633__$1;
(statearr_25645_25665[(1)] = (11));

} else {
var statearr_25646_25666 = state_25633__$1;
(statearr_25646_25666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (5))){
var inst_25610 = (state_25633[(7)]);
var state_25633__$1 = state_25633;
var statearr_25647_25667 = state_25633__$1;
(statearr_25647_25667[(2)] = inst_25610);

(statearr_25647_25667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (10))){
var inst_25629 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25648_25668 = state_25633__$1;
(statearr_25648_25668[(2)] = inst_25629);

(statearr_25648_25668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (8))){
var inst_25610 = (state_25633[(7)]);
var inst_25620 = cljs.core.next.call(null,inst_25610);
var inst_25610__$1 = inst_25620;
var state_25633__$1 = (function (){var statearr_25649 = state_25633;
(statearr_25649[(7)] = inst_25610__$1);

return statearr_25649;
})();
var statearr_25650_25669 = state_25633__$1;
(statearr_25650_25669[(2)] = null);

(statearr_25650_25669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto__))
;
return ((function (switch__24980__auto__,c__25075__auto__){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_25651 = [null,null,null,null,null,null,null,null];
(statearr_25651[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_25651[(1)] = (1));

return statearr_25651;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_25633){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25652){if((e25652 instanceof Object)){
var ex__24984__auto__ = e25652;
var statearr_25653_25670 = state_25633;
(statearr_25653_25670[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25671 = state_25633;
state_25633 = G__25671;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_25633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_25633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto__))
})();
var state__25077__auto__ = (function (){var statearr_25654 = f__25076__auto__.call(null);
(statearr_25654[(6)] = c__25075__auto__);

return statearr_25654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto__))
);

return c__25075__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25672 = (function (ch,cs,meta25673){
this.ch = ch;
this.cs = cs;
this.meta25673 = meta25673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25674,meta25673__$1){
var self__ = this;
var _25674__$1 = this;
return (new cljs.core.async.t_cljs$core$async25672(self__.ch,self__.cs,meta25673__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25674){
var self__ = this;
var _25674__$1 = this;
return self__.meta25673;
});})(cs))
;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25672.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25673","meta25673",-827414933,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25672";

cljs.core.async.t_cljs$core$async25672.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25672");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25672.
 */
cljs.core.async.__GT_t_cljs$core$async25672 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25672(ch__$1,cs__$1,meta25673){
return (new cljs.core.async.t_cljs$core$async25672(ch__$1,cs__$1,meta25673));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25672(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25075__auto___25894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___25894,cs,m,dchan,dctr,done){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___25894,cs,m,dchan,dctr,done){
return (function (state_25809){
var state_val_25810 = (state_25809[(1)]);
if((state_val_25810 === (7))){
var inst_25805 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25811_25895 = state_25809__$1;
(statearr_25811_25895[(2)] = inst_25805);

(statearr_25811_25895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (20))){
var inst_25708 = (state_25809[(7)]);
var inst_25720 = cljs.core.first.call(null,inst_25708);
var inst_25721 = cljs.core.nth.call(null,inst_25720,(0),null);
var inst_25722 = cljs.core.nth.call(null,inst_25720,(1),null);
var state_25809__$1 = (function (){var statearr_25812 = state_25809;
(statearr_25812[(8)] = inst_25721);

return statearr_25812;
})();
if(cljs.core.truth_(inst_25722)){
var statearr_25813_25896 = state_25809__$1;
(statearr_25813_25896[(1)] = (22));

} else {
var statearr_25814_25897 = state_25809__$1;
(statearr_25814_25897[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (27))){
var inst_25677 = (state_25809[(9)]);
var inst_25750 = (state_25809[(10)]);
var inst_25757 = (state_25809[(11)]);
var inst_25752 = (state_25809[(12)]);
var inst_25757__$1 = cljs.core._nth.call(null,inst_25750,inst_25752);
var inst_25758 = cljs.core.async.put_BANG_.call(null,inst_25757__$1,inst_25677,done);
var state_25809__$1 = (function (){var statearr_25815 = state_25809;
(statearr_25815[(11)] = inst_25757__$1);

return statearr_25815;
})();
if(cljs.core.truth_(inst_25758)){
var statearr_25816_25898 = state_25809__$1;
(statearr_25816_25898[(1)] = (30));

} else {
var statearr_25817_25899 = state_25809__$1;
(statearr_25817_25899[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (1))){
var state_25809__$1 = state_25809;
var statearr_25818_25900 = state_25809__$1;
(statearr_25818_25900[(2)] = null);

(statearr_25818_25900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (24))){
var inst_25708 = (state_25809[(7)]);
var inst_25727 = (state_25809[(2)]);
var inst_25728 = cljs.core.next.call(null,inst_25708);
var inst_25686 = inst_25728;
var inst_25687 = null;
var inst_25688 = (0);
var inst_25689 = (0);
var state_25809__$1 = (function (){var statearr_25819 = state_25809;
(statearr_25819[(13)] = inst_25686);

(statearr_25819[(14)] = inst_25689);

(statearr_25819[(15)] = inst_25727);

(statearr_25819[(16)] = inst_25687);

(statearr_25819[(17)] = inst_25688);

return statearr_25819;
})();
var statearr_25820_25901 = state_25809__$1;
(statearr_25820_25901[(2)] = null);

(statearr_25820_25901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (39))){
var state_25809__$1 = state_25809;
var statearr_25824_25902 = state_25809__$1;
(statearr_25824_25902[(2)] = null);

(statearr_25824_25902[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (4))){
var inst_25677 = (state_25809[(9)]);
var inst_25677__$1 = (state_25809[(2)]);
var inst_25678 = (inst_25677__$1 == null);
var state_25809__$1 = (function (){var statearr_25825 = state_25809;
(statearr_25825[(9)] = inst_25677__$1);

return statearr_25825;
})();
if(cljs.core.truth_(inst_25678)){
var statearr_25826_25903 = state_25809__$1;
(statearr_25826_25903[(1)] = (5));

} else {
var statearr_25827_25904 = state_25809__$1;
(statearr_25827_25904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (15))){
var inst_25686 = (state_25809[(13)]);
var inst_25689 = (state_25809[(14)]);
var inst_25687 = (state_25809[(16)]);
var inst_25688 = (state_25809[(17)]);
var inst_25704 = (state_25809[(2)]);
var inst_25705 = (inst_25689 + (1));
var tmp25821 = inst_25686;
var tmp25822 = inst_25687;
var tmp25823 = inst_25688;
var inst_25686__$1 = tmp25821;
var inst_25687__$1 = tmp25822;
var inst_25688__$1 = tmp25823;
var inst_25689__$1 = inst_25705;
var state_25809__$1 = (function (){var statearr_25828 = state_25809;
(statearr_25828[(18)] = inst_25704);

(statearr_25828[(13)] = inst_25686__$1);

(statearr_25828[(14)] = inst_25689__$1);

(statearr_25828[(16)] = inst_25687__$1);

(statearr_25828[(17)] = inst_25688__$1);

return statearr_25828;
})();
var statearr_25829_25905 = state_25809__$1;
(statearr_25829_25905[(2)] = null);

(statearr_25829_25905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (21))){
var inst_25731 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25833_25906 = state_25809__$1;
(statearr_25833_25906[(2)] = inst_25731);

(statearr_25833_25906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (31))){
var inst_25757 = (state_25809[(11)]);
var inst_25761 = done.call(null,null);
var inst_25762 = cljs.core.async.untap_STAR_.call(null,m,inst_25757);
var state_25809__$1 = (function (){var statearr_25834 = state_25809;
(statearr_25834[(19)] = inst_25761);

return statearr_25834;
})();
var statearr_25835_25907 = state_25809__$1;
(statearr_25835_25907[(2)] = inst_25762);

(statearr_25835_25907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (32))){
var inst_25750 = (state_25809[(10)]);
var inst_25749 = (state_25809[(20)]);
var inst_25752 = (state_25809[(12)]);
var inst_25751 = (state_25809[(21)]);
var inst_25764 = (state_25809[(2)]);
var inst_25765 = (inst_25752 + (1));
var tmp25830 = inst_25750;
var tmp25831 = inst_25749;
var tmp25832 = inst_25751;
var inst_25749__$1 = tmp25831;
var inst_25750__$1 = tmp25830;
var inst_25751__$1 = tmp25832;
var inst_25752__$1 = inst_25765;
var state_25809__$1 = (function (){var statearr_25836 = state_25809;
(statearr_25836[(10)] = inst_25750__$1);

(statearr_25836[(20)] = inst_25749__$1);

(statearr_25836[(12)] = inst_25752__$1);

(statearr_25836[(21)] = inst_25751__$1);

(statearr_25836[(22)] = inst_25764);

return statearr_25836;
})();
var statearr_25837_25908 = state_25809__$1;
(statearr_25837_25908[(2)] = null);

(statearr_25837_25908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (40))){
var inst_25777 = (state_25809[(23)]);
var inst_25781 = done.call(null,null);
var inst_25782 = cljs.core.async.untap_STAR_.call(null,m,inst_25777);
var state_25809__$1 = (function (){var statearr_25838 = state_25809;
(statearr_25838[(24)] = inst_25781);

return statearr_25838;
})();
var statearr_25839_25909 = state_25809__$1;
(statearr_25839_25909[(2)] = inst_25782);

(statearr_25839_25909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (33))){
var inst_25768 = (state_25809[(25)]);
var inst_25770 = cljs.core.chunked_seq_QMARK_.call(null,inst_25768);
var state_25809__$1 = state_25809;
if(inst_25770){
var statearr_25840_25910 = state_25809__$1;
(statearr_25840_25910[(1)] = (36));

} else {
var statearr_25841_25911 = state_25809__$1;
(statearr_25841_25911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (13))){
var inst_25698 = (state_25809[(26)]);
var inst_25701 = cljs.core.async.close_BANG_.call(null,inst_25698);
var state_25809__$1 = state_25809;
var statearr_25842_25912 = state_25809__$1;
(statearr_25842_25912[(2)] = inst_25701);

(statearr_25842_25912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (22))){
var inst_25721 = (state_25809[(8)]);
var inst_25724 = cljs.core.async.close_BANG_.call(null,inst_25721);
var state_25809__$1 = state_25809;
var statearr_25843_25913 = state_25809__$1;
(statearr_25843_25913[(2)] = inst_25724);

(statearr_25843_25913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (36))){
var inst_25768 = (state_25809[(25)]);
var inst_25772 = cljs.core.chunk_first.call(null,inst_25768);
var inst_25773 = cljs.core.chunk_rest.call(null,inst_25768);
var inst_25774 = cljs.core.count.call(null,inst_25772);
var inst_25749 = inst_25773;
var inst_25750 = inst_25772;
var inst_25751 = inst_25774;
var inst_25752 = (0);
var state_25809__$1 = (function (){var statearr_25844 = state_25809;
(statearr_25844[(10)] = inst_25750);

(statearr_25844[(20)] = inst_25749);

(statearr_25844[(12)] = inst_25752);

(statearr_25844[(21)] = inst_25751);

return statearr_25844;
})();
var statearr_25845_25914 = state_25809__$1;
(statearr_25845_25914[(2)] = null);

(statearr_25845_25914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (41))){
var inst_25768 = (state_25809[(25)]);
var inst_25784 = (state_25809[(2)]);
var inst_25785 = cljs.core.next.call(null,inst_25768);
var inst_25749 = inst_25785;
var inst_25750 = null;
var inst_25751 = (0);
var inst_25752 = (0);
var state_25809__$1 = (function (){var statearr_25846 = state_25809;
(statearr_25846[(10)] = inst_25750);

(statearr_25846[(20)] = inst_25749);

(statearr_25846[(12)] = inst_25752);

(statearr_25846[(27)] = inst_25784);

(statearr_25846[(21)] = inst_25751);

return statearr_25846;
})();
var statearr_25847_25915 = state_25809__$1;
(statearr_25847_25915[(2)] = null);

(statearr_25847_25915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (43))){
var state_25809__$1 = state_25809;
var statearr_25848_25916 = state_25809__$1;
(statearr_25848_25916[(2)] = null);

(statearr_25848_25916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (29))){
var inst_25793 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25849_25917 = state_25809__$1;
(statearr_25849_25917[(2)] = inst_25793);

(statearr_25849_25917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (44))){
var inst_25802 = (state_25809[(2)]);
var state_25809__$1 = (function (){var statearr_25850 = state_25809;
(statearr_25850[(28)] = inst_25802);

return statearr_25850;
})();
var statearr_25851_25918 = state_25809__$1;
(statearr_25851_25918[(2)] = null);

(statearr_25851_25918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (6))){
var inst_25741 = (state_25809[(29)]);
var inst_25740 = cljs.core.deref.call(null,cs);
var inst_25741__$1 = cljs.core.keys.call(null,inst_25740);
var inst_25742 = cljs.core.count.call(null,inst_25741__$1);
var inst_25743 = cljs.core.reset_BANG_.call(null,dctr,inst_25742);
var inst_25748 = cljs.core.seq.call(null,inst_25741__$1);
var inst_25749 = inst_25748;
var inst_25750 = null;
var inst_25751 = (0);
var inst_25752 = (0);
var state_25809__$1 = (function (){var statearr_25852 = state_25809;
(statearr_25852[(30)] = inst_25743);

(statearr_25852[(10)] = inst_25750);

(statearr_25852[(20)] = inst_25749);

(statearr_25852[(12)] = inst_25752);

(statearr_25852[(29)] = inst_25741__$1);

(statearr_25852[(21)] = inst_25751);

return statearr_25852;
})();
var statearr_25853_25919 = state_25809__$1;
(statearr_25853_25919[(2)] = null);

(statearr_25853_25919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (28))){
var inst_25768 = (state_25809[(25)]);
var inst_25749 = (state_25809[(20)]);
var inst_25768__$1 = cljs.core.seq.call(null,inst_25749);
var state_25809__$1 = (function (){var statearr_25854 = state_25809;
(statearr_25854[(25)] = inst_25768__$1);

return statearr_25854;
})();
if(inst_25768__$1){
var statearr_25855_25920 = state_25809__$1;
(statearr_25855_25920[(1)] = (33));

} else {
var statearr_25856_25921 = state_25809__$1;
(statearr_25856_25921[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (25))){
var inst_25752 = (state_25809[(12)]);
var inst_25751 = (state_25809[(21)]);
var inst_25754 = (inst_25752 < inst_25751);
var inst_25755 = inst_25754;
var state_25809__$1 = state_25809;
if(cljs.core.truth_(inst_25755)){
var statearr_25857_25922 = state_25809__$1;
(statearr_25857_25922[(1)] = (27));

} else {
var statearr_25858_25923 = state_25809__$1;
(statearr_25858_25923[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (34))){
var state_25809__$1 = state_25809;
var statearr_25859_25924 = state_25809__$1;
(statearr_25859_25924[(2)] = null);

(statearr_25859_25924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (17))){
var state_25809__$1 = state_25809;
var statearr_25860_25925 = state_25809__$1;
(statearr_25860_25925[(2)] = null);

(statearr_25860_25925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (3))){
var inst_25807 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25809__$1,inst_25807);
} else {
if((state_val_25810 === (12))){
var inst_25736 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25861_25926 = state_25809__$1;
(statearr_25861_25926[(2)] = inst_25736);

(statearr_25861_25926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (2))){
var state_25809__$1 = state_25809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25809__$1,(4),ch);
} else {
if((state_val_25810 === (23))){
var state_25809__$1 = state_25809;
var statearr_25862_25927 = state_25809__$1;
(statearr_25862_25927[(2)] = null);

(statearr_25862_25927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (35))){
var inst_25791 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25863_25928 = state_25809__$1;
(statearr_25863_25928[(2)] = inst_25791);

(statearr_25863_25928[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (19))){
var inst_25708 = (state_25809[(7)]);
var inst_25712 = cljs.core.chunk_first.call(null,inst_25708);
var inst_25713 = cljs.core.chunk_rest.call(null,inst_25708);
var inst_25714 = cljs.core.count.call(null,inst_25712);
var inst_25686 = inst_25713;
var inst_25687 = inst_25712;
var inst_25688 = inst_25714;
var inst_25689 = (0);
var state_25809__$1 = (function (){var statearr_25864 = state_25809;
(statearr_25864[(13)] = inst_25686);

(statearr_25864[(14)] = inst_25689);

(statearr_25864[(16)] = inst_25687);

(statearr_25864[(17)] = inst_25688);

return statearr_25864;
})();
var statearr_25865_25929 = state_25809__$1;
(statearr_25865_25929[(2)] = null);

(statearr_25865_25929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (11))){
var inst_25686 = (state_25809[(13)]);
var inst_25708 = (state_25809[(7)]);
var inst_25708__$1 = cljs.core.seq.call(null,inst_25686);
var state_25809__$1 = (function (){var statearr_25866 = state_25809;
(statearr_25866[(7)] = inst_25708__$1);

return statearr_25866;
})();
if(inst_25708__$1){
var statearr_25867_25930 = state_25809__$1;
(statearr_25867_25930[(1)] = (16));

} else {
var statearr_25868_25931 = state_25809__$1;
(statearr_25868_25931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (9))){
var inst_25738 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25869_25932 = state_25809__$1;
(statearr_25869_25932[(2)] = inst_25738);

(statearr_25869_25932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (5))){
var inst_25684 = cljs.core.deref.call(null,cs);
var inst_25685 = cljs.core.seq.call(null,inst_25684);
var inst_25686 = inst_25685;
var inst_25687 = null;
var inst_25688 = (0);
var inst_25689 = (0);
var state_25809__$1 = (function (){var statearr_25870 = state_25809;
(statearr_25870[(13)] = inst_25686);

(statearr_25870[(14)] = inst_25689);

(statearr_25870[(16)] = inst_25687);

(statearr_25870[(17)] = inst_25688);

return statearr_25870;
})();
var statearr_25871_25933 = state_25809__$1;
(statearr_25871_25933[(2)] = null);

(statearr_25871_25933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (14))){
var state_25809__$1 = state_25809;
var statearr_25872_25934 = state_25809__$1;
(statearr_25872_25934[(2)] = null);

(statearr_25872_25934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (45))){
var inst_25799 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25873_25935 = state_25809__$1;
(statearr_25873_25935[(2)] = inst_25799);

(statearr_25873_25935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (26))){
var inst_25741 = (state_25809[(29)]);
var inst_25795 = (state_25809[(2)]);
var inst_25796 = cljs.core.seq.call(null,inst_25741);
var state_25809__$1 = (function (){var statearr_25874 = state_25809;
(statearr_25874[(31)] = inst_25795);

return statearr_25874;
})();
if(inst_25796){
var statearr_25875_25936 = state_25809__$1;
(statearr_25875_25936[(1)] = (42));

} else {
var statearr_25876_25937 = state_25809__$1;
(statearr_25876_25937[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (16))){
var inst_25708 = (state_25809[(7)]);
var inst_25710 = cljs.core.chunked_seq_QMARK_.call(null,inst_25708);
var state_25809__$1 = state_25809;
if(inst_25710){
var statearr_25877_25938 = state_25809__$1;
(statearr_25877_25938[(1)] = (19));

} else {
var statearr_25878_25939 = state_25809__$1;
(statearr_25878_25939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (38))){
var inst_25788 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25879_25940 = state_25809__$1;
(statearr_25879_25940[(2)] = inst_25788);

(statearr_25879_25940[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (30))){
var state_25809__$1 = state_25809;
var statearr_25880_25941 = state_25809__$1;
(statearr_25880_25941[(2)] = null);

(statearr_25880_25941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (10))){
var inst_25689 = (state_25809[(14)]);
var inst_25687 = (state_25809[(16)]);
var inst_25697 = cljs.core._nth.call(null,inst_25687,inst_25689);
var inst_25698 = cljs.core.nth.call(null,inst_25697,(0),null);
var inst_25699 = cljs.core.nth.call(null,inst_25697,(1),null);
var state_25809__$1 = (function (){var statearr_25881 = state_25809;
(statearr_25881[(26)] = inst_25698);

return statearr_25881;
})();
if(cljs.core.truth_(inst_25699)){
var statearr_25882_25942 = state_25809__$1;
(statearr_25882_25942[(1)] = (13));

} else {
var statearr_25883_25943 = state_25809__$1;
(statearr_25883_25943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (18))){
var inst_25734 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25884_25944 = state_25809__$1;
(statearr_25884_25944[(2)] = inst_25734);

(statearr_25884_25944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (42))){
var state_25809__$1 = state_25809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25809__$1,(45),dchan);
} else {
if((state_val_25810 === (37))){
var inst_25677 = (state_25809[(9)]);
var inst_25777 = (state_25809[(23)]);
var inst_25768 = (state_25809[(25)]);
var inst_25777__$1 = cljs.core.first.call(null,inst_25768);
var inst_25778 = cljs.core.async.put_BANG_.call(null,inst_25777__$1,inst_25677,done);
var state_25809__$1 = (function (){var statearr_25885 = state_25809;
(statearr_25885[(23)] = inst_25777__$1);

return statearr_25885;
})();
if(cljs.core.truth_(inst_25778)){
var statearr_25886_25945 = state_25809__$1;
(statearr_25886_25945[(1)] = (39));

} else {
var statearr_25887_25946 = state_25809__$1;
(statearr_25887_25946[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (8))){
var inst_25689 = (state_25809[(14)]);
var inst_25688 = (state_25809[(17)]);
var inst_25691 = (inst_25689 < inst_25688);
var inst_25692 = inst_25691;
var state_25809__$1 = state_25809;
if(cljs.core.truth_(inst_25692)){
var statearr_25888_25947 = state_25809__$1;
(statearr_25888_25947[(1)] = (10));

} else {
var statearr_25889_25948 = state_25809__$1;
(statearr_25889_25948[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___25894,cs,m,dchan,dctr,done))
;
return ((function (switch__24980__auto__,c__25075__auto___25894,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24981__auto__ = null;
var cljs$core$async$mult_$_state_machine__24981__auto____0 = (function (){
var statearr_25890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25890[(0)] = cljs$core$async$mult_$_state_machine__24981__auto__);

(statearr_25890[(1)] = (1));

return statearr_25890;
});
var cljs$core$async$mult_$_state_machine__24981__auto____1 = (function (state_25809){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_25809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e25891){if((e25891 instanceof Object)){
var ex__24984__auto__ = e25891;
var statearr_25892_25949 = state_25809;
(statearr_25892_25949[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25950 = state_25809;
state_25809 = G__25950;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24981__auto__ = function(state_25809){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24981__auto____1.call(this,state_25809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24981__auto____0;
cljs$core$async$mult_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24981__auto____1;
return cljs$core$async$mult_$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___25894,cs,m,dchan,dctr,done))
})();
var state__25077__auto__ = (function (){var statearr_25893 = f__25076__auto__.call(null);
(statearr_25893[(6)] = c__25075__auto___25894);

return statearr_25893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___25894,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25952 = arguments.length;
switch (G__25952) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25964 = arguments.length;
var i__4731__auto___25965 = (0);
while(true){
if((i__4731__auto___25965 < len__4730__auto___25964)){
args__4736__auto__.push((arguments[i__4731__auto___25965]));

var G__25966 = (i__4731__auto___25965 + (1));
i__4731__auto___25965 = G__25966;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25958){
var map__25959 = p__25958;
var map__25959__$1 = (((((!((map__25959 == null))))?(((((map__25959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25959):map__25959);
var opts = map__25959__$1;
var statearr_25961_25967 = state;
(statearr_25961_25967[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__25959,map__25959__$1,opts){
return (function (val){
var statearr_25962_25968 = state;
(statearr_25962_25968[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25959,map__25959__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25963_25969 = state;
(statearr_25963_25969[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25954){
var G__25955 = cljs.core.first.call(null,seq25954);
var seq25954__$1 = cljs.core.next.call(null,seq25954);
var G__25956 = cljs.core.first.call(null,seq25954__$1);
var seq25954__$2 = cljs.core.next.call(null,seq25954__$1);
var G__25957 = cljs.core.first.call(null,seq25954__$2);
var seq25954__$3 = cljs.core.next.call(null,seq25954__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25955,G__25956,G__25957,seq25954__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25970 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25971){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25971 = meta25971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25972,meta25971__$1){
var self__ = this;
var _25972__$1 = this;
return (new cljs.core.async.t_cljs$core$async25970(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25971__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25972){
var self__ = this;
var _25972__$1 = this;
return self__.meta25971;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25971","meta25971",-1841489365,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25970";

cljs.core.async.t_cljs$core$async25970.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25970");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25970.
 */
cljs.core.async.__GT_t_cljs$core$async25970 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25970(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25971){
return (new cljs.core.async.t_cljs$core$async25970(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25971));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25970(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25075__auto___26134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26074){
var state_val_26075 = (state_26074[(1)]);
if((state_val_26075 === (7))){
var inst_25989 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
var statearr_26076_26135 = state_26074__$1;
(statearr_26076_26135[(2)] = inst_25989);

(statearr_26076_26135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (20))){
var inst_26001 = (state_26074[(7)]);
var state_26074__$1 = state_26074;
var statearr_26077_26136 = state_26074__$1;
(statearr_26077_26136[(2)] = inst_26001);

(statearr_26077_26136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (27))){
var state_26074__$1 = state_26074;
var statearr_26078_26137 = state_26074__$1;
(statearr_26078_26137[(2)] = null);

(statearr_26078_26137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (1))){
var inst_25976 = (state_26074[(8)]);
var inst_25976__$1 = calc_state.call(null);
var inst_25978 = (inst_25976__$1 == null);
var inst_25979 = cljs.core.not.call(null,inst_25978);
var state_26074__$1 = (function (){var statearr_26079 = state_26074;
(statearr_26079[(8)] = inst_25976__$1);

return statearr_26079;
})();
if(inst_25979){
var statearr_26080_26138 = state_26074__$1;
(statearr_26080_26138[(1)] = (2));

} else {
var statearr_26081_26139 = state_26074__$1;
(statearr_26081_26139[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (24))){
var inst_26025 = (state_26074[(9)]);
var inst_26048 = (state_26074[(10)]);
var inst_26034 = (state_26074[(11)]);
var inst_26048__$1 = inst_26025.call(null,inst_26034);
var state_26074__$1 = (function (){var statearr_26082 = state_26074;
(statearr_26082[(10)] = inst_26048__$1);

return statearr_26082;
})();
if(cljs.core.truth_(inst_26048__$1)){
var statearr_26083_26140 = state_26074__$1;
(statearr_26083_26140[(1)] = (29));

} else {
var statearr_26084_26141 = state_26074__$1;
(statearr_26084_26141[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (4))){
var inst_25992 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
if(cljs.core.truth_(inst_25992)){
var statearr_26085_26142 = state_26074__$1;
(statearr_26085_26142[(1)] = (8));

} else {
var statearr_26086_26143 = state_26074__$1;
(statearr_26086_26143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (15))){
var inst_26019 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
if(cljs.core.truth_(inst_26019)){
var statearr_26087_26144 = state_26074__$1;
(statearr_26087_26144[(1)] = (19));

} else {
var statearr_26088_26145 = state_26074__$1;
(statearr_26088_26145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (21))){
var inst_26024 = (state_26074[(12)]);
var inst_26024__$1 = (state_26074[(2)]);
var inst_26025 = cljs.core.get.call(null,inst_26024__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26026 = cljs.core.get.call(null,inst_26024__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26027 = cljs.core.get.call(null,inst_26024__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26074__$1 = (function (){var statearr_26089 = state_26074;
(statearr_26089[(9)] = inst_26025);

(statearr_26089[(13)] = inst_26026);

(statearr_26089[(12)] = inst_26024__$1);

return statearr_26089;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26074__$1,(22),inst_26027);
} else {
if((state_val_26075 === (31))){
var inst_26056 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
if(cljs.core.truth_(inst_26056)){
var statearr_26090_26146 = state_26074__$1;
(statearr_26090_26146[(1)] = (32));

} else {
var statearr_26091_26147 = state_26074__$1;
(statearr_26091_26147[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (32))){
var inst_26033 = (state_26074[(14)]);
var state_26074__$1 = state_26074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26074__$1,(35),out,inst_26033);
} else {
if((state_val_26075 === (33))){
var inst_26024 = (state_26074[(12)]);
var inst_26001 = inst_26024;
var state_26074__$1 = (function (){var statearr_26092 = state_26074;
(statearr_26092[(7)] = inst_26001);

return statearr_26092;
})();
var statearr_26093_26148 = state_26074__$1;
(statearr_26093_26148[(2)] = null);

(statearr_26093_26148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (13))){
var inst_26001 = (state_26074[(7)]);
var inst_26008 = inst_26001.cljs$lang$protocol_mask$partition0$;
var inst_26009 = (inst_26008 & (64));
var inst_26010 = inst_26001.cljs$core$ISeq$;
var inst_26011 = (cljs.core.PROTOCOL_SENTINEL === inst_26010);
var inst_26012 = ((inst_26009) || (inst_26011));
var state_26074__$1 = state_26074;
if(cljs.core.truth_(inst_26012)){
var statearr_26094_26149 = state_26074__$1;
(statearr_26094_26149[(1)] = (16));

} else {
var statearr_26095_26150 = state_26074__$1;
(statearr_26095_26150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (22))){
var inst_26034 = (state_26074[(11)]);
var inst_26033 = (state_26074[(14)]);
var inst_26032 = (state_26074[(2)]);
var inst_26033__$1 = cljs.core.nth.call(null,inst_26032,(0),null);
var inst_26034__$1 = cljs.core.nth.call(null,inst_26032,(1),null);
var inst_26035 = (inst_26033__$1 == null);
var inst_26036 = cljs.core._EQ_.call(null,inst_26034__$1,change);
var inst_26037 = ((inst_26035) || (inst_26036));
var state_26074__$1 = (function (){var statearr_26096 = state_26074;
(statearr_26096[(11)] = inst_26034__$1);

(statearr_26096[(14)] = inst_26033__$1);

return statearr_26096;
})();
if(cljs.core.truth_(inst_26037)){
var statearr_26097_26151 = state_26074__$1;
(statearr_26097_26151[(1)] = (23));

} else {
var statearr_26098_26152 = state_26074__$1;
(statearr_26098_26152[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (36))){
var inst_26024 = (state_26074[(12)]);
var inst_26001 = inst_26024;
var state_26074__$1 = (function (){var statearr_26099 = state_26074;
(statearr_26099[(7)] = inst_26001);

return statearr_26099;
})();
var statearr_26100_26153 = state_26074__$1;
(statearr_26100_26153[(2)] = null);

(statearr_26100_26153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (29))){
var inst_26048 = (state_26074[(10)]);
var state_26074__$1 = state_26074;
var statearr_26101_26154 = state_26074__$1;
(statearr_26101_26154[(2)] = inst_26048);

(statearr_26101_26154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (6))){
var state_26074__$1 = state_26074;
var statearr_26102_26155 = state_26074__$1;
(statearr_26102_26155[(2)] = false);

(statearr_26102_26155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (28))){
var inst_26044 = (state_26074[(2)]);
var inst_26045 = calc_state.call(null);
var inst_26001 = inst_26045;
var state_26074__$1 = (function (){var statearr_26103 = state_26074;
(statearr_26103[(7)] = inst_26001);

(statearr_26103[(15)] = inst_26044);

return statearr_26103;
})();
var statearr_26104_26156 = state_26074__$1;
(statearr_26104_26156[(2)] = null);

(statearr_26104_26156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (25))){
var inst_26070 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
var statearr_26105_26157 = state_26074__$1;
(statearr_26105_26157[(2)] = inst_26070);

(statearr_26105_26157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (34))){
var inst_26068 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
var statearr_26106_26158 = state_26074__$1;
(statearr_26106_26158[(2)] = inst_26068);

(statearr_26106_26158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (17))){
var state_26074__$1 = state_26074;
var statearr_26107_26159 = state_26074__$1;
(statearr_26107_26159[(2)] = false);

(statearr_26107_26159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (3))){
var state_26074__$1 = state_26074;
var statearr_26108_26160 = state_26074__$1;
(statearr_26108_26160[(2)] = false);

(statearr_26108_26160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (12))){
var inst_26072 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26074__$1,inst_26072);
} else {
if((state_val_26075 === (2))){
var inst_25976 = (state_26074[(8)]);
var inst_25981 = inst_25976.cljs$lang$protocol_mask$partition0$;
var inst_25982 = (inst_25981 & (64));
var inst_25983 = inst_25976.cljs$core$ISeq$;
var inst_25984 = (cljs.core.PROTOCOL_SENTINEL === inst_25983);
var inst_25985 = ((inst_25982) || (inst_25984));
var state_26074__$1 = state_26074;
if(cljs.core.truth_(inst_25985)){
var statearr_26109_26161 = state_26074__$1;
(statearr_26109_26161[(1)] = (5));

} else {
var statearr_26110_26162 = state_26074__$1;
(statearr_26110_26162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (23))){
var inst_26033 = (state_26074[(14)]);
var inst_26039 = (inst_26033 == null);
var state_26074__$1 = state_26074;
if(cljs.core.truth_(inst_26039)){
var statearr_26111_26163 = state_26074__$1;
(statearr_26111_26163[(1)] = (26));

} else {
var statearr_26112_26164 = state_26074__$1;
(statearr_26112_26164[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (35))){
var inst_26059 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
if(cljs.core.truth_(inst_26059)){
var statearr_26113_26165 = state_26074__$1;
(statearr_26113_26165[(1)] = (36));

} else {
var statearr_26114_26166 = state_26074__$1;
(statearr_26114_26166[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (19))){
var inst_26001 = (state_26074[(7)]);
var inst_26021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26001);
var state_26074__$1 = state_26074;
var statearr_26115_26167 = state_26074__$1;
(statearr_26115_26167[(2)] = inst_26021);

(statearr_26115_26167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (11))){
var inst_26001 = (state_26074[(7)]);
var inst_26005 = (inst_26001 == null);
var inst_26006 = cljs.core.not.call(null,inst_26005);
var state_26074__$1 = state_26074;
if(inst_26006){
var statearr_26116_26168 = state_26074__$1;
(statearr_26116_26168[(1)] = (13));

} else {
var statearr_26117_26169 = state_26074__$1;
(statearr_26117_26169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (9))){
var inst_25976 = (state_26074[(8)]);
var state_26074__$1 = state_26074;
var statearr_26118_26170 = state_26074__$1;
(statearr_26118_26170[(2)] = inst_25976);

(statearr_26118_26170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (5))){
var state_26074__$1 = state_26074;
var statearr_26119_26171 = state_26074__$1;
(statearr_26119_26171[(2)] = true);

(statearr_26119_26171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (14))){
var state_26074__$1 = state_26074;
var statearr_26120_26172 = state_26074__$1;
(statearr_26120_26172[(2)] = false);

(statearr_26120_26172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (26))){
var inst_26034 = (state_26074[(11)]);
var inst_26041 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26034);
var state_26074__$1 = state_26074;
var statearr_26121_26173 = state_26074__$1;
(statearr_26121_26173[(2)] = inst_26041);

(statearr_26121_26173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (16))){
var state_26074__$1 = state_26074;
var statearr_26122_26174 = state_26074__$1;
(statearr_26122_26174[(2)] = true);

(statearr_26122_26174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (38))){
var inst_26064 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
var statearr_26123_26175 = state_26074__$1;
(statearr_26123_26175[(2)] = inst_26064);

(statearr_26123_26175[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (30))){
var inst_26025 = (state_26074[(9)]);
var inst_26026 = (state_26074[(13)]);
var inst_26034 = (state_26074[(11)]);
var inst_26051 = cljs.core.empty_QMARK_.call(null,inst_26025);
var inst_26052 = inst_26026.call(null,inst_26034);
var inst_26053 = cljs.core.not.call(null,inst_26052);
var inst_26054 = ((inst_26051) && (inst_26053));
var state_26074__$1 = state_26074;
var statearr_26124_26176 = state_26074__$1;
(statearr_26124_26176[(2)] = inst_26054);

(statearr_26124_26176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (10))){
var inst_25976 = (state_26074[(8)]);
var inst_25997 = (state_26074[(2)]);
var inst_25998 = cljs.core.get.call(null,inst_25997,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25999 = cljs.core.get.call(null,inst_25997,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26000 = cljs.core.get.call(null,inst_25997,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26001 = inst_25976;
var state_26074__$1 = (function (){var statearr_26125 = state_26074;
(statearr_26125[(16)] = inst_25999);

(statearr_26125[(7)] = inst_26001);

(statearr_26125[(17)] = inst_26000);

(statearr_26125[(18)] = inst_25998);

return statearr_26125;
})();
var statearr_26126_26177 = state_26074__$1;
(statearr_26126_26177[(2)] = null);

(statearr_26126_26177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (18))){
var inst_26016 = (state_26074[(2)]);
var state_26074__$1 = state_26074;
var statearr_26127_26178 = state_26074__$1;
(statearr_26127_26178[(2)] = inst_26016);

(statearr_26127_26178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (37))){
var state_26074__$1 = state_26074;
var statearr_26128_26179 = state_26074__$1;
(statearr_26128_26179[(2)] = null);

(statearr_26128_26179[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26075 === (8))){
var inst_25976 = (state_26074[(8)]);
var inst_25994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25976);
var state_26074__$1 = state_26074;
var statearr_26129_26180 = state_26074__$1;
(statearr_26129_26180[(2)] = inst_25994);

(statearr_26129_26180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24980__auto__,c__25075__auto___26134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24981__auto__ = null;
var cljs$core$async$mix_$_state_machine__24981__auto____0 = (function (){
var statearr_26130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26130[(0)] = cljs$core$async$mix_$_state_machine__24981__auto__);

(statearr_26130[(1)] = (1));

return statearr_26130;
});
var cljs$core$async$mix_$_state_machine__24981__auto____1 = (function (state_26074){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26131){if((e26131 instanceof Object)){
var ex__24984__auto__ = e26131;
var statearr_26132_26181 = state_26074;
(statearr_26132_26181[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26182 = state_26074;
state_26074 = G__26182;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24981__auto__ = function(state_26074){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24981__auto____1.call(this,state_26074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24981__auto____0;
cljs$core$async$mix_$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24981__auto____1;
return cljs$core$async$mix_$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25077__auto__ = (function (){var statearr_26133 = f__25076__auto__.call(null);
(statearr_26133[(6)] = c__25075__auto___26134);

return statearr_26133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26184 = arguments.length;
switch (G__26184) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26188 = arguments.length;
switch (G__26188) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__26186_SHARP_){
if(cljs.core.truth_(p1__26186_SHARP_.call(null,topic))){
return p1__26186_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26186_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26189 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26190){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26190 = meta26190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26191,meta26190__$1){
var self__ = this;
var _26191__$1 = this;
return (new cljs.core.async.t_cljs$core$async26189(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26190__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26191){
var self__ = this;
var _26191__$1 = this;
return self__.meta26190;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26190","meta26190",-1370738704,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26189";

cljs.core.async.t_cljs$core$async26189.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26189");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26189.
 */
cljs.core.async.__GT_t_cljs$core$async26189 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26190){
return (new cljs.core.async.t_cljs$core$async26189(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26190));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26189(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25075__auto___26309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26309,mults,ensure_mult,p){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26309,mults,ensure_mult,p){
return (function (state_26263){
var state_val_26264 = (state_26263[(1)]);
if((state_val_26264 === (7))){
var inst_26259 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26265_26310 = state_26263__$1;
(statearr_26265_26310[(2)] = inst_26259);

(statearr_26265_26310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (20))){
var state_26263__$1 = state_26263;
var statearr_26266_26311 = state_26263__$1;
(statearr_26266_26311[(2)] = null);

(statearr_26266_26311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (1))){
var state_26263__$1 = state_26263;
var statearr_26267_26312 = state_26263__$1;
(statearr_26267_26312[(2)] = null);

(statearr_26267_26312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (24))){
var inst_26242 = (state_26263[(7)]);
var inst_26251 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26242);
var state_26263__$1 = state_26263;
var statearr_26268_26313 = state_26263__$1;
(statearr_26268_26313[(2)] = inst_26251);

(statearr_26268_26313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (4))){
var inst_26194 = (state_26263[(8)]);
var inst_26194__$1 = (state_26263[(2)]);
var inst_26195 = (inst_26194__$1 == null);
var state_26263__$1 = (function (){var statearr_26269 = state_26263;
(statearr_26269[(8)] = inst_26194__$1);

return statearr_26269;
})();
if(cljs.core.truth_(inst_26195)){
var statearr_26270_26314 = state_26263__$1;
(statearr_26270_26314[(1)] = (5));

} else {
var statearr_26271_26315 = state_26263__$1;
(statearr_26271_26315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (15))){
var inst_26236 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26272_26316 = state_26263__$1;
(statearr_26272_26316[(2)] = inst_26236);

(statearr_26272_26316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (21))){
var inst_26256 = (state_26263[(2)]);
var state_26263__$1 = (function (){var statearr_26273 = state_26263;
(statearr_26273[(9)] = inst_26256);

return statearr_26273;
})();
var statearr_26274_26317 = state_26263__$1;
(statearr_26274_26317[(2)] = null);

(statearr_26274_26317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (13))){
var inst_26218 = (state_26263[(10)]);
var inst_26220 = cljs.core.chunked_seq_QMARK_.call(null,inst_26218);
var state_26263__$1 = state_26263;
if(inst_26220){
var statearr_26275_26318 = state_26263__$1;
(statearr_26275_26318[(1)] = (16));

} else {
var statearr_26276_26319 = state_26263__$1;
(statearr_26276_26319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (22))){
var inst_26248 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26248)){
var statearr_26277_26320 = state_26263__$1;
(statearr_26277_26320[(1)] = (23));

} else {
var statearr_26278_26321 = state_26263__$1;
(statearr_26278_26321[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (6))){
var inst_26244 = (state_26263[(11)]);
var inst_26242 = (state_26263[(7)]);
var inst_26194 = (state_26263[(8)]);
var inst_26242__$1 = topic_fn.call(null,inst_26194);
var inst_26243 = cljs.core.deref.call(null,mults);
var inst_26244__$1 = cljs.core.get.call(null,inst_26243,inst_26242__$1);
var state_26263__$1 = (function (){var statearr_26279 = state_26263;
(statearr_26279[(11)] = inst_26244__$1);

(statearr_26279[(7)] = inst_26242__$1);

return statearr_26279;
})();
if(cljs.core.truth_(inst_26244__$1)){
var statearr_26280_26322 = state_26263__$1;
(statearr_26280_26322[(1)] = (19));

} else {
var statearr_26281_26323 = state_26263__$1;
(statearr_26281_26323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (25))){
var inst_26253 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26282_26324 = state_26263__$1;
(statearr_26282_26324[(2)] = inst_26253);

(statearr_26282_26324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (17))){
var inst_26218 = (state_26263[(10)]);
var inst_26227 = cljs.core.first.call(null,inst_26218);
var inst_26228 = cljs.core.async.muxch_STAR_.call(null,inst_26227);
var inst_26229 = cljs.core.async.close_BANG_.call(null,inst_26228);
var inst_26230 = cljs.core.next.call(null,inst_26218);
var inst_26204 = inst_26230;
var inst_26205 = null;
var inst_26206 = (0);
var inst_26207 = (0);
var state_26263__$1 = (function (){var statearr_26283 = state_26263;
(statearr_26283[(12)] = inst_26207);

(statearr_26283[(13)] = inst_26204);

(statearr_26283[(14)] = inst_26205);

(statearr_26283[(15)] = inst_26229);

(statearr_26283[(16)] = inst_26206);

return statearr_26283;
})();
var statearr_26284_26325 = state_26263__$1;
(statearr_26284_26325[(2)] = null);

(statearr_26284_26325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (3))){
var inst_26261 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26263__$1,inst_26261);
} else {
if((state_val_26264 === (12))){
var inst_26238 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26285_26326 = state_26263__$1;
(statearr_26285_26326[(2)] = inst_26238);

(statearr_26285_26326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (2))){
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26263__$1,(4),ch);
} else {
if((state_val_26264 === (23))){
var state_26263__$1 = state_26263;
var statearr_26286_26327 = state_26263__$1;
(statearr_26286_26327[(2)] = null);

(statearr_26286_26327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (19))){
var inst_26244 = (state_26263[(11)]);
var inst_26194 = (state_26263[(8)]);
var inst_26246 = cljs.core.async.muxch_STAR_.call(null,inst_26244);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26263__$1,(22),inst_26246,inst_26194);
} else {
if((state_val_26264 === (11))){
var inst_26218 = (state_26263[(10)]);
var inst_26204 = (state_26263[(13)]);
var inst_26218__$1 = cljs.core.seq.call(null,inst_26204);
var state_26263__$1 = (function (){var statearr_26287 = state_26263;
(statearr_26287[(10)] = inst_26218__$1);

return statearr_26287;
})();
if(inst_26218__$1){
var statearr_26288_26328 = state_26263__$1;
(statearr_26288_26328[(1)] = (13));

} else {
var statearr_26289_26329 = state_26263__$1;
(statearr_26289_26329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (9))){
var inst_26240 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26290_26330 = state_26263__$1;
(statearr_26290_26330[(2)] = inst_26240);

(statearr_26290_26330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (5))){
var inst_26201 = cljs.core.deref.call(null,mults);
var inst_26202 = cljs.core.vals.call(null,inst_26201);
var inst_26203 = cljs.core.seq.call(null,inst_26202);
var inst_26204 = inst_26203;
var inst_26205 = null;
var inst_26206 = (0);
var inst_26207 = (0);
var state_26263__$1 = (function (){var statearr_26291 = state_26263;
(statearr_26291[(12)] = inst_26207);

(statearr_26291[(13)] = inst_26204);

(statearr_26291[(14)] = inst_26205);

(statearr_26291[(16)] = inst_26206);

return statearr_26291;
})();
var statearr_26292_26331 = state_26263__$1;
(statearr_26292_26331[(2)] = null);

(statearr_26292_26331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (14))){
var state_26263__$1 = state_26263;
var statearr_26296_26332 = state_26263__$1;
(statearr_26296_26332[(2)] = null);

(statearr_26296_26332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (16))){
var inst_26218 = (state_26263[(10)]);
var inst_26222 = cljs.core.chunk_first.call(null,inst_26218);
var inst_26223 = cljs.core.chunk_rest.call(null,inst_26218);
var inst_26224 = cljs.core.count.call(null,inst_26222);
var inst_26204 = inst_26223;
var inst_26205 = inst_26222;
var inst_26206 = inst_26224;
var inst_26207 = (0);
var state_26263__$1 = (function (){var statearr_26297 = state_26263;
(statearr_26297[(12)] = inst_26207);

(statearr_26297[(13)] = inst_26204);

(statearr_26297[(14)] = inst_26205);

(statearr_26297[(16)] = inst_26206);

return statearr_26297;
})();
var statearr_26298_26333 = state_26263__$1;
(statearr_26298_26333[(2)] = null);

(statearr_26298_26333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (10))){
var inst_26207 = (state_26263[(12)]);
var inst_26204 = (state_26263[(13)]);
var inst_26205 = (state_26263[(14)]);
var inst_26206 = (state_26263[(16)]);
var inst_26212 = cljs.core._nth.call(null,inst_26205,inst_26207);
var inst_26213 = cljs.core.async.muxch_STAR_.call(null,inst_26212);
var inst_26214 = cljs.core.async.close_BANG_.call(null,inst_26213);
var inst_26215 = (inst_26207 + (1));
var tmp26293 = inst_26204;
var tmp26294 = inst_26205;
var tmp26295 = inst_26206;
var inst_26204__$1 = tmp26293;
var inst_26205__$1 = tmp26294;
var inst_26206__$1 = tmp26295;
var inst_26207__$1 = inst_26215;
var state_26263__$1 = (function (){var statearr_26299 = state_26263;
(statearr_26299[(12)] = inst_26207__$1);

(statearr_26299[(13)] = inst_26204__$1);

(statearr_26299[(14)] = inst_26205__$1);

(statearr_26299[(17)] = inst_26214);

(statearr_26299[(16)] = inst_26206__$1);

return statearr_26299;
})();
var statearr_26300_26334 = state_26263__$1;
(statearr_26300_26334[(2)] = null);

(statearr_26300_26334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (18))){
var inst_26233 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26301_26335 = state_26263__$1;
(statearr_26301_26335[(2)] = inst_26233);

(statearr_26301_26335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (8))){
var inst_26207 = (state_26263[(12)]);
var inst_26206 = (state_26263[(16)]);
var inst_26209 = (inst_26207 < inst_26206);
var inst_26210 = inst_26209;
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26210)){
var statearr_26302_26336 = state_26263__$1;
(statearr_26302_26336[(1)] = (10));

} else {
var statearr_26303_26337 = state_26263__$1;
(statearr_26303_26337[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26309,mults,ensure_mult,p))
;
return ((function (switch__24980__auto__,c__25075__auto___26309,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26304[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26304[(1)] = (1));

return statearr_26304;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26263){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26305){if((e26305 instanceof Object)){
var ex__24984__auto__ = e26305;
var statearr_26306_26338 = state_26263;
(statearr_26306_26338[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26339 = state_26263;
state_26263 = G__26339;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26309,mults,ensure_mult,p))
})();
var state__25077__auto__ = (function (){var statearr_26307 = f__25076__auto__.call(null);
(statearr_26307[(6)] = c__25075__auto___26309);

return statearr_26307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26309,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26341 = arguments.length;
switch (G__26341) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26344 = arguments.length;
switch (G__26344) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26347 = arguments.length;
switch (G__26347) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25075__auto___26414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26386){
var state_val_26387 = (state_26386[(1)]);
if((state_val_26387 === (7))){
var state_26386__$1 = state_26386;
var statearr_26388_26415 = state_26386__$1;
(statearr_26388_26415[(2)] = null);

(statearr_26388_26415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (1))){
var state_26386__$1 = state_26386;
var statearr_26389_26416 = state_26386__$1;
(statearr_26389_26416[(2)] = null);

(statearr_26389_26416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (4))){
var inst_26350 = (state_26386[(7)]);
var inst_26352 = (inst_26350 < cnt);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26352)){
var statearr_26390_26417 = state_26386__$1;
(statearr_26390_26417[(1)] = (6));

} else {
var statearr_26391_26418 = state_26386__$1;
(statearr_26391_26418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (15))){
var inst_26382 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26392_26419 = state_26386__$1;
(statearr_26392_26419[(2)] = inst_26382);

(statearr_26392_26419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (13))){
var inst_26375 = cljs.core.async.close_BANG_.call(null,out);
var state_26386__$1 = state_26386;
var statearr_26393_26420 = state_26386__$1;
(statearr_26393_26420[(2)] = inst_26375);

(statearr_26393_26420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (6))){
var state_26386__$1 = state_26386;
var statearr_26394_26421 = state_26386__$1;
(statearr_26394_26421[(2)] = null);

(statearr_26394_26421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (3))){
var inst_26384 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26386__$1,inst_26384);
} else {
if((state_val_26387 === (12))){
var inst_26372 = (state_26386[(8)]);
var inst_26372__$1 = (state_26386[(2)]);
var inst_26373 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26372__$1);
var state_26386__$1 = (function (){var statearr_26395 = state_26386;
(statearr_26395[(8)] = inst_26372__$1);

return statearr_26395;
})();
if(cljs.core.truth_(inst_26373)){
var statearr_26396_26422 = state_26386__$1;
(statearr_26396_26422[(1)] = (13));

} else {
var statearr_26397_26423 = state_26386__$1;
(statearr_26397_26423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (2))){
var inst_26349 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26350 = (0);
var state_26386__$1 = (function (){var statearr_26398 = state_26386;
(statearr_26398[(9)] = inst_26349);

(statearr_26398[(7)] = inst_26350);

return statearr_26398;
})();
var statearr_26399_26424 = state_26386__$1;
(statearr_26399_26424[(2)] = null);

(statearr_26399_26424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (11))){
var inst_26350 = (state_26386[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26386,(10),Object,null,(9));
var inst_26359 = chs__$1.call(null,inst_26350);
var inst_26360 = done.call(null,inst_26350);
var inst_26361 = cljs.core.async.take_BANG_.call(null,inst_26359,inst_26360);
var state_26386__$1 = state_26386;
var statearr_26400_26425 = state_26386__$1;
(statearr_26400_26425[(2)] = inst_26361);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (9))){
var inst_26350 = (state_26386[(7)]);
var inst_26363 = (state_26386[(2)]);
var inst_26364 = (inst_26350 + (1));
var inst_26350__$1 = inst_26364;
var state_26386__$1 = (function (){var statearr_26401 = state_26386;
(statearr_26401[(7)] = inst_26350__$1);

(statearr_26401[(10)] = inst_26363);

return statearr_26401;
})();
var statearr_26402_26426 = state_26386__$1;
(statearr_26402_26426[(2)] = null);

(statearr_26402_26426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (5))){
var inst_26370 = (state_26386[(2)]);
var state_26386__$1 = (function (){var statearr_26403 = state_26386;
(statearr_26403[(11)] = inst_26370);

return statearr_26403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26386__$1,(12),dchan);
} else {
if((state_val_26387 === (14))){
var inst_26372 = (state_26386[(8)]);
var inst_26377 = cljs.core.apply.call(null,f,inst_26372);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26386__$1,(16),out,inst_26377);
} else {
if((state_val_26387 === (16))){
var inst_26379 = (state_26386[(2)]);
var state_26386__$1 = (function (){var statearr_26404 = state_26386;
(statearr_26404[(12)] = inst_26379);

return statearr_26404;
})();
var statearr_26405_26427 = state_26386__$1;
(statearr_26405_26427[(2)] = null);

(statearr_26405_26427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (10))){
var inst_26354 = (state_26386[(2)]);
var inst_26355 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26386__$1 = (function (){var statearr_26406 = state_26386;
(statearr_26406[(13)] = inst_26354);

return statearr_26406;
})();
var statearr_26407_26428 = state_26386__$1;
(statearr_26407_26428[(2)] = inst_26355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (8))){
var inst_26368 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26408_26429 = state_26386__$1;
(statearr_26408_26429[(2)] = inst_26368);

(statearr_26408_26429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26414,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24980__auto__,c__25075__auto___26414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26409[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26409[(1)] = (1));

return statearr_26409;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26386){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26410){if((e26410 instanceof Object)){
var ex__24984__auto__ = e26410;
var statearr_26411_26430 = state_26386;
(statearr_26411_26430[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26431 = state_26386;
state_26386 = G__26431;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26414,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25077__auto__ = (function (){var statearr_26412 = f__25076__auto__.call(null);
(statearr_26412[(6)] = c__25075__auto___26414);

return statearr_26412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26414,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26434 = arguments.length;
switch (G__26434) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25075__auto___26488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26488,out){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26488,out){
return (function (state_26466){
var state_val_26467 = (state_26466[(1)]);
if((state_val_26467 === (7))){
var inst_26445 = (state_26466[(7)]);
var inst_26446 = (state_26466[(8)]);
var inst_26445__$1 = (state_26466[(2)]);
var inst_26446__$1 = cljs.core.nth.call(null,inst_26445__$1,(0),null);
var inst_26447 = cljs.core.nth.call(null,inst_26445__$1,(1),null);
var inst_26448 = (inst_26446__$1 == null);
var state_26466__$1 = (function (){var statearr_26468 = state_26466;
(statearr_26468[(9)] = inst_26447);

(statearr_26468[(7)] = inst_26445__$1);

(statearr_26468[(8)] = inst_26446__$1);

return statearr_26468;
})();
if(cljs.core.truth_(inst_26448)){
var statearr_26469_26489 = state_26466__$1;
(statearr_26469_26489[(1)] = (8));

} else {
var statearr_26470_26490 = state_26466__$1;
(statearr_26470_26490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (1))){
var inst_26435 = cljs.core.vec.call(null,chs);
var inst_26436 = inst_26435;
var state_26466__$1 = (function (){var statearr_26471 = state_26466;
(statearr_26471[(10)] = inst_26436);

return statearr_26471;
})();
var statearr_26472_26491 = state_26466__$1;
(statearr_26472_26491[(2)] = null);

(statearr_26472_26491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (4))){
var inst_26436 = (state_26466[(10)]);
var state_26466__$1 = state_26466;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26466__$1,(7),inst_26436);
} else {
if((state_val_26467 === (6))){
var inst_26462 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26473_26492 = state_26466__$1;
(statearr_26473_26492[(2)] = inst_26462);

(statearr_26473_26492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (3))){
var inst_26464 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26466__$1,inst_26464);
} else {
if((state_val_26467 === (2))){
var inst_26436 = (state_26466[(10)]);
var inst_26438 = cljs.core.count.call(null,inst_26436);
var inst_26439 = (inst_26438 > (0));
var state_26466__$1 = state_26466;
if(cljs.core.truth_(inst_26439)){
var statearr_26475_26493 = state_26466__$1;
(statearr_26475_26493[(1)] = (4));

} else {
var statearr_26476_26494 = state_26466__$1;
(statearr_26476_26494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (11))){
var inst_26436 = (state_26466[(10)]);
var inst_26455 = (state_26466[(2)]);
var tmp26474 = inst_26436;
var inst_26436__$1 = tmp26474;
var state_26466__$1 = (function (){var statearr_26477 = state_26466;
(statearr_26477[(10)] = inst_26436__$1);

(statearr_26477[(11)] = inst_26455);

return statearr_26477;
})();
var statearr_26478_26495 = state_26466__$1;
(statearr_26478_26495[(2)] = null);

(statearr_26478_26495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (9))){
var inst_26446 = (state_26466[(8)]);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26466__$1,(11),out,inst_26446);
} else {
if((state_val_26467 === (5))){
var inst_26460 = cljs.core.async.close_BANG_.call(null,out);
var state_26466__$1 = state_26466;
var statearr_26479_26496 = state_26466__$1;
(statearr_26479_26496[(2)] = inst_26460);

(statearr_26479_26496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (10))){
var inst_26458 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26480_26497 = state_26466__$1;
(statearr_26480_26497[(2)] = inst_26458);

(statearr_26480_26497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (8))){
var inst_26447 = (state_26466[(9)]);
var inst_26445 = (state_26466[(7)]);
var inst_26436 = (state_26466[(10)]);
var inst_26446 = (state_26466[(8)]);
var inst_26450 = (function (){var cs = inst_26436;
var vec__26441 = inst_26445;
var v = inst_26446;
var c = inst_26447;
return ((function (cs,vec__26441,v,c,inst_26447,inst_26445,inst_26436,inst_26446,state_val_26467,c__25075__auto___26488,out){
return (function (p1__26432_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26432_SHARP_);
});
;})(cs,vec__26441,v,c,inst_26447,inst_26445,inst_26436,inst_26446,state_val_26467,c__25075__auto___26488,out))
})();
var inst_26451 = cljs.core.filterv.call(null,inst_26450,inst_26436);
var inst_26436__$1 = inst_26451;
var state_26466__$1 = (function (){var statearr_26481 = state_26466;
(statearr_26481[(10)] = inst_26436__$1);

return statearr_26481;
})();
var statearr_26482_26498 = state_26466__$1;
(statearr_26482_26498[(2)] = null);

(statearr_26482_26498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26488,out))
;
return ((function (switch__24980__auto__,c__25075__auto___26488,out){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26483[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26483[(1)] = (1));

return statearr_26483;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26466){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26484){if((e26484 instanceof Object)){
var ex__24984__auto__ = e26484;
var statearr_26485_26499 = state_26466;
(statearr_26485_26499[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26500 = state_26466;
state_26466 = G__26500;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26488,out))
})();
var state__25077__auto__ = (function (){var statearr_26486 = f__25076__auto__.call(null);
(statearr_26486[(6)] = c__25075__auto___26488);

return statearr_26486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26488,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26502 = arguments.length;
switch (G__26502) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25075__auto___26547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26547,out){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26547,out){
return (function (state_26526){
var state_val_26527 = (state_26526[(1)]);
if((state_val_26527 === (7))){
var inst_26508 = (state_26526[(7)]);
var inst_26508__$1 = (state_26526[(2)]);
var inst_26509 = (inst_26508__$1 == null);
var inst_26510 = cljs.core.not.call(null,inst_26509);
var state_26526__$1 = (function (){var statearr_26528 = state_26526;
(statearr_26528[(7)] = inst_26508__$1);

return statearr_26528;
})();
if(inst_26510){
var statearr_26529_26548 = state_26526__$1;
(statearr_26529_26548[(1)] = (8));

} else {
var statearr_26530_26549 = state_26526__$1;
(statearr_26530_26549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (1))){
var inst_26503 = (0);
var state_26526__$1 = (function (){var statearr_26531 = state_26526;
(statearr_26531[(8)] = inst_26503);

return statearr_26531;
})();
var statearr_26532_26550 = state_26526__$1;
(statearr_26532_26550[(2)] = null);

(statearr_26532_26550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (4))){
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26526__$1,(7),ch);
} else {
if((state_val_26527 === (6))){
var inst_26521 = (state_26526[(2)]);
var state_26526__$1 = state_26526;
var statearr_26533_26551 = state_26526__$1;
(statearr_26533_26551[(2)] = inst_26521);

(statearr_26533_26551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (3))){
var inst_26523 = (state_26526[(2)]);
var inst_26524 = cljs.core.async.close_BANG_.call(null,out);
var state_26526__$1 = (function (){var statearr_26534 = state_26526;
(statearr_26534[(9)] = inst_26523);

return statearr_26534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26526__$1,inst_26524);
} else {
if((state_val_26527 === (2))){
var inst_26503 = (state_26526[(8)]);
var inst_26505 = (inst_26503 < n);
var state_26526__$1 = state_26526;
if(cljs.core.truth_(inst_26505)){
var statearr_26535_26552 = state_26526__$1;
(statearr_26535_26552[(1)] = (4));

} else {
var statearr_26536_26553 = state_26526__$1;
(statearr_26536_26553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (11))){
var inst_26503 = (state_26526[(8)]);
var inst_26513 = (state_26526[(2)]);
var inst_26514 = (inst_26503 + (1));
var inst_26503__$1 = inst_26514;
var state_26526__$1 = (function (){var statearr_26537 = state_26526;
(statearr_26537[(8)] = inst_26503__$1);

(statearr_26537[(10)] = inst_26513);

return statearr_26537;
})();
var statearr_26538_26554 = state_26526__$1;
(statearr_26538_26554[(2)] = null);

(statearr_26538_26554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (9))){
var state_26526__$1 = state_26526;
var statearr_26539_26555 = state_26526__$1;
(statearr_26539_26555[(2)] = null);

(statearr_26539_26555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (5))){
var state_26526__$1 = state_26526;
var statearr_26540_26556 = state_26526__$1;
(statearr_26540_26556[(2)] = null);

(statearr_26540_26556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (10))){
var inst_26518 = (state_26526[(2)]);
var state_26526__$1 = state_26526;
var statearr_26541_26557 = state_26526__$1;
(statearr_26541_26557[(2)] = inst_26518);

(statearr_26541_26557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26527 === (8))){
var inst_26508 = (state_26526[(7)]);
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26526__$1,(11),out,inst_26508);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26547,out))
;
return ((function (switch__24980__auto__,c__25075__auto___26547,out){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26542[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26542[(1)] = (1));

return statearr_26542;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26526){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26543){if((e26543 instanceof Object)){
var ex__24984__auto__ = e26543;
var statearr_26544_26558 = state_26526;
(statearr_26544_26558[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26559 = state_26526;
state_26526 = G__26559;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26547,out))
})();
var state__25077__auto__ = (function (){var statearr_26545 = f__25076__auto__.call(null);
(statearr_26545[(6)] = c__25075__auto___26547);

return statearr_26545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26547,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26561 = (function (f,ch,meta26562){
this.f = f;
this.ch = ch;
this.meta26562 = meta26562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26563,meta26562__$1){
var self__ = this;
var _26563__$1 = this;
return (new cljs.core.async.t_cljs$core$async26561(self__.f,self__.ch,meta26562__$1));
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26563){
var self__ = this;
var _26563__$1 = this;
return self__.meta26562;
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26564 = (function (f,ch,meta26562,_,fn1,meta26565){
this.f = f;
this.ch = ch;
this.meta26562 = meta26562;
this._ = _;
this.fn1 = fn1;
this.meta26565 = meta26565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26566,meta26565__$1){
var self__ = this;
var _26566__$1 = this;
return (new cljs.core.async.t_cljs$core$async26564(self__.f,self__.ch,self__.meta26562,self__._,self__.fn1,meta26565__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26566){
var self__ = this;
var _26566__$1 = this;
return self__.meta26565;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26560_SHARP_){
return f1.call(null,(((p1__26560_SHARP_ == null))?null:self__.f.call(null,p1__26560_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26564.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26562","meta26562",2143889613,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26561","cljs.core.async/t_cljs$core$async26561",-1186538579,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26565","meta26565",944382462,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26564";

cljs.core.async.t_cljs$core$async26564.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26564");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26564.
 */
cljs.core.async.__GT_t_cljs$core$async26564 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26564(f__$1,ch__$1,meta26562__$1,___$2,fn1__$1,meta26565){
return (new cljs.core.async.t_cljs$core$async26564(f__$1,ch__$1,meta26562__$1,___$2,fn1__$1,meta26565));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26564(self__.f,self__.ch,self__.meta26562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26562","meta26562",2143889613,null)], null);
});

cljs.core.async.t_cljs$core$async26561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26561";

cljs.core.async.t_cljs$core$async26561.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26561");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26561.
 */
cljs.core.async.__GT_t_cljs$core$async26561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26561(f__$1,ch__$1,meta26562){
return (new cljs.core.async.t_cljs$core$async26561(f__$1,ch__$1,meta26562));
});

}

return (new cljs.core.async.t_cljs$core$async26561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26567 = (function (f,ch,meta26568){
this.f = f;
this.ch = ch;
this.meta26568 = meta26568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26569,meta26568__$1){
var self__ = this;
var _26569__$1 = this;
return (new cljs.core.async.t_cljs$core$async26567(self__.f,self__.ch,meta26568__$1));
});

cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26569){
var self__ = this;
var _26569__$1 = this;
return self__.meta26568;
});

cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26568","meta26568",1512238993,null)], null);
});

cljs.core.async.t_cljs$core$async26567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26567";

cljs.core.async.t_cljs$core$async26567.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26567");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26567.
 */
cljs.core.async.__GT_t_cljs$core$async26567 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26567(f__$1,ch__$1,meta26568){
return (new cljs.core.async.t_cljs$core$async26567(f__$1,ch__$1,meta26568));
});

}

return (new cljs.core.async.t_cljs$core$async26567(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26570 = (function (p,ch,meta26571){
this.p = p;
this.ch = ch;
this.meta26571 = meta26571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26572,meta26571__$1){
var self__ = this;
var _26572__$1 = this;
return (new cljs.core.async.t_cljs$core$async26570(self__.p,self__.ch,meta26571__$1));
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26572){
var self__ = this;
var _26572__$1 = this;
return self__.meta26571;
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26571","meta26571",-197481522,null)], null);
});

cljs.core.async.t_cljs$core$async26570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26570";

cljs.core.async.t_cljs$core$async26570.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26570");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26570.
 */
cljs.core.async.__GT_t_cljs$core$async26570 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26570(p__$1,ch__$1,meta26571){
return (new cljs.core.async.t_cljs$core$async26570(p__$1,ch__$1,meta26571));
});

}

return (new cljs.core.async.t_cljs$core$async26570(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26574 = arguments.length;
switch (G__26574) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25075__auto___26614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26614,out){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26614,out){
return (function (state_26595){
var state_val_26596 = (state_26595[(1)]);
if((state_val_26596 === (7))){
var inst_26591 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
var statearr_26597_26615 = state_26595__$1;
(statearr_26597_26615[(2)] = inst_26591);

(statearr_26597_26615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (1))){
var state_26595__$1 = state_26595;
var statearr_26598_26616 = state_26595__$1;
(statearr_26598_26616[(2)] = null);

(statearr_26598_26616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (4))){
var inst_26577 = (state_26595[(7)]);
var inst_26577__$1 = (state_26595[(2)]);
var inst_26578 = (inst_26577__$1 == null);
var state_26595__$1 = (function (){var statearr_26599 = state_26595;
(statearr_26599[(7)] = inst_26577__$1);

return statearr_26599;
})();
if(cljs.core.truth_(inst_26578)){
var statearr_26600_26617 = state_26595__$1;
(statearr_26600_26617[(1)] = (5));

} else {
var statearr_26601_26618 = state_26595__$1;
(statearr_26601_26618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (6))){
var inst_26577 = (state_26595[(7)]);
var inst_26582 = p.call(null,inst_26577);
var state_26595__$1 = state_26595;
if(cljs.core.truth_(inst_26582)){
var statearr_26602_26619 = state_26595__$1;
(statearr_26602_26619[(1)] = (8));

} else {
var statearr_26603_26620 = state_26595__$1;
(statearr_26603_26620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (3))){
var inst_26593 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26595__$1,inst_26593);
} else {
if((state_val_26596 === (2))){
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26595__$1,(4),ch);
} else {
if((state_val_26596 === (11))){
var inst_26585 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
var statearr_26604_26621 = state_26595__$1;
(statearr_26604_26621[(2)] = inst_26585);

(statearr_26604_26621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (9))){
var state_26595__$1 = state_26595;
var statearr_26605_26622 = state_26595__$1;
(statearr_26605_26622[(2)] = null);

(statearr_26605_26622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (5))){
var inst_26580 = cljs.core.async.close_BANG_.call(null,out);
var state_26595__$1 = state_26595;
var statearr_26606_26623 = state_26595__$1;
(statearr_26606_26623[(2)] = inst_26580);

(statearr_26606_26623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (10))){
var inst_26588 = (state_26595[(2)]);
var state_26595__$1 = (function (){var statearr_26607 = state_26595;
(statearr_26607[(8)] = inst_26588);

return statearr_26607;
})();
var statearr_26608_26624 = state_26595__$1;
(statearr_26608_26624[(2)] = null);

(statearr_26608_26624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (8))){
var inst_26577 = (state_26595[(7)]);
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26595__$1,(11),out,inst_26577);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26614,out))
;
return ((function (switch__24980__auto__,c__25075__auto___26614,out){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26609 = [null,null,null,null,null,null,null,null,null];
(statearr_26609[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26609[(1)] = (1));

return statearr_26609;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26595){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26610){if((e26610 instanceof Object)){
var ex__24984__auto__ = e26610;
var statearr_26611_26625 = state_26595;
(statearr_26611_26625[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26626 = state_26595;
state_26595 = G__26626;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26614,out))
})();
var state__25077__auto__ = (function (){var statearr_26612 = f__25076__auto__.call(null);
(statearr_26612[(6)] = c__25075__auto___26614);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26614,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26628 = arguments.length;
switch (G__26628) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto__){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto__){
return (function (state_26691){
var state_val_26692 = (state_26691[(1)]);
if((state_val_26692 === (7))){
var inst_26687 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
var statearr_26693_26731 = state_26691__$1;
(statearr_26693_26731[(2)] = inst_26687);

(statearr_26693_26731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (20))){
var inst_26657 = (state_26691[(7)]);
var inst_26668 = (state_26691[(2)]);
var inst_26669 = cljs.core.next.call(null,inst_26657);
var inst_26643 = inst_26669;
var inst_26644 = null;
var inst_26645 = (0);
var inst_26646 = (0);
var state_26691__$1 = (function (){var statearr_26694 = state_26691;
(statearr_26694[(8)] = inst_26668);

(statearr_26694[(9)] = inst_26644);

(statearr_26694[(10)] = inst_26645);

(statearr_26694[(11)] = inst_26643);

(statearr_26694[(12)] = inst_26646);

return statearr_26694;
})();
var statearr_26695_26732 = state_26691__$1;
(statearr_26695_26732[(2)] = null);

(statearr_26695_26732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (1))){
var state_26691__$1 = state_26691;
var statearr_26696_26733 = state_26691__$1;
(statearr_26696_26733[(2)] = null);

(statearr_26696_26733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (4))){
var inst_26632 = (state_26691[(13)]);
var inst_26632__$1 = (state_26691[(2)]);
var inst_26633 = (inst_26632__$1 == null);
var state_26691__$1 = (function (){var statearr_26697 = state_26691;
(statearr_26697[(13)] = inst_26632__$1);

return statearr_26697;
})();
if(cljs.core.truth_(inst_26633)){
var statearr_26698_26734 = state_26691__$1;
(statearr_26698_26734[(1)] = (5));

} else {
var statearr_26699_26735 = state_26691__$1;
(statearr_26699_26735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (15))){
var state_26691__$1 = state_26691;
var statearr_26703_26736 = state_26691__$1;
(statearr_26703_26736[(2)] = null);

(statearr_26703_26736[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (21))){
var state_26691__$1 = state_26691;
var statearr_26704_26737 = state_26691__$1;
(statearr_26704_26737[(2)] = null);

(statearr_26704_26737[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (13))){
var inst_26644 = (state_26691[(9)]);
var inst_26645 = (state_26691[(10)]);
var inst_26643 = (state_26691[(11)]);
var inst_26646 = (state_26691[(12)]);
var inst_26653 = (state_26691[(2)]);
var inst_26654 = (inst_26646 + (1));
var tmp26700 = inst_26644;
var tmp26701 = inst_26645;
var tmp26702 = inst_26643;
var inst_26643__$1 = tmp26702;
var inst_26644__$1 = tmp26700;
var inst_26645__$1 = tmp26701;
var inst_26646__$1 = inst_26654;
var state_26691__$1 = (function (){var statearr_26705 = state_26691;
(statearr_26705[(9)] = inst_26644__$1);

(statearr_26705[(14)] = inst_26653);

(statearr_26705[(10)] = inst_26645__$1);

(statearr_26705[(11)] = inst_26643__$1);

(statearr_26705[(12)] = inst_26646__$1);

return statearr_26705;
})();
var statearr_26706_26738 = state_26691__$1;
(statearr_26706_26738[(2)] = null);

(statearr_26706_26738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (22))){
var state_26691__$1 = state_26691;
var statearr_26707_26739 = state_26691__$1;
(statearr_26707_26739[(2)] = null);

(statearr_26707_26739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (6))){
var inst_26632 = (state_26691[(13)]);
var inst_26641 = f.call(null,inst_26632);
var inst_26642 = cljs.core.seq.call(null,inst_26641);
var inst_26643 = inst_26642;
var inst_26644 = null;
var inst_26645 = (0);
var inst_26646 = (0);
var state_26691__$1 = (function (){var statearr_26708 = state_26691;
(statearr_26708[(9)] = inst_26644);

(statearr_26708[(10)] = inst_26645);

(statearr_26708[(11)] = inst_26643);

(statearr_26708[(12)] = inst_26646);

return statearr_26708;
})();
var statearr_26709_26740 = state_26691__$1;
(statearr_26709_26740[(2)] = null);

(statearr_26709_26740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (17))){
var inst_26657 = (state_26691[(7)]);
var inst_26661 = cljs.core.chunk_first.call(null,inst_26657);
var inst_26662 = cljs.core.chunk_rest.call(null,inst_26657);
var inst_26663 = cljs.core.count.call(null,inst_26661);
var inst_26643 = inst_26662;
var inst_26644 = inst_26661;
var inst_26645 = inst_26663;
var inst_26646 = (0);
var state_26691__$1 = (function (){var statearr_26710 = state_26691;
(statearr_26710[(9)] = inst_26644);

(statearr_26710[(10)] = inst_26645);

(statearr_26710[(11)] = inst_26643);

(statearr_26710[(12)] = inst_26646);

return statearr_26710;
})();
var statearr_26711_26741 = state_26691__$1;
(statearr_26711_26741[(2)] = null);

(statearr_26711_26741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (3))){
var inst_26689 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26691__$1,inst_26689);
} else {
if((state_val_26692 === (12))){
var inst_26677 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
var statearr_26712_26742 = state_26691__$1;
(statearr_26712_26742[(2)] = inst_26677);

(statearr_26712_26742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (2))){
var state_26691__$1 = state_26691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26691__$1,(4),in$);
} else {
if((state_val_26692 === (23))){
var inst_26685 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
var statearr_26713_26743 = state_26691__$1;
(statearr_26713_26743[(2)] = inst_26685);

(statearr_26713_26743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (19))){
var inst_26672 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
var statearr_26714_26744 = state_26691__$1;
(statearr_26714_26744[(2)] = inst_26672);

(statearr_26714_26744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (11))){
var inst_26643 = (state_26691[(11)]);
var inst_26657 = (state_26691[(7)]);
var inst_26657__$1 = cljs.core.seq.call(null,inst_26643);
var state_26691__$1 = (function (){var statearr_26715 = state_26691;
(statearr_26715[(7)] = inst_26657__$1);

return statearr_26715;
})();
if(inst_26657__$1){
var statearr_26716_26745 = state_26691__$1;
(statearr_26716_26745[(1)] = (14));

} else {
var statearr_26717_26746 = state_26691__$1;
(statearr_26717_26746[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (9))){
var inst_26679 = (state_26691[(2)]);
var inst_26680 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26691__$1 = (function (){var statearr_26718 = state_26691;
(statearr_26718[(15)] = inst_26679);

return statearr_26718;
})();
if(cljs.core.truth_(inst_26680)){
var statearr_26719_26747 = state_26691__$1;
(statearr_26719_26747[(1)] = (21));

} else {
var statearr_26720_26748 = state_26691__$1;
(statearr_26720_26748[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (5))){
var inst_26635 = cljs.core.async.close_BANG_.call(null,out);
var state_26691__$1 = state_26691;
var statearr_26721_26749 = state_26691__$1;
(statearr_26721_26749[(2)] = inst_26635);

(statearr_26721_26749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (14))){
var inst_26657 = (state_26691[(7)]);
var inst_26659 = cljs.core.chunked_seq_QMARK_.call(null,inst_26657);
var state_26691__$1 = state_26691;
if(inst_26659){
var statearr_26722_26750 = state_26691__$1;
(statearr_26722_26750[(1)] = (17));

} else {
var statearr_26723_26751 = state_26691__$1;
(statearr_26723_26751[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (16))){
var inst_26675 = (state_26691[(2)]);
var state_26691__$1 = state_26691;
var statearr_26724_26752 = state_26691__$1;
(statearr_26724_26752[(2)] = inst_26675);

(statearr_26724_26752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26692 === (10))){
var inst_26644 = (state_26691[(9)]);
var inst_26646 = (state_26691[(12)]);
var inst_26651 = cljs.core._nth.call(null,inst_26644,inst_26646);
var state_26691__$1 = state_26691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26691__$1,(13),out,inst_26651);
} else {
if((state_val_26692 === (18))){
var inst_26657 = (state_26691[(7)]);
var inst_26666 = cljs.core.first.call(null,inst_26657);
var state_26691__$1 = state_26691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26691__$1,(20),out,inst_26666);
} else {
if((state_val_26692 === (8))){
var inst_26645 = (state_26691[(10)]);
var inst_26646 = (state_26691[(12)]);
var inst_26648 = (inst_26646 < inst_26645);
var inst_26649 = inst_26648;
var state_26691__$1 = state_26691;
if(cljs.core.truth_(inst_26649)){
var statearr_26725_26753 = state_26691__$1;
(statearr_26725_26753[(1)] = (10));

} else {
var statearr_26726_26754 = state_26691__$1;
(statearr_26726_26754[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto__))
;
return ((function (switch__24980__auto__,c__25075__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24981__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24981__auto____0 = (function (){
var statearr_26727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26727[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24981__auto__);

(statearr_26727[(1)] = (1));

return statearr_26727;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24981__auto____1 = (function (state_26691){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26728){if((e26728 instanceof Object)){
var ex__24984__auto__ = e26728;
var statearr_26729_26755 = state_26691;
(statearr_26729_26755[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26756 = state_26691;
state_26691 = G__26756;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24981__auto__ = function(state_26691){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24981__auto____1.call(this,state_26691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24981__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24981__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto__))
})();
var state__25077__auto__ = (function (){var statearr_26730 = f__25076__auto__.call(null);
(statearr_26730[(6)] = c__25075__auto__);

return statearr_26730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto__))
);

return c__25075__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26758 = arguments.length;
switch (G__26758) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26761 = arguments.length;
switch (G__26761) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26764 = arguments.length;
switch (G__26764) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25075__auto___26811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26811,out){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26811,out){
return (function (state_26788){
var state_val_26789 = (state_26788[(1)]);
if((state_val_26789 === (7))){
var inst_26783 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26790_26812 = state_26788__$1;
(statearr_26790_26812[(2)] = inst_26783);

(statearr_26790_26812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (1))){
var inst_26765 = null;
var state_26788__$1 = (function (){var statearr_26791 = state_26788;
(statearr_26791[(7)] = inst_26765);

return statearr_26791;
})();
var statearr_26792_26813 = state_26788__$1;
(statearr_26792_26813[(2)] = null);

(statearr_26792_26813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (4))){
var inst_26768 = (state_26788[(8)]);
var inst_26768__$1 = (state_26788[(2)]);
var inst_26769 = (inst_26768__$1 == null);
var inst_26770 = cljs.core.not.call(null,inst_26769);
var state_26788__$1 = (function (){var statearr_26793 = state_26788;
(statearr_26793[(8)] = inst_26768__$1);

return statearr_26793;
})();
if(inst_26770){
var statearr_26794_26814 = state_26788__$1;
(statearr_26794_26814[(1)] = (5));

} else {
var statearr_26795_26815 = state_26788__$1;
(statearr_26795_26815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (6))){
var state_26788__$1 = state_26788;
var statearr_26796_26816 = state_26788__$1;
(statearr_26796_26816[(2)] = null);

(statearr_26796_26816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (3))){
var inst_26785 = (state_26788[(2)]);
var inst_26786 = cljs.core.async.close_BANG_.call(null,out);
var state_26788__$1 = (function (){var statearr_26797 = state_26788;
(statearr_26797[(9)] = inst_26785);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26788__$1,inst_26786);
} else {
if((state_val_26789 === (2))){
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26788__$1,(4),ch);
} else {
if((state_val_26789 === (11))){
var inst_26768 = (state_26788[(8)]);
var inst_26777 = (state_26788[(2)]);
var inst_26765 = inst_26768;
var state_26788__$1 = (function (){var statearr_26798 = state_26788;
(statearr_26798[(10)] = inst_26777);

(statearr_26798[(7)] = inst_26765);

return statearr_26798;
})();
var statearr_26799_26817 = state_26788__$1;
(statearr_26799_26817[(2)] = null);

(statearr_26799_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (9))){
var inst_26768 = (state_26788[(8)]);
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26788__$1,(11),out,inst_26768);
} else {
if((state_val_26789 === (5))){
var inst_26768 = (state_26788[(8)]);
var inst_26765 = (state_26788[(7)]);
var inst_26772 = cljs.core._EQ_.call(null,inst_26768,inst_26765);
var state_26788__$1 = state_26788;
if(inst_26772){
var statearr_26801_26818 = state_26788__$1;
(statearr_26801_26818[(1)] = (8));

} else {
var statearr_26802_26819 = state_26788__$1;
(statearr_26802_26819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (10))){
var inst_26780 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26803_26820 = state_26788__$1;
(statearr_26803_26820[(2)] = inst_26780);

(statearr_26803_26820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (8))){
var inst_26765 = (state_26788[(7)]);
var tmp26800 = inst_26765;
var inst_26765__$1 = tmp26800;
var state_26788__$1 = (function (){var statearr_26804 = state_26788;
(statearr_26804[(7)] = inst_26765__$1);

return statearr_26804;
})();
var statearr_26805_26821 = state_26788__$1;
(statearr_26805_26821[(2)] = null);

(statearr_26805_26821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26811,out))
;
return ((function (switch__24980__auto__,c__25075__auto___26811,out){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26806[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26806[(1)] = (1));

return statearr_26806;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26788){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26807){if((e26807 instanceof Object)){
var ex__24984__auto__ = e26807;
var statearr_26808_26822 = state_26788;
(statearr_26808_26822[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26788;
state_26788 = G__26823;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26811,out))
})();
var state__25077__auto__ = (function (){var statearr_26809 = f__25076__auto__.call(null);
(statearr_26809[(6)] = c__25075__auto___26811);

return statearr_26809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26811,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26825 = arguments.length;
switch (G__26825) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25075__auto___26891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26891,out){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26891,out){
return (function (state_26863){
var state_val_26864 = (state_26863[(1)]);
if((state_val_26864 === (7))){
var inst_26859 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26865_26892 = state_26863__$1;
(statearr_26865_26892[(2)] = inst_26859);

(statearr_26865_26892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (1))){
var inst_26826 = (new Array(n));
var inst_26827 = inst_26826;
var inst_26828 = (0);
var state_26863__$1 = (function (){var statearr_26866 = state_26863;
(statearr_26866[(7)] = inst_26827);

(statearr_26866[(8)] = inst_26828);

return statearr_26866;
})();
var statearr_26867_26893 = state_26863__$1;
(statearr_26867_26893[(2)] = null);

(statearr_26867_26893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (4))){
var inst_26831 = (state_26863[(9)]);
var inst_26831__$1 = (state_26863[(2)]);
var inst_26832 = (inst_26831__$1 == null);
var inst_26833 = cljs.core.not.call(null,inst_26832);
var state_26863__$1 = (function (){var statearr_26868 = state_26863;
(statearr_26868[(9)] = inst_26831__$1);

return statearr_26868;
})();
if(inst_26833){
var statearr_26869_26894 = state_26863__$1;
(statearr_26869_26894[(1)] = (5));

} else {
var statearr_26870_26895 = state_26863__$1;
(statearr_26870_26895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (15))){
var inst_26853 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26871_26896 = state_26863__$1;
(statearr_26871_26896[(2)] = inst_26853);

(statearr_26871_26896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (13))){
var state_26863__$1 = state_26863;
var statearr_26872_26897 = state_26863__$1;
(statearr_26872_26897[(2)] = null);

(statearr_26872_26897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (6))){
var inst_26828 = (state_26863[(8)]);
var inst_26849 = (inst_26828 > (0));
var state_26863__$1 = state_26863;
if(cljs.core.truth_(inst_26849)){
var statearr_26873_26898 = state_26863__$1;
(statearr_26873_26898[(1)] = (12));

} else {
var statearr_26874_26899 = state_26863__$1;
(statearr_26874_26899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (3))){
var inst_26861 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26863__$1,inst_26861);
} else {
if((state_val_26864 === (12))){
var inst_26827 = (state_26863[(7)]);
var inst_26851 = cljs.core.vec.call(null,inst_26827);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26863__$1,(15),out,inst_26851);
} else {
if((state_val_26864 === (2))){
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26863__$1,(4),ch);
} else {
if((state_val_26864 === (11))){
var inst_26843 = (state_26863[(2)]);
var inst_26844 = (new Array(n));
var inst_26827 = inst_26844;
var inst_26828 = (0);
var state_26863__$1 = (function (){var statearr_26875 = state_26863;
(statearr_26875[(10)] = inst_26843);

(statearr_26875[(7)] = inst_26827);

(statearr_26875[(8)] = inst_26828);

return statearr_26875;
})();
var statearr_26876_26900 = state_26863__$1;
(statearr_26876_26900[(2)] = null);

(statearr_26876_26900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (9))){
var inst_26827 = (state_26863[(7)]);
var inst_26841 = cljs.core.vec.call(null,inst_26827);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26863__$1,(11),out,inst_26841);
} else {
if((state_val_26864 === (5))){
var inst_26831 = (state_26863[(9)]);
var inst_26827 = (state_26863[(7)]);
var inst_26836 = (state_26863[(11)]);
var inst_26828 = (state_26863[(8)]);
var inst_26835 = (inst_26827[inst_26828] = inst_26831);
var inst_26836__$1 = (inst_26828 + (1));
var inst_26837 = (inst_26836__$1 < n);
var state_26863__$1 = (function (){var statearr_26877 = state_26863;
(statearr_26877[(11)] = inst_26836__$1);

(statearr_26877[(12)] = inst_26835);

return statearr_26877;
})();
if(cljs.core.truth_(inst_26837)){
var statearr_26878_26901 = state_26863__$1;
(statearr_26878_26901[(1)] = (8));

} else {
var statearr_26879_26902 = state_26863__$1;
(statearr_26879_26902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (14))){
var inst_26856 = (state_26863[(2)]);
var inst_26857 = cljs.core.async.close_BANG_.call(null,out);
var state_26863__$1 = (function (){var statearr_26881 = state_26863;
(statearr_26881[(13)] = inst_26856);

return statearr_26881;
})();
var statearr_26882_26903 = state_26863__$1;
(statearr_26882_26903[(2)] = inst_26857);

(statearr_26882_26903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (10))){
var inst_26847 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26883_26904 = state_26863__$1;
(statearr_26883_26904[(2)] = inst_26847);

(statearr_26883_26904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (8))){
var inst_26827 = (state_26863[(7)]);
var inst_26836 = (state_26863[(11)]);
var tmp26880 = inst_26827;
var inst_26827__$1 = tmp26880;
var inst_26828 = inst_26836;
var state_26863__$1 = (function (){var statearr_26884 = state_26863;
(statearr_26884[(7)] = inst_26827__$1);

(statearr_26884[(8)] = inst_26828);

return statearr_26884;
})();
var statearr_26885_26905 = state_26863__$1;
(statearr_26885_26905[(2)] = null);

(statearr_26885_26905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26891,out))
;
return ((function (switch__24980__auto__,c__25075__auto___26891,out){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26886[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26886[(1)] = (1));

return statearr_26886;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26863){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26887){if((e26887 instanceof Object)){
var ex__24984__auto__ = e26887;
var statearr_26888_26906 = state_26863;
(statearr_26888_26906[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26907 = state_26863;
state_26863 = G__26907;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26891,out))
})();
var state__25077__auto__ = (function (){var statearr_26889 = f__25076__auto__.call(null);
(statearr_26889[(6)] = c__25075__auto___26891);

return statearr_26889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26891,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26909 = arguments.length;
switch (G__26909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25075__auto___26979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25075__auto___26979,out){
return (function (){
var f__25076__auto__ = (function (){var switch__24980__auto__ = ((function (c__25075__auto___26979,out){
return (function (state_26951){
var state_val_26952 = (state_26951[(1)]);
if((state_val_26952 === (7))){
var inst_26947 = (state_26951[(2)]);
var state_26951__$1 = state_26951;
var statearr_26953_26980 = state_26951__$1;
(statearr_26953_26980[(2)] = inst_26947);

(statearr_26953_26980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (1))){
var inst_26910 = [];
var inst_26911 = inst_26910;
var inst_26912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26951__$1 = (function (){var statearr_26954 = state_26951;
(statearr_26954[(7)] = inst_26912);

(statearr_26954[(8)] = inst_26911);

return statearr_26954;
})();
var statearr_26955_26981 = state_26951__$1;
(statearr_26955_26981[(2)] = null);

(statearr_26955_26981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (4))){
var inst_26915 = (state_26951[(9)]);
var inst_26915__$1 = (state_26951[(2)]);
var inst_26916 = (inst_26915__$1 == null);
var inst_26917 = cljs.core.not.call(null,inst_26916);
var state_26951__$1 = (function (){var statearr_26956 = state_26951;
(statearr_26956[(9)] = inst_26915__$1);

return statearr_26956;
})();
if(inst_26917){
var statearr_26957_26982 = state_26951__$1;
(statearr_26957_26982[(1)] = (5));

} else {
var statearr_26958_26983 = state_26951__$1;
(statearr_26958_26983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (15))){
var inst_26941 = (state_26951[(2)]);
var state_26951__$1 = state_26951;
var statearr_26959_26984 = state_26951__$1;
(statearr_26959_26984[(2)] = inst_26941);

(statearr_26959_26984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (13))){
var state_26951__$1 = state_26951;
var statearr_26960_26985 = state_26951__$1;
(statearr_26960_26985[(2)] = null);

(statearr_26960_26985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (6))){
var inst_26911 = (state_26951[(8)]);
var inst_26936 = inst_26911.length;
var inst_26937 = (inst_26936 > (0));
var state_26951__$1 = state_26951;
if(cljs.core.truth_(inst_26937)){
var statearr_26961_26986 = state_26951__$1;
(statearr_26961_26986[(1)] = (12));

} else {
var statearr_26962_26987 = state_26951__$1;
(statearr_26962_26987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (3))){
var inst_26949 = (state_26951[(2)]);
var state_26951__$1 = state_26951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26951__$1,inst_26949);
} else {
if((state_val_26952 === (12))){
var inst_26911 = (state_26951[(8)]);
var inst_26939 = cljs.core.vec.call(null,inst_26911);
var state_26951__$1 = state_26951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26951__$1,(15),out,inst_26939);
} else {
if((state_val_26952 === (2))){
var state_26951__$1 = state_26951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26951__$1,(4),ch);
} else {
if((state_val_26952 === (11))){
var inst_26919 = (state_26951[(10)]);
var inst_26915 = (state_26951[(9)]);
var inst_26929 = (state_26951[(2)]);
var inst_26930 = [];
var inst_26931 = inst_26930.push(inst_26915);
var inst_26911 = inst_26930;
var inst_26912 = inst_26919;
var state_26951__$1 = (function (){var statearr_26963 = state_26951;
(statearr_26963[(11)] = inst_26931);

(statearr_26963[(7)] = inst_26912);

(statearr_26963[(8)] = inst_26911);

(statearr_26963[(12)] = inst_26929);

return statearr_26963;
})();
var statearr_26964_26988 = state_26951__$1;
(statearr_26964_26988[(2)] = null);

(statearr_26964_26988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (9))){
var inst_26911 = (state_26951[(8)]);
var inst_26927 = cljs.core.vec.call(null,inst_26911);
var state_26951__$1 = state_26951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26951__$1,(11),out,inst_26927);
} else {
if((state_val_26952 === (5))){
var inst_26919 = (state_26951[(10)]);
var inst_26912 = (state_26951[(7)]);
var inst_26915 = (state_26951[(9)]);
var inst_26919__$1 = f.call(null,inst_26915);
var inst_26920 = cljs.core._EQ_.call(null,inst_26919__$1,inst_26912);
var inst_26921 = cljs.core.keyword_identical_QMARK_.call(null,inst_26912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26922 = ((inst_26920) || (inst_26921));
var state_26951__$1 = (function (){var statearr_26965 = state_26951;
(statearr_26965[(10)] = inst_26919__$1);

return statearr_26965;
})();
if(cljs.core.truth_(inst_26922)){
var statearr_26966_26989 = state_26951__$1;
(statearr_26966_26989[(1)] = (8));

} else {
var statearr_26967_26990 = state_26951__$1;
(statearr_26967_26990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (14))){
var inst_26944 = (state_26951[(2)]);
var inst_26945 = cljs.core.async.close_BANG_.call(null,out);
var state_26951__$1 = (function (){var statearr_26969 = state_26951;
(statearr_26969[(13)] = inst_26944);

return statearr_26969;
})();
var statearr_26970_26991 = state_26951__$1;
(statearr_26970_26991[(2)] = inst_26945);

(statearr_26970_26991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (10))){
var inst_26934 = (state_26951[(2)]);
var state_26951__$1 = state_26951;
var statearr_26971_26992 = state_26951__$1;
(statearr_26971_26992[(2)] = inst_26934);

(statearr_26971_26992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26952 === (8))){
var inst_26919 = (state_26951[(10)]);
var inst_26911 = (state_26951[(8)]);
var inst_26915 = (state_26951[(9)]);
var inst_26924 = inst_26911.push(inst_26915);
var tmp26968 = inst_26911;
var inst_26911__$1 = tmp26968;
var inst_26912 = inst_26919;
var state_26951__$1 = (function (){var statearr_26972 = state_26951;
(statearr_26972[(7)] = inst_26912);

(statearr_26972[(8)] = inst_26911__$1);

(statearr_26972[(14)] = inst_26924);

return statearr_26972;
})();
var statearr_26973_26993 = state_26951__$1;
(statearr_26973_26993[(2)] = null);

(statearr_26973_26993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25075__auto___26979,out))
;
return ((function (switch__24980__auto__,c__25075__auto___26979,out){
return (function() {
var cljs$core$async$state_machine__24981__auto__ = null;
var cljs$core$async$state_machine__24981__auto____0 = (function (){
var statearr_26974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26974[(0)] = cljs$core$async$state_machine__24981__auto__);

(statearr_26974[(1)] = (1));

return statearr_26974;
});
var cljs$core$async$state_machine__24981__auto____1 = (function (state_26951){
while(true){
var ret_value__24982__auto__ = (function (){try{while(true){
var result__24983__auto__ = switch__24980__auto__.call(null,state_26951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24983__auto__;
}
break;
}
}catch (e26975){if((e26975 instanceof Object)){
var ex__24984__auto__ = e26975;
var statearr_26976_26994 = state_26951;
(statearr_26976_26994[(5)] = ex__24984__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26995 = state_26951;
state_26951 = G__26995;
continue;
} else {
return ret_value__24982__auto__;
}
break;
}
});
cljs$core$async$state_machine__24981__auto__ = function(state_26951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24981__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24981__auto____1.call(this,state_26951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24981__auto____0;
cljs$core$async$state_machine__24981__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24981__auto____1;
return cljs$core$async$state_machine__24981__auto__;
})()
;})(switch__24980__auto__,c__25075__auto___26979,out))
})();
var state__25077__auto__ = (function (){var statearr_26977 = f__25076__auto__.call(null);
(statearr_26977[(6)] = c__25075__auto___26979);

return statearr_26977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25077__auto__);
});})(c__25075__auto___26979,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1575893148694
