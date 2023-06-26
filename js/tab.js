// 于淼 2022-11-14
let t=document.querySelectorAll(".tab");
for(var i=0;i<t.length;i++){
    tabs(t[i]);
}

function tabs(tab){
    var tt=tab.getElementsByClassName("tt")[0];
    var span=tt.querySelectorAll("span");
    var tc=tab.getElementsByClassName("tc");
    console.log(tab,tt,span,tc);
    for(let i=0;i<span.length;i++){
        span[i].index=i;
        span[i].onmouseover=function(){ /* 箭头函数的this指的不是span */
        
           for(let j=0;j<span.length;j++){ /* var定义，共用一片内存空间 */
            span[j].classList.remove("cur");
            tc[j].style.display="none";
           }
           this.classList.add("cur");
        //    this表示正在操作的span
        // 另一种写法，let变量：span[i].classList.add("cur");
           tc[this.index].style.display="block"; /* 正在操作的span其对应的下标 */
        //    tc[i].style.display="block";
        }
    }
}