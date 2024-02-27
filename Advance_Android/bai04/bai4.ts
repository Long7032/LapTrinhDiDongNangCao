class Product {

    constructor($productID: string, $description: string, $price: number) {
        this.productID = $productID;
        this.description = $description;
        this.price = $price;
    }
    private productID: string;
    private description: string;
    private price: number;

    public getProductID(): string {
        return this.productID;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

}

class OrderDetail {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    public getProduct(): Product {
        return this.product;
    }

    public getQuantity(): number {
        return this.quantity;
    }

}

class Order {
    private orderID: number;
    private orderDate: Date;
    private lineItems: OrderDetail[];
    private count: number;

    public getOrderID(): number {
        return this.orderID;
    }

    public getOrderDate(): Date {
        return this.orderDate;
    }

    public getLineItems(): OrderDetail[] {
        return this.lineItems;
    }

    public getCount(): number {
        return this.count;
    }
    constructor(orderID: number, orderDate: Date, lineItems: OrderDetail[], count: number) {
        this.orderID = orderID;
        this.orderDate = orderDate;
        this.lineItems = lineItems;
        this.count = count;
    }

    public addLineItem(product: Product, quantity: number): void{
        this.getLineItems().push(new OrderDetail(product, quantity));
    }

    public calculatorTotalCharge(): number{
        let total:number = 0;
        if(this.getLineItems() != null){
            this.getLineItems().forEach(element => {
                total += element.getProduct().getPrice() * element.getQuantity()
            });
        }
       
        return total;
    }
    
    public toString(): void{
        console.log("Mã hóa đơn: " + this.getOrderID());
        console.log("Ngày lập hóa đơn: " + this.getOrderDate());
        console.table()
        console.log("Tổng tiền thanh toán: " + this.calculatorTotalCharge() + " VND");
    }
}
function test(): void {
    let a = new Order(1, new Date(), null, 0);
    a.toString();
}
test();
