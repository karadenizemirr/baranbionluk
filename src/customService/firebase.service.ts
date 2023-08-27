import { Injectable } from "@nestjs/common";
import { initializeApp } from "firebase/app";

@Injectable()
export class FirebaseService {
    constructor() {}

    async connect_firebase(){
        const firebase_config = {
            apiKey: "AIzaSyCrgmR5Qo-6PJrt_R4IFYb9P7NKKI9Op8Y",
            authDomain: "baranacikgoz-15635.firebaseapp.com",
            projectId: "baranacikgoz-15635",
            storageBucket: "baranacikgoz-15635.appspot.com",
            messagingSenderId: "806675329310",
            appId: "1:806675329310:web:8287ae2eb2050deb90990f",
            measurementId: "G-500EX57SN9"
        }

        const app = initializeApp(firebase_config);

        return app
    }
}