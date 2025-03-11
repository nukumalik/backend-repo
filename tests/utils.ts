export const getRandomInRange = (
  min: number,
  max: number,
  decimals: number,
  fixed = 1
): number => {
  const factor = Math.pow(10, decimals)
  const random =
    Math.round((Math.random() * (max - min) + min) * factor) / factor
  const result = Number(random.toFixed(fixed))
  return result
}

const firstNames = [
  'John',
  'Jane',
  'Michael',
  'Sarah',
  'David',
  'Emily',
  'Chris',
  'Anna'
]
const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis'
]

export const getRandomName = (): string => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  return `${firstName} ${lastName}`
}
