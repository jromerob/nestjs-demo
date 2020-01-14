import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log(`Petición interceptada por LoggerMiddleware realizada por ${req.headers['user-agent']} desde ${req.ip}  a ${req.originalUrl}`);
        next();
    }
}
