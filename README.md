grunt-mangony
=============

This is a grunt wrapper for [`Mangony`](https://github.com/Sebastian-Fitzner/mangony). 

## Installation

`npm install grunt-mangony`

## Options

All options of [`Mangony`](https://github.com/Sebastian-Fitzner/mangony) are available. 

## Usage

You can enable this plugin in the `Gruntfile.js` of your project like that:

`grunt.loadNpmTasks('grunt-mangony');`

### Example

To use a development server and a build task you can add the following configuration:

``` js
mangony: {
    options: {
        cwd: 'src',
        dest: 'dist',
        types: {
            data: {
                dir: 'data',
                files: [
                    '**/*'
                ]
            },
            partials: {
                dir: 'partials',
                files: [
                    '**/*.hbs'
                ]
            },
            pages: {
                dir: 'pages',
                files: [
                    '**/*.hbs'
                ]
            },
            layouts: {
                dir: 'layouts',
                files: [
                    '**/*.hbs'
                ]
            }
        },
        helpers: [
            'helpers/*.js'
        ]
    },
    dev: {
        options: {
            compileStaticFiles: false,
            devServer: {
                start: true
            },
            watch: true
        }
    },
    dist: {
        options: {
            compileStaticFiles: true,
            watch: false
        }
    }
}
```

**To keep the dev task alive you should integrate a watch task or another  `keep-alive` task.**

## License
Copyright (c) 2016 Sebastian Fitzner. Licensed under the MIT license.

