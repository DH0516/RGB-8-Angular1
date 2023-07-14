class Student{
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(name, age, gender, nationality){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    getNationality(){
        return this.nationality;
    }
}

class Undergraduate extends Student implements Iundergrad{
    department: string;
    level: string;
    GPA: number;

    constructor(name, age, gender, nationality, department, level, GPA){
        super(name, age, gender, nationality);
        this.department = department;
        this.level = level;
        this.GPA = GPA;
    }
}

interface Iundergrad{
    department: string;
    level: string;
    GPA: number;
}

var temp = new Undergraduate("Bob", 40, "Male", "Canadian", "IT", "", 3.5);
console.log(temp.getNationality());