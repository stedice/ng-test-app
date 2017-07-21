import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AlbumlistComponent } from './albumlist.component';

import { UsersService }        from '../users.service';
import { MockUsersService }    from '../users.mockservice';

describe('AlbumlistComponent', () => {
  let component: AlbumlistComponent;
  let fixture: ComponentFixture<AlbumlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumlistComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: UsersService, useClass: MockUsersService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
