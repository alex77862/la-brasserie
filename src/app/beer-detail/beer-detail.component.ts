import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  beerId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.beerId = +params['id'];
      if (isNaN(this.beerId)) {
        console.error('Invalid Beer ID');
        // Redirige vers /home si beerId est NaN
        this.router.navigate(['/home']);
      } else {
        console.log('Beer ID:', this.beerId);
        // Vous pouvez utiliser this.beerId en toute sécurité ici
      }
    });
  }
}
