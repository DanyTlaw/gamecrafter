import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { CollectionComponent} from './collection/collection.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'account', component: AccountComponent },
    { path: 'collection', component: CollectionComponent}
];


export const dashRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);