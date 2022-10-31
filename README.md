# Devolutions Docs

Devolutions's documentations build with 11ty.

## Requirements

- [Node.js](https://nodejs.org/en/) >= 12.0.0

## Installation

Using command line at the root of the project execute `npm i`

## Getting Started

If you're using VSCode simply execute de npm scripts `serve` or using command line at the root of the project execute `npm run serve`.

## Markdown

Since we are using 11ty to build our markdown files, we can add customs attributes and shortcodes.

### Front Matter

11ty use Front Matter for global variables. It is set at the line 1 of the file starting with `---` and ending with `---`.

```yaml
---
title: My title # Used for the H1 and the navigation tree
order: 0-9 # Used for custom ordering in the navigation tree
---

## Markdown Content
```

### 11ty Shortcodes

Coming Soon