import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  HttpService
} from '../http.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  beer: any; // Propriété pour stocker les informations de la bière

  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const beerId = +params['id'];
      if (isNaN(beerId)) {
        console.error('Invalid Beer ID');
        // Redirige vers /home si beerId est NaN
        this.router.navigate(['/home']);
      } else {
        console.log('Beer ID:', beerId);
        // Utilisez le service HttpService pour récupérer les détails de la bière par son ID
        this.httpService.getBeerById(beerId).then(response => {
          this.beer = response.data[0];
        }).catch((error: any) => { // Spécifiez explicitement le type 'any' pour 'error'
          console.error('Error fetching beer details:', error);
          // Redirige vers /home en cas d'erreur
          this.router.navigate(['/home']);
        });
      }
    });
  }
}
