import {environment} from '../../environments/environment';

export const host = environment.apiUrl;
export const externalContext = '/external';
export const addTemplateEndpoint = '/template/add';
export const loginEndpoint = '/auth/login';
export const registerEndpoint = '/auth/sign-up';
export const changePasswordEndpoint = '/auth/changepassword';
export const getAllTemplateEndpoint = '/template';
export const getAllDocumentEndpoint = '/document';
