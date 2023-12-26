Promise
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
});

const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log("wife: i have tickets");
    console.log("husband: we should go in");
    console.log("wife: no i am hungry");
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    });
});
const getButter=getPopcorn.then((t)=>{
    console.log("husband: i got some popcorn");
    console.log("husband: we should go in");
    console.log("wife: I need butter on my popcorn");
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`);
});
});
const getColdDrinks=getButter.then((t)=>{
    console.log("husband: i got butter");
    console.log("husband: we should go in");
    console.log("wife: I need coldrink");
    return new Promise((resolve,reject)=>{
        resolve(`${t} coldrink`);
});
});

getColdDrinks.then((t)=>console.log(t));

console.log("person4: shows ticket");
console.log("person5: shows ticket");

//Async-Await
// console.log("person1: shows ticket");
//  console.log("person2: shows ticket");

// const preMovie= async()=>"preMovie";
// preMovie().then((m)=>console.log(m));

//  console.log("person4: shows ticket");
//  console.log("person5: shows ticket");


//Async-Await
// console.log("person1: shows ticket");
//  console.log("person2: shows ticket");

// const preMovie= async()=>{
//  const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("ticket"),3000)
//          });
//          let ticket=await promiseWifeBringingTicks;
//          return ticket;
// }
// preMovie().then((m)=>console.log(m));

//  console.log("person4: shows ticket");
//  console.log("person5: shows ticket");

//Async-Await
console.log("person1: shows ticket");
 console.log("person2: shows ticket");

const preMovie= async()=>{
 const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("ticket"),3000)
         });
         const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));

         const addButter=new Promise((resolve,reject)=>resolve(`butter`));

const getColdDrinks=new Promise((resolve,reject)=>resolve(`coldrinks`));

         let ticket=await promiseWifeBringingTicks;
         
         console.log(`wife: i have ${ticket}`);
        console.log("husband: we should go in");
        console.log("wife: no i am hungry");

    let popcorn=await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log("husband: we should go in");
    console.log("wife: I need butter on my popcorn");

     let butter=await addButter;

     console.log(`husband: i got some ${butter} on popcorn`);
     console.log(`husband: anything else darling ?`);
      console.log(`wife: i need some coldrinks`);

let coldrink=await getColdDrinks;

    console.log(`husband: i got some ${coldrink}`);
    console.log("husband: we should go in");
    console.log(`wife: lets go we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);
         
         return ticket;
}
preMovie().then((m)=>console.log(`person3: shows ${m}`));

 console.log("person4: shows ticket");
 console.log("person5: shows ticket");


 //Previous Assignment
 const posts=[
    {title:"Post One",body:"This is post One"},
    {title:"Post Two",body:"This is post Two"}
];

function getPosts(){
    setTimeout(()=>{
let output="";
posts.forEach((post,index)=>{
    output += `<li>${post.title}</li>`;
});
document.body.innerHTML=output;
    },2000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false; 
            if(!error){
                resolve();
            }
            else{
                reject("Error:Something went wrong");
            }
        },2000);
    });
}
//Async-Await
async function init(){
    await createPost({title:"post Three",body:"This is post three"});
    getPosts();
}
init();