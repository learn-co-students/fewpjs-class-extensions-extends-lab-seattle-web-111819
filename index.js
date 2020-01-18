// Your code here
class Polygon {
    constructor(side) {
        this.side = side;
        this.side.length
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
        let sideArray = this.side
        let sum = 0;
        sideArray.forEach(side => {
            sum += side;
        })
        return sum
    }
}


class Triangle extends Polygon {
    get isValid() {
        let a = this.side[0] //10
        let b = this.side[1] //4
        let c = this.side[2] //3

        if (a + b > c && b + c > a && a + c > b) {
            return true
        }
        else {
            return false
        }
    } 
}

class Square extends Polygon {
    get isValid() {
        let a = this.side[0] 
        let b = this.side[1] 
        let c = this.side[2]
        let d = this.side[3]

        if (a === b && a === c && a === d) {
            return true
        }
        else {
            return false
        }

    }

    get area() {
        if (this.isValid) {
        return this.side[0] ** 2
        }
    }
}