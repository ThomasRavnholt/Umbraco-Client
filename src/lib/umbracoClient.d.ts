// umbracoClient.d.ts

export interface Options {
	sort?: {
		type?: 'createDate' | 'updateDate' | 'sortOrder' | 'name' | 'level';
		order?: 'asc' | 'desc';
	};
	expand?: 'all' | string[];
	filter?: string;
	language?: string;
	preview?: boolean;
	apiKey?: string;
	fetch?: 'ancestors' | 'children' | 'descendants';
	fetchIdOrPath?: string;
}

export function createUmbracoClient(domain: string, apiKey?: string): UmbracoClient;

export interface UmbracoClient {
	getContentById(id: string, options?: Options): Promise<any>;
	getContentByType(contentType: string, options?: Options): Promise<any>;
	getMediaById(id: string, options?: Options): Promise<any>;
	getMediaByPath(path: string, options?: Options): Promise<any>;
	getMediaItems(options?: Options): Promise<any>;
}
