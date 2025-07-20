import { defineType, defineField } from 'sanity';
import { TagIcon } from '@sanity/icons';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'descriptionPoints',
      title: 'Product Features (Bullet List)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    
    defineField({
      name: 'conditionRating',
  title: 'Condition Rating (e.g. 9.3)',
  type: 'number', // change from 'string' to 'number'
  validation: (Rule) => Rule.min(0).max(10),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Wheels', value: 'wheels' },
          { title: 'Seats', value: 'seats' },
          { title: 'Steering', value: 'steering' },
          { title: 'Rims', value: 'rims' },
          { title: 'Others', value: 'others' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
