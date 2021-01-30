import {Component, OnInit} from '@angular/core';
import {DocumentManagementService} from './document-management.service';

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.css']
})
export class DocumentManagementComponent implements OnInit {

  listDocument = this.documentManagementService.getAllDocuments();

  constructor(
      private documentManagementService: DocumentManagementService
  ) { }

  ngOnInit(): void {
  }

}
