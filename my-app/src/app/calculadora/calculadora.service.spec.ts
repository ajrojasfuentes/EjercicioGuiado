import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Sumar', function () { 
  it('10 + 15 debe ser 25', inject([CalculadoraService], (service: 
  CalculadoraService) => { 
  expect(service.sumar(10, 15)).toBe(25); 
  })); 
}); 