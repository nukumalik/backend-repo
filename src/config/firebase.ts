import admin from 'firebase-admin'
import {readFileSync} from 'fs'
import {join} from 'path'

const serviceAccountPath = join(__dirname, '../../firebase-key.json')

const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf-8'))

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore()

export {db}
