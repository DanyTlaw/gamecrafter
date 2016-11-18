import { Injectable, EventEmitter } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {
    // Public now but should be private and have get and setters
    public isAuthenticated = false;
    public email = "";
    public uid = "";
    //EventEmitter for Navigation and other things that have to change if someone is logged in
    isAuth: EventEmitter<boolean> = new EventEmitter();

    constructor(private _af: AngularFire){}

    login(formData): firebase.Promise<FirebaseAuthState>{
        return this._af.auth.login({
            email: formData.value.email,
            password: formData.value.password
        }).then((authState) => {
            console.log("Sucess logged in");   
            this.isAuthenticated = true;
            this.email = authState.auth.email;
            this.uid = authState.auth.uid;
            this.isAuth.emit(true);
            // Creates a Profil if not one is alreay created
            
            return authState;
            
        }).catch((err) => {
            console.log(err);
        });
    }

    logout() {
        this.isAuthenticated = false;
        this.isAuth.emit(false);
        this.email = '';
        this._af.auth.logout();
    }

    signup(formData): firebase.Promise<FirebaseAuthState>{
        return this._af.auth.createUser({
            email: formData.value.email,
            password: formData.value.password
        }).then(
        (success) => {
            console.log(success);
            this.createUser(formData, success);   
      }).catch(
        (err) => {
            console.log(err);
      })
    }

    // Creates a User entry for the signup Account
    createUser(formData, authUser){
        console.log(authUser);
         // Reference to the profile of the user
        var profilesRef = this._af.database.object('profiles/');
        //Create a new dummy profile
        // var profilLocation = profilesRef.$ref.child(this._auth.uid);
        // var newProfile = profilLocation.push();
        profilesRef.$ref.child(authUser.auth.uid).set({
            user_id: authUser.auth.uid,
            email: formData.value.email,
            password: formData.value.password,
            username: null,
            name: null,
            age: null,
            country: null,
            city: null
        });           
    }
 
}