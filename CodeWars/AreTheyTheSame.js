function comp(array1, array2){

    if(array1 == null || array1 == [] || array2 == null || array2 == []) {
        return false;
    }

    for(let i = 0; i < array2.length; i++) {
        let current = Math.sqrt(array2[i]);
        let exists = false;
        for(let j = 0; j < array1.length; j++) {
            if(current == array1[j]) {
                array2[i].splice(i,1);
                array1[j].splice(j,1);
                i--;
                exists = true;
                break;
            }
        }
        if(!exists) return false;

    }
    return true;
}

let array1 = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
let array2 =  [121, 14641, 20736, 36100, 25921, 361, 20736, 361 ];

console.log(comp(array1, array2));