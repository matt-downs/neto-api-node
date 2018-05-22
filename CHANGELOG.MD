# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [unreleased]
### Changed
- Updated .npmignore
- Updated dependencies
- Updated code to use spread operator where possible
- Updated code to use es6 imports

## [2.0.2] - 2018-05-05
### Changed
- Updated readme

## [2.0.1] - 2018-05-05
### Changed
- Updated npm description and keywords

## [2.0.0] - 2018-02-17
### Changed
- Module import syntax

## [1.2.2] - 2018-02-17
### Fixed
- Fixed incorrect API action on `warehouse.get()` function
### Changed
- Updated TypeScript and @types packages
- Updated tests for 100% coverage of `/modules`

## [1.2.1] - 2018-01-31
### Fixed
- TS warning property `then` does not exist on `.exec()`

## [1.2.0] - 2018-01-22
### Changed
- Entire project is now compiled from TypeScript source files. Supported editors should now show rich snippets and code completion when using the library.
### Added
- More unit tests

## [1.1.1] - 2018-01-02
### Changed
- `user` key is no longer required when initialising the library
- Updated mocha devDependency to latest version
### Fixed
- Fixed documentation table layout on npmjs.com

## [1.1.0] - 2017-12-21
### Added
- Ability to use `.get()` without `.output()`
- More tests for type `.item`
- Debug param to all `.exec()` methods
### Changed
- Filter request body is now built in the `GetModule` parent class each time `.get()` or `.output()` is called
- API request for all `.get()` methods with filters has been moved into the `GetModule` parent class and referenced with `super`
- Licence changed to MIT

## [1.0.1] - 2017-12-13
### Added
- Another chaining example to `README.md`
### Changed
- Package description
- Lots of changes to `README.md` to improve readability

## [1.0.0] - 2017-12-13
- Lift off!