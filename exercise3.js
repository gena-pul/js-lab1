const student = {
    firstName: "John",
    lastName: "Requena",
    studentId: "12345",
    courses:[],

    getFullName(){
        return this.firstName + " " + this.lastName;
    },
    
    enrollCourse(courseName){
        this.courses.push(courseName);
    },
    getCourseCount() {
        return this.courses.length;
    }
};

console.log("Full name:", student.getFullName());

student.enrollCourse("CMPS2212");
student.enrollCourse("MATH2210");

console.log("Courses enrolled:", student.courses);
console.log("Course count:", student.getCourseCount());