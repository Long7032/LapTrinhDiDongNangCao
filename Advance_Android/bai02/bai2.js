var Vehicle = /** @class */ (function() {
    function Vehicle(tenChuXe, loaiXe, triGiaXe, dungTichXyLanh) {
        this.tenChuXe = tenChuXe;
        this.loaiXe = loaiXe;
        if (triGiaXe >= 0) {
            this.triGiaXe = triGiaXe;
        } else {
            console.log(" Tri Gia Xe Lon Hon Hoac Bang 0");
            this.triGiaXe = 0;
        }
        if (dungTichXyLanh >= 0) {
            this.dungTichXyLanh = dungTichXyLanh;
        } else {
            console.log(" Dubg Tich Xy Lanh Lon Hon Hoac Bang 0");
            this.dungTichXyLanh = 0;
        }
    }
    Vehicle.prototype.getTenChuXe = function() {
        return this.tenChuXe;
    };
    Vehicle.prototype.setTenChuXe = function(tenChuXe) {
        this.tenChuXe = tenChuXe;
    };
    Vehicle.prototype.getLoaiXe = function() {
        return this.loaiXe;
    };
    Vehicle.prototype.setLoaiXe = function(loaiXe) {
        this.loaiXe = loaiXe;
    };
    Vehicle.prototype.getTriGiaXe = function() {
        return this.triGiaXe;
    };
    Vehicle.prototype.setTriGiaXe = function(triGiaXe) {
        this.triGiaXe = triGiaXe;
    };
    Vehicle.prototype.getDungTichXyLanh = function() {
        return this.dungTichXyLanh;
    };
    Vehicle.prototype.setDungTichXyLanh = function(dungTichXyLanh) {
        this.dungTichXyLanh = dungTichXyLanh;
    };
    Vehicle.prototype.toString = function() {
        var thue = 0;
        if (this.getDungTichXyLanh() > 100) {
            thue = this.getTriGiaXe() * 0.01;
        } else if (100 <= this.getDungTichXyLanh() && this.getDungTichXyLanh() < 200) {
            thue = this.getTriGiaXe() * 0.03;
        } else {
            thue = this.getTriGiaXe() * 0.05;
        }
        console.table({
            TenChuXe: "" + this.getTenChuXe(),
            LoaiXe: "" + this.getLoaiXe(),
            DungTich: "" + this.getDungTichXyLanh(),
            TriGia: "" + this.getTriGiaXe(),
            Thue: "" + thue,
        });
        // console.log(thue);
    };
    return Vehicle;
}());

function test() {
    var v = new Vehicle("Nguyen Thu Loan", "Future Neo", 35000000, 100);
    var v1 = new Vehicle("Le Minh Tinh", "Ford Ranger", 250000000, 3000);
    var v2 = new Vehicle("Nguyen Minh Triet", "Landscape", 100000000, 1500);
    v.toString();
    v1.toString();
    v2.toString();
}
test();