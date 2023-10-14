var spec1 = "js/visualization.vg.json";
var spec2 = "js/splot.vg.json";
var spec3 = "js/import.vg.json";
var spec4 = "js/export.vg.json";    

vegaEmbed('#vis1', spec1, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#vis2', spec2, { "actions": false }).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
        
vegaEmbed('#vis3', spec3, { "actions": false }).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
        
vegaEmbed('#vis4', spec4, { "actions": false }).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
