/*
Object : Objectof  stores information in pair keys and values.
Key must be unique.
Values may be duplicate.
*/

// Object Literal

// var emp = { 
//     id : 1001,
//     name : "Ujjwal Upadhyay",
//     dsg : "Trainer",
//     salary : 98500
// }


// // Object Creation Method 2 

// var emp = {}
// emp.id = 1001
// emp['name'] = 'Ujjwal Upadhyay'
// emp['dsg']  = 'Trainee'
// emp['salary'] = 99999
// emp.city = 'Meerut'
// emp.state = 'Uttar Pradesh'
// console.log(emp);

// // Accessing object values with keys

// console.log(emp.name)
// console.log(emp.id)
// console.log(emp.city)


// Accessing object values through loop

// for(let key in emp){
//     console.log(`${key} = ${emp[key]}`);
// }

// // adding item to existing object

// emp.email = "ujjwal@gmail.com"
// emp['phone'] = '8923914908'
// console.log(emp);


// Nested Object : 

// var emp = {
//     id: 10001,
//     fname: "Ujjwal",
//     lname : "Upadhyay",
//     languages : ["Python", "HTML", "CSS", "JavaScript"],
//     address : {
//         house : 'c-114',
//         street : 'Ark City',
//         city: 'Meerut',
//         state: 'Uttar Pradesh'
//     }
// }

// console.log(emp.fname)

// function in object

// var emp = { 
//     id : 1001,
//     name: "Ujjwal Upadhyay",
//     dsg: "Trainer",
//     basicSalary : 634978,
//     calculate(){
//         if(this.basicSalary<50000){
//             this.ta = this.basicSalary*5/100
//         }
//         else{
//             this.ta = this.basicSalary*6/100
//         }
//     }
// }

// Getter Setter

// var emp = {
//     id: 1001,
//     name : "Ujjwal",
//     dsg : "Trainer",
//     setSalary: (num)=>{
//         this.salary = n
//     }
//     display: ()=> {
//         console.log(`
//         Employee ID = ${emp.id}
//         Name = ${emp.name}
//         Designation = ${emp.dsg}
//         Salary : ${emp.salary}
//         `);
//     }
// }

// object destructuring

// var obj1 = {
//     id : 1001,
//     name : "Ujjwal",
//     dsg: "Trainer",
//     city: "Meerut"
// }

// console.log(`
//     Employee ID : ${obj1.id}
//     Name : ${obj1.name}
//     dsg : ${obj1.dsg}
// `)

// var {id, name, dsg, city} = obj1

// console.log(`
// Id = ${id}
// `)



// object constructor

var Employee = function(id, name, dsg, salary, city, state ){
    this.id = id

}
