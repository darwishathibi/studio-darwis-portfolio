import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'frameworks',
      title: 'Frameworks',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url'
    }),
  ],
})