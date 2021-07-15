import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatchesListComponent } from './patches-list/patches-list.component';
import { SinglePatchComponent } from './single-patch/single-patch.component';
import { PatchesService } from './patches.service';
import { UsersService } from './users.service';
import { AddPatchComponent } from './add-patch/add-patch.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, Fusion)

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PatchesListComponent,
    SinglePatchComponent,
    AddPatchComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FusionChartsModule,
    FormsModule,
    
    RouterModule.forRoot([{
      path: "",
      component: WelcomeComponent

    },
    {
      path: "patches",
      component: PatchesListComponent

    },
    {
      path: "patches/:patchId",
      component: SinglePatchComponent

    },
    {
      path: "dashboard",
      component: DashboardComponent
    },
    {
      path: "patch/add",
      component: AddPatchComponent
    },
    {
      path: "register",
      component: RegisterComponent
    },
    {
      path: "profile",
      component: ProfileComponent
    },
  ])
  ],
  providers: [
    PatchesService,
    UsersService 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
