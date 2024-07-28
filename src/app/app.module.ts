import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BaseUiComponent } from './pages/base-ui/base-ui.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserUpdateComponent } from './pages/users/user-update/user-update.component';
import { TesteComponent } from './pages/teste/teste.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BaseUiComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    TesteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
