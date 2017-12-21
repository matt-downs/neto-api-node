# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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