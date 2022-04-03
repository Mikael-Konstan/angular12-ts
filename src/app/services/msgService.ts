import { from, Observable } from 'rxjs';

export class MsgService {
    public observerList: Array<any> = [];
    public observerIndexList: Array<string> = [];

    constructor() { }

    sendMessage(content: any){
        
    }
    emit(field: string | Array<any>, content?: any) {

    }

    observerSign(fields: string | Array<string>) {
        if (Array.isArray(fields)) {
            fields.forEach(field => {
                if (!this.observerIndexList.includes(field)) {
                    this.observerIndexList.push(field);
                    this.observerList.push(new Observable((observer) => {

                    }))
                }
            })
        }
    }

}
