import { designServices, homeServiceCards } from './site';

export const showcaseServices = designServices.map((service, index) => ({
  ...service,
  image: homeServiceCards[index]?.image,
}));

export const services = showcaseServices;

export const serviceCategories = [
  {
    id: 'all-services',
    title: 'Our Services',
    description: 'Premium interior solutions for stylish and comfortable living.',
    image: showcaseServices[0]?.image,
    items: showcaseServices,
  },
];
