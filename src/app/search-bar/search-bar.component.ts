// search-bar.component.ts

import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  results: any[] = [];
  showDropdown: boolean = false;

  @ViewChild('dropdown') dropdown!: ElementRef;

  constructor(private searchService: SearchService, private renderer: Renderer2) {}

  onSearch() {
    this.searchService.getAllBeers()
      .then(data => {
        // Filtrer les bières en fonction du terme de recherche
        this.results = data.filter((beer: any) => beer.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        this.showDropdown = this.results.length > 0; // Affiche le dropdown si des résultats sont trouvés
      });
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    if (this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.showDropdown = false; // Masque le dropdown si vous cliquez à l'extérieur
    }
  }
}
