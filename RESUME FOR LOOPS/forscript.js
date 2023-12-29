// JSON ITERATE USING FOR LOOP
let key =['nischi','manju','amma','daddy','laika'];
let arr =[1,2,3,4,5];
let person ={};
for (let i=0; i<key.length; i++){
   person[key[i]]==arr[i]
}
console.log(person);

//JSON ITERATE USING FOR IN
const data={
   name:'nischi',
   age :22,
   gender :'Female'
}
for(let keys in data){ 
console.log(keys+":" ,data[keys])
}

//JSON ITERATE USING FOREACH

let fav=['party','cricket','foot','my'];
let items=['hall','bat','ball','name'];
let solution={}
fav.forEach((fav,i)=>{
    solution[fav]=items[i]
});
console.log(solution);

//JSON ITERAITON USING FOR OF

let parents={'mom':1,'dad':2,'grandma':3,'brother':'4'}
let n= Object.keys(parents)
for(let i of n)
{
    console.log(`${i} : ${parents[i]}`);
}

