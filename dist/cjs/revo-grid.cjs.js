'use strict';

const index = require('./index-d3f67f2e.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    {
        // shim css vars
        index.plt.$cssShim$ = index.win.__cssshim;
    }
    // @ts-ignore
    const scriptElm = Array.from(index.doc.querySelectorAll('script')).find(s => new RegExp(`\/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === index.NAMESPACE)
        ;
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('revo-grid.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, index.win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!index.win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-dom" */ './dom-c8b6d1a7.js'); }).then(() => opts);
        }
    }
    return index.promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(index.NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        index.win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        index.win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = index.doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(index.win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                index.doc.head.appendChild(script);
            }
            return mod;
        };
    }
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["revogr-clipboard.cjs",[[0,"revogr-clipboard",{"doCopy":[64]},[[4,"paste","onPaste"],[4,"copy","copyStarted"]]]]],["revogr-filter-panel.cjs",[[0,"revogr-filter-panel",{"uuid":[1537],"filterTypes":[16],"filterNames":[16],"filterEntities":[16],"changes":[32],"show":[64],"getChanges":[64]},[[5,"mousedown","onMouseDown"]]]]],["revo-grid_11.cjs",[[0,"revo-grid",{"rowHeaders":[4,"row-headers"],"frameSize":[2,"frame-size"],"rowSize":[2,"row-size"],"colSize":[2,"col-size"],"range":[4],"readonly":[4],"resize":[4],"canFocus":[4,"can-focus"],"useClipboard":[4,"use-clipboard"],"columns":[16],"source":[16],"pinnedTopSource":[16],"pinnedBottomSource":[16],"rowDefinitions":[16],"editors":[16],"plugins":[16],"columnTypes":[16],"theme":[1537],"rowClass":[513,"row-class"],"autoSizeColumn":[4,"auto-size-column"],"filter":[4],"trimmedRows":[16],"exporting":[4],"grouping":[16],"stretch":[8],"extraElements":[32],"refresh":[64],"scrollToRow":[64],"scrollToColumnIndex":[64],"scrollToColumnProp":[64],"updateColumns":[64],"addTrimmed":[64],"scrollToCoordinate":[64],"setCellEdit":[64],"registerVNode":[64],"getSource":[64],"getVisibleSource":[64],"getSourceStore":[64],"getColumnStore":[64],"updateColumnSorting":[64],"getColumns":[64],"clearFocus":[64],"getPlugins":[64],"getFocused":[64]},[[0,"internalRowDragStart","onRowDragStarted"],[0,"internalRowDragEnd","onRowDragEnd"],[0,"internalRowDrag","onRowDrag"],[0,"internalRowMouseMove","onRowMouseMove"],[0,"internalCellEdit","onBeforeEdit"],[0,"internalRangeDataApply","onBeforeRangeEdit"],[0,"internalSelectionChanged","onRangeChanged"],[0,"initialRowDropped","onRowDropped"],[0,"initialHeaderClick","onHeaderClick"],[0,"internalFocusCell","onCellFocus"]]],[0,"revogr-row-headers",{"height":[2],"dataPorts":[16],"headerProp":[16],"uiid":[1],"resize":[4],"rowHeaderColumn":[16]}],[4,"revogr-overlay-selection",{"readonly":[4],"range":[4],"canDrag":[4,"can-drag"],"useClipboard":[4,"use-clipboard"],"selectionStore":[16],"dimensionRow":[16],"dimensionCol":[16],"dataStore":[16],"colData":[16],"lastCell":[16],"editors":[16]},[[5,"mousemove","onMouseMove"],[5,"mouseleave","onMouseOut"],[5,"mouseup","onMouseUp"],[0,"dragStartCell","onCellDrag"],[4,"keyup","onKeyUp"],[4,"keydown","onKeyDown"]]],[0,"revogr-focus",{"selectionStore":[16],"dimensionRow":[16],"dimensionCol":[16]}],[0,"revogr-scroll-virtual",{"dimension":[1],"viewportStore":[16],"dimensionStore":[16],"setScroll":[64],"changeScroll":[64]}],[0,"revogr-temp-range",{"selectionStore":[16],"dimensionRow":[16],"dimensionCol":[16]}],[0,"revogr-data",{"readonly":[4],"range":[4],"canDrag":[4,"can-drag"],"rowClass":[1,"row-class"],"target":[1],"rowSelectionStore":[16],"viewportRow":[16],"viewportCol":[16],"dimensionRow":[16],"colData":[16],"dataStore":[16]}],[0,"revogr-edit",{"editCell":[16],"column":[16],"editor":[16]}],[0,"revogr-header",{"viewportCol":[16],"dimensionCol":[16],"selectionStore":[16],"parent":[1],"groups":[16],"groupingDepth":[2,"grouping-depth"],"canResize":[4,"can-resize"],"colData":[16],"columnFilter":[4,"column-filter"]}],[0,"revogr-order-editor",{"parent":[16],"dimensionRow":[16],"dimensionCol":[16],"dataStore":[16],"dragStart":[64],"endOrder":[64],"clearOrder":[64]},[[5,"mouseleave","onMouseOut"],[5,"mouseup","onMouseUp"]]],[4,"revogr-viewport-scroll",{"contentWidth":[2,"content-width"],"contentHeight":[2,"content-height"],"setScroll":[64],"changeScroll":[64]}]]]], options);
});
