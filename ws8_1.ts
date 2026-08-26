class PaymentGatway{
    process(amount:number){}
}
class CreditCardPayment extends PaymentGatway{
    process(amount: number): void{
        console.log(`ชำระเงิน ${amount} บาท ด้วยบัตรเครดิต`)
    }
}
class PayPalPayment extends PaymentGatway{
    process(amount: number): void{
        console.log(`กำลงัเปลี่ยนเส้นทาวไปชำระเงินด้วย PayPal กรุณาอย่าปิด app จนกว่าดำเนินเสร็จ`)
    }
}
function executePayment(p:PaymentGatway,amt:number){
    p.process(amt);
}
const payments: PaymentGatway[] = [new CreditCardPayment(), new PayPalPayment()];
payments.forEach(payment => {
    executePayment(payment,1000);
})