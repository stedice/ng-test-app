import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { PhotolistComponent } from './photolist/photolist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AlbumlistComponent,
    PhotolistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
