/**
 *  A javascript used to add css for tables generated from the markdown
 */
function fix_table_style(els) {
    for (var i in els) {
        var div = els[i];
        if (div.className == "post-content") {
            var tables = div.getElementsByTagName("table");
            for (var j = 0; j < tables.length; ++j) {
                var tb = tables[j];
                tb.className = "table table-bordered";
            }
        }
    }
}
