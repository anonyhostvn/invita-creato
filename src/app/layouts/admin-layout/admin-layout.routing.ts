import {Routes} from '@angular/router';

import {InvitationCreatorComponent} from '../../pages/invitation-creator/invitation-creator.component';
import {DocumentManagementComponent} from '../../pages/document-management/document-management.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'invitation-creator', component: InvitationCreatorComponent },
    { path: 'document-management', component: DocumentManagementComponent }
];
