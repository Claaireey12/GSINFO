import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-modal',
  styleUrls: ['./product-modal.component.scss'],
  templateUrl: './product-modal.component.html',
})
export class ProductModalComponent {
 // Pass product info from parent component
  @Input() product: any;

  // Array of labels replace dashes with space and join into one string 
  removeDashes(labels: string[]): string {
    return labels.map(label => label.replace(/-/g, ' ')).join(' ');
  }

  // Modal
  constructor(public activeModal: NgbActiveModal) {}
}
