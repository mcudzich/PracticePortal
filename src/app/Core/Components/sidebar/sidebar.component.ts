import { Component, OnInit } from '@angular/core';
import { NavbarDataService } from '../../Services/navbar-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activePanel: string;
  compressed: boolean;

  constructor( private navbarData: NavbarDataService ) { }

  ngOnInit() {
      this.navbarData.currentNavbarData.subscribe(data => this.compressed = data.sidebarCollapsed)
  }

}
