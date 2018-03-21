import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export class Cat {
  name: string;
}

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('/api/cats');
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('/api/cats/' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('/api/cats/', cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>('/api/cats/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this.http.delete('/api/cats/' + name);
  }
}
