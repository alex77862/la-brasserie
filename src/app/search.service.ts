// search.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search(term: string): Observable<string[]> { // Spécifie le type de retour comme Observable<string[]>
    // Logique de recherche (exemple factice)
    const fakeResults: string[] = [
      "Résultat 1",
      "Résultat 2",
      "Résultat 3"
    ];

    return of(fakeResults); // N'oublie pas d'importer 'of' depuis 'rxjs' si tu ne l'as pas encore fait
  }
}
