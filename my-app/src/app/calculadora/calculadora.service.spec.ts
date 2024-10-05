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

  it('5.5 + 2.3 debe ser 7.8', inject([CalculadoraService], (service: CalculadoraService) => { 
    expect(service.sumar(5.5, 2.3)).toBe(7.8); 
  })); 
});

describe('Restar', function () { 
  it('2 - 2 debe ser 0', inject([CalculadoraService], (service: CalculadoraService) => { 
    expect(service.restar(2, 2)).toBe(0); 
  })); 

  it('3 - 4 debe ser -1', inject([CalculadoraService], (service: CalculadoraService) => { 
    expect(service.restar(3, 4)).toBe(-1); 
  })); 
});

describe('Multiplicar', function () { 
  it('3 * 2 debe ser 6', inject([CalculadoraService], (service: CalculadoraService) => { 
    expect(service.multiplicar(3, 2)).toBe(6); 
  })); 
});

describe('Dividir', function () { 

  it("2 dividido por 2 debe ser 1", inject([CalculadoraService], 
  (service: CalculadoraService) => { 
  expect(service.dividir(2, 2)).toBe(1); 
  })); 

  it("6 dividido por 0 debe generar una Excepción", 
  inject([CalculadoraService], (service: CalculadoraService) => { 
  expect(function () { service.dividir(6, 0); }).toThrowError(Error, 'División por cero'); 
  expect(function () { service.dividir(6, 0); }).toThrowError('División por cero'); 
  expect(function () { service.dividir(6, 0); }).toThrowError(Error); 
  expect(function () { service.dividir(6, 0); 
  }).toThrowError(/División por cero/); 
  })); 
  }); 