/*! Copyright (c) 2018 CommonTime Ltd */
/*! Build date: Wed Jan 31 2018 21:36:51 GMT+0000 (GMT Standard Time) */
/*! ================================= */
/*! Commit hash: 3d85452 (3d85452b87df9675dfab95c22501ebf30e55b49d) */
/*! Commit date: Wed Jan 31 2018 09:45:20 GMT+0000 (GMT Standard Time) */
/*! Commit branch: develop */
/*! ================================= */

(()=>{"use strict";customElements.define("ct-data-col",class extends HTMLElement{constructor(a){return a=super(a),a}})})();
/*! Copyright (c) 2018 CommonTime Ltd */
/*! Build date: Wed Jan 31 2018 21:36:51 GMT+0000 (GMT Standard Time) */
/*! ================================= */
/*! Commit hash: 3d85452 (3d85452b87df9675dfab95c22501ebf30e55b49d) */
/*! Commit date: Wed Jan 31 2018 09:45:20 GMT+0000 (GMT Standard Time) */
/*! Commit branch: develop */
/*! ================================= */

var _Mathmin=Math.min,_NumberMIN_SAFE_INTEGER=Number.MIN_SAFE_INTEGER;(()=>{"use strict";customElements.define("ct-data-grid",class t extends HTMLElement{injectStyles(){let s=document.head.querySelector(`style[rel=${this.tagName.toLowerCase()}]`);s||(s=document.createElement("style"),s.setAttribute("rel",this.tagName.toLowerCase()),s.textContent=`@keyframes ctDataGridSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}ct-data-grid{display:flex;position:relative;flex:1}ct-data-grid ct-data-col{display:none;position:absolute;top:-9999px;left:-9999px;width:0;height:0}ct-data-grid .ct-data-grid{position:relative;top:0;left:0;width:100%;height:auto;max-height:100%;display:flex;flex-direction:column}ct-data-grid .ct-data-grid .search-area{display:none;flex:0 0 auto;margin:0 0 20px 0}ct-data-grid .ct-data-grid .table-area{position:relative;min-height:.01%;overflow-x:auto;-webkit-overflow-scrolling:touch}ct-data-grid .ct-data-grid .table-area .table-container table{margin:0;width:100%}ct-data-grid .ct-data-grid .table-area .table-container table td,ct-data-grid .ct-data-grid .table-area .table-container table th{position:relative}ct-data-grid .ct-data-grid .table-area .table-container table th{user-select:none;white-space:nowrap}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable{cursor:pointer}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable:after{content:"\\f0dc";font-family:"FontAwesome";display:inline-block;vertical-align:middle;font-size:0.8em;width:20px;text-align:right;opacity:0.3}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable.sort-asc:after{content:"\\f0de";opacity:1}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable.sort-desc:after{content:"\\f0dd";opacity:1}ct-data-grid .ct-data-grid .table-area .table-container table td{padding:0}ct-data-grid .ct-data-grid .table-area .table-container table td .content{display:block;padding:8px}ct-data-grid .ct-data-grid .table-area .table-container table td .control{display:block;padding:5px}ct-data-grid .ct-data-grid .table-area .table-container table td .control input{line-height:normal}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls{display:block;padding:7px}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls button{margin:0 0 0 5px}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls button:first-child{margin:0}ct-data-grid .ct-data-grid .table-area .table-container table td .message-detail{font-size:0.8em}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-control{width:100%}ct-data-grid .ct-data-grid .table-area .table-container table td.message-info{padding-left:30px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-info:before{content:"\\f05a";font-family:"FontAwesome";display:block;position:absolute;top:9px;left:9px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-error{background:#f2dede;padding-left:30px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-error:before{content:"\\f06a";font-family:"FontAwesome";display:block;position:absolute;top:9px;left:9px}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-row tr.selected,ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell tr.selected{background-color:#d9edf7}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-row td,ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell td{cursor:pointer}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell td.selected{background-color:rgba(0,0,0,0.05)}ct-data-grid .ct-data-grid .table-area.fixed-headers{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container{display:flex;flex:1}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table{display:flex;flex-direction:column;table-layout:fixed;flex:1}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table thead{display:block;flex:0 0 auto}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table thead tr{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody{display:block;flex:1 1 auto;overflow:auto}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody tr{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody tr:first-child td{border-top:0}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table td,ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table th{flex:1;overflow:hidden}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table td .content,ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table th .content{text-overflow:ellipsis;overflow:hidden}ct-data-grid .ct-data-grid .pagination-area{flex:0 0 auto;display:none;user-select:none;margin:20px 0 0 0}ct-data-grid .ct-data-grid .loading{position:absolute;top:0;left:0;width:100%;height:100%;display:none}ct-data-grid .ct-data-grid.has-search .search-area{display:flex;justify-content:flex-end}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box{position:relative;width:400px}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box input.form-control{z-index:1;padding-right:24px}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box .clear-button{position:absolute;top:0;right:34px;width:24px;height:100%;padding:8px 0 0 0;text-align:center;z-index:2;cursor:pointer;opacity:0.5;font-size:0.8em}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box .clear-button:hover{opacity:1}ct-data-grid .ct-data-grid.has-pagination .pagination-area{display:flex;justify-content:center}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination{display:block;margin:0}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination .page-bookend .page-label{display:none}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination li>a{min-width:40px;text-align:center;cursor:pointer}ct-data-grid .ct-data-grid.loading-data .loading{display:block}ct-data-grid .ct-data-grid.loading-data .loading .bg{width:100%;height:100%;background:#ffffff;opacity:0.5}ct-data-grid .ct-data-grid.loading-data .loading .spinner{position:absolute;top:50%;left:50%;width:32px;height:32px;border:1px solid #cccccc;border-radius:50%;margin:-16px 0 0 -16px;background:#ffffff}ct-data-grid .ct-data-grid.loading-data .loading .spinner:after{content:"";display:block;position:absolute;width:24px;height:24px;top:50%;left:50%;margin:-12px 0 0 -12px;border:3px solid rgba(0,0,0,0.2);border-left-color:#000000;border-radius:50%;transform:translateZ(0);animation:ctDataGridSpin 1.1s infinite linear}
                `,document.head.appendChild(s))}generateHtml(){return`<div class="ct-data-grid">
                <div class="search-area"></div>
                <div class="table-area">
                    <div class="table-container"></div>
                    <div class="loading"></div>
                </div>
                <div class="pagination-area"></div>
            </div>`}constructor(s){return s=super(s),s.localData=null,s.model={cols:[],data:[]},s.isReady=!1,s}static get observedAttributes(){return["data-source","data-source-method","data-source-page-param","data-source-page-size-param","data-source-search-param","data-source-sort-column-param","data-source-sort-direction-param","data-results-property","data-results-total-property","show-search","show-pagination","page-size","use-local-interaction","fixed-headers","row-css-key","selection-mode"]}connectedCallback(){const s=this.getAttribute("id")||`autoid${new Date().getTime()}`,d=Array.from(this.querySelectorAll("ct-data-col"));d.forEach((o)=>{this.model.cols.push({key:o.getAttribute("key"),classes:o.getAttribute("class")||"",displayKey:o.getAttribute("display-key"),cssKey:o.getAttribute("css-key"),heading:o.textContent,dataType:o.getAttribute("data-type")||"string",sortable:o.hasAttribute("sortable")&&"false"!==o.getAttribute("sortable"),sort:o.getAttribute("sort"),width:o.getAttribute("width"),editable:o.hasAttribute("editable")&&"false"!==o.getAttribute("editable"),isControls:"controls"===o.getAttribute("data-type"),editButtonLabel:o.getAttribute("edit-button-label")||"Edit",saveButtonLabel:o.getAttribute("save-button-label")||"Save",cancelButtonLabel:o.getAttribute("cancel-button-label")||"Cancel"})}),this.id=s,this.injectStyles(),this.innerHTML=this.generateHtml(),d.forEach((o)=>{this.appendChild(o)}),this.$element=this.querySelector(".ct-data-grid"),this.$searchArea=this.querySelector(".search-area"),this.$tableArea=this.querySelector(".table-area"),this.$tableContainer=this.querySelector(".table-container"),this.$paginationArea=this.querySelector(".pagination-area"),this.$loading=this.querySelector(".loading"),this._initialize(),this._raiseEvent("ready"),this.isReady=!0}attributeChangedCallback(s,d,o){if(!this.isReady)return;if(d===o)return;let n=!1,l=!1,u=!1;switch(s.toLowerCase()){case"data-source":case"data-source-method":case"data-source-page-param":case"data-source-page-size-param":case"data-source-search-param":case"data-source-sort-column-param":case"data-source-sort-direction-param":case"data-results-property":case"data-results-total-property":this._processDataSourceAttributes(),this._processInteractionAttributes(),u=!0;break;case"show-search":this._processSearchAttributes(),n=!0,l=!0;break;case"show-pagination":this._processPaginationAttributes(),n=!0,u=!0;break;case"page-size":this._processPaginationAttributes(),u=!0;break;case"use-local-interaction":this._processInteractionAttributes(),u=!0;break;case"fixed-headers":this._processPresentationAttributes(),n=!0,l=!0;break;case"row-css-key":this._processPresentationAttributes(),l=!0;break;case"selection-mode":this._processInteractionAttributes(),n=!0,l=!0;}if(n&&this._render(!0),l||u){const p=!u;this._buildDataRows(p)}}_initialize(){this._processDataSourceAttributes(),this._processSearchAttributes(),this._processPaginationAttributes(),this._processInteractionAttributes(),this._processPresentationAttributes(),this.searchQuery="",this.sortBy=null,this.sortDirection=null,this.pageNumber=1,this.unfilteredTotalResults=0,this.totalResults=0,this.selectedValue=null,this._render()}_processDataSourceAttributes(){this.dataSourceUrl=this.getAttribute("data-source"),this.dataSourceMethod=this.getAttribute("data-source-method")||"GET",this.dataSourcePageParam=this.getAttribute("data-source-page-param")||"page",this.dataSourcePageSizeParam=this.getAttribute("data-source-page-size-param")||"limit",this.dataSourceSearchParam=this.getAttribute("data-source-search-param")||"query",this.dataSourceSortColumnParam=this.getAttribute("data-source-sort-column-param")||"sort",this.dataSourceSortDirectionParam=this.getAttribute("data-source-sort-direction-param")||"dir",this.dataResultsProperty=this.getAttribute("data-results-property")||"data",this.dataResultsTotalProperty=this.getAttribute("data-results-total-property")||"totalResults",this.useDataSource=!!this.dataSourceUrl,this.dataSourceParams=null}_processInteractionAttributes(){this.useLocalInteraction=!this.useDataSource||this.hasAttribute("use-local-interaction")&&"false"!==this.getAttribute("use-local-interaction").toLowerCase(),this.selectionMode=(this.getAttribute("selection-mode")||"none").toLowerCase()}_processSearchAttributes(){this.showSearch=this.hasAttribute("show-search")&&"false"!==this.getAttribute("show-search").toLowerCase()}_processPaginationAttributes(){this.showPagination=!this.hasAttribute("show-pagination")||"false"!==this.getAttribute("show-pagination").toLowerCase(),this.pageSize=parseInt(this.getAttribute("page-size"))||0}_processPresentationAttributes(){this.fixedHeaders=this.hasAttribute("fixed-headers")&&"false"!==this.getAttribute("fixed-headers").toLowerCase(),this.rowCssKey=this.getAttribute("row-css-key")||"",this.$tableArea&&this.$tableArea.classList.toggle("fixed-headers",this.fixedHeaders)}_render(s=!1){t._removeChildren(this.$tableContainer),this._buildSearchArea(),this._buildTable(s),this.$tableContainer.appendChild(this.$table)}_loadDataFromUrl(){const s=this;return new Promise((d)=>{s._setLoading(!0),s.dataSourceParams={},this.useLocalInteraction||(s.searchQuery&&(s.dataSourceParams[s.dataSourceSearchParam]=s.searchQuery),null!==s.sortBy&&(s.dataSourceParams[s.dataSourceSortColumnParam]=s.sortBy,s.dataSourceParams[s.dataSourceSortDirectionParam]=s.sortDirection),s.pageSize&&s.pageNumber&&(s.dataSourceParams[s.dataSourcePageSizeParam]=s.pageSize,s.dataSourceParams[s.dataSourcePageParam]=s.pageNumber)),s._sendRequest(s.dataSourceMethod,s.dataSourceUrl,s.dataSourceParams).then((o)=>{const n=t._getProperty(o,s.dataResultsProperty);Array.isArray(n)||(s._setLoading(!1),s._setMessage("error",`Incorrect data retrieved, must be array; was ${typeof n}`),s._raiseEvent("data-error"),d(!1));const l=t._getProperty(o,s.dataResultsTotalProperty);s.unfilteredTotalResults=l||n.length,s.totalResults=l||n.length,s._setLoading(!1),s._setData(n),d(!0)},(o)=>{s._setLoading(!1),s._setMessage("error","Error loading data...",o),s._raiseEvent("data-error"),d(!1)})})}_prepareLocalData(){return new Promise((s)=>{let d=Array.from(this.localData||[]);d=this._searchLocal(d),this.totalResults=d.length,d=this._sortLocal(d),d=this._paginateLocal(d),this._setData(d),s(!0)})}_buildTable(s=!1){switch(this.$table=document.createElement("table"),this.$table.classList.add("table","table-striped","table-hover"),this.selectionMode){case"row":this.$table.classList.add("selection-mode-row");break;case"cell":this.$table.classList.add("selection-mode-cell");}this.fixedHeaders&&this.$tableArea.classList.add("fixed-headers"),this.$thead=document.createElement("thead"),this.$table.appendChild(this.$thead);const d=document.createElement("tr");this.model.cols.forEach((o)=>this._buildColumnHeader(d,o)),this.$thead.appendChild(d),this.$tbody=document.createElement("tbody"),this.$table.appendChild(this.$tbody),this.useDataSource&&!1===s&&this._buildDataRows()}_buildColumnHeader(s,d){const o=document.createElement("th");d.key&&o.setAttribute("key",d.key),d.classes!==void 0&&null!==d.classes&&d.classes.toString().split(" ").forEach((n)=>{n&&o.classList.add(n)}),d.isControls&&o.classList.add("edit-controls"),null!==d.width&&(this.fixedHeaders?o.style.flex=`1 1 ${d.width}`:o.style.width=d.width),d.sortable&&!d.isControls&&(o.classList.add("sortable"),d.key===this.sortBy?this._changeSort(o,this.sortDirection,!0):!this.sortBy&&(d.sort&&"asc"===d.sort.toString().toLowerCase()&&this._changeSort(o,"asc",!0),d.sort&&"desc"===d.sort.toString().toLowerCase()&&this._changeSort(o,"desc",!0)),o.addEventListener("click",()=>{this._changeSort(o)})),o.textContent=d.heading,s.appendChild(o)}_buildDataRows(s=!1){let d;d=s?Promise.resolve(!!this.model.data):this.useDataSource&&this.useLocalInteraction&&null===this.localData?this._loadDataFromUrl().then(()=>{return this.localData=this.model.data,this.unfilteredTotalResults=this.localData.length,this.totalResults=this.localData.length,this._prepareLocalData()}):this.useLocalInteraction?this._prepareLocalData():this._loadDataFromUrl(),d.then((o)=>{o&&(t._removeChildren(this.$tbody),0<this.model.data.length?this.model.data.forEach((n,l)=>this._buildDataRow(n,l)):this._setMessage("info","No data to display..."),this._buildPagination(),this._raiseEvent("data-rendered"))})}_buildDataRow(s,d){const o=this._applyIndexes(s).__idx,n=document.createElement("tr");if(this.rowCssKey&&s.hasOwnProperty(this.rowCssKey)&&s[this.rowCssKey]!==void 0&&null!==s[this.rowCssKey]){const l=s[this.rowCssKey].toString().split(" ");l.forEach((u)=>{u&&n.classList.add(u)})}this._isEditItem(o)&&n.classList.add("editing"),this.model.cols.forEach((l,u)=>{this._buildDataCell(n,l,u,s,d,o)}),"row"===this.selectionMode&&n.addEventListener("click",()=>this.__handleRowClick(n,s,d)),this.$tbody.appendChild(n)}_buildDataCell(s,d,o,n,l,u){const p=document.createElement("td");if(void 0!==d.classes&&null!==d.classes&&d.classes.toString().split(" ").forEach((f)=>{f&&p.classList.add(f)}),d.cssKey&&n.hasOwnProperty(d.cssKey)&&void 0!==n[d.cssKey]&&null!==n[d.cssKey]){const f=n[d.cssKey].toString().split(" ");f.forEach((y)=>{y&&p.classList.add(y)})}void 0!==d.width&&(this.fixedHeaders?p.style.flex=`1 1 ${d.width}`:p.style.width=d.width),s.appendChild(p),"cell"!==this.selectionMode||d.isControls||p.addEventListener("click",()=>this.__handleCellClick(p,n,l,d,o));const g=document.createElement("div");let h=!1;this.editManifest&&this.editManifest.itemIndexes.length&&(d.editable||d.isControls)&&(h=this.editManifest.itemIndexes.includes(u));const m=d.isControls?"edit-controls":h?"control":"content";g.classList.add(m),h?(t._removeChildren(g),d.isControls?this._buildEditButtons(g,d,!1,u):this._buildEditControl(g,d,n[d.key],this.editManifest[u])):d.isControls?this._buildEditButtons(g,d,!0,u):d.displayKey?g.innerHTML=n[d.displayKey]||"":g.innerHTML=this._formatData(d,n[d.key]),p.appendChild(g)}_formatData(s,d){let o="";switch((s.dataType||"").toLowerCase()){case"string":(()=>{o=d||""})();break;case"number":(()=>{const n=parseFloat(d);isNaN(n)||(o=n.toString())})();break;case"date":(()=>{if(d!==void 0&&null!==d&&""!==d){const n=t._parseDate(d);n&&(o=t._renderDate(n))}})();break;case"datetime":(()=>{if(d!==void 0&&null!==d&&""!==d){const n=isNaN(d)?d.substring(0,19):d,l=t._parseDate(n);l&&(o=`${t._renderDate(l)} ${t._renderTime(l)}`)}})();break;case"boolean":(()=>{!0===d?o="Yes":!1===d&&(o="No")})();break;case"url":(()=>{d&&(o=`<a href="${d}" target="_${this.id}_${s.key}_link">Link</a>`)})();}return o}_buildEditButtons(s,d,o,n){if(o){const l=document.createElement("button");l.classList.add("btn","btn-xs","btn-default","edit-button"),l.innerHTML=`<span class="text">${d.editButtonLabel}</span>`,l.addEventListener("click",(u)=>{u.stopPropagation(),this._addEditModeItems([n])}),s.appendChild(l)}else{const l=document.createElement("button");l.classList.add("btn","btn-xs","btn-default","save-button"),l.innerHTML=`<span class="text">${d.saveButtonLabel}</span>`,l.addEventListener("click",(p)=>{p.stopPropagation();const g=this._getEditChanges([n]);this._removeEditModeItems([n]),g&&g.length&&this._raiseEvent("data-change",g[0])}),s.appendChild(l);const u=document.createElement("button");u.classList.add("btn","btn-xs","btn-default","cancel-button"),u.innerHTML=`<span class="text">${d.cancelButtonLabel}</span>`,u.addEventListener("click",(p)=>{p.stopPropagation(),this._removeEditModeItems([n])}),s.appendChild(u)}}_buildEditControl(s,d,o,n){let l;switch((d.dataType||"").toLowerCase()){default:case"string":case"url":(()=>{const u=document.createElement("input");u.setAttribute("type","text"),u.value=o,u.classList.add("edit-control","edit-control-"+(d.dataType||"string")),s.appendChild(u),l=()=>u.value})();break;case"number":(()=>{const u=document.createElement("input");u.setAttribute("type","number"),u.value=o,u.classList.add("edit-control","edit-control-number"),s.appendChild(u),l=()=>parseInt(u.value)||0})();break;case"date":(()=>{const u=t._parseDate(o),p=document.createElement("input");p.setAttribute("type","date"),u&&(p.value=u.toISOString().substr(0,10)),p.classList.add("edit-control","edit-control-date"),s.appendChild(p),l=()=>p.value})();break;case"datetime":(()=>{const u=isNaN(o)?o.substring(0,19):o,p=t._parseDate(u),g=document.createElement("input");g.setAttribute("type","date"),p&&(g.value=p.toISOString().substr(0,10)),g.classList.add("edit-control","edit-control-datetime","edit-control-datetime-date"),s.appendChild(g);const h=document.createElement("input");h.setAttribute("type","time"),p&&(h.value=t._renderTime(p)),h.classList.add("edit-control","edit-control-datetime","edit-control-datetime-time"),s.appendChild(h),l=()=>`${g.value}T${h.value}`})();break;case"boolean":(()=>{const u=document.createElement("input");u.setAttribute("type","checkbox"),u.checked=!0===o,u.classList.add("edit-control","edit-control-boolean"),s.appendChild(u),l=()=>u.checked})();}"function"==typeof l&&(n[d.key]=l)}_addEditModeItems(s){const d=this.model.cols.filter((n)=>n.editable);if(0===d.length)throw new Error("You cannot put a grid into edit mode which has no columns that are editable");let o=!1;this.editManifest||(this.editManifest={itemIndexes:[]}),s.forEach((n)=>{this._isEditItem(n)||(this.editManifest.itemIndexes.push(n),this.editManifest[n]={},o=!0)}),o&&this._buildDataRows(!0)}_isEditItem(s){return!!this.editManifest&&this.editManifest.itemIndexes.includes(s)}_getEditChanges(s=null){if(!this.editManifest)return[];const d=[];return this.editManifest.itemIndexes.forEach((o)=>{if(null===s||s.includes(o)){const n=Object.assign({},(this.localData||this.model.data)[o]),l=Object.assign({},n),u=this.editManifest[o];for(let g in u)u.hasOwnProperty(g)&&(l[g]=u[g]());const p=JSON.stringify(n)!==JSON.stringify(l);d.push({__idx:o,oldValue:n,newValue:l,hasChanged:p})}}),d}_removeEditModeItems(s){if(!this.editManifest)return;let d=!1;s.forEach((o)=>{this._isEditItem(o)&&(delete this.editManifest[o],d=!0)}),d&&(this.editManifest.itemIndexes=this.editManifest.itemIndexes.filter((o)=>{return!s.includes(o)}),this._buildDataRows(!0))}_removeAllEditModeItems(){this.editManifest&&this._removeEditModeItems(this.editManifest.itemIndexes)}__handleRowClick(s,d,o){const n=this._applyIndexes(d);if(!this._isEditItem(n.__idx)){const l=Array.from(this.$table.querySelectorAll(".selected"));l.forEach((u)=>{u.classList.remove("selected")}),s.classList.add("selected"),this.selectedValue={rowData:n,rowIndex:o},this._raiseEvent("selection",this.selectedValue)}}__handleCellClick(s,d,o,n,l){const u=this._applyIndexes(d);if(!this._isEditItem(u.__idx)){const p=Array.from(this.$table.querySelectorAll(".selected"));p.forEach((g)=>{g.classList.remove("selected")}),s.parentNode.classList.add("selected"),s.classList.add("selected"),this.selectedValue={rowData:u,rowIndex:o,columnKey:n.key,columnIndex:l,cellData:d[n.key]},this._raiseEvent("selection",this.selectedValue)}}_buildSearchArea(){if(t._removeChildren(this.$searchArea),this.showSearch){this.$element.classList.add("has-search"),this.$searchArea.innerHTML=`
                    <div class="search-bar">
                        <div class="search-box">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search..." />
                                <span class="input-group-btn">
                                    <button class="btn btn-default search-button" type="button"><i class="fa fa-search"></i></button>                        
                                </span>
                            </div>
                            <span class="clear-button">
                                <i class="fa fa-remove"></i>
                            </span>
                        </div>
                    </div>
                `;const s=this.$searchArea.querySelector("input.form-control"),d=this.$searchArea.querySelector("button.search-button"),o=this.$searchArea.querySelector("span.clear-button");o.style.display="none";const n=()=>{const l=s.value;this._changeSearch(l)};s.addEventListener("keyup",(l)=>{13===l.keyCode&&n(),o.style.display=0===s.value.length?"none":"inline"}),o.addEventListener("click",()=>{s.value="",o.style.display="none",n()}),d.addEventListener("click",()=>{n()})}else this.$element.classList.remove("has-search")}_changeSearch(s,d=!1){if(this.searchQuery=s,this.pageNumber=1,d&&this.showSearch){const o=this.$searchArea.querySelector("input.form-control");o&&(o.value=s)}this._buildDataRows()}_searchLocal(s){const d=(this.searchQuery||"").trim().toUpperCase();if(0<d.length){const o={};this.model.cols.forEach((n)=>{o[n.key]=n}),s=s.filter((n)=>{for(const l in n)if(n.hasOwnProperty(l)){const u=o[l];if(u){const p=this._formatData(u,n[l]||"");if(-1<p.toUpperCase().indexOf(d))return!0}}return!1})}return s}_changeSort(s,d="switch",o=!1){const n=Array.from(this.$table.querySelectorAll("th.sortable.sort-asc, th.sortable.sort-desc"));let l="";null===s?n.forEach((u)=>u.classList.remove("sort-asc","sort-desc")):(l=s.getAttribute("key"),"switch"===d&&(d=s.classList.contains("sort-asc")?"desc":"asc"),n.forEach((u)=>u.classList.remove("sort-asc","sort-desc")),d&&"asc"===d.toString().toLowerCase()&&s.classList.add("sort-asc"),d&&"desc"===d.toString().toLowerCase()&&s.classList.add("sort-desc")),this.sortBy=l,this.sortDirection=d,!0!==o&&this._buildDataRows()}_sortLocal(s){const d=this.sortBy,o="desc"===this.sortDirection,n=this.model.cols.find((l)=>l.key===d);if(n&&n.sortable&&!n.isControls){switch((n.dataType||"").toLowerCase()){case"string":case"url":default:s.sort((u,p)=>{const g=(u[d]||"").toString().toUpperCase(),h=(p[d]||"").toString().toUpperCase();return g.localeCompare(h)});break;case"number":s.sort((u,p)=>{const g=u[d]||0,h=p[d]||0;return g<h?-1:g>h?1:0});break;case"date":case"datetime":s.sort((u,p)=>{let g=void 0===u[d]||null===u[d]||""===u[d]?_NumberMIN_SAFE_INTEGER:t._parseDate(u[d]).getTime(),h=void 0===p[d]||null===p[d]||""===p[d]?_NumberMIN_SAFE_INTEGER:t._parseDate(p[d]).getTime();return isNaN(g)&&(g=_NumberMIN_SAFE_INTEGER),isNaN(h)&&(h=_NumberMIN_SAFE_INTEGER),g<h?-1:g>h?1:0});break;case"boolean":const l=(u)=>{return!0===u?0:!1===u?1:o?-1:2};s.sort((u,p)=>{const g=l(u[d]),h=l(p[d]);return g<h?-1:g>h?1:0});}o&&s.reverse()}return s}_buildPagination(){if(t._removeChildren(this.$paginationArea),this.showPagination&&0<this.pageSize&&0<this.totalResults){this.$element.classList.add("has-pagination");const s=5,d=this._getTotalPages();let o=1,n=_Mathmin(s,d);if(d>s){const l=3,u=l-1;this.pageNumber>l&&(o=this.pageNumber-u,n=this.pageNumber+u,n>d&&(n=d,o=n-s+1))}if(this.$paginationArea.innerHTML=`
                    <nav>
                        <ul class="pagination pagination-sm"></ul>
                    </nav>
                `,1<d){const l=this.$paginationArea.querySelector(".pagination"),u=({html:p,active:g=!1,enabled:h=!0,handler:m=null,css:f=null})=>{const y=document.createElement("li");g&&y.classList.add("active"),h||y.classList.add("disabled"),f&&f.split(" ").forEach((S)=>y.classList.add(S));const _=document.createElement("a");return _.innerHTML=p,h&&"function"==typeof m&&_.addEventListener("click",m),y.appendChild(_),l.appendChild(y),_};u({html:`<span class="page-icon fa fa-step-backward"></span><span class="page-label"> First</span>`,enabled:1<this.pageNumber,handler:()=>this._changePage(1),css:"page-first page-bookend"}),u({html:`<span class="page-icon fa fa-chevron-left"></span><span class="page-label"> Previous</span>`,enabled:1<this.pageNumber,handler:()=>this._changePage(this.pageNumber-1),css:"page-prev page-bookend"});for(let p=o;p<=n;p++)u({html:`<span class="page-label">${p}</span>`,active:this.pageNumber===p,handler:()=>this._changePage(p)});u({html:`<span class="page-label">Next </span><span class="page-icon fa fa-chevron-right"></span>`,enabled:this.pageNumber<d,handler:()=>this._changePage(this.pageNumber+1),css:"page-next page-bookend"}),u({html:`<span class="page-label">Last </span><span class="page-icon fa fa-step-forward"></span>`,enabled:this.pageNumber<d,handler:()=>this._changePage(d),css:"page-last page-bookend"})}}else this.$element.classList.remove("has-pagination")}_changePage(s){const d=this._getTotalPages();if(isNaN(s)||(s=parseInt(s)),"string"==typeof s)switch(s.toLowerCase()){case"first":s=1;break;case"previous":s=this.pageNumber-1;break;case"next":s=this.pageNumber+1;break;case"last":s=d;}if("number"==typeof s)1>s&&(s=1),s>d&&0<d&&(s=d),this.pageNumber=s,this._buildDataRows(),this.fixedHeaders&&(this.$table.querySelector("tbody").scrollTop=0);else throw new Error(`Invalid page number: "${s}"`)}_paginateLocal(s){if(0===this.pageSize)return s;this.totalResults=s.length;const d=this._getTotalPages();0<d&&(1>this.pageNumber&&(this.pageNumber=1),this.pageNumber>d&&(this.pageNumber=d));const o=this.pageSize*(this.pageNumber-1),n=o+this.pageSize;return s.slice(o,_Mathmin(n,this.totalResults))}_getTotalPages(){return Math.ceil(this.totalResults/this.pageSize)}_sendRequest(s,d,o){return new Promise((n,l)=>{const u=(s||"GET").toUpperCase();let p=d;const g=new XMLHttpRequest;if(g.onreadystatechange=()=>{if(4===g.readyState)if(200===g.status){const h=JSON.parse(g.response.toString());n(h)}else 0===g.status?l(`Could not access ${d}`):l(`Error code ${g.status} on "${d}"`)},g.onerror=()=>{l(`There was a problem accessing ${d}`)},"GET"===u){let h=-1===p.indexOf("?")?"?":"&";Object.keys(o).filter((m)=>{return o[m]}).forEach((m)=>{p+=`${h}${m}=${encodeURIComponent(o[m])}`,h="&"})}g.open(u,p,!0),"GET"===u?g.send():(g.setRequestHeader("Content-Type","application/json;charset=UTF-8"),g.send(JSON.stringify(o)))})}_setData(s=[]){this.model.data=s}_applyIndexes(s){let d=!1==s instanceof Array;d&&(s=[s]);let o=JSON.parse(JSON.stringify(s));const n=this.localData||this.model.data||[];return s.forEach((l,u)=>{const p=n.indexOf(l);-1!==p&&(o[u].__idx=p)}),d?o[0]:o}_setLoading(s){s?(this.$element.classList.add("loading-data"),this.$loading.innerHTML=`<div class="bg"></div><div class="spinner"></div>`):(this.$element.classList.remove("loading-data"),t._removeChildren(this.$loading))}_setMessage(s,d,o){t._removeChildren(this.$tbody);const n=document.createElement("tr");this.$tbody.appendChild(n);const l=document.createElement("td");l.classList.add(`message-${s}`),l.setAttribute("colspan",this.model.cols.length.toString()),n.appendChild(l);const u=document.createElement("div");u.classList.add("content"),u.textContent=d,o&&(u.innerHTML+=`<div class="message-detail">${o}</div>`),l.appendChild(u)}_raiseEvent(s,d){const o=d?{detail:d}:null,n=new CustomEvent(s,o);setTimeout(()=>{this.dispatchEvent(n)},0)}static _parseDate(s){let d=null;if(!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(s))d=new Date(s);else if(d=new Date(s),isNaN(d.valueOf())){const o=s.replace(/-/g,"/").replace("T"," ");d=new Date(o)}return!d||isNaN(d.valueOf())?null:d}static _renderDate(s){return!s||isNaN(s.valueOf())?"":new Date(s.getTime()+1e3*(60*s.getTimezoneOffset())).toLocaleDateString("en-GB")}static _renderTime(s){return!s||isNaN(s.valueOf())?"":new Date(s.getTime()+1e3*(60*s.getTimezoneOffset())).toLocaleTimeString("en-GB")}static _getProperty(s,d){d=d.replace(/\[(\w+)]/g,".$1").replace(/^\./,"");let o=s,n=d;for(;o&&0<n.length;){const l=n.indexOf(".");if(-1<l){const u=n.substring(0,l);o=o[u],n=n.substring(l+1)}else o=o[n],n=""}return o}static _removeChildren(s){for(;s.firstChild;)s.removeChild(s.firstChild)}setData(s){if(this.useDataSource)throw new Error("Cannot set data on a data grid which uses a data source");Array.isArray(s)&&(this.localData=s,this.unfilteredTotalResults=s.length,this.totalResults=s.length,this._setData(s),this._buildDataRows())}getSearch(){return{query:this.searchQuery||"",totalResults:this.totalResults,unfilteredTotalResults:this.unfilteredTotalResults}}setSearch(s){(null===s||s===void 0)&&(s=""),"string"!=typeof s&&(s=s.toString()),this._changeSearch(s,!0)}getSort(){return{column:this.sortBy,direction:this.sortDirection}}setSort(s,d="switch"){if(null===s){const o=this.model.cols.find((n)=>!!n.sort);o&&(s=o.key,d=o.sort)}if(!s)this._changeSort(null);else{const o=this.model.cols.filter((l)=>l.key===s)[0];if(!o)throw new Error(`Unable to sort by column "${s}" - data grid does not have a column with that key`);if(!o.sortable)throw new Error(`Unable to sort by column "${s}" - that column is not defined as sortable`);const n=this.$table.querySelector(`th[key="${s}"]`);this._changeSort(n,d)}}getPage(){if(!this.pageSize)return null;const s=this._getTotalPages();return{number:this.pageNumber,total:this._getTotalPages(),pageSize:this.pageSize,isFirst:1===this.pageNumber,hasPrevious:1<this.pageNumber,hasNext:this.pageNumber<s,isLast:this.pageNumber===s}}setPage(s){if(!this.pageSize)throw new Error("Cannot change page on a data grid which doesn't use pagination");null===s&&(s=1),this._changePage(s)}getVisibleData(){return this._applyIndexes(this.model.data||[])}edit(s){if(s===void 0||null===s)throw new Error("You must specify the indexes or items of data to put into edit mode");!1==s instanceof Array&&(s=[s]);const d=s.map((o)=>{return"number"==typeof o?o:(this.localData||this.model.data||[]).indexOf(o)}).filter((o)=>-1!==o);this._addEditModeItems(d)}finishedEdit(){const s=this._getEditChanges();return this._removeAllEditModeItems(),s}get value(){return this.selectedValue}})})();