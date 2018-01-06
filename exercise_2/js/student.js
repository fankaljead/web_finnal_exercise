//学生信息类
function Studtent(student_id, name, college, major, grade, clazz, age) {
    this.student_id = student_id;
    this.name = name;
    this.college = college;
    this.major = major;
    this.grade = grade;
    this.clazz = clazz;
    this.age = age;
    this.toWatchString = function () {
        return student_id + name + college + major + major + grade + clazz + age;
    }
}