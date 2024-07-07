// const tinderUser = new Object()//singleton object

const tinderUser = {} //literal object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Heman",
            lastname: "Bhullar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const Obj1 = { 1: "a", 2: "b" }
const Obj2 = { 3: "a", 4: "b" }

// const Obj3 = { Obj1, Obj2};

// const Obj3 = Object.assign({}, Obj1, Obj2);

const Obj3 = {...Obj1, ...Obj2}

// console.log(Obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//OBJECT DESTRUCTURING
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor;

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//destructuring instead of writing props.company we write {company} as destructuring
const navbar = ({company}) => {

}

navbar(company = "hitesh")

// When we are giving our work to other person

// JSON
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {}
]