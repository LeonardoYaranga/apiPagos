import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { PaymentService } from '../service/payment.service';
import { PaymentGuard } from '../guard/payment.guard';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post('createData')
    @UseGuards(PaymentGuard)
    async createData(@Body() data: any,@Request() request:any): Promise<void> {
        const userId= request.user.sub;  
        await this.paymentService.createPayment({...data,userId});
    }

    @Get('getData')
    @UseGuards(PaymentGuard)
    async getData(): Promise<any> {
        return await this.paymentService.getPayments();
    }
}
