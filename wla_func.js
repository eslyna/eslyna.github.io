var items = [
    [60171234567, 100],
    [60181234567, 20],
    [60191234567, 10]
];

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
