import { faker } from '@faker-js/faker'

const genPost = () => ({
  id: faker.string.nanoid(),
  author: {
    name: faker.person.fullName(),
    avatar: faker.image.avatar()
  },
  title: faker.lorem.sentence({ max: 8, min: 1 }),
  shortDesc: faker.lorem.sentence(25)
})

export default Array(15).fill(0).map(genPost)