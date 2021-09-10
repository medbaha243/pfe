import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from '../../../_services/AdminService';
import {facture} from '../../../dto/facture';
import {Byte} from '@angular/compiler/src/util';

@Component({
    selector: 'app-facture',
    templateUrl: './facture.component.html',
    styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
    list: facture[] = [];
    i = 0;
    x = 0;

    constructor(private adminService: AdminService) {
    }

    ngOnInit(): void {
        this.facturelist();
    }

    facturelist(): void {
        this.adminService.getfacture().subscribe(result => {
            this.list = result;
            for (const i in this.list) {
                this.x = this.x + this.list[i].total;
            }
        });
    }

    facturepdf(idFacture: string | any): void {
        this.adminService.getfacturepdf(idFacture).subscribe(result => {
            const blob = new Blob([result], {type: 'application/pdf'});
            if (window.navigator && window.navigator.msSaveOrOpenBlob){
                window.navigator.msSaveOrOpenBlob(blob);
                return;
            }
            const data = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = data;
            link.download = 'facture.pdf';
            link.dispatchEvent((new MouseEvent('click', {bubbles: true, cancelable: true, view: window})));
            // tslint:disable-next-line:only-arrow-functions typedef
            setTimeout(function() {
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
    }

}
