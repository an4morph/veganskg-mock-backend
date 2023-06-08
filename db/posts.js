import { faker } from '@faker-js/faker'

const genPost = () => ({
  id: faker.string.nanoid(),
  createdAt: faker.date.recent(),
  author: {
    publicId: faker.string.nanoid(),
    displayedName: faker.person.fullName(),
    avatar: faker.image.avatar(),
    about: faker.datatype.boolean() ? null : faker.lorem.sentence(8),
  },
  title: faker.lorem.sentence({ max: 8, min: 1 }),
  shortDesc: faker.lorem.sentence(25),
  
  mainPhoto: faker.image.urlLoremFlickr({ category: 'nature' }),
  mainText: faker.lorem.paragraphs(8),
  keywords: Array(faker.number.int({ max: 10, min: 0 })).fill(0).map(() => faker.lorem.word())
})

export default Array(15).fill(0).map(genPost)