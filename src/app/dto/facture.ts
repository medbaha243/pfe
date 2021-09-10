import {factureproduits} from './factureproduits';

// tslint:disable-next-line:class-name
export class facture {
    public idFacture: string | any;
    public nom: string | any;
    public adresse: string | any;
    public tel: string | any;
    public siege: string | any;
    public produits: factureproduits[] = [];
    public totaltva: number | any;
    public totalht: number | any;
    public total: number | any;
    public livraison: number | any;
    public statu: boolean | any;
    public date: Date| any;

}
