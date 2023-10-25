import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  beerId: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.beerId = +params['id'];
      if (this.beerId) {
        console.log('Beer ID:', this.beerId);
        // Maintenant, vous pouvez utiliser this.beerId en toute sécurité
      } else {
        console.error('Invalid Beer ID');
      }
    });
  }
}
