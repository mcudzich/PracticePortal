import { Component, OnInit } from '@angular/core';
import { NavbarDataService } from '../../Services/navbar-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  collapsedSidebar: boolean;

  constructor(private navbarData : NavbarDataService) { }

  ngOnInit() {
      this.navbarData.currentNavbarData.subscribe(data => this.collapsedSidebar = data.sidebarCollapsed);
  }

  toggleSidebarCollapse() : void {
      this.navbarData.collapseSidebar(!this.collapsedSidebar);
  }

}
