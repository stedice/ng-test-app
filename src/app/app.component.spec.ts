import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { UserlistComponent } from './userlist/userlist.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { PhotolistComponent } from './photolist/photolist.component';

import { UsersService }          from './users.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [UsersService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('This is an Angular2 app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('This is an Angular2 app!');
  }));
});
