import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { PhotolistComponent } from './photolist/photolist.component';

import { UsersService }          from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AlbumlistComponent,
    PhotolistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
