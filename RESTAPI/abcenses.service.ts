import { Component, OnInit } from '@angular/core';
import { AbcensesService } from './abcenses.service';

@Component({
  selector: 'app-abcenses',
  templateUrl: './abcenses.component.html',
  styleUrls: ['./abcenses.component.css']
})
export class AbcensesComponent implements OnInit {

  ausencias: any[];

  constructor(private abcensesService: AbcensesService) { }

  ngOnInit() {
    this.getAbcenses();
  }

  getAusencias() {
    this.abcensesService.getAbcenses().subscribe(
      (data: any[]) => {
        this.abcenses = data;
      },
      error => console.error(error)
    );
  }

}
