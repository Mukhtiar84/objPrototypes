let student={
    name : 'Mukhtiar',
    siblings :['Asmat', 'Irshad'],
    address : { CA: 38, city: 'Peshawar'},
    age : 39,
    cource : 'AICB',
    GENDER : 'Male'

}

for (key in student){
    if (key ==='age' || key === 'cource'){
    document.write(`${key}:${student[key]}<br>`)}

}
// console.log(student['siblings'][0])
// console.log(student['address'].city)


// ######### object constructor ############

arr = Array('ali','hubaib','zarlal')
console.log(arr)


// constructor function
function Person(name,age,gender,cnic){
    this.name=name,
    this.age=age,
    this.gender=gender,
    this.cnic=cnic

}

let p1 = new Person('kaleemullah', 23, 'male', '12345')
let p2 = new Person('khan', 44, 'male', '222222')


console.log(p1)
console.log(p2)