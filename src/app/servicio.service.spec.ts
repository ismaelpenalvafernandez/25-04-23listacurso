import { TestBed } from '@angular/core/testing';

import { ServiciocursosService } from './servicio.service';

describe('ServicioService', () => {
  let service: ServiciocursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciocursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
