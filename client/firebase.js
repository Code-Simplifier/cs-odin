import { initializeApp } from "firebase/app"
import { useToast } from "@chakra-ui/react"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyByZSh2TWsbeV7h0EGOBePWmPJzcFltYsw",
  authDomain: "cs-odin.firebaseapp.com",
  projectId: "cs-odin",
  storageBucket: "cs-odin.appspot.com",
  messagingSenderId: "1093561676474",
  appId: "1:1093561676474:web:7627abe1ac77ae216a4883",
  measurementId: "G-09QETL3C7W"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider).then((res) => {
        localStorage.setItem("name", res.user.displayName)
        localStorage.setItem("email", res.user.email)
        localStorage.setItem("photo", res.user.photoURL)
    }).catch((err) => {
        console.log(err.message)
    })
}

export const loginWithGithub = async () => {
    await signInWithPopup(auth, githubProvider).then((res) => {
        localStorage.setItem("name", res.user.displayName)
        localStorage.setItem("email", res.user.email)
        localStorage.setItem("photo", res.user.photoURL)
    }).catch((err) => {
        console.log(err.message)
    })
}

export const logout = async () => {
    await signOut(auth)
}