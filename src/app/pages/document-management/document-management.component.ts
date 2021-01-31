import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../services/document.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.css']
})
export class DocumentManagementComponent implements OnInit {

  listDocument: Observable<any[]> = this.documentService.getAllDocuments();

  constructor(
      private documentService: DocumentService
  ) { }

  ngOnInit(): void {
  }

}
