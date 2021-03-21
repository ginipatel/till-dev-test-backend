import {Controller, Get, Param} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        console.log('hello1')
        return this.appService.getHello();
    }

    @Get('customers')
    getCustomers(): object {
        return this.appService.getCustomers();
    }

    @Get('customers/:id')
    getCustomer(@Param('id') id): object {
        return this.appService.getCustomer(id);
    }

    @Get('merchants')
    getMerchants(): object {
        return this.appService.getMerchants();
    }

    @Get('merchants/:id')
    getMerchant(@Param('id') id): object {
        return this.appService.getMerchant(id);
    }
}
