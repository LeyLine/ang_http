import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: Http) { }


  getRandom(): Observable<string> {
    return this.http.get('http://api.icndb.com/jokes/random').pipe(
      map((res) => res.json().value.joke)
    );
  }
}
