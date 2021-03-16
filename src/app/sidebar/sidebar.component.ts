import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/document-management', title: 'Documents', icon: 'nc-paper', class: ''},
    { path: '/change-pass', title: 'Change Password', icon: 'nc-lock-circle-open', class: ''}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    onLogout = () => {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    constructor(
        private router: Router
    ) {
    }
}
