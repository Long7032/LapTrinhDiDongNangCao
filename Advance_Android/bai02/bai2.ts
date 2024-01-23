class Vehicle{
    private tenChuXe: string;
    private loaiXe: string;
    private triGiaXe: number;
    private dungTichXyLanh: number;

    public getTenChuXe(): string {
        return this.tenChuXe;
    }

    public setTenChuXe(tenChuXe: string): void {
        this.tenChuXe = tenChuXe;
    }

    public getLoaiXe(): string {
        return this.loaiXe;
    }

    public setLoaiXe(loaiXe: string): void {
        this.loaiXe = loaiXe;
    }

    public getTriGiaXe(): number {
        return this.triGiaXe;
    }

    public setTriGiaXe(triGiaXe: number): void {
        this.triGiaXe = triGiaXe;
    }

    public getDungTichXyLanh(): number {
        return this.dungTichXyLanh;
    }

    public setDungTichXyLanh(dungTichXyLanh: number): void {
        this.dungTichXyLanh = dungTichXyLanh;
    }


    public constructor(tenChuXe: string, loaiXe: string, triGiaXe: number, dungTichXyLanh: number){
        this.tenChuXe = tenChuXe;
        this.loaiXe = loaiXe;
        if(triGiaXe >= 0){
            this.triGiaXe = triGiaXe;
        } else {
            console.log(" Tri Gia Xe Lon Hon Hoac Bang 0")
            this.triGiaXe = 0;
        }
        
        if(dungTichXyLanh >= 0){
            this.dungTichXyLanh = dungTichXyLanh;
        } else {
            console.log(" Dubg Tich Xy Lanh Lon Hon Hoac Bang 0")
            this.dungTichXyLanh = 0;
        }
        
       
    }

    

    public toString():void{
        let thue:number = 0;
        if(this.getDungTichXyLanh() > 100){
            thue = this.getTriGiaXe() * 0.01;
        } else if(100 <= this.getDungTichXyLanh() && this.getDungTichXyLanh() < 200  ){
            thue = this.getTriGiaXe() * 0.03;
        } else {
            thue = this.getTriGiaXe() * 0.05;
        }
        console.table({
            TenChuXe: "" + this.getTenChuXe(),
            LoaiXe: "" + this.getLoaiXe(),
            DungTich: "" + this.getDungTichXyLanh(),
            TriGia: "" + this.getTriGiaXe(),
            Thue : "" + thue,
                        })
        // console.log(thue);
    
    }
}
function test():void{
    let v = new Vehicle("Nguyen Thu Loan", "Future Neo", 35000000, 100);
    let v1 = new Vehicle("le Minh Tinh", "Ford Ranger", 250000000, 3000);
    let v2 = new Vehicle("Nguyen Minh Triet", "Landscape", 100000000, 1500);
    v.toString();
    v1.toString()
    v2.toString()
}
test();