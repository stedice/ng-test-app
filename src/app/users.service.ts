import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { Album } from './album';
import { Photo } from './photo';


@Injectable()
export class UsersService {
  
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  //private heroesUrl = 'api/heroes';  // URL to web api

  getUsers(): Promise<User[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }

  getUserAlbums(userId): Promise<Album[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/users/'+userId+'/albums')
               .toPromise()
               .then(response => response.json() as Album[])
               .catch(this.handleError);
  }

  getAlbumPhotos(albumId): Promise<Photo[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/albums/'+albumId+'/photos')
               .toPromise()
               .then(response => response.json() as Photo[])
               .catch(this.handleError);
  }
  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
