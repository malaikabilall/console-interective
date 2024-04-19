import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmStart = async (persons) => {
    do {
        console.log("welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "ap kis se bat krna pasand kare ge...",
            name: "select",
            choices: ["khud se:self", "student"],
        });
        if (ans.select == "khude se:self") {
            console.log("hello me khud se bat ker rhi hon");
            console.log("meri tabiyat achi ha.");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "ap ko kis student se bat krni ha",
                name: "student",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addstudent(name);
                console.log(`Hello i am ${name.name},or me theak hon`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name},or me theak hon.........`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programmStart(persons);
