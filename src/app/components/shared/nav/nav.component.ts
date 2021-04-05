import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http'

import { Product } from '../../../models/product.model'
import { ProductStoreService } from '../../../services/product-store.service'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'appBootstrap';

  closeResult?: string;

  //productName: String | undefined;


  //Assiging models to grab data
  product: Product = new Product();
  submitted = false;

  constructor(private modalService: NgbModal, private http: HttpClient, private productService: ProductStoreService) { }

  ngOnInit(): void {

  }

  addProduct(): void {
    this.productService.create(this.product).then(() => {
      console.log('created');
      this.submitted = true;
      this.modalService.dismissAll();
    });
  }
  //Tested with http --worked fine
  /**saveData() {
    let url = "http://httpbin.org/post"

    this.http.post(url, {
      name: this.productName
    }).toPromise().then((data: any) => {
      console.log(data);
    })
  }**/

  //Posting to realtime database in fb

  /* addProduct(postData: { title: string; content: string }) {
     console.log(postData)
     this.http.post(' https://e-commerce-angular11-default-rtdb.firebaseio.com/products.json', postData).subscribe(responseData => {
       console.log(responseData);
     })
     this.modalService.dismissAll();
 
   } */



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
