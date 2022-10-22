import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // crate an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Jovan","Maric","jovan.maric@gmail.com",9500),
    new SalesPerson("Petar","Miric","petar.miric@gmail.com",7000),
    new SalesPerson("Aleksandar","Petkovic","aleksandar.petkovic@gmail.com",10000),
    new SalesPerson("Dragan","Jovic","dragan.jovic@gmail.com",8000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
