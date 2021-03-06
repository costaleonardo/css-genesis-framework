# Contributing

Read below and learn how to contribute to Genesis.

## Table of Contents

- [Open an Issue](#open-an-issue)
- [Submit a Pull Request](#submit-a-pull-request)
- [Building](#building)
- [Style Guide](#style-guide)
- [Test](#test)
- [Code of Conduct](#code-of-conduct)
- [License](#license)


## Open an Issue

[Open an Issue](https://github.com/costaleonardo/css-genesis-framework/issues/new) to report any problems or improvements. When necessary, use [Codepen](http://codepen.io/) to show the problem. Be sure to include some description to explain the problem.

## Submit a Pull Request

To submit a new feature, make sure that changes are done to the source code. [Follow our style guide](#style-guide) and do not forget the tests and attach the link [Codepen](http://codepen.io/) along with the description.

Try to solve a problem for each pull request, this increases the chances of acceptance. When in doubt, open a [new issue](#open-an-issue) so we can answer you. Look existing issues for ideas or to see if a similar issue has already been submitted.

1. Fork the Github repo: `git clone https://github.com/costaleonardo/css-genesis-framework`
1. Create a new branch: `git checkout -b issuenumber-feature-name`
1. Commit your changes: `git commit -m 'issuenumber-feature-name'`
1. Push to the branch: `git push origin my-feature-name`
1. Submit a pull request!

## Building

First install [Node.js](https://nodejs.org/en/download/) for the build process. Now install all the dependencies, run `npm install` from the project directory. Once you have the dependencies installed, run `npm start`. This will run the build task which compiles the Sass files into Genesis.css file in the expanded and compressed version.


## Style Guide

Genesis use [Sass](http://sass-lang.com/) to give super powers to CSS. Look at how the code is being maintained, we must always be consistent. We try to follow best practices as much as possible. In addition, here are some tips you should follow:

- Properties and selectors are sorted in alphabetical order
- Always use tab to indentation, no spaces
- Always use single quote, i.e. `content: ''`
- Quote attribute values in selectors, i.e. `input[type='checkbox']`
- Avoid specifying units for zero-values, i.e. `margin: 0`
- Use `rem` unit instead of `px`
- Use lowercase and shorthand hex values, i.e. `#fff`
- Use one discrete selector per line in multi-selector rulesets
- Include a single space after colon and after each comma
- Separate each ruleset by a blank line
- Don't use prefixes, there is a task to generate this automatically

```sass
.selector-a,
.selector-b,
.selector-c,
.selector-d[type='text']
	box-sizing: border-box
	color: #333
	content: ''
	display: inline-block
	font-family: 'Helvetica-Neue', 'Helvetica', 'Arial', sans-serif
	margin-bottom: 0
	margin-left: 5.0rem

	.other-selector-a
		background: #fff

		.other-selector-b
			background: #fff

		&.increasing-the-specificity
			color: #000
```

## Code of Conduct

Help us keep Genesis open and inclusive. Please read and follow our thoughts on [Code of Conduct](http://confcodeofconduct.com/).

## License

By contributing your code, you agree to license your contribution under the [MIT license](https://opensource.org/licenses/MIT).
