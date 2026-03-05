import { getCollection } from 'astro:content';

export const getAllSpiceMixes = async () => {
    return await getCollection('spiceMixes', ({ data }) => {
        return import.meta.env.PROD ? data.isPublished !== false : true;
    });
};
