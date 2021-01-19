import { Component, OnInit } from '@angular/core';
import {content} from './htmlContent';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-invitation-creator',
  templateUrl: './invitation-creator.component.html',
  styleUrls: ['./invitation-creator.component.css'],
})
export class InvitationCreatorComponent implements OnInit {

  content: SafeHtml = null;

  exportAsPDF(div_id) {
    const data = document.getElementById(div_id);
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png');
      // @ts-ignore
      const pdf = new jsPDF('l', 'cm', 'a4'); // Generates PDF in landscape mode
      const link = document.createElement('a');
      link.download = 'name';
      link.target = 'blank';
      link.href = contentDataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // const pdf = new jspdf('p', 'cm', 'a4'); // Generates PDF in portrait mode
      // pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 15.0);
      // pdf.save('Filename.pdf');
    });
  }

  constructor(private sanitizer: DomSanitizer) {
    this.content = sanitizer.bypassSecurityTrustHtml(content);
  }

  ngOnInit(): void {
  }

}
