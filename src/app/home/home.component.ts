import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  allBeers: any[] = [];
  filteredBeers: any[] = [];
  selectedFilter: string = "all";

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    AOS.init();
    this.httpService.fetchDataFromUrl().then(response => {
      this.allBeers = response.data;
      this.applyFilter();
    }).catch(error => {
      console.error(error);
    });
  }

  applyFilter() {
    switch (this.selectedFilter) {
      case "slightly-bitter":
        this.filteredBeers = this.allBeers.filter(beer => beer.ibu < 20);
        break;
      case "bitter":
        this.filteredBeers = this.allBeers.filter(beer => beer.ibu >= 20 && beer.ibu <= 40);
        break;
      case "very-bitter":
        this.filteredBeers = this.allBeers.filter(beer => beer.ibu > 40);
        break;
      default:
        this.filteredBeers = this.allBeers;
        break;
    }
  }
  
}
