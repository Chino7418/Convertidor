import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'PESOS';
  quiero = 'USD';
  total = 0;

  monedas: string[] = ['PESOS', 'USD', 'EURO', 'REAL'];

  convertir() {
    switch (this.tengo) {
      case 'PESOS':
        if(this.quiero ==='PESOS'){
          this.total=this.cantidad
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.0029;
        }
        if (this.quiero === 'EURO') {
          this.total = this.cantidad * 0.0026;
        }
        if (this.quiero === 'REAL') {
          this.total = this.cantidad * 0.014;
        }
        break;

      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'PESOS') {
          this.total = this.cantidad * 349.08;
        }
        if (this.quiero === 'EURO') {
          this.total = this.cantidad * 0.92;
        }
        if (this.quiero === 'REAL') {
          this.total = this.cantidad * 4.97;
        }
        break;

      case 'EURO':
        if (this.quiero === 'EURO') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.09;
        }
        if (this.quiero === 'PESOS') {
          this.total = this.cantidad * 380.2;
        }
        if (this.quiero === 'REAL') {
          this.total = this.cantidad * 5.41;
        }
        break;

      case 'REAL':
        if (this.quiero === 'REAL') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.2;
        }
        if (this.quiero === 'EURO') {
          this.total = this.cantidad * 0.18;
        }
        if (this.quiero === 'PESOS') {
          this.total = this.cantidad * 70.23;
        }
        break;
    }
  }
}
