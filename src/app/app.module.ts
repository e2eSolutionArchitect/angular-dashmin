import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AngularMaterialModule } from './angular-material.modules';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HorizontalComponent } from './components/layout/layouts/horizontal/horizontal.component';
import { VerticalComponent } from './components/layout/layouts/vertical/vertical.component';
import { UserComponent } from './components/common/user/user.component';
import { EmptyComponent } from './components/layout/layouts/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    HomeComponent,
    LayoutComponent,
    HorizontalComponent,
    VerticalComponent,
    UserComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
