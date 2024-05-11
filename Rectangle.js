// noi dung cua class Rectangle
class Rectangle {
    // Khai d/s thuoc tinh
    width;
    height;

    // ham khoi tao constructor
    // set nhung gia ban dau cho thuoc tinh
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // khai bao d/s phuong thuc
    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

    draw() {}
}


/*
   - Lop Student: name, email, age, GPA
   - Cac phuong thuc:
        + getInformation():  Hien thi toan bo thong tin student
        + getRank(): Neu GPA > 8 -> HS Gioi, 6.5<=GPA<= 8 -> HS Kha, con lai HS yeu
 */

