import {Component, OnInit} from '@angular/core';
import {content, FilledInformation, GENDER_TYPE} from './htmlContent';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'
import * as htmlToImage from 'html-to-image';
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'app-invitation-creator',
    templateUrl: './invitation-creator.component.html',
    styleUrls: ['./invitation-creator.component.css'],
})
export class InvitationCreatorComponent implements OnInit {

    content: SafeHtml = null;

    informationForm = this.formBuilder.group({
        name: '',
        position: '',
        gender: GENDER_TYPE.MALE,
        ctsRepresent: '',
        formOfExchange: '',
        place: '',
        time: '',
        attentionInfo: '',
        supportPerson: ''
    });

    onSubmit(): void {
        const {value} = this.informationForm;
        this.content = this.sanitizer.bypassSecurityTrustHtml(content({
            ...value,
            ctsRepresent: value.ctsRepresent.split(','),
            attentionInfo: value.attentionInfo.split(',')
        }));
    }

    exportAsPDF(div_id) {
        const data = document.getElementById(div_id);
        htmlToImage.toPng(data, {pixelRatio: 1, quality: 1}).then(contentDataURL => {
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

    constructor(
        private sanitizer: DomSanitizer,
        private formBuilder: FormBuilder
    ) {
        this.content = sanitizer.bypassSecurityTrustHtml(content(
            {
                name: 'Nguyễn Hoàng Hiếu',
                position: 'Cán bộ kinh doanh',
                gender: GENDER_TYPE.MALE,
                ctsRepresent: ['Mr NHL', 'Mr DMD'],
                formOfExchange: 'Trao đổi gián tiếp',
                place: 'CTS',
                time: '4:50 AM, thứ ba - ngày 28/04/1970',
                attentionInfo: [ 'Mang theo CMTND để checkin tại lễ tân tòa nhà', 'Chỗ gửi xe phía sau tòa nhà', 'Giữ bình tĩnh'],
                supportPerson: 'SĐT: 0962.456.194 (Ms. My)'
            }
            )
        );
    }

    ngOnInit(): void {
    }

}
