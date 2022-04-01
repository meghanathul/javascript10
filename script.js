//this--global object
//use to point global object(name)
// const names={
//     firstname:'Meghana',
//     lastname:'Thul',
//     fullname:function(no){
//         console.log(this.firstname+ this.lastname+' my faverate no is ' + no)
//     }
// }
// names.fullname(9)

//call apply bind--bowroing object

// const name1={
//     firstname:'aaaa',
//     lastname:'bbbnb',
     
// }
// names.fullname.call(name1,9)
// names.fullname.apply(name1,[9])
//from                for
//   let Myname=fullname.bind(name1,9)
  
//   console.log(Myname())


  //prototype
  let arr=[]
let object={
    name:'pppppppppppppppppppp',
    last:'tghhhhhhhhhhhhhhhh',
    info:function(){
        console.log(this.name+' '+this.last)
    }
}


object.info()

//founction constructor
function Person(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city
}


const per=new Person('Meghana',24,'Amravati')
console.log(per.name)
console.log(per.age)

per.last='Thul'      //adding new data
console.log(per)


Person.prototype.state='MAHARASHTRA'
console.log(per.state)


