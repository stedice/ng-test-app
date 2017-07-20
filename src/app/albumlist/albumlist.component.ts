import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import { User } from '../user';
import { Album } from '../album';

import { UsersService }         from '../users.service';

@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.css']
})

export class AlbumlistComponent implements OnChanges{
  @Input() user: User;
  albums: Album[];
  selectedAlbum: Album;

  constructor(private usersService: UsersService) { }

  getUserAlbums(userId): void {
    this.usersService
        .getUserAlbums(userId)
        .then(albums => this.albums = albums);
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getUserAlbums(this.user.id);
  }

}
