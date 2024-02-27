var Product = /** @class */ (function () {
    function Product($productID, $description, $price) {
        this.productID = $productID;
        this.description = $description;
        this.price = $price;
    }
    Product.prototype.getProductID = function () {
        return this.productID;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var OrderDetail = /** @class */ (function () {
    function OrderDetail(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    OrderDetail.prototype.getProduct = function () {
        return this.product;
    };
    OrderDetail.prototype.getQuantity = function () {
        return this.quantity;
    };
    return OrderDetail;
}());
var Order = /** @class */ (function () {
    function Order(orderID, orderDate, lineItems, count) {
        this.orderID = orderID;
        this.orderDate = orderDate;
        this.lineItems = lineItems;
        this.count = count;
    }
    Order.prototype.getOrderID = function () {
        return this.orderID;
    };
    Order.prototype.getOrderDate = function () {
        return this.orderDate;
    };
    Order.prototype.getLineItems = function () {
        return this.lineItems;
    };
    Order.prototype.getCount = function () {
        return this.count;
    };
    Order.prototype.addLineItem = function (product, quantity) {
        this.getLineItems().push(new OrderDetail(product, quantity));
    };
    Order.prototype.calculatorTotalCharge = function () {
        var total = 0;
        if (this.getLineItems() != null) {
            this.getLineItems().forEach(function (element) {
                total += element.getProduct().getPrice() * element.getQuantity();
            });
        }
        return total;
    };
    Order.prototype.toString = function () {
        console.log("Mã hóa đơn: " + this.getOrderID());
        console.log("Ngày lập hóa đơn: " + this.getOrderDate());
        console.table();
        console.log("Tổng tiền thanh toán: " + this.calculatorTotalCharge() + " VND");
    };
    return Order;
}());
function test() {
    var a = new Order(1, new Date(), null, 0);
    a.toString();
}
test();
