import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';

// Types of product properies
export interface Product {
  description: string;
  featuredMedia: {
    src: string;
  };
  price: string;
  name: string;
  title: string;
  media: {
    src: string;
    alt: string;
    id: string;
  }[];
  colour: string;
  sizeInStock: string;
  type: string;
  labels: string;
  objectID: string;
}

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  // Hold list of products, will never be null
  products!: Product[];

  // Labels as an array removes dashes and joins back together as string
  replaceDashesWithSpaces(labels: string[]): string {
    return labels.map(label => label.replace(/-/g, ' ')).join(' ');
  }

  // Use method to handle the error event, add display none to missing images
  handleBrokenImg(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  // Allow HTTP reqeusts, routes and modals
  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) { }

  // Get data
  ngOnInit() {
    this.fetchProducts();
  }

  // Method send HTTP request, map hits property to array of products
  fetchProducts() {
    const url = 'https://raw.githubusercontent.com/Claaireey12/GSINFO/main/gsinfo.json?token=GHSAT0AAAAAACDTBSXXZ6PJZP5W7CDDZNT6ZD745XA';
    this.http.get<any>(url).subscribe(
      (response) => {
        this.products = response.hits.map((hit: any) => {
          return {
            name: hit.name,
            description: hit.description,
            featuredMedia: hit.featuredMedia,
            price: hit.price,
            title: hit.title,
            media: hit.media,
            src: hit.src,
            id: hit.product_id,
            colour: hit.colour,
            sizeInStock: hit.sizeInStock,
            type: hit.type,
            labels: hit.labels,
            objectID: hit.objectID,
          };
        });
      },
      (error) => {
        console.log('Error fetching products:', error);
      }
    );
  }

  // Open large modal of specific product
  openModal(product: Product) {
    const modalRef = this.modalService.open(ProductModalComponent, { size: 'lg' });
    modalRef.componentInstance.product = product;
  }
}
