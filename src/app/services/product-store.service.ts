import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  private databasePath = '/Products'
  ProductsRef: AngularFirestoreCollection<Product>;

  constructor(private db: AngularFirestore) {
    this.ProductsRef = db.collection(this.databasePath);
  }

  getAll(): AngularFirestoreCollection<Product> {
    return this.ProductsRef;
  }

  create(product: Product): any {
    return this.ProductsRef.add({ ...product });
  }

  delete(id: string): Promise<void> {
    return this.ProductsRef.doc(id).delete();
  }
}


