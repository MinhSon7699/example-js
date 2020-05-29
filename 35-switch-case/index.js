var memberCard = {
    phamchat: 'diamond'
};

function getTotal(price, card){
    var chietkhau;
    switch (card.phamchat){
        case 'bronze':
            chietkhau = 0.05;
            break;
        case 'silver':
            chietkhau = 0.1;
            break;
        case 'gold':
            chietkhau = 0.2;
            break;
        default:
            chietkhau = 0.5;
            break;
    }
    return price * (1-chietkhau);
}
var total = getTotal(500000, memberCard);
console.log(total);