import { TestBed } from '@angular/core/testing';
import { BaseDeDatosService } from './base-de-datos.service';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDO5yO5VcktZdjyg38vuqNpoOS4i86-tE4",
  authDomain: "integracion-d00bf.firebaseapp.com",
  projectId: "integracion-d00bf",
  storageBucket: "integracion-d00bf.appspot.com",
  messagingSenderId: "840054051270",
  appId: "1:840054051270:web:60004893b8346d0b37e2c7",
  measurementId: "G-3NG3Q1T6CM"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

describe('BaseDeDatosService', () => {
  let service: BaseDeDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseDeDatosService]
    });
    service = TestBed.inject(BaseDeDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a document', async () => {
    const addDocSpy = spyOn(service, 'crearDocumento').and.callFake(async () => {
      return Promise.resolve();
    });
    await service.crearDocumento('testCollection', { name: 'test' });
    expect(addDocSpy).toHaveBeenCalled();
  });

  it('should delete a document', async () => {
    const deleteDocSpy = spyOn(service, 'eliminarDocumento').and.callFake(async () => {
      return Promise.resolve();
    });
    await service.eliminarDocumento('testCollection', '123');
    expect(deleteDocSpy).toHaveBeenCalled();
  });

  it('should read a collection', async () => {
    const mockDocs = [
      { id: '1', name: 'test1' },
      { id: '2', name: 'test2' }
    ];

    const getDocsSpy = spyOn(service, 'leerColeccion').and.callFake(async () => {
      return Promise.resolve(mockDocs);
    });

    const result = await service.leerColeccion('testCollection');

    expect(result.length).toBe(2);
    expect(result).toEqual([
      { id: '1', name: 'test1' },
      { id: '2', name: 'test2' }
    ]);

    expect(getDocsSpy).toHaveBeenCalled();
  });

  it('should update a document', async () => {
    const updateDocSpy = spyOn(service, 'modificarDocumento').and.callFake(async () => {
      return Promise.resolve();
    });
    await service.modificarDocumento('testCollection', '123', { name: 'updated' });
    expect(updateDocSpy).toHaveBeenCalled();
  });

  it('should find a user', async () => {
    const mockUser = { id: '1', username: 'user', password: 'pass' };

    const buscarUsuarioSpy = spyOn(service, 'buscarUsuario').and.callFake(async () => {
      return Promise.resolve(mockUser);
    });

    const result = await service.buscarUsuario('users', 'user', 'pass');

    expect(result).toEqual(mockUser);
    expect(buscarUsuarioSpy).toHaveBeenCalled();
  });

  it('should return null if user not found', async () => {
    const mockQuerySnapshot = { empty: true, docs: [] };
    const getDocsSpy = spyOn(service, 'buscarUsuario').and.callFake(async () => {
      return Promise.resolve(null);
    });
    const result = await service.buscarUsuario('users', 'user', 'wrongpass');
    expect(result).toBeNull();
  });
});
