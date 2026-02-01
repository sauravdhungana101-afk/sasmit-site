export default {
  name: 'profileCard',
  title: 'Who is Sasmit Cards',
  type: 'document',
  fields: [
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string'
    },
    {
      name: 'titleNe',
      title: 'Title (Nepali)',
      type: 'string'
    },
    {
      name: 'descEn',
      title: 'Description (English)',
      type: 'text'
    },
    {
      name: 'descNe',
      title: 'Description (Nepali)',
      type: 'text'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ]
}
