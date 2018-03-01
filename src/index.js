// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let Obj = {};
    let H = 50;
    let Q = 25;
    let D = 10;
    let N = 5;
    let P = 1;
    if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else if (currency<=0) {
        return {};
    }
    else {
        if (Math.floor(currency / H)>0) {
            Obj.H = Math.floor(currency / H);
        }
        let val = currency % H;
        if (val > 0) {
            if(Math.floor(val / Q) > 0){
                Obj.Q = Math.floor(val / Q);
            }
            val = val % Q;
        }
        if (val > 0) {
            if(Math.floor(val / D) > 0) {
                Obj.D = Math.floor(val / D);
            }
            val = val % D;
        }
        if (val > 0){
            if(Math.floor(val / N)>0) {
                Obj.N = Math.floor(val / N);
            }
            val = val % N;
        }
        if (val > 0){
            Obj.P = val;
        }
    }
 return Obj;
}
