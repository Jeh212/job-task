import { Request, Response, Router } from 'express';
import { articlesFactory } from '../factory';




const routes = Router();
const articlefactory = articlesFactory()



routes.get('/', async (request: Request, response: Response) => articlefactory.handlerListingArticles(request, response));


export { routes };
