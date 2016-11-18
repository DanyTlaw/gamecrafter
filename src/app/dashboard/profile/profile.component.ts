import { Component, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProfileService } from './profileService';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  providers: [ProfileService]
})

export class ProfileComponent { 
    
    profiles: FirebaseListObservable<any>;
    profile: any;
    
    editMode: boolean;
    constructor(private _af: AngularFire, private _ps: ProfileService) {
        
        // Edit Mode is always false when component gets loaded
        this.editMode = false;

        this.getProfile();
    }
    
    ngOnInit() {
      // Get the Profil of the user
      
    }

    getProfile(){
      // Subscribe to the observable to get object
      this._ps.getProfile().subscribe(res =>{
            this.profile = res;
        })
      console.log(this.profile);
    }

    setEditMode(){
      if(this.editMode){
        this.editMode = false;
      }else{
        this.editMode = true;
      }
    }

    editProfile(formData: any){
      console.log("You submitted: ", formData);
      // If the Edit is succesful it returns false to the edit mode 
      this.editMode = this._ps.editProfile(formData);
    }   
}