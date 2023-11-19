
# What is UmbracoClient

UmbracoClient is a JavaScript package providing a convenient interface for interacting with the Umbraco Content Delivery API. It supports various operations such as fetching content by ID, name, route, content type, or multiple IDs, as well as media fetching capabilities. It also offers customizable query parameters for sorting, filtering, expanding, language selection, and more.

## Installation

```bash
npm i @thomasravnholt/umbracoclient
```

## Setup

Import `createUmbracoClient` from the package:

```javascript
import { createUmbracoClient } from '@thomasravnholt/umbracoclient';
```

Create an instance of the client:

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

### Fetch Multiple Contents by IDs

```javascript
umbracoClient.getContentByIds(['id1', 'id2'], options).then((data) => console.log(data));
```

### Fetch Content by Name

```javascript
umbracoClient.getContentByName('content-name', options).then((data) => console.log(data));
```

### Fetch Content by Route

```javascript
umbracoClient.getContentByRoute('content-route', options).then((data) => console.log(data));
```

### Fetch Content by Type

```javascript
umbracoClient.getContentByType('content-type', options).then((data) => console.log(data));
```

### Fetch Media by ID

```javascript
umbracoClient.getMediaById('media-id', options).then((data) => console.log(data));
```

### Fetch Media by Path

```javascript
umbracoClient.getMediaByPath('media-path', options).then((data) => console.log(data));
```

### Fetch Media Items

```javascript
umbracoClient.getMediaItems(options).then((data) => console.log(data));
```

## Options

Customize requests using options:

- `sort`: Define sorting order and type.
- `expand`: Specify properties to expand in the response.
- `filter`: Apply filters to the content or media.
- `language`: Request content or media in a specific language.
- `preview`: Fetch unpublished content or media (requires API key).
- `fetch`: Options like 'ancestors', 'children', or 'descendants' for content.
- `fetchIdOrPath`: ID or path for fetch operations.
- `skip`: Number of items to skip (for pagination).
- `take`: Number of items to take (for pagination).

## Example

Fetch blog posts sorted by creation date in descending order:

```javascript
const options = {
    sort: { type: 'createDate', order: 'desc' },
    expand: ['property1', 'property2'],
    filter: 'contentTypeAlias',
    language: 'en-US',
    preview: true,
    skip: 0,
    take: 10
};

umbracoClient.getContentByType('blogPost', options).then((data) => console.log(data));
```

---

Replace placeholders like 'your-umbraco-domain.com' and 'content-id' with actual values relevant to your Umbraco instance.
