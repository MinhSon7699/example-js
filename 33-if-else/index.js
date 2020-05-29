function countBills(bill){
    var tong = 0;
    for (var bill of bill){
        if(!bill.tiengia){
            tong += bill.value;
        }
        else{
            console.log('tiền giả, éo tính nữa', bill);
            break;
        }
    }
    return tong;
}

var bill = [
    {value: 50000},
    {value: 100000},
    {value: 200000, tiengia: true},
    {value: 500000}
]
var tong = countBills(bill);
console.log(tong);