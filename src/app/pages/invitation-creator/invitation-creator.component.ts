import {Component, OnInit} from '@angular/core';
import {content, GENDER_TYPE} from './htmlContent';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'
import * as htmlToImage from 'html-to-image';
import {Moment, unix} from 'moment';

@Component({
    selector: 'app-invitation-creator',
    templateUrl: './invitation-creator.component.html',
    styleUrls: ['./invitation-creator.component.css'],
})
export class InvitationCreatorComponent implements OnInit {

    content: SafeHtml = null;

    exportAsPDF(div_id) {
        const data = document.getElementById(div_id);
        htmlToImage.toPng(data, {pixelRatio: 1, width: 1000, quality: 1}).then(contentDataURL => {
            const link = document.createElement('a');
            link.download = 'name';
            link.target = '_blank';
            link.href = contentDataURL;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // const img = document.createElement('img');
            // img.src = contentDataURL;
            // document.body.appendChild(img);
            // const pdf = new jsPDF('p', 'cm', 'a4'); // Generates PDF in portrait mode
            // pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 15.0);
            // pdf.save('Filename.pdf');
        });
    }

    constructor(private sanitizer: DomSanitizer) {
        this.content = sanitizer.bypassSecurityTrustHtml(content(
            {
                name: 'Nguyễn Hoàng Hiếu',
                position: 'Cán bộ kinh doanh',
                gender: GENDER_TYPE.MALE,
                ctsRepresent: ['Mr NHL', 'Mr DMD'], formOfExchange: 'Trao đổi gián tiếp', place: 'CTS',
                time: unix(10101010),
                attentionInfo: [ 'Mang theo CMTND để checkin tại lễ tân tòa nhà', 'Chỗ gửi xe phía sau tòa nhà', 'Giữ bình tĩnh'],
                supportPerson: 'SĐT: 0962.456.194 (Ms. My)'
            }
            )
        );
    }

    ngOnInit(): void {
    }

}
