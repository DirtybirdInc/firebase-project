'use strict';


function MyNavBar(activePage) {

    var navItems = document.getElementById("nav_items").getElementsByClassName("nav-item");
    for (var i = 0; i < navItems.length; i++) {
        if (i == activePage) {
            navItems[i].classList.add("active");
        } else {
            navItems[i].classList.remove("active");
        }
    }

    this.profilePicSmall = document.getElementById("profile_pic_small");
    this.profilePicBig = document.getElementById("profile_pic_big");
    this.profileEmail = document.getElementById("profile_email");
    this.profileDisplayName = document.getElementById("profile_display_name");

    this.signInButton = document.getElementById("sign_in_button");
    this.signInButton.onclick = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    this.signOutButton = document.getElementById("sign_out_button");
    this.signOutButton.onclick = function () {
        firebase.auth().signOut();
    };

    this.onAuthStateChanged = function (user) {
        if (user) {
            // set src and make visible
            this.profilePicSmall.setAttribute("src", user.photoURL);
            this.profilePicSmall.style.display = '';
            // set profile dropdown content
            this.profilePicBig.setAttribute("src", user.photoURL);
            this.profileDisplayName.innerText = user.displayName;
            this.profileEmail.innerText = user.email;
            // hide the sign in button
            this.signInButton.style.display = 'none';
        } else {
            // set src to null and hide 
            this.profilePicSmall.setAttribute("src", '');
            this.profilePicSmall.style.display = 'none';
            // show the sign in button
            this.signInButton.style.display = '';
        }
    }

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
}
