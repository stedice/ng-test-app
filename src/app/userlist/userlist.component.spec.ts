import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { UserlistComponent } from './userlist.component';

import { User }                from '../user';
import { UsersService }        from '../users.service';
import { MockUsersService }    from '../users.mockservice';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let user = new User(1);
  let selectedUser=user;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: UsersService, useClass: MockUsersService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});



