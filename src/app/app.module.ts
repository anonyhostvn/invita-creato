import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { InvitationFillingComponent } from './components/invitation-filling/invitation-filling.component';
import { InvitationCreatorComponent } from './pages/invitation-creator/invitation-creator.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    InvitationFillingComponent,
    InvitationCreatorComponent
  ],
    imports: [
        RouterModule.forRoot(AppRoutes, {
            useHash: true
        }),
        SidebarModule,
        NavbarModule,
        ToastrModule.forRoot(),
        FooterModule,
        FixedPluginModule,
        BrowserModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
