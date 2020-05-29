// var i = 0;
// var intervalId = setInterval(function () {
//     ++i;
//     console.log(i);
//     if(i === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);

function countFrom(a, b){
    return new Promise(function (resolve, reject){
      var x = setInterval(function(){
        console.log(a);
        ++ a;
        if(a === (b+1)){
          clearInterval(x);
          console.log('Sơn Minh thật là tốt bụng!!');
          resolve();
        }
      }, 1000);
    });
  }
  
  countFrom(1, 10).then(function(){
    console.log('Done');
  })