/**
 * Created by happyu on 2017/10/5.
 */
'use strict'

let arr = [1,2,3,4,5,6];
let set = new Set([1,3,5,7,9]);
let map = new Map([['x',1],['y',2],['z',3]]);

// 遍历arr
for(let a of arr) {
    //console.log(a)
}

// 遍历Set
for(let s of set) {
    //console.log(s)
}

// 遍历Map
for(let m of map) {
    //console.log(m[0] + ' : ' + m[1])
}

// for ... of  和 for ... in 区别？
// for ... in 它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性
let a = ['a','b','c'];
a.name = 'x';
for(let x in a) {
    //console.log(x); // '0','1','2','name'
}
for(let x of a) { // 只遍历集合本身的元素
    //console.log(x); // 'a','b','c'
}

a.forEach(function (element, index, array) {
    /**
     *  element 指向当前元素的值
     *  index 指向当前索引
     *  array 指向Array对象本身
     */
    //console.log(array); // [ 'a', 'b', 'c', name: 'x' ]
    //console.log(element + " : " + index)
});


// 使用forEach遍历Set

let s = new Set(['A','B','C']);
// set没有索引，因此回调函数的前两个参数都是元素本身
s.forEach(function (element, sameElement, set) {
   //console.log(element + ' : ' + sameElement)
});

// 遍历 map

let m = new Map([['ls',88],['ww',90],['zs',89]]);
m.forEach(function (value, key, map) {
    console.log(value + ' : ' + key)
})
