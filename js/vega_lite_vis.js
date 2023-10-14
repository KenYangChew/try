var visualisation= "js/visualization.vg.json";
var splot= "js/splot.vg.json";
var imports = "js/import.vg.json";
var exports = "js/export.vg.json";    

vegaEmbed('#vis1', visualisation).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#vis2', splot).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
        
vegaEmbed('#vis3', imports).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
        
vegaEmbed('#vis4', exports).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
