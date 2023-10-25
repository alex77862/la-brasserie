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
  beer: any;

  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) {}

  ngOnInit() {
    window.scrollTo(0, 0)
    this.route.params.subscribe(params => {
      const beerId = +params['id'];
      if (isNaN(beerId)) {
        console.error('Invalid Beer ID');
        this.router.navigate(['/home']);
      } else {
        console.log('Beer ID:', beerId);
        this.httpService.getBeerById(beerId).then(response => {
          this.beer = response.data[0];
        }).catch((error: any) => {
          console.error('Error fetching beer details:', error);
          this.router.navigate(['/home']);
        });
      }
    });
  }
}
