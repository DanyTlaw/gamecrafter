import { Profile } from './profile';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from  'angularfire2';
import { AuthService } from '../../auth/auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()

export class ProfileService{

    profileObservable: FirebaseObjectObservable<any>;
    
    constructor(private _af: AngularFire, private _auth: AuthService){
        // Creates the Observable of the specific profile
        this.profileObservable = this._af.database.object(`profiles/${this._auth.uid}`);
    }

    test(){
        console.log("test");
    }

    // Returns the current logged in profil
    getProfile(){
        return this.profileObservable;
    }

    // Updates the current logged in profil
    editProfile(formData): boolean{
        var updateSuccesful: boolean;
        this.profileObservable.update(formData).then(success => {
            // If its updated correctly we return false to say that the editmode is over
            updateSuccesful =  false;
        });
        return updateSuccesful;
    }



}