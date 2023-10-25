import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false; // Cette variable indique si la page est en cours de défilement

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollThreshold = 100; // Seuil pour basculer la couleur de fond (en pixels)
    this.isScrolled = window.scrollY > scrollThreshold;
  }
}
