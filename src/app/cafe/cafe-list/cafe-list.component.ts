import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  cafesGroupByTipo:any[] = [];
  constructor(private cafeService: CafeService) {}
  ngOnInit() {
    this.getCafes();
    console.log(this.cafesGroupByTipo)
  }
  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.getCafesGroupByTipoAndSumValue(this.cafes);
    });
  }
  getCafesGroupByTipoAndSumValue(arr: any[]): void {
    this.cafesGroupByTipo = Object.values(arr.reduce((accumulator, currentValue) => {
      const tipo = currentValue.tipo;
      if (!accumulator[tipo]) {
        accumulator[tipo] = { tipo, totalValue: 0 };
      }
      accumulator[tipo].totalValue += 1;
      return accumulator;
    }, {}));
  }
}
