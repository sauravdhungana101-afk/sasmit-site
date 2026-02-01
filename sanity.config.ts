import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Sasmit Website',

  projectId: 'f4zgi1j5',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
