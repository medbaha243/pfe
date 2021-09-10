export class PanieDto {
    idProduits: number;
    nameprduits: string;
    quantitep: number;
    prixprduits: number;
    discription: string;
    total: number;

    constructor(idProduits: number,  nameprduits: string, prixprduits: number, quantitep = 1,  total = 0, discription: string) {
        this.idProduits = idProduits;
        this.nameprduits = nameprduits;
        this.prixprduits = prixprduits;
        this.quantitep = quantitep;
        this.total = total;
        this.discription = discription;
    }
}
