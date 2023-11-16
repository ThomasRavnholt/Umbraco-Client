/**
 * @file umbracoClient.js
 * Provides functionality to interact with the Umbraco Delivery API.
 */

const DELIVERY_API_PATH = '/umbraco/delivery/api/v1/content';

/**
 * Constructs query parameters for the API call.
 * 
 * @param {Object} options - The options for sorting, filtering, and more.
 * @returns {string} The query parameter string.
 */
function constructQueryParams(options) {
    let queryParams = '';

    // Handling sort parameter
    if (options.sort && options.sort.type) {
        queryParams += `&sort=${options.sort.type}:${options.sort.order}`;
    }

    // Handling expand parameter
    if (options.expand) {
        queryParams += options.expand === 'all' ? '&expand=all' : '&expand=property:' + options.expand.join(',');
    }

    // Handling filter parameter
    if (options.filter) {
        queryParams += `&filter=${options.filter}`;
    }

    // Handling language parameter
    if (options.language) {
        queryParams += `&language=${options.language}`;
    }

    // Handling fetch parameter
    if (options.fetch && options.fetchIdOrPath) {
        queryParams += `&fetch=${options.fetch}:${options.fetchIdOrPath}`;
    }

    return queryParams;
}

/**
 * Creates a client to interact with the Umbraco Delivery API.
 * 
 * @param {string} domain - The domain of the Umbraco API.
 * @param {string} [apiKey] - The API key for authorization.
 * @returns An object with methods to interact with the API.
 */
function createUmbracoClient(domain, apiKey) {
    const apiUrl = `${domain}${DELIVERY_API_PATH}`;

    /** @type {Object<string, string>} */
    const defaultHeaders = {
        'Content-Type': 'application/json'
    };

    // Add API key to default headers if provided
    if (apiKey) {
        defaultHeaders['Api-Key'] = apiKey;
    }

    return {
        /**
         * Gets content by ID from the Umbraco API.
         * 
         * @param {string} id - The ID of the content to fetch.
         * @param {Object} [options] - Additional options for the request.
         * @returns {Promise<Object>} The content data.
         */
        getContentById: async (id, options) => {
            const queryParams = options ? constructQueryParams(options) : '';
            const headers = { ...defaultHeaders };

            if (options?.preview) {
                headers['Preview'] = 'true';
            }

            const response = await fetch(`${apiUrl}/item/${id}${queryParams}`, { headers });
            return response.json();
        },

        /**
         * Gets content by type from the Umbraco API.
         * 
         * @param {string} contentType - The type of content to fetch.
         * @param {Object} [options] - Additional options for the request.
         * @returns {Promise<Object>} The content data.
         */
        getContentByType: async (contentType, options) => {
            const queryParams = options ? constructQueryParams(options) : '';
            const headers = { ...defaultHeaders };

            if (options?.preview) {
                headers['Preview'] = 'true';
            }

            const response = await fetch(`${apiUrl}?filter=contentType:${contentType}${queryParams}`, { headers });
            return response.json();
        }
    };
}

export { createUmbracoClient };
