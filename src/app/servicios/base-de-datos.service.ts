import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat'
import { Observable,from } from 'rxjs';
import { inject } from '@angular/core';
import { ClUsuario } from '../model/ClUsuario'
import { environment } from '../../environments/environment';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore';
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
@Injectable({
  providedIn: 'root'
})

export class BaseDeDatosService {
  
  constructor() {}
  async crearDocumento(coleccion: string, datos: any) {
    try {
      const docRef = await addDoc(collection(db, coleccion), datos);
      console.log("Documento agregado con ID: ", docRef.id);
    } catch (e) {
      console.error("Error al agregar documento: ", e);
    }
  }
  

  async eliminarDocumento(coleccion: string, id: string): Promise<void> {
    const docRef = doc(db, `${coleccion}/${id}`);
    await deleteDoc(docRef);
  }

  async leerColeccion(coleccion: string): Promise<any[]> {
    const querySnapshot = await getDocs(collection(db, coleccion));
    const documentos: any[] = [];
    querySnapshot.forEach((doc) => {
      documentos.push({ id: doc.id, ...doc.data() });
    });
    return documentos;
  }

  async modificarDocumento(coleccion: string, id: string, data: any): Promise<void> {
    const docRef = doc(db, `${coleccion}/${id}`);
    await updateDoc(docRef, data);
  }

  async buscarUsuario(coleccion: string, username: string, password: string): Promise<any | null> {
    const usuariosRef = collection(db, coleccion);
    const q = query(usuariosRef, where('username', '==', username), where('password', '==', password));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }

    // Retornar el primer documento encontrado (suponiendo que username y password son únicos)
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  }
}
