import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginNavbarComponent } from './Components/login-navbar/login-navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CrumbTrailComponent } from './Components/crumb-trail/crumb-trail.component';
import { NavbarDataService } from './Services/navbar-data.service';

@NgModule({
  declarations: [NavbarComponent, LoginNavbarComponent, FooterComponent, SidebarComponent, CrumbTrailComponent],
  imports: [
    CommonModule
  ],
  providers: [
    NavbarDataService
  ],
  exports: [
      SidebarComponent,
      NavbarComponent
  ]
})
export class CoreModule { }
