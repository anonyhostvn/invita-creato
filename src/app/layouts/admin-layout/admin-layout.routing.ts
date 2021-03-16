import {Routes} from '@angular/router';

import {InvitationCreatorComponent} from '../../pages/invitation-creator/invitation-creator.component';
import {DocumentManagementComponent} from '../../pages/document-management/document-management.component';
import {ChangePassComponent} from '../../pages/change-pass/change-pass.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'document-management', component: DocumentManagementComponent },
    { path: 'document-management/:id', component: InvitationCreatorComponent},
    { path: 'change-pass', component: ChangePassComponent}
];
