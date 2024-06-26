import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestService } from './rest.service';

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
    httpMock.verify(); // Verifica que no hayan solicitudes pendientes al final de cada prueba
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a promo', () => {
    const mockPromo = { id: 1, name: 'Promo 1' };

    service.addPromo(mockPromo).subscribe(response => {
      expect(response).toEqual(mockPromo);
    });

    const req = httpMock.expectOne('http://localhost:8000/api/promos');
    expect(req.request.method).toBe('POST');
    req.flush(mockPromo);
  });

  it('should get instrument promotions', () => {
    const mockPromos: any[] = [
      { id: 1, name: 'Promo 1' },
      { id: 2, name: 'Promo 2' }
    ];

    service.getIns().subscribe(promos => {
      expect(promos.length).toBe(2);
      expect(promos).toEqual(mockPromos);
    });

    const req = httpMock.expectOne('http://localhost:3000/instrumentos');
    expect(req.request.method).toBe('GET');
    req.flush(mockPromos);
  });

  it('should get disc promotions', () => {
    const mockDiscs: any[] = [
      { id: 1, name: 'Disc 1' },
      { id: 2, name: 'Disc 2' }
    ];

    service.getDis().subscribe(discs => {
      expect(discs.length).toBe(2);
      expect(discs).toEqual(mockDiscs);
    });

    const req = httpMock.expectOne('http://localhost:3000/discos');
    expect(req.request.method).toBe('GET');
    req.flush(mockDiscs);
  });
});
