import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotolistComponent } from './photolist.component';

import { UsersService }        from '../users.service';
import { MockUsersService }    from '../users.mockservice';


describe('PhotolistComponent', () => {
  let component: PhotolistComponent;
  let fixture: ComponentFixture<PhotolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotolistComponent ],
      providers: [{provide: UsersService, useClass: MockUsersService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
