var tinyMCE_GZ={settings:{themes:"",plugins:"",languages:"",disk_cache:true,page_name:"tiny_mce_gzip.php",debug:false,suffix:""},init:function(E,A,F){var D=this,G,C,B=document.getElementsByTagName("script");for(G in E){D.settings[G]=E[G]}E=D.settings;D.baseURL = scriptPath + '/plugins/tinymce/3rdparty';if(!D.coreLoaded){D.loadScripts(1,E.themes,E.plugins,E.languages,A,F)}},loadScripts:function(co,th,pl,la,cb,sc){var t=this,x,w=window,q,c=0,ti,s=t.settings;function get(s){x=0;try{x=new ActiveXObject(s)}catch(s){}return x}q="js=true&diskcache="+(s.disk_cache?"true":"false")+"&core="+(co?"true":"false")+"&suffix="+escape(s.suffix)+"&themes="+escape(th)+"&plugins="+escape(pl)+"&languages="+escape(la);if(co){t.coreLoaded=1}x=w.XMLHttpRequest?new XMLHttpRequest():get("Msxml2.XMLHTTP")||get("Microsoft.XMLHTTP");x.overrideMimeType&&x.overrideMimeType("text/javascript");x.open("GET",t.baseURL+"/"+s.page_name+"?"+q,!!cb);x.send("");if(cb){ti=w.setInterval(function(){if(x.readyState==4||c++>10000){w.clearInterval(ti);if(c<10000&&x.status==200){t.loaded=1;t.eval(x.responseText);tinymce.dom.Event.domLoaded=true;cb.call(sc||t,x)}ti=x=null}},10)}else{t.eval(x.responseText)}},start:function(){var B=this,F=tinymce.each,C=B.settings,A,D=C.languages.split(",");tinymce.suffix=C.suffix;tinymce.create("tinymce.compressor.ScriptLoader:tinymce.dom.ScriptLoader",{loadScripts:function(M,G,J){var I=this,K=[],H=[],L=[];F(M,function(O){var N=O.url;if((!I.lookup[N]||I.lookup[N].state!=2)&&N.indexOf(B.baseURL)===0){if(N.indexOf("editor_template")!=-1){K.push(/\/themes\/([^\/]+)/.exec(N)[1]);E(N,1)}if(N.indexOf("editor_plugin")!=-1){H.push(/\/plugins\/([^\/]+)/.exec(N)[1]);E(N,1)}if(N.indexOf("/langs/")!=-1){L.push(/\/langs\/([^.]+)/.exec(N)[1]);E(N,1)}}});if(K.length+H.length+L.length>0){if(A.settings.strict_mode){B.loadScripts(0,K.join(","),H.join(","),L.join(","),G,J);return }else{B.loadScripts(0,K.join(","),H.join(","),L.join(","),G,J)}}return I.parent(M,G,J)}});A=tinymce.ScriptLoader=new tinymce.compressor.ScriptLoader();function E(G,H){var I;if(!H){G=B.baseURL+G}I={url:G,state:2};A.queue.push(I);A.lookup[I.url]=I}F(D,function(G){if(G){E("/langs/"+G+".js")}});F(C.themes.split(","),function(G){if(G){E("/themes/"+G+"/editor_template"+C.suffix+".js");F(D,function(H){if(H){E("/themes/"+G+"/langs/"+H+".js")}})}});F(C.plugins.split(","),function(G){if(G){E("/plugins/"+G+"/editor_plugin"+C.suffix+".js");F(D,function(H){if(H){E("/plugins/"+G+"/langs/"+H+".js")}})}})},end:function(){},eval:function(co){var w=window;if(!w.execScript){if(/Gecko/.test(navigator.userAgent)){eval(co,w)}else{eval.call(w,co)}}else{w.execScript(co)}}};