// 1
student={
    fName: "Kartik",
    age: 21,
    grade:"B"
}
console.log(student)

student.subject= "Math"
student.grade="A"
delete student.age
console.log(student)

// 2
books={
    title: "wingsOfFire",
    author:"A.P.J.Abdul Kalam",
    details:{
        pages:180,
        genre:"Biography, Nonfiction, Autobiography, Inspirational, and Memoir"

    }    
}
console.log(books.details.pages,books.details.genre)

// 3
product={
    name:"Mobile",
    price:18000,
    stock:"180pcs"
}
for(let key in product)
    console.log(`${key}: ${product[key]}`)


// 5
person1= {
    fName:"Kartik",
    age:21,
}
person2={
    fName:"kartik",
    age:"21"
}
console.log(person1==person2)

// 4
user = {
greet: 46,
add: function(){
    console.log(`${this.greet + 4}`);
}
}
user.add();
 
user1 = {
greet: 50,
substract: function(){
    console.log(`${this.greet - 5}`);
}
}
user1.substract();

user2 = {
greet: 25,
multiply: function(){
    console.log(`${this.greet * 5}`)
}
}
user2.multiply();

user3 = {
    greet: 100,
    divide: function(){
        console.log(`${this.greet / 10}`)
    }
}
user3.divide();

