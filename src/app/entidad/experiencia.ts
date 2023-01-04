export class Experiencia {
    id? : number;
    puesto? : string;
    empresa? : string;
    inicio? : string;
    fin? : string

    constructor(puesto:string, empresa:string, inicio:string, fin:string) {
        this.puesto = puesto;
        this.empresa = empresa;
        this.inicio = inicio;
        this.fin = fin;
    }
}
