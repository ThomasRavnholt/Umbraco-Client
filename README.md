# What is UmbracoClient?

UmbracoClient is a JavaScript package that provides a convenient interface for interacting with the Umbraco Content Delivery API. It supports various operations such as fetching content by ID or content type with customizable query parameters like sorting, filtering, and localization.

## Installation

```bash
npm i @thomasravnholt/umbracoclient
```

## Setup

First, import `createUmbracoClient` from the package:

```javascript
import { createUmbracoClient } from 'umbracoclient';
```

Then, create an instance of the client:

```javascript
const umbracoClient = createUmbracoClient(
	'https://your-umbraco-domain.com',
	'your-optional-api-key'
);
```

## Usage

### Fetch Content by ID

```javascript
umbracoClient.getContentById('content-id', options).then((data) => console.log(data));
```

### Fetch Content by Type

```javascript
umbracoClient.getContentByType('content-type', options).then((data) => console.log(data));
```

## Options

You can customize requests using the following options:

- `sort`: Define sorting order and type.
- `expand`: Specify properties to expand in the response.
- `filter`: Apply filters to the content.
- `language`: Request content in a specific language.
- `preview`: Set to true to fetch unpublished content (requires API key).
- `fetch`: Choose from 'ancestors', 'children', or 'descendants'.
- `fetchIdOrPath`: Provide the ID or path for fetch operations.

## Example

Fetch blog posts sorted by creation date in descending order:

```javascript
const options = {
	sort: { type: 'createDate', order: 'desc' },
	expand: ['property1', 'property2'],
	filter: 'contentTypeAlias'
};

umbracoClient.getContentByType('blogPost', options).then((data) => console.log(data));
```

---

Replace placeholders like 'your-umbraco-domain.com' and 'content-id' with actual values relevant to your Umbraco instance.
