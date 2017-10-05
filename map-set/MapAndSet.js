/**
 * Created by happyu on 2017/10/5.
 */
'use strict'

/***************************Map*******************************/
// 使用二维数组初始化一个Map

let map = new Map([['ls',90],['zs',89],['ww',98]]);
console.log(map); // Map { 'ls' => 90, 'zs' => 89, 'ww' => 98 }
// 通过key拿到value
console.log("value : ", map.get('ls'));// 90

// 初始化一个空的Map

let map2 = new Map();
// 通过set方法添加值
map2.set('name', 'Mack');
map2.set('age', 23);
console.log(map2); // Map { 'name' => 'Mack', 'age' => 23 }


// 判断是否存在某一个key
let b = map2.has('name');
console.log(b); // true

// 删除指定的key, 若指定的key存在则删除成功，返回true，则反之
let del = map2.delete('name');
console.log(del); // true

// map中允许set相同的key，但是后设置的值会覆盖前面一个的值
map2.set('name','jack');
map2.set('name', 'tom');
console.log(map2.get('name')) // tom


/***************************Set*******************************/

let set = new Set(); // 创建一个空数组
console.log(set); // Set {}

let set2 = new Set([1,2,3,4]); // 使用Array作为输入创建一个set
console.log(set2); //Set { 1, 2, 3, 4 }

// set中没有重复的key
let set3 = new Set([1,2,3,4,4,3,8]);
// 自动去重
console.log(set3); // Set { 1, 2, 3, 4, 8 }

// 给set添加新值
set3.add('x');
console.log(set3); // Set { 1, 2, 3, 4, 8, 'x' }

// 删除元素
let de = set3.delete('x');
console.log(de); // true
console.log(set3); // Set { 1, 2, 3, 4, 8 }


