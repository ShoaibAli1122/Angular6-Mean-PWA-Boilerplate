(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"BWn/":function(n,t,i){"use strict";i.r(t);var e=i("CcnG"),r=i("t/Na"),o=function(){function n(n){this.http=n}return n.prototype.getArticle=function(n){return this.http.get("/api/article/?id="+n)},n.ngInjectableDef=e.Q({factory:function(){return new n(e.U(r.c))},token:n,providedIn:"root"}),n}(),u=i("mrSG"),l=i("MGBS"),c=i("zotm"),a=i("67Y/"),p=i("0/uQ"),s=function(){function n(n){this.project=n}return n.prototype.call=function(n,t){return t.subscribe(new f(n,this.project))},n}(),f=function(n){function t(t,i){var e=n.call(this,t)||this;return e.project=i,e.index=0,e}return u.b(t,n),t.prototype._next=function(n){var t,i=this.index++;try{t=this.project(n,i)}catch(n){return void this.destination.error(n)}this._innerSub(t,n,i)},t.prototype._innerSub=function(n,t,i){var e=this.innerSubscription;e&&e.unsubscribe(),this.add(this.innerSubscription=Object(c.a)(this,n,t,i))},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.closed||n.prototype._complete.call(this)},t.prototype._unsubscribe=function(){this.innerSubscription=null},t.prototype.notifyComplete=function(t){this.remove(t),this.innerSubscription=null,this.isStopped&&n.prototype._complete.call(this)},t.prototype.notifyNext=function(n,t,i,e,r){this.destination.next(t)},t}(l.a),h=function(){function n(n,t,i){this.router=n,this.route=t,this._articleService=i,this.article={title:"",description:""},window.indexedDB&&(this.pouchInstance=new PouchDB("meanboiler"))}return n.prototype.ngOnInit=function(){var n=this;this.route.paramMap.pipe(function n(t,i){return"function"==typeof i?function(e){return e.pipe(n(function(n,e){return Object(p.a)(t(n,e)).pipe(Object(a.a)(function(t,r){return i(n,t,e,r)}))}))}:function(n){return n.lift(new s(t))}}(function(t){return n.id=t.get("id"),n._articleService.getArticle(n.id)})).subscribe(function(t){n.article=t},function(t){var i=n;i.pouchInstance&&n.pouchInstance.get("articles").then(function(n){i.article=n.val.find(function(n){if(n._id==i.id)return n})}).then(function(n){}).catch(function(n){console.log(n)})})},n}(),d=function(){},b=i("ZYCi"),v=e.La({encapsulation:0,styles:[[".article[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(100% - 80px);margin:auto;padding:20px}.article[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function y(n){return e.ab(0,[(n()(),e.Na(0,0,null,null,4,"div",[["class","article"]],null,null,null,null,null)),(n()(),e.Na(1,0,null,null,1,"h4",[["class","title"]],null,null,null,null,null)),(n()(),e.Za(2,null,["",""])),(n()(),e.Na(3,0,null,null,1,"div",[["class","description"]],null,null,null,null,null)),(n()(),e.Za(4,null,["",""]))],null,function(n,t){var i=t.component;n(t,2,0,i.article.title),n(t,4,0,i.article.description)})}var g=e.Ja("article",h,function(n){return e.ab(0,[(n()(),e.Na(0,0,null,null,1,"article",[],null,null,null,y,v)),e.Ma(1,114688,null,0,h,[b.k,b.a,o],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]);i.d(t,"ArticleModuleNgFactory",function(){return m});var m=e.Ka(d,[],function(n){return e.Ta([e.Ua(512,e.j,e.Z,[[8,[g]],[3,e.j],e.v]),e.Ua(1073742336,b.m,b.m,[[2,b.r],[2,b.k]]),e.Ua(1073742336,d,d,[]),e.Ua(1024,b.i,function(){return[[{path:"",component:h}]]},[])])})}}]);