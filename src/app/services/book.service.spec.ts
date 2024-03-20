import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service'; // Correct import statement

describe('BookService', () => {
  let service: BookService; // Update service name

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
