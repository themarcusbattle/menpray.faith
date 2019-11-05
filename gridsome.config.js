// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss")

module.exports = {
  	siteName: 'Men Pray - Life skills men\'s conference | Greensboro, NC',
	plugins: [
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-151586436-1'
			}
		}
	],
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					tailwindcss
				],
			},
		},
	}
}
