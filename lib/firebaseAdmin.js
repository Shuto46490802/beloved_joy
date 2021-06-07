import firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {

    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        }),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });

};

export default firebaseAdmin;