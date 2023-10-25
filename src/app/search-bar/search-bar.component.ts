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
  results: string[] = []; // Type des résultats

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.search(this.searchTerm)
      .subscribe((data: string[]) => { // Spécifie le type de données reçu ici
        this.results = data; // Affecte les résultats
        // Ici, tu peux gérer les résultats de la recherche
        console.log(this.results);
      });
  }
}
