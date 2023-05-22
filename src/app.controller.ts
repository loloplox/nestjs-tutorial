import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/dos')
  getDos(): string {
    return 'Hola';
  }

  @Get('/products/:id')
  getProducts(@Param('id') id: string): {
    id: string;
    name: string;
    price: number;
  } {
    return {
      id: id,
      name: `Producto ${id}`,
      price: 10 * Number(id),
    };
  }
}
