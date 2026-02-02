export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The title of the website (SEO)'
    },
    {
      name: 'joinButtonLink',
      title: 'Join Button Link',
      type: 'url',
      description: 'The URL for the volunteer sign-up form (Google Forms, etc.)'
    },
    {
      name: 'donationLink',
      title: 'Donation Link',
      type: 'url',
      description: 'The URL for the donation page (eSewa, Khalti, etc.)'
    },
    {
      name: 'newsBlacklist',
      title: 'News Filter Blacklist',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords to filter out from the news feed'
    },
    {
      name: 'constituencyNameEn',
      title: 'Constituency Name (English)',
      type: 'string',
      initialValue: 'Kathmandu'
    },
    {
      name: 'constituencyNameNe',
      title: 'Constituency Name (Nepali)',
      type: 'string',
      initialValue: 'काठमाडौँ'
    },
    {
      name: 'constituencyNumberEn',
      title: 'Constituency Number (English)',
      type: 'string',
      initialValue: '05'
    },
    {
      name: 'constituencyNumberNe',
      title: 'Constituency Number (Nepali)',
      type: 'string',
      initialValue: '०५'
    },
    {
      name: 'constituencyDescEn',
      title: 'Constituency Description (English)',
      type: 'text'
    },
    {
      name: 'constituencyDescNe',
      title: 'Constituency Description (Nepali)',
      type: 'text'
    },
    {
      name: 'heroHeadlineEn',
      title: 'Hero Headline (English)',
      type: 'string',
      group: 'hero'
    },
    {
      name: 'heroHeadlineNe',
      title: 'Hero Headline (Nepali)',
      type: 'string',
      group: 'hero'
    },
    {
      name: 'heroSloganEn',
      title: 'Hero Slogan (English)',
      type: 'string',
      group: 'hero'
    },
    {
      name: 'heroSloganNe',
      title: 'Hero Slogan (Nepali)',
      type: 'string',
      group: 'hero'
    },
    {
      name: 'alignmentPartyLeaderEn',
      title: 'Party Leader Name (English)',
      type: 'string',
      group: 'alignment'
    },
    {
      name: 'alignmentPartyLeaderNe',
      title: 'Party Leader Name (Nepali)',
      type: 'string',
      group: 'alignment'
    },
    {
      name: 'alignmentPmCandidateEn',
      title: 'PM Candidate Name (English)',
      type: 'string',
      group: 'alignment'
    },
    {
      name: 'alignmentPmCandidateNe',
      title: 'PM Candidate Name (Nepali)',
      type: 'string',
      group: 'alignment'
    },
    {
      name: 'commitmentLetterNe',
      title: 'Full Commitment Letter (Nepali)',
      type: 'text',
      description: 'The full text of the commitment letter for the modal'
    },
    {
      name: 'manifestoTitleEn',
      title: 'Manifesto Title (English)',
      type: 'string',
      group: 'manifesto'
    },
    {
      name: 'manifestoTitleNe',
      title: 'Manifesto Title (Nepali)',
      type: 'string',
      group: 'manifesto'
    },
    {
      name: 'manifestoSubEn',
      title: 'Manifesto Subtitle (English)',
      type: 'string',
      group: 'manifesto'
    },
    {
      name: 'manifestoSubNe',
      title: 'Manifesto Subtitle (Nepali)',
      type: 'string',
      group: 'manifesto'
    },
    {
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'social'
    },
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
      group: 'social'
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'social'
    },
    {
      name: 'tiktokUrl',
      title: 'TikTok URL',
      type: 'url',
      group: 'social'
    }
  ],
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'manifesto', title: 'Manifesto Section' },
    { name: 'alignment', title: 'Alignment Section' },
    { name: 'social', title: 'Social Media' }
  ]
}
