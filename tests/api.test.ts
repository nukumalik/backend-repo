import 'dotenv/config'
import req from 'supertest'
import app from '../src/core/app'
import {getRandomInRange, getRandomName} from './utils'

const ACCESS_TOKEN = process.env.ACCESS_TOKEN || ''

test('Should return not found error for unregistered route', async () => {
  const res = await req(app).get('/dummy-path')
  expect(res.status).toBe(404)
  const {message} = JSON.parse(res.text)
  expect(message).toBe('Not Found')
})

test('Should return unauthorized when accessing private api', async () => {
  const res = await req(app).get('/api/v1/users')
  expect(res.status).toBe(401)
  const {message} = JSON.parse(res.text)
  expect(message).toBe("You're not authenticated!")
})

test('Should create new user', async () => {
  const res = await req(app)
    .post('/api/v1/users')
    .set('Authorization', ACCESS_TOKEN)
    .send({
      name: getRandomName(),
      totalAverageWeightRatings: getRandomInRange(4.0, 5.0, 0.1),
      numberOfRents: getRandomInRange(20, 30, 1, 0),
      recentlyActive: new Date().getTime()
    })
  expect(res.status).toBe(201)
  const {message} = JSON.parse(res.text)
  expect(message).toBe('success')
})

test('Should return user list', async () => {
  const res = await req(app)
    .get('/api/v1/users')
    .set('Authorization', ACCESS_TOKEN)
  expect(res.status).toBe(200)
  const {message, data} = JSON.parse(res.text)
  expect(message).toBe('success')

  if (data.length) {
    const user = data[0]
    expect(user.name).toBeDefined()
  }
})

test('Should return user detail', async () => {
  const res = await req(app)
    .get('/api/v1/users')
    .set('Authorization', ACCESS_TOKEN)
  expect(res.status).toBe(200)
  const {message, data} = JSON.parse(res.text)
  expect(message).toBe('success')

  if (data.length) {
    const res = await req(app)
      .get(`/api/v1/users/${data[0].id}`)
      .set('Authorization', ACCESS_TOKEN)
    expect(res.status).toBe(200)
    const json = JSON.parse(res.text)
    expect(json.message).toBe('success')
    expect(json.data.name).toBe(data[0].name)
  }
})

test('Should update user', async () => {
  const res = await req(app)
    .get('/api/v1/users')
    .set('Authorization', ACCESS_TOKEN)
  expect(res.status).toBe(200)
  const {message, data} = JSON.parse(res.text)
  expect(message).toBe('success')

  if (data.length) {
    const res = await req(app)
      .put(`/api/v1/users/${data[0].id}`)
      .set('Authorization', ACCESS_TOKEN)
      .send({
        name: getRandomName(),
        totalAverageWeightRatings: getRandomInRange(4.0, 5.0, 0.1)
      })
    expect(res.status).toBe(200)
    const {message} = JSON.parse(res.text)
    expect(message).toBe('success')
  }
})

test('Should delete user', async () => {
  const res = await req(app)
    .get('/api/v1/users')
    .set('Authorization', ACCESS_TOKEN)
  expect(res.status).toBe(200)
  const {message, data} = JSON.parse(res.text)
  expect(message).toBe('success')

  if (data.length) {
    const res = await req(app)
      .delete(`/api/v1/users/${data[0].id}`)
      .set('Authorization', ACCESS_TOKEN)
    expect(res.status).toBe(200)
    const {message} = JSON.parse(res.text)
    expect(message).toBe('success')
  }
})
