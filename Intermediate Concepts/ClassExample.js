class Rectangle {

    // Constructor Method
    constructor(_width, _height) {
        this.width = _width;
        this.height = _height;
    }

    toString() {
        return "Width: " + this.width + " Height: " + this.height;
    }

    // Getter Functions
    get area() {
        let area = this.width * this.height;
        return area;
    }

    get perimeter() {
        let perimeter = (this.width * 2) + (this.height * 2);
        return perimeter;
    }

    // Setter Functions
    set setWidth(newWidth) {
        this.width = newWidth;
    }

    set setHeight(newHeight) {
        this.height = newHeight;
    }

    // Static Methods
    static equals(a, b) {
        return a.width === b.width;
    }
}


let rect1 = new Rectangle(2,3);
console.log(rect1.toString());
console.log("Area of Rectangle: " + rect1.area);

rect1.setWidth = 666;
rect1.setHeight = 777;
console.log(rect1.toString());

let rect2 = new Rectangle(3, 5);

// To Invoke a Static Method use the Name of the Class not on Instance of a Class
console.log("These Two Rectangle Objects are Equal: " + Rectangle.equals(rect1, rect2));