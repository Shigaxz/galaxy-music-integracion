import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestService } from './rest.service';
import { ClPromociones } from '../model/ClPromocion';
import { ClProducto } from '../model/ClProducto';

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
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a promo', () => {
    const mockPromo = { name: 'Promo Test', discount: 20 };
    service.addPromo(mockPromo).subscribe(response => {
      expect(response).toEqual(mockPromo);
    });

    const req = httpMock.expectOne(service.apiPromo);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    expect(req.request.headers.get('x-secret-token')).toBe('dh3A64JunsgwejLW9JKPzsemk3RMhG');
    req.flush(mockPromo);
  });

  it('should get promos', () => {
    const mockPromos: any[] = [
      { id: 1, name: 'Promo 1', discount: 10 },
      { id: 2, name: 'Promo 2', discount: 20 }
    ];

    service.getPromos().subscribe(promos => {
      expect(promos.length).toBe(2);
      expect(promos).toEqual(mockPromos);
    });

    const req = httpMock.expectOne(service.apiPromo);
    expect(req.request.method).toBe('GET');
    req.flush(mockPromos);
  });

  it('should get instrumentos', () => {
    const mockInstrumentos = [
      { id: 1, name: 'Guitar' },
      { id: 2, name: 'Piano' }
    ];

    service.getIns().subscribe(instrumentos => {
      expect(instrumentos.length).toBe(2);
      expect(instrumentos).toEqual(mockInstrumentos);
    });

    const req = httpMock.expectOne(service.apiIns);
    expect(req.request.method).toBe('GET');
    req.flush(mockInstrumentos);
  });

  it('should get discos', () => {
    const mockDiscos = [
      { id: 1, title: 'Album 1' },
      { id: 2, title: 'Album 2' }
    ];

    service.getDis().subscribe(discos => {
      expect(discos.length).toBe(2);
      expect(discos).toEqual(mockDiscos);
    });

    const req = httpMock.expectOne(service.apiDis);
    expect(req.request.method).toBe('GET');
    req.flush(mockDiscos);
  });

  it('should get filtered productos', () => {
    const mockProductos: ClProducto[] = [
      { id_producto: 1, disco: {}, instrumento: {}, precio: 100, stock: 10, estado: true },
      { id_producto: 2, disco: {}, instrumento: {}, precio: 200, stock: 5, estado: false },
      { id_producto: 3, disco: {}, instrumento: {}, precio: 300, stock: 2, estado: true }
    ];

    service.getProductos().subscribe(productos => {
      expect(productos.length).toBe(1);
      expect(productos[0].estado).toBe(false);
      expect(productos[0].id_producto).toBe(2);
    });

    const req = httpMock.expectOne(service.apiIntegracion);
    expect(req.request.method).toBe('GET');
    req.flush(mockProductos);
  });
});
