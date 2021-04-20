// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// array.forEach((element) => console.log(element ** 2))
// array.forEach((element, index, arr) =>  { 
//     arr[index] = 0
//     console.log(arr)
// })

// let array2 = array.filter((number) => number % 2 == 0)
// console.log(array2)
// function isEven(number) {
//     return number % 2 == 0
// }
// let array3 = array.filter(isEven)
// console.log(array3)


// let array2 = array.map((element, index) => element + index)
// console.log(array2)
// let array3 = array.map(function(element) {
//     let rand = Math.floor(Math.random() * element)
//     return element + rand
// })
// console.log(array3)


// let notEqualToTen = array.every(element => element != 10)
// console.log(notEqualToTen)
// let someNotEqualToTen = array.some(element => element != 10)
// console.log(someNotEqualToTen)

// let minus = array.reduce((prev, cur) => prev - cur)
// console.log(minus)
// let minusReverse = array.reduceRight((prev, cur) => prev - cur, 1000)
// console.log(minusReverse)




// let Student = function(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.currentlyStudies = true

//     this.tellInfo = function() {
//         console.log(this.firstName, this.lastName, this.age, this.currentlyStudies)
//     }
// }

// let student1 =  new Student("Ivan", "Ivanov", 20)
// student1.tellInfo()


// let Student = function(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this._currentlyStudies = true
//     let privateVar = 5
//     let thisForPrivates = this
//     function privateFunc() {
//         thisForPrivates.firstName = "***"
//     }
// }

// Student.prototype.tellInfo = function() {
//     console.log(this.firstName, this.lastName, this.age, this.currentlyStudies)
// }

// Student.prototype.tellOpinion = function() {
//     console.log("I like to study")
// }

// let student1 =  new Student("Petr", "Petrov", 22)
// student1.tellInfo()
// student1.tellOpinion()

// function LazyStudent(firstName, lastName, age, levelOfLaziness) {
//     Student.call(this, firstName, lastName, age)
//     this.levelOfLaziness = levelOfLaziness
// }

// LazyStudent.prototype = Object.create(Student.prototype)
// LazyStudent.prototype.constructor = LazyStudent

// LazyStudent.prototype.tellOpinion = function() {
//     console.log("I like to sleep")
// }

// let lazyStudent = new LazyStudent("Ivan", "Ivanov", 20, 100)
// lazyStudent.tellOpinion()


// class Student {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this._currentlyStudies = true
//     }

//     tellInfo() {
//         console.log(this.firstName, this.lastName, this.age, this._currentlyStudies)
//     }

// }

// let student = new Student("Ivan", "Ivanov", 20)
// student.tellInfo()

// class LazyStudent extends Student {
//     constructor(firstName, lastName, age, levelOfLaziness) {
//         super(firstName, lastName, age)
//         this.levelOfLaziness = levelOfLaziness
//     }
//     tellInfo() {
//         console.log(this.levelOfLaziness)
//     }
// }

// let lazyStudent = new LazyStudent("Petr", "Petrov", 20, 100)
// lazyStudent.tellInfo()