import { createUmbracoClient } from "$lib/umbracoclient.js";
import { SECRET_API_KEY } from '$env/static/private';

const umbracoApiDomain = 'http://attitydeheadless.designdev5.dk';
const umbracoApiKey = SECRET_API_KEY;

const umbraco = createUmbracoClient(umbracoApiDomain, umbracoApiKey);


console.log(await umbraco.getContentByType("person"))