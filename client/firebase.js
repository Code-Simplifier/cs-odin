import { initializeApp } from "firebase/app"
import { useToast } from "@chakra-ui/react"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MSG_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
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