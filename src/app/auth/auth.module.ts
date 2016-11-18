import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRouting } from './auth.routing';
import { LoginComponent, SignupComponent } from './auth.component';
import { AuthService } from './auth.service';

@NgModule({
    imports:[
        AuthRouting,
        FormsModule,
        CommonModule
    ],
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    providers: [AuthService]
})

export class AuthModule{}