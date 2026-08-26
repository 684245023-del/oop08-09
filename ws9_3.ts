export{};
abstract class PaymentGatway{
    protected tid: string;
    constructor(protected amount: number){
        this.tid ="TXN-"+Math.floor(1000+Math.random()*9000);
    }
    abstract processPayment():boolean;
    printRecipt(success: boolean):void{
        if(success) console.log(`[Receipt] TXN: ${this.tid} | จำนวนเงิน ${this.amount} บาท`);
        else console.log(`[Receipt] TXN: ${this.tid} | สถานะ: ชำระเงินไม่สำเร็จ`);
    }
}
class CreditCardPayment extends PaymentGatway{
    constructor(protected amount:number,private cardNumber: string){super(amount);}
    processPayment(): boolean {
        if(this.cardNumber.length === 16){
            console.log(`[ชำระเงินด้วยบัตรเครดิต] ชาร์จเงิน ${this.amount} จากบัตรลงท้าย ${this.cardNumber.slice(-4)}`)
            return true;
        }else{
            console.log(`[ชำระเงินด้วยบัตรเครดิต] ไม่สำเร็จ`)
            return false;
        }
    }
}
class PromptPayPayment extends PaymentGatway{
    constructor(protected amount:number,private phoneNumber:string){super(amount);}
    processPayment(): boolean {
        if(this.phoneNumber.length === 10){
            console.log(`[ชำระเงินด้วย PromptPay] ชาร์จเงิน ${this.amount} จาก ${this.phoneNumber}`)
            return true;
        }else{
            console.log(`[ชำระเงินด้วย PromptPay] ไม่สำเร็จ`)
            return false;
        }
    }
}
const payments: PaymentGatway[] = [
    new CreditCardPayment(500,"1111111111114561"),
    new CreditCardPayment(500000,"1234"),
    new PromptPayPayment(300,"1234567891"),
    new PromptPayPayment(20000,"1234")
]
payments.forEach(payment =>{
    payment.printRecipt(payment.processPayment());
})