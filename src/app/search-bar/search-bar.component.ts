// search-bar.component.ts
import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  searchTerm: string = '';
  results: any[] = [];

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.getAllBeers()
      .then(data => {
        // Filtrer les bières en fonction du terme de recherche
        this.results = data.filter((beer: any) => beer.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      });
  }
}
