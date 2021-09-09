var user = {
    firstName: "Saikat",
    lastName: "Bishal",
    role: "Student",
    loginCount: "32",
    githubSignedIn: true,
    courseList: [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    getInfo: function ()
    {
        return `The firstName of this user is ${this.firstName} and his lastname is ${this.lastName}, he is a ${this.role} and he has logged in ${this.loginCount} times and he is enrolled in ${this.courseList.length} courses`;
        
        }
};
var courseList = true;
console.log(user.firstName);
user.buyCourse("Web Development");
console.log(user.getCourseCount());
console.log(user.getInfo());