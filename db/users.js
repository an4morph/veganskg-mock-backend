import { faker } from '@faker-js/faker'

const id = faker.string.nanoid()
export const user = {
  id,
  role: 'user',
  publicId: id,
  username: faker.lorem.word(),
  displayedName: faker.person.fullName(),
  avatar: faker.image.avatar(),
  about: faker.lorem.sentence(10),
  diet: faker.helpers.arrayElement(['vegan', 'vegeterian', 'interested', 'unknown']),
  hideDietType: faker.datatype.boolean(),
  birthday: faker.date.past({ years: 60 })
}