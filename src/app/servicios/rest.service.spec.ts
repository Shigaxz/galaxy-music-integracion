import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestService } from './rest.service';
import { ClPromociones } from '../model/ClPromocion';

describe('RestService', () => {
  let service: RestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestService]
    });

    service = TestBed.inject(RestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch promotions via GET', () => {
    const dummyPromos: ClPromociones[] = [
      { id: "a", prod: 'Instrumento', descuento: 10, precioFinal: 900, fechaInic: '2024-06-27', fechaTerm: '2024-07-27' },
      { id: "b", prod: 'Disco', descuento: 15, precioFinal: 850, fechaInic: '2024-06-30', fechaTerm: '2024-07-30' }
    ];

    service.getPromos().subscribe(promos => {
      expect(promos.length).toBe(2);
      expect(promos).toEqual(dummyPromos);
    });

    const req = httpMock.expectOne(service.apiPromo);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPromos);
  });

  it('should fetch instruments via GET', () => {
    const dummyInstruments = [
      { id: 1, instrumento: 'Guitarra', tipoInstrumento: 'Cuerda', marca: 'Fender', precio: 1200, stock: 10 },
      { id: 2, instrumento: 'Piano', tipoInstrumento: 'Tecla', marca: 'Yamaha', precio: 1500, stock: 5 }
    ];

    service.getIns().subscribe(instruments => {
      expect(instruments.length).toBe(2);
      expect(instruments).toEqual(dummyInstruments);
    });

    const req = httpMock.expectOne(service.apiIns);
    expect(req.request.method).toBe('GET');
    req.flush(dummyInstruments);
  });

  it('should fetch discs via GET', () => {
    const dummyDiscs = [
      { id: 1, disco: 'Album 1', selloDiscografico: 'Sony', artista: 'Artista 1', precio: 20, stock: 100 },
      { id: 2, disco: 'Album 2', selloDiscografico: 'Warner', artista: 'Artista 2', precio: 25, stock: 150 }
    ];
    service.getDis().subscribe(discs => {
      expect(discs.length).toBe(2);
      expect(discs).toEqual(dummyDiscs);
    });

    const req = httpMock.expectOne(service.apiDis);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDiscs);
  });
});
