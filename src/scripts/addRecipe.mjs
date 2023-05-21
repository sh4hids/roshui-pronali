import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import json2Yaml from 'json-to-pretty-yaml';
import prettier from 'prettier';

import { authors } from '../data/authors.mjs';
import { categories } from '../data/categories.mjs';

const log = console.log;
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;
const authorIds = authors.map((author) => author.id);

(async () => {
  const args = process.argv;
  if (args.length < 3) {
    const { title, description, tags, author, category } =
      await inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Title:',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Short description:',
        },
        {
          type: 'input',
          name: 'tags',
          message: 'Tags (comma separated):',
        },
        {
          type: 'list',
          name: 'category',
          message: 'Category:',
          choices: categories,
        },
        {
          type: 'list',
          name: 'author',
          message: 'Choose an author:',
          choices: authorIds,
        },
      ]);

    const slug = title
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    const createdAt = new Date().toISOString();
    const blogPostFolder = `./src/content/recipes`;
    const tagList = tags.split(',').map((t) => t.trim());

    if (!fs.existsSync(blogPostFolder)) {
      fs.mkdirSync(blogPostFolder, {
        recursive: true,
      });
    }

    const yaml = json2Yaml.stringify({
      title,
      author,
      slug,
      category,
      tags: tagList,
      isPublished: false,
      isFeatured: false,
      createdAt,
      meta: {
        title,
        description,
        image: '',
      },
    });

    const markdown = prettier.format(`---\n${yaml}\n---\n`, {
      parser: 'markdown',
      singleQuote: true,
    });

    fs.writeFileSync(`${blogPostFolder}/${slug}.md`, markdown);

    log(success(`Recipe ${title} was created successfully`));
  } else {
    log(error("Please don't provide any arguments to the new post generator"));
  }
})();
