class Rectangle {
    constructor(width, height, color) {
        this._width = width;
        this._height = height;
        this._color = color;
    }

    calcArea() {
        return this._width * this._height
    }
}

// let myRect = new Rectangle(5, 10, 'red')
let myRect = new Rectangle(1,2,'red')