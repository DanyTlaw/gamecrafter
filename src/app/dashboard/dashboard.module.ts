import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from '../auth/auth-guard.service';

import { DashboardComponent } from './dashboard.component';
import { dashRouting } from './dashboard.routing';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileService } from './profile/profileService';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  imports: [
    dashRouting,
    FormsModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    AccountComponent,
    ProfileComponent,
    SettingsComponent,
    CollectionComponent
  ],
  providers: [ProfileService]
})
export class DashboardModule { }
