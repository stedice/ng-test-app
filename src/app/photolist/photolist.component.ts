import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import { User } from '../user';
import { Album } from '../album';
import { Photo } from '../photo';


import { UsersService }         from '../users.service';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})

export class PhotolistComponent implements OnChanges{
  @Input() album: Album;
  photos: Photo[];
  selectedPhoto: Photo;



  constructor(private usersService: UsersService) { }

  getAlbumPhotos(albumId): void {
    this.usersService
        .getAlbumPhotos(albumId)
        .then(photos => this.photos = photos);
  }

  onSelect(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getAlbumPhotos(this.album.id);
  }

}