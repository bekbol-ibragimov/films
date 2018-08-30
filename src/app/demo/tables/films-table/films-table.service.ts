import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FilmsTableService {

  constructor(private http: HttpClient) {
  }

  getFilms() {
    return this.http.get('http://www.omdbapi.com/?apikey=9e60f336&s=Batman&page=1', {params: {apikey: '9e60f336', s: 'sd', page: '1'}});
  }
}

