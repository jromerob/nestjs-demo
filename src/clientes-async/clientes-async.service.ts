import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ClientesAsyncService {

    constructor(private http: HttpService) { }

    getAll(): Promise<any> {
        return this.http.get('https://api.github.com/users').toPromise();
    }
}
