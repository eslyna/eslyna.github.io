function wanumber(){
    var i, j;
    var distitems = new Array();

    for (i = 0; i < items.length; i++) {
        for (j = 0; j < items[i][1]; j++) {
            distitems.push(items[i][0])
        }
    } 

    return distitems[Math.floor((Math.random() * distitems.length))];
}
