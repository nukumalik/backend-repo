import {db} from '@/config'
import {Timestamp} from 'firebase-admin/firestore'

export class UserRepository {
  static async findAll() {
    const query = await db.collection('USERS').get()
    const users = query.docs.map(doc => ({
      id: doc.id,
      name: doc.get('name'),
      totalAverageWeightRatings: doc.get('totalAverageWeightRatings'),
      numberOfRents: doc.get('numberOfRents'),
      recentlyActive: doc.get('recentlyActive')?.seconds,
      createdAt: doc.createTime?.seconds,
      updatedAt: doc.updateTime?.seconds
    }))
    return users
  }

  static async findById(id: string) {
    const doc = await db.collection('USERS').doc(id).get()
    if (!doc.get('name')) throw new Error('User not found')

    const user = {
      id: doc.id,
      name: doc.get('name'),
      totalAverageWeightRatings: doc.get('totalAverageWeightRatings'),
      numberOfRents: doc.get('numberOfRents'),
      recentlyActive: doc.get('recentlyActive')?.seconds,
      createdAt: doc.createTime?.seconds,
      updatedAt: doc.updateTime?.seconds
    }
    return user
  }

  static async create(
    name: string,
    totalAverageWeightRatings: number,
    numberOfRents: number,
    recentlyActive: number
  ) {
    await db.collection('USERS').add({
      name,
      totalAverageWeightRatings,
      numberOfRents,
      recentlyActive
    })
  }

  static async update(
    id: string,
    data: Record<string, string | number | Timestamp>
  ) {
    await db.collection('USERS').doc(id).update(data)
  }

  static async remove(id: string) {
    await db.collection('USERS').doc(id).delete()
  }
}
