import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

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

  constructor(private searchService: SearchService, private renderer: Renderer2, private router: Router) {}

  onSearch() {
    this.searchService.getAllBeers()
      .then(data => {
        this.results = data.filter((beer: any) => beer.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        this.showDropdown = this.results.length > 0;
      });
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    if (this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  hoverItem(index: number) {
    this.results[index].hovered = true;
  }

  unhoverItem(index: number) {
    this.results[index].hovered = false;
  }

  onItemClick(beer: any) {
    if (beer.name !== 'No result...') {
      this.router.navigate(['/beer', beer.id]);
    }
  }
}
