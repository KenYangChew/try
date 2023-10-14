var visualisation= "js/visualization.vg.json";
var splot= "js/splot.vg.json";
var imports = "js/import.vg.json";
var exports = "js/export.vg.json";    

vegaEmbed('#visualisation', visualisation).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#splot', splot).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
        
vegaEmbed('#imports', imports).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
        
vegaEmbed('#exports', exports).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
