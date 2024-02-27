var ToaDo = /** @class */ (function () {
    function ToaDo($ten, $x, $y) {
        this.ten = $ten;
        this.x = $x;
        this.y = $y;
    }
    ToaDo.prototype.getTen = function () {
        return this.ten;
    };
    ToaDo.prototype.getX = function () {
        return this.x;
    };
    ToaDo.prototype.getY = function () {
        return this.y;
    };
    return ToaDo;
}());
var HinhTron = /** @class */ (function () {
    function HinhTron(tam, banKinh) {
        this.tam = tam;
        this.banKinh = banKinh;
    }
    HinhTron.prototype.getTam = function () {
        return this.tam;
    };
    HinhTron.prototype.getBanKinh = function () {
        return this.banKinh;
    };
    HinhTron.prototype.tinhChuVi = function () {
        return this.getBanKinh() * 2 * 3.14;
    };
    HinhTron.prototype.tinhDienTich = function () {
        return Math.pow(this.getBanKinh(), 2) * 3.14;
    };
    HinhTron.prototype.toString = function () {
        return "Hình tròn có tâm " + this.getTam().getTen() + "(" +
            this.getTam().getX() + ", " + this.getTam().getY() + ") với bán kính " +
            this.getBanKinh() + " có diện tích và chu vi lần lượt là " +
            this.tinhDienTich() + " và " + this.tinhChuVi();
    };
    return HinhTron;
}());
function test() {
    var a = new HinhTron(new ToaDo("O", 5, 5), 10.5);
    console.log(a.toString());
}
test();
