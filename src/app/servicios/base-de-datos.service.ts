import { Injectable } from '@angular/core';

import { ClUsuario } from '../model/ClUsuario'

import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
@Injectable({
  providedIn: 'root'
})

export class BaseDeDatosService {
  sesion : boolean = false;
  sesionUser: ClUsuario = {
    id: '',
    nombre: '',
    username: '',
    correo: '',
    password: '',
    rol: 0
  };
  
  
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
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  }
}
