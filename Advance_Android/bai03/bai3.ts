class ToaDo{

	
    private ten: string;
    private x: number;
    private y: number;
    constructor($ten: string, $x: number, $y: number) {
		this.ten = $ten;
		this.x = $x;
		this.y = $y;
	}
  public getTen(): string {
    return this.ten;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }
}

class HinhTron{
    private tam: ToaDo;
    private banKinh: number;

constructor (tam: ToaDo, banKinh: number){
    this.tam = tam;
    this.banKinh = banKinh;
}

  public getTam(): ToaDo {
    return this.tam;
  }

  public getBanKinh(): number {
    return this.banKinh;
  }

  public tinhChuVi(): number{
    return this.getBanKinh() * 2 * 3.14;
  }

  public tinhDienTich(): number{
    return Math.pow(this.getBanKinh(), 2) * 3.14;
  }
  public toString(): string{
    return "Hình tròn có tâm " + this.getTam().getTen() + "(" + 
    this.getTam().getX() + ", " + this.getTam().getY() + ") với bán kính " + 
    this.getBanKinh() + " có diện tích và chu vi lần lượt là " + 
    this.tinhDienTich() + " và " + this.tinhChuVi();
  }
}

function test():void{
    let a = new HinhTron(new ToaDo("O", 5, 5), 10.5);
    console.log(a.toString());
}
test()