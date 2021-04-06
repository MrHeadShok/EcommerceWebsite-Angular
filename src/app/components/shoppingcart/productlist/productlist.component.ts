import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../../../models/product.model'
import { ProductStoreService } from '../../../services/product-store.service'

import { map } from 'rxjs/operators';
import { OnChanges } from '@angular/core';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnChanges {

  products?: Product[];
  currentProduct?: Product;
  index = -1;
  title = '';
  closeResult?: string;

  public filterPipe: any = ''


  @Input() product1?: Product;

  @Output() refreshList1: EventEmitter<any> = new EventEmitter();
  currentProducts: Product = {
    id: '',
    productName: '',
    productDescription: '',
    productPrice: 0,
    productRating: 0,
    productQuantity: 0,
  };

  message = '';



  constructor(private productService: ProductStoreService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentProducts = { ...this.product1 };
  }

  deleteProduct() {

    if (this.currentProducts.id) {
      this.productService.delete(this.currentProducts.id)
        .then(() => {
          this.refreshList1.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

  /* sort(event: any) {
     switch (event.target.value) {
       case "Low":
         {
           this.products = this.products.sort((low, high) => low.productPrice - high.productPrice);
           break;
         }
 
       case "High":
         {
           this.products = this.products.sort((low, high) => high.Price - low.Price);
           break;
         }
 
       case "Name":
         {
           this.products = this.products.sort(function (low, high) {
             if (low.Name < high.Name) {
               return -1;
             }
             else if (low.Name > high.Name) {
               return 1;
             }
             else {
               return 0;
             }
           })
           break;
         }
 
       default: {
         this.products = this.products.sort((low, high) => low.Price - high.Price);
         break;
       }
 
     }
     return this.products;
   }*/





  refreshList(): void {
    this.currentProduct = undefined;
    this.index = -1;
    this.retrieveProducts();


  }

  retrieveProducts(): void {
    this.productService.getAll().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
      ({
        id: c.payload.doc.id, ...c.payload.doc.data()
      })
      ))
    ).subscribe(data => {
      this.products = data;
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }




}
