
// function sample(){
//     console.log("This is a function");
// }
// sample()

// // 2. arrow function

// const arrow = () => {
//     console.log(this); 
// }
// arrow()

// //3)scoping
// var a=10
// console.log(a)
// {
//     let a=20
//     console.log(a)
//     let b=30
//     console.log(b)
//     let c=40
//     console.log(c)
//     let e=50
//     console.log(e) //undefined
//     a=30
//     console.log(a)//20 
// }
// console.log(a) //10 (if declared as var a then 20 )
// console.log(e)

// var-gobal scope
// let-local scope 
// const-local

// let a=10
// console.log(a)
// {
//     console.log(a) // no access
// }

// let g=10;
// while(g<12){
//     console.log(g);
//     g++
// }
// console.log(g);

// //4)ternary operator
// a=10
// console.log((a%2)?"odd":"even")

// //5)spread operator(...)
// stud1year = ["user1","user2","user3"]
// stud2year = ["user4","user5","user6"]
// stud3year = ["user7","user8","user9"]
// stud4year = ["user10","user11","user12"]
// studDB = [...stud1year,...stud2year,...stud3year,...stud4year]
// console.log(studDB);
//alumniDB = stud4year
//console.log(alumniDB);


// //6)rest operator
// function test(a,b,c,d){
//     console.log(a,b,c)
// }
// test(...["hi","hello","world"])

// function test2(...stud){
//     console.log(stud)
// }
// test2([1,2,3])

// //7)destructuring operator
// var arr=[10,20,30]
// var[a,b,c,d]=arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// //8)hoisting
// //i)variable
// a=10
// console.log(a) //10
// var a;

// console.log(a) //undefied
// var a;

// console.log(a) //cannot access
// let a;

// console.log(a) //cannot access
// const a;

// //ii)function hoisting
// funch()
// function funch(){
//     console.log("hii")
// }
// funch()
// funch=()=>{
//     console.log("hii") //undefined
// }

//9)class and objects
// class eg{
//     func=()=>{
//         console.log("hello")
//     }
// }
// obj=new eg()
// console.log(eg().func()) //Class constructor eg cannot be invoked without 'new'
// console.log(new eg().func()) // hello ,undefined

// //callback
// function sjit(message,abc){
//     console.log(message)
//     abc()
// }
// function sjitcb(){
//     console.log("welcome back")
// }

// sjit("welcome",sjitcb)
// function formsub(message,cbf){
//     cbf()
//     console.log(message)
// }
// function formvalid(){
//     console.log("form validation success")
// }
// formsub("form submitted sucessfully",formvalid)

// //async/await(program runs multiple functions simultaneously)
// async function asf(){
//     console.log("hello")
// }
// console.log(asf()) //hello, Promise { undefined }

// async function asf(){
//     setTimeout(function(){
//         console.log("hello")
//     },5000)     //Promise { undefined }, hello(after 5000ms)
// }
// console.log(asf())

// react project creation
// C:\Users\joans\OneDrive\Documents\desktop\mern>node -v
// v20.18.1

// C:\Users\joans\OneDrive\Documents\desktop\mern>npm -v
// 11.0.0

// C:\Users\joans\OneDrive\Documents\desktop\mern>npx -v
// 11.0.0

// C:\Users\joans\OneDrive\Documents\desktop\mern>npm create vite@latest
// Need to install the following packages:
// create-vite@6.2.0
// Ok to proceed? (y) y


// > npx
// > create-vite

// √ Project name: ... frontend
// √ Select a framework: » React
// √ Select a variant: » JavaScript + SWC

// Scaffolding project in C:\Users\joans\OneDrive\Documents\desktop\mern\frontend...

// Done. Now run:

//   cd frontend
//   npm install
//   npm run dev


// C:\Users\joans\OneDrive\Documents\desktop\mern>cd frontend

// C:\Users\joans\OneDrive\Documents\desktop\mern\frontend>npm i

// added 221 packages, and audited 222 packages in 42s

// 105 packages are looking for funding
//   run npm fund for details

// found 0 vulnerabilities

// C:\Users\joans\OneDrive\Documents\desktop\mern\frontend>npm run dev

// > frontend@0.0.0 dev
// > vite


//   VITE v6.1.0  ready in 716 ms

//   ➜  Local:   http://localhost:5173/
//   ➜  Network: use --host to expose
//   ➜  press h + enter to show help
