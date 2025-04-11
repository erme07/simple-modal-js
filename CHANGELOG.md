# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/) and follows the format from [Keep a Changelog](https://keepachangelog.com/).

---

## [0.2.0] - 2025-04-11
### Added
- `addToDOM` and `removeFromDOM` methods to add or remove the modal from the DOM.
- Properties `$modalWrapper`,`$modal_window`,`$modal_title`,`$modal_text` and `$modal_close` to access each element of the modal

### Changed
- Refactored code
- Update documentation
- Rename class `simple-modalJS__content` to `simple-modalJS__window`

### Fixed
- Error when trying to close the modal
- Error when trying to add the modal to the DOM before the document is fully loaded.
- The overlay could not be disabled

---

## [0.1.1] - 2025-04-10
### Fixed
- Refactored cdoe.
- Incorrect code in the documentation (`README.md`).

---

## [0.1.0] - 2025-04-10
### Added
- Minified version of CSS (`style.min.css`).
- `hide` and `show` methods to control the modal's visibility.
- IIFE version with automatic CSS injection, minified and non-minified (`main.min.js`,`main.js`).
- ESM version without CSS injection, designed for modern bundlers (`main.esm.js`,`style.css`).
- Dynamic modal creation with title, content, and close button.
