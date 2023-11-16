import { createUmbracoClient } from '@thomasravnholt/umbracoclient';
import { SECRET_API_KEY } from '$env/static/private';

const umbracoApiDomain = 'http://attitydeheadless.designdev5.dk';
const umbracoApiKey = SECRET_API_KEY;

const umbraco = createUmbracoClient(umbracoApiDomain, umbracoApiKey);

async function fetchContent() {
	try {
		const people = await umbraco.getContentByType('person');
		const technlogy = await umbraco.getContentByType('technology');
		console.log(technlogy);
	} catch (error) {
		console.error('Error fetching content:', error);
	}
}

console.log(fetchContent());
