class Student {
    private name: string;
    private dept: string;
    private age: number;

    constructor() {
        this.name = "";
        this.dept = "";
        this.age = 0;
    }
    setInfo(name: string, dept: string, age: number): void {
        this.name = name;
        this.dept = dept;
        this.age = age;
    }
    getInfo(): void {
        console.log(`Hello my name is ${this.name} from ${this.dept} and I am ${this.age} years old.`);
    }
}

const student = new Student();
student.setInfo("Zarin", "CSE", 22);
student.getInfo(); //Output: Name: Zarin, Dept: CSE, Age: 22

