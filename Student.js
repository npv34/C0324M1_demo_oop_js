class Student {
    name;
    email;
    age;
    GPA;

    constructor(name, email, age, GPA) {
       this.name = name;
       this.email = email;
       this.age = age;
       this.GPA = GPA;
    }

    getInformation() {
        return "Name: " + this.name
            + " Email: " + this.email
            + " Age: " + this.age + " GPA: " + this.GPA
    }

    getRank() {
        if (this.GPA > 8) {
            return "HS Gioi";
        } else if (this.GPA >= 6.5) {
            return "HS Kha";
        } else {
            return "HS Yeu";
        }
    }
}