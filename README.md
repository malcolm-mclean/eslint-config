# linting
Shared Typescript linting styles for all of my personal projects.

## Installation

1. Install dependencies:

```sh
yarn add -D malcolm-mclean/eslint-config
```

2. Update `.eslintrc.js`:

```js
{
	extends: '@malcolm-mclean'
}
```

## Contributing

1. Create a PR
2. Merge when approved
3. `git checkout master && git pull`
4. Update `CHANGELOG.md`
5. `git add CHANGELOG.md`
6. `yarn version --major|minor|patch` ([documentation](https://classic.yarnpkg.com/en/docs/cli/version/))
7. `git push origin master --tag`
