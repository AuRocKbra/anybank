import { nanoid } from "nanoid";

export class Transacao {
    readonly id = nanoid();
    readonly data = new Date();

    constructor(
       public readonly tipo:TipoTransacao,
       public readonly valor:number
    ){}
}

export enum TipoTransacao{
    DEPOSITO = 'deposito',
    SAQUE = 'saque'
}
