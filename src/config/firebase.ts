import admin from 'firebase-admin'
import {readFileSync} from 'fs'
import {join} from 'path'

const keyPath =
  process.env.NODE_ENV === 'production'
    ? '../firebase-key.json'
    : '../../firebase-key.json'
const serviceAccountPath = join(__dirname, keyPath)

const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf-8'))

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore()

export {db}
