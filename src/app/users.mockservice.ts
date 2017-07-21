import { Injectable } from '@angular/core';
//import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { Album } from './album';
import { Photo } from './photo';


@Injectable()
export class MockUsersService {
  
  //constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return Promise.resolve([]);
  }

  getUserAlbums(userId): Promise<Album[]> {
    return Promise.resolve([]);
  }

  getAlbumPhotos(albumId): Promise<Photo[]> {
    return Promise.resolve([]);
  }
  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
