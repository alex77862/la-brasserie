import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  allBeers: any[] = []; // Propriété pour stocker toutes les bières

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    AOS.init();
    this.httpService.fetchDataFromUrl().then(response => {
      console.log(response.data);
      // Affectez toutes les bières à la propriété allBeers
      this.allBeers = response.data;
    }).catch(error => {
      console.error(error);
    });
  }
}
