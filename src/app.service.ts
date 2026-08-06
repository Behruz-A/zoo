import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World!';
  }

  public getDetail(): string {
    return 'Here are Zoo details!';
  }
}
