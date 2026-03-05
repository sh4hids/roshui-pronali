import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import fs from 'fs';
import json2Yaml from 'json-to-pretty-yaml';
import { customAlphabet, urlAlphabet } from 'nanoid';
import prettier from 'prettier';

import { authors } from '../data/authors.mjs';
import { categories } from '../data/categories.mjs';

const nanoid = customAlphabet(urlAlphabet, 10);
const log = console.log;
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;
const authorOptions = authors.map((author) => ({
    name: `${author.fullName} (${author.id})`,
    value: author.id,
}));

(async () => {
    try {
        const title = await input({
            message: 'Title:',
            validate: (value) => {
                if (!value) return 'Title is required';
                return true;
            },
        });

        const description = await input({
            message: 'Description:',
            validate: (value) => {
                if (!value) return 'Description is required';
                return true;
            },
        });

        const serving = await input({
            message: 'Serving (in person):',
            validate: (value) => {
                if (!value) return 'Serving is required';
                return true;
            },
        });

        const preparation = await input({
            message: 'Preparation (in minutes):',
            validate: (value) => {
                if (!value) return 'Preparation time is required';
                return true;
            },
        });

        const cooking = await input({
            message: 'Cooking time (in minutes):',
            validate: (value) => {
                if (!value) return 'Cooking time is required';
                return true;
            },
        });

        const tags = await input({
            message: 'Tags (comma separated):',
            validate: (value) => {
                if (!value) return 'At least one tag is required';
                return true;
            },
        });

        const category = await select({
            message: 'Select a category:',
            choices: categories.map((category) => ({
                name: category,
                value: category,
            })),
        });

        const author = await select({
            message: 'Select an author:',
            choices: authorOptions,
        });

        const slug = `${title
            .normalize('NFC')
            .trim()
            // eslint-disable-next-line no-useless-escape
            .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
            .replace(/\s+/g, '-')
            .toLowerCase()}-${nanoid()}`;

        const createdAt = new Date().toISOString();
        const blogPostFolder = `./src/content/recipes`;
        const tagList = tags.split(',').map((t) => t.trim());

        if (!fs.existsSync(blogPostFolder)) {
            fs.mkdirSync(blogPostFolder, {
                recursive: true,
            });
        }

        const yaml = json2Yaml.stringify({
            title: title.trim(),
            author,
            category,
            tags: tagList,
            isPublished: false,
            isFeatured: false,
            ingredients: {
                main: ['item 1', 'item 2'],
            },
            serving: Number(serving),
            time: {
                preparation: Number(preparation),
                cooking: Number(cooking),
            },
            metaInfo: {
                description,
            },
            slug,
            createdAt,
            updatedAt: createdAt,
        });

        const markdown = await prettier.format(`---\n${yaml}\n---\n`, {
            parser: 'markdown',
            singleQuote: true,
            tabWidth: 4,
        });

        fs.writeFileSync(`${blogPostFolder}/${slug}.mdx`, markdown);

        log(success(`Recipe ${title} was created successfully`));
    } catch (err) {
        log(error('Something went wrong', err));
    }
})();
