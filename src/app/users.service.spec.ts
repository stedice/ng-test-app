import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';


describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, BrowserModule],
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
