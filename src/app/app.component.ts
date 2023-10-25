import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Utilisation de <router-outlet> pour afficher les composants des pages
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'la-brasserie';
}
