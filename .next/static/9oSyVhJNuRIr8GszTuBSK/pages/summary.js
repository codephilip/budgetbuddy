(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3Z9Z":function(t,e,r){"use strict";var o=r("wx14"),n=r("zLVn"),a=r("TSYQ"),l=r.n(a),i=r("q1tI"),s=r.n(i),u=r("vUet"),c=["xl","lg","md","sm","xs"],p=s.a.forwardRef(function(t,e){var r=t.bsPrefix,a=t.className,i=t.noGutters,p=t.as,d=void 0===p?"div":p,h=Object(n.a)(t,["bsPrefix","className","noGutters","as"]),g=Object(u.a)(r,"row"),f=g+"-cols",v=[];return c.forEach(function(t){var e,r=h[t];delete h[t];var o="xs"!==t?"-"+t:"";null!=(e=null!=r&&"object"===typeof r?r.cols:r)&&v.push(""+f+o+"-"+e)}),s.a.createElement(d,Object(o.a)({ref:e},h,{className:l.a.apply(void 0,[a,g,i&&"no-gutters"].concat(v))}))});p.displayName="Row",p.defaultProps={noGutters:!1},e.a=p},JI6e:function(t,e,r){"use strict";var o=r("wx14"),n=r("zLVn"),a=r("TSYQ"),l=r.n(a),i=r("q1tI"),s=r.n(i),u=r("vUet"),c=["xl","lg","md","sm","xs"],p=s.a.forwardRef(function(t,e){var r=t.bsPrefix,a=t.className,i=t.as,p=void 0===i?"div":i,d=Object(n.a)(t,["bsPrefix","className","as"]),h=Object(u.a)(r,"col"),g=[],f=[];return c.forEach(function(t){var e,r,o,n=d[t];if(delete d[t],"object"===typeof n&&null!=n){var a=n.span;e=void 0===a||a,r=n.offset,o=n.order}else e=n;var l="xs"!==t?"-"+t:"";e&&g.push(!0===e?""+h+l:""+h+l+"-"+e),null!=o&&f.push("order"+l+"-"+o),null!=r&&f.push("offset"+l+"-"+r)}),g.length||g.push(h),s.a.createElement(p,Object(o.a)({},d,{ref:e,className:l.a.apply(void 0,[a].concat(g,f))}))});p.displayName="Col",e.a=p},Kgqc:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/summary",function(){var t=r("ec26");return{page:t.default||t}}])},MBJH:function(t,e,r){"use strict";var o=r("wx14"),n=r("zLVn"),a=r("TSYQ"),l=r.n(a),i=r("q1tI"),s=r.n(i),u=r("vUet"),c=s.a.forwardRef(function(t,e){var r=t.bsPrefix,a=t.className,i=t.striped,c=t.bordered,p=t.borderless,d=t.hover,h=t.size,g=t.variant,f=t.responsive,v=Object(n.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(u.a)(r,"table"),b=l()(a,m,g&&m+"-"+g,h&&m+"-"+h,i&&m+"-striped",c&&m+"-bordered",p&&m+"-borderless",d&&m+"-hover"),y=s.a.createElement("table",Object(o.a)({},v,{className:b,ref:e}));if(f){var C=m+"-responsive";return"string"===typeof f&&(C=C+"-"+f),s.a.createElement("div",{className:C},y)}return y});e.a=c},XDgv:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r("q1tI"),l=(o=a)&&o.__esModule?o:{default:o},i=r("17x9");var s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,l.default.Component),n(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onError,r=t.onLoad,o=t.url;this.constructor.loadedScripts[o]?r():this.constructor.erroredScripts[o]?e():this.constructor.scriptObservers[o]?this.constructor.scriptObservers[o][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[o]=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var t=this.props.url,e=this.constructor.scriptObservers[t];e&&delete e[this.scriptLoaderId]}},{key:"createScript",value:function(){var t=this,e=this.props,r=e.onCreate,o=e.url,n=e.attributes,a=document.createElement("script");r(),n&&Object.keys(n).forEach(function(t){return a.setAttribute(t,n[t])}),a.src=o,a.hasAttribute("async")||(a.async=1);var l=function(e){var r=t.constructor.scriptObservers[o];Object.keys(r).forEach(function(n){e(r[n])&&delete t.constructor.scriptObservers[o][t.scriptLoaderId]})};a.onload=function(){t.constructor.loadedScripts[o]=!0,l(function(t){return t.onLoad(),!0})},a.onerror=function(){t.constructor.erroredScripts[o]=!0,l(function(t){return t.onError(),!0})},document.body.appendChild(a)}},{key:"render",value:function(){return null}}]),e}();s.propTypes={attributes:i.PropTypes.object,onCreate:i.PropTypes.func,onError:i.PropTypes.func.isRequired,onLoad:i.PropTypes.func.isRequired,url:i.PropTypes.string.isRequired},s.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},s.scriptObservers={},s.loadedScripts={},s.erroredScripts={},s.idCount=0,e.default=s,t.exports=e.default},ec26:function(t,e,r){"use strict";r.r(e);var o=r("q1tI"),n=r.n(o),a=r("3mGJ"),l=r("3Z9Z"),i=r("JI6e"),s=r("MBJH"),u=r("XDgv"),c=r.n(u),p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function d(t,e){function r(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var h=function(){return(h=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function g(t,e,r,o){return new(r||(r=Promise))(function(n,a){function l(t){try{s(o.next(t))}catch(e){a(e)}}function i(t){try{s(o.throw(t))}catch(e){a(e)}}function s(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(l,i)}s((o=o.apply(t,e||[])).next())})}function f(t,e){var r,o,n,a,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){l.label=a[1];break}if(6===a[0]&&l.label<n[1]){l.label=n[1],n=a;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(a);break}n[2]&&l.ops.pop(),l.trys.pop();continue}a=e.call(t,l)}catch(i){a=[6,i],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var v={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(t,e){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleGoogleChartsLoaderScriptLoaded=function(t){var r=e.props,o=r.chartVersion,n=r.chartPackages,a=r.chartLanguage,l=r.mapsApiKey,i=r.onLoad;t.charts.load(o||"current",{packages:n||["corechart","controls"],language:a||"en",mapsApiKey:l}),t.charts.setOnLoadCallback(function(){i(t)})},e}return d(e,t),e.prototype.shouldComponentUpdate=function(t){return t.chartPackages===this.props.chartPackages},e.prototype.render=function(){var t=this,e=this.props.onError;return Object(o.createElement)(c.a,{url:"https://www.gstatic.com/charts/loader.js",onError:e,onLoad:function(){var e=window;e.google&&t.handleGoogleChartsLoaderScriptLoaded(e.google)}})},e}(o.Component),b=0,y=function(){return"reactgooglegraph-"+(b+=1)},C=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],w=function(t,e,r){return void 0===r&&(r={}),g(void 0,void 0,void 0,function(){return f(this,function(o){return[2,new Promise(function(o,n){var a=r.headers?"headers="+r.headers:"headers=0",l=r.query?"&tq="+encodeURIComponent(r.query):"",i=r.gid?"&gid="+r.gid:"",s=r.sheet?"&sheet="+r.sheet:"",u=r.access_token?"&access_token="+r.access_token:"",c=e+"/gviz/tq?"+(""+a+i+s+l+u);new t.visualization.Query(c).send(function(t){t.isError()?n("Error in query:  "+t.getMessage()+" "+t.getDetailedMessage()):o(t.getDataTable())})})]})})},E=Object(o.createContext)(v),O=E.Provider,D=E.Consumer,T=function(t){var e=t.children,r=t.value;return Object(o.createElement)(O,{value:r},e)},P=function(t){var e=t.render;return Object(o.createElement)(D,null,function(t){return e(t)})},j="#CCCCCC",_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={hiddenColumns:[]},e.listenToLegendToggle=function(){var t=e.props,r=t.google,o=t.googleChartWrapper;r.visualization.events.addListener(o,"select",function(){var t=o.getChart().getSelection(),r=o.getDataTable();if(0!==t.length&&null===t[0].row&&null!==r){var n=t[0].column,a=e.getColumnID(r,n);e.state.hiddenColumns.includes(a)?e.setState(function(t){return h({},t,{hiddenColumns:t.hiddenColumns.filter(function(t){return t!==a}).slice()})}):e.setState(function(t){return h({},t,{hiddenColumns:t.hiddenColumns.concat([a])})})}})},e.applyFormatters=function(t,r){for(var o=e.props.google,n=0,a=r;n<a.length;n++){var l=a[n];switch(l.type){case"ArrowFormat":(i=new o.visualization.ArrowFormat(l.options)).format(t,l.column);break;case"BarFormat":(i=new o.visualization.BarFormat(l.options)).format(t,l.column);break;case"ColorFormat":for(var i=new o.visualization.ColorFormat(l.options),s=0,u=l.ranges;s<u.length;s++){var c=u[s];i.addRange.apply(i,c)}i.format(t,l.column);break;case"DateFormat":(i=new o.visualization.DateFormat(l.options)).format(t,l.column);break;case"NumberFormat":(i=new o.visualization.NumberFormat(l.options)).format(t,l.column);break;case"PatternFormat":(i=new o.visualization.PatternFormat(l.options)).format(t,l.column)}}},e.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},e.draw=function(t){var r=t.data,o=t.diffdata,n=t.rows,a=t.columns,l=t.options,i=t.legend_toggle,s=t.legendToggle,u=t.chartType,c=t.formatters,p=t.spreadSheetUrl,d=t.spreadSheetQueryParameters;return g(e,void 0,void 0,function(){var t,e,h,g,v,m,b,y,C,E,O,D,T,P;return f(this,function(f){switch(f.label){case 0:return t=this.props,e=t.google,h=t.googleChartWrapper,v=null,null!==o&&(m=e.visualization.arrayToDataTable(o.old),b=e.visualization.arrayToDataTable(o.new),v=e.visualization[u].prototype.computeDiff(m,b)),null===r?[3,1]:(g=Array.isArray(r)?e.visualization.arrayToDataTable(r):new e.visualization.DataTable(r),[3,5]);case 1:return null===n||null===a?[3,2]:(g=e.visualization.arrayToDataTable([a].concat(n)),[3,5]);case 2:return null===p?[3,4]:[4,w(e,p,d)];case 3:return g=f.sent(),[3,5];case 4:g=e.visualization.arrayToDataTable([]),f.label=5;case 5:for(y=g.getNumberOfColumns(),C=0;C<y;C+=1)E=this.getColumnID(g,C),this.state.hiddenColumns.includes(E)&&(O=g.getColumnLabel(C),D=g.getColumnId(C),T=g.getColumnType(C),g.removeColumn(C),g.addColumn({label:O,id:D,type:T}));return P=h.getChart(),"Timeline"===h.getChartType()&&P&&P.clearChart(),h.setChartType(u),h.setOptions(l),h.setDataTable(g),h.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(g),null!==v&&(h.setDataTable(v),h.draw()),null!==c&&(this.applyFormatters(g,c),h.setDataTable(g),h.draw()),!0!==s&&!0!==i||this.grayOutHiddenColumns({options:l}),[2]}})})},e.grayOutHiddenColumns=function(t){var r=t.options,o=e.props.googleChartWrapper,n=o.getDataTable();if(null!==n){var a=n.getNumberOfColumns();if(!1!==e.state.hiddenColumns.length>0){var l=Array.from({length:a-1}).map(function(t,o){var a=e.getColumnID(n,o+1);return e.state.hiddenColumns.includes(a)?j:"undefined"!==typeof r.colors&&null!==r.colors?r.colors[o]:C[o]});o.setOptions(h({},r,{colors:l})),o.draw()}}},e.onResize=function(){e.props.googleChartWrapper.draw()},e}return d(e,t),e.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.google,r=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()},e.prototype.componentDidUpdate=function(){this.draw(this.props)},e.prototype.render=function(){return null},e}(o.Component),I=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.render=function(){var t=this.props,e=t.google,r=t.googleChartWrapper,n=t.googleChartDashboard;return Object(o.createElement)(P,{render:function(t){return Object(o.createElement)(_,h({},t,{google:e,googleChartWrapper:r,googleChartDashboard:n}))}})},e}(o.Component),z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.listenToEvents=function(t){var e=this,r=t.chartEvents,o=t.google,n=t.googleChartWrapper;if(null!==r){o.visualization.events.removeAllListeners(n);for(var a=function(t){var r=t.eventName,a=t.callback;o.visualization.events.addListener(n,r,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];a({chartWrapper:n,props:e.props,google:o,eventArgs:t})})},l=0,i=r;l<i.length;l++){a(i[l])}}},e.prototype.render=function(){var t=this,e=this.props,r=e.google,n=e.googleChartWrapper;return Object(o.createElement)(P,{render:function(e){return t.listenToEvents({chartEvents:e.chartEvents||null,google:r,googleChartWrapper:n}),null}})},e}(o.Component),L=0,S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},e.graphID=null,e.dashboard_ref=Object(o.createRef)(),e.toolbar_ref=Object(o.createRef)(),e.getGraphID=function(){var t,r=e.props,o=r.graphID,n=r.graph_id;return t=null===o&&null===n?null===e.graphID?y():e.graphID:null!==o&&null===n?o:null!==n&&null===o?n:o,e.graphID=t,e.graphID},e.getControlID=function(t,e){return L+=1,"undefined"===typeof t?"googlechart-control-"+e+"-"+L:t},e.addControls=function(t,r){var o=e.props,n=o.google,a=o.controls,l=null===a?null:a.map(function(t,r){var o=t.controlID,a=t.controlType,l=t.options,i=t.controlWrapperParams,s=e.getControlID(o,r);return{controlProp:t,control:new n.visualization.ControlWrapper(h({containerId:s,controlType:a,options:l},i))}});if(null===l)return null;r.bind(l.map(function(t){return t.control}),t);for(var i=function(r){for(var o=r.control,a=r.controlProp.controlEvents,l=function(r){var a=r.callback,l=r.eventName;n.visualization.events.removeListener(o,l,a),n.visualization.events.addListener(o,l,function(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];a({chartWrapper:t,controlWrapper:o,props:e.props,google:n,eventArgs:r})})},i=0,s=void 0===a?[]:a;i<s.length;i++){l(s[i])}},s=0,u=l;s<u.length;s++){i(u[s])}return l},e.renderChart=function(){var t=e.props,r=t.width,n=t.height,a=t.options,l=t.style,i=t.className,s=t.rootProps,u=t.google,c=h({height:n||a&&a.height,width:r||a&&a.width},l);return Object(o.createElement)("div",h({id:e.getGraphID(),style:c,className:i},s),e.state.isReady&&null!==e.state.googleChartWrapper?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(I,{googleChartWrapper:e.state.googleChartWrapper,google:u,googleChartDashboard:e.state.googleChartDashboard}),Object(o.createElement)(z,{googleChartWrapper:e.state.googleChartWrapper,google:u})):null)},e.renderControl=function(t){return void 0===t&&(t=function(t){t.control,t.controlProp;return!0}),e.state.isReady&&null!==e.state.googleChartControls?Object(o.createElement)(o.Fragment,null,e.state.googleChartControls.filter(function(e){var r=e.controlProp,o=e.control;return t({control:o,controlProp:r})}).map(function(t){var e=t.control;t.controlProp;return Object(o.createElement)("div",{key:e.getContainerId(),id:e.getContainerId()})})):null},e.renderToolBar=function(){return null===e.props.toolbarItems?null:Object(o.createElement)("div",{ref:e.toolbar_ref})},e}return d(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.options,r=t.google,o=t.chartType,n=t.chartWrapperParams,a=t.toolbarItems,l=t.getChartEditor,i=t.getChartWrapper,s=h({chartType:o,options:e,containerId:this.getGraphID()},n),u=new r.visualization.ChartWrapper(s);u.setOptions(e),i(u,r);var c=new r.visualization.Dashboard(this.dashboard_ref),p=this.addControls(u,c);null!==a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var d=null;null!==l&&l({chartEditor:d=new r.visualization.ChartEditor,chartWrapper:u,google:r}),this.setState({googleChartEditor:d,googleChartControls:p,googleChartDashboard:c,googleChartWrapper:u,isReady:!0})},e.prototype.componentDidUpdate=function(){if(null!==this.state.googleChartWrapper&&null!==this.state.googleChartDashboard&&null!==this.state.googleChartControls)for(var t=this.props.controls,e=0;e<t.length;e+=1){var r=t[e],o=r.controlType,n=r.options,a=r.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(n),this.state.googleChartControls[e].control.setControlType(o)}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls},e.prototype.render=function(){var t=this.props,e=t.width,r=t.height,n=t.options,a=t.style,l=h({height:r||n&&n.height,width:e||n&&n.width},a);return null!==this.props.render?Object(o.createElement)("div",{ref:this.dashboard_ref,style:l},Object(o.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(o.createElement)("div",{ref:this.dashboard_ref,style:l},this.renderControl(function(t){return"bottom"!==t.controlProp.controlPosition}),this.renderChart(),this.renderControl(function(t){return"bottom"===t.controlProp.controlPosition}),this.renderToolBar())},e}(o.Component),W=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isMounted=!1,e.state={loadingStatus:"loading",google:null},e.onLoad=function(t){if(e.isFullyLoaded(t))e.onSuccess(t);else var r=setInterval(function(){var t=window.google;e._isMounted?t&&e.isFullyLoaded(t)&&(clearInterval(r),e.onSuccess(t)):clearInterval(r)},1e3)},e.onSuccess=function(t){e.setState({loadingStatus:"ready",google:t})},e.onError=function(){e.setState({loadingStatus:"errored"})},e}return d(e,t),e.prototype.render=function(){var t=this.props,e=t.chartLanguage,r=t.chartPackages,n=t.chartVersion,a=t.mapsApiKey,l=t.loader,i=t.errorElement;return Object(o.createElement)(T,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(o.createElement)(S,h({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&i?i:l,Object(o.createElement)(m,h({},{chartLanguage:e,chartPackages:r,chartVersion:n,mapsApiKey:a},{onLoad:this.onLoad,onError:this.onError})))},e.prototype.componentDidMount=function(){this._isMounted=!0},e.prototype.componentWillUnmount=function(){this._isMounted=!1},e.prototype.isFullyLoaded=function(t){var e=this.props,r=e.controls,o=e.toolbarItems,n=e.getChartEditor;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!r||t.visualization.ChartWrapper)&&(!n||t.visualization.ChartEditor)&&(!o||t.visualization.drawToolbar)},e.defaultProps=v,e}(o.Component),k=n.a.createElement;var x=function(){return k("div",null,k(W,{chartType:"PieChart",loader:k("div",null,"Loading Pie Chart"),data:[["Category","Dollars"],["Housing",800],["Food",200],["Utilities",150],["Shopping",100],["Dept Payment",50]],options:{title:"Spending Breakdown",legend:"none"}}))},A=n.a.createElement;var N=function(){return A("div",null,A(W,{chartType:"BarChart",loader:A("div",null,"Loading Bar Chart"),diffdata:{old:[["Category","Dollars"],["Housing",1e3],["Food",300],["Utilities",175],["Shopping",50],["Dept Payment",150]],new:[["Category","Dollars"],["Housing",800],["Food",200],["Utilities",150],["Shopping",100],["Dept Payment",50]]},options:{title:"Budget Usage By Category",legend:"none",colors:["#4db994","black"]}}))},F=n.a.createElement;var R=function(){return F("div",{className:"Summary"},F("h1",null,"Summary"),F(l.a,null,F(i.a,null,F(x,null)),F(i.a,null,F(s.a,{responsive:!0},F("thead",null,F("tr",null,F("th",null,"#"),F("th",null,"Name"),F("th",null,"Date"),F("th",null,"Amount"))),F("tbody",null,F("tr",null,F("td",null,"1"),F("td",null,"Town & Country"),F("td",null,"10/16/2020"),F("td",null,"$85.21")),F("tr",null,F("td",null,"2"),F("td",null,"Car Payment"),F("td",null,"10/01/2020"),F("td",null,"$350"))))),F(i.a,null,F(N,null))))},U=n.a.createElement;e.default=function(){return U(a.a,null,U(R,null),U(R,null))}},vUet:function(t,e,r){"use strict";r.d(e,"a",function(){return l});r("wx14");var o=r("q1tI"),n=r.n(o),a=n.a.createContext({});a.Consumer,a.Provider;function l(t,e){var r=Object(o.useContext)(a);return t||r[e]||e}},wx14:function(t,e,r){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}r.d(e,"a",function(){return o})},zLVn:function(t,e,r){"use strict";function o(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}r.d(e,"a",function(){return o})}},[["Kgqc",1,0]]]);