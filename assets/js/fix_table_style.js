function fix_table_style() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; ++i) {
        var div = divs[i];
        if (div.className == "post-content") {
            var tables = div.getElementsByTagName("table");
            for (var j = 0; j < tables.length; ++j) {
                var tb = tables[j];
                tb.className = "table table-bordered";
            }
        }
    }  
}
fix_table_style();
