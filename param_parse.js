function parse(req){
    var arr = new Array();
    for (var i =0; i<= 10; i++){
        arr[i]="arr "+ i;
    }
    return arr;
}
module.exports.parse = parse;
