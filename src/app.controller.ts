import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getHello() {
    return {
      title :'Anasayfa'
    }
  }
  
  @Get('contact')
  @Render('contact')
  async get_contact(){
    return {
      title: "İletişim"
    }
  }

  @Get('services')
  @Render('services')
  async get_services(){
    return {
      title: 'Hizmetlerimiz'
    }
  }
}
