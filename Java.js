// const array = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i']
//   ];

// for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} => ${array[i].join('')}`)
    
// }


let array = ['a','b','c','d','e','f','g','h'] 
result = []

for (let i = 0; i < array.length; i++) {
    result.push({
        key: i + 1,
        value: array[i]
    })
   
}
console.log(result);


// console.log(`key:${i + 1} => value:${array[i]}`);

// SELECT 
//     t.title_name_th,
//     u.first_name,
//     u.last_name,
//     u.age,
//     u.email,
//     u.username,
//     p.programing_name_en,

// FROM 
//     tb_user u

// JOIN 
//     tb_title t ON u.titleid = t. titleid

// JOIN 
//     tb_programming_language p ON u.programmingid = p.programmingid

// WHERE
//     u.age < 25

