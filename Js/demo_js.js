// console.log("Hello world");
var x;
console.log(x);
console.log(x+10);
x="Xin Chào";
console.log(x);
console.log(x+10);
console.log(x.length);

var y="a10";
console.log(y+10);

y = parseInt(y);
console.log(y);
// NaN > not a number

if(isNaN(y)){
    console.log("khong co gia tri");
}else {
    console.log(y+10)
}

for (var i=0;i<10;i++){
    console.log("i="+i);
}

var ary=[]; //khai báo mảng
ary[0]=199;
ary[1]=hello;
ary[2]=[2,3,4,"xin chào",[1,1,1,1]];
console.log(ary[2][3]);
ary[2][4][3]=55;
console.log(ary[2][4][3]);
ary[2][4][4]=["a","b",5];


var s=[1,2,3,5,8,13,21];
for (var i=0;i<s.length;i++) {       //S.length : đếm số lượng phần tử
    console.log(s[i]);
}
var f=ham_gi_do(1,"s")
console.log(f);
function ham_gi_do(a,b) {
    console.log("day laf ben trong ham");
    return "xin chao";
}

s.map(function (e) {
    console.log("s:"+e);
});

var arr=[];
for (var i=0;i<10;i++){
    arr[i]=i*2+1;
}
//nếu muốn thêm 1 số nữa
//arr[10]=99
for (var i=0;i<10;i++){
    arr.push(i*2+1);
}
arr.push(99);
arr.splice(1,2);//xoa tu vi tri 1 va 2 phan tu
arr.map(function (e) {
    console.log("arr:"+e);

})
