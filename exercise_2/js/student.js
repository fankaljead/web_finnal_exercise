//组合使用构造函数模式和原型模式
//学生信息类
function Studtent(student_id, name, college, major, grade, clazz, age) {
    this.student_id = student_id;
    this.name = name;
    this.college = college;
    this.major = major;
    this.grade = grade;
    this.clazz = clazz;
    this.age = age;
    // this.toWatchString = function () {
    //     return student_id + name + college + major + major + grade + clazz + age;
    // }
}

Studtent.prototype = {
    constructor: Studtent,
    toWatchString: function () {
        return this.student_id +
            this.name + this.college + this.major +
            this.major + this.grade + this.clazz + this.age;
    }
};

