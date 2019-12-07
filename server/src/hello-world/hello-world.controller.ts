import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {


    @Get()
    public helloWorld(): string{
        return "hello world";
    }
}

