export default {
  name: 'mediaCoverage',
  title: 'Media Coverage',
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
      name: 'platform',
      title: 'Platform',
      type: 'string',
      initialValue: 'YouTube'
    },
    {
      name: 'url',
      title: 'Video URL',
      type: 'url'
    },
    {
      name: 'dateEn',
      title: 'Date (English)',
      type: 'string'
    },
    {
      name: 'dateNe',
      title: 'Date (Nepali)',
      type: 'string'
    },
    {
      name: 'customThumbnail',
      title: 'Custom Thumbnail (Optional)',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
