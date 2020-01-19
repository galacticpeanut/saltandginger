import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RfpComponent } from './rfp/rfp.component';


const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'menu', component: MenuComponent},
 { path: 'rfp', component: RfpComponent},
 { path: 'about', component: AboutComponent},
 { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
