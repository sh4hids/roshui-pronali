const { existsSync, mkdirSync, writeFileSync } = require('fs');
const { prompt } = require('inquirer');
const { stringify } = require('json-to-pretty-yaml');
const { format } = require('prettier');
const { bold } = require('chalk');
const log = console.log;
const error = bold.red;
const success = bold.green.inverse;

const authorData = require('../data/authors.js');
const categoryData = require('../data/categories.js');
const authorList = authorData.authors.map((author) => author.id);

(async () => {
  const args = process.argv;
  if (args.length < 3) {
    const { title, description, tags, author, category } = await prompt([
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
        choices: categoryData.categories,
      },
      {
        type: 'list',
        name: 'author',
        message: 'Choose an author:',
        choices: authorList,
      },
    ]);

    const slug = title
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    const createdOn = new Date().toISOString();
    const blogPostFolder = `./content/recipes/${slug}`;
    const tagsList = tags.split(',').map((t) => t.trim());

    if (!existsSync(blogPostFolder)) {
      mkdirSync(blogPostFolder, {
        recursive: true,
      });
    }

    const yaml = stringify({
      slug,
      title,
      author,
      category,
      date,
      isPublished: false,
      isFeatured: false,
      tags: tagsList,
      meta: {
        title,
        description,
        image: '',
      },
    });

    const markdown = _format(`---\n${yaml}\n---\n`, {
      parser: 'markdown',
      singleQuote: true,
    });

    writeFileSync(`${blogPostFolder}/index.md`, markdown);

    log(success(`Post ${title} was created successfully`));
  } else {
    log(error("Please don't provide any arguments to the new post generator"));
  }
})();
