import { ArticleRepository } from '../repository/ArticleRepository';
import { ArticleServices } from '../services/ArticleServices';

import { ArticleController } from '../controllers/ArticleController';

const articlesFactory = () => {

    const articleRepo = new ArticleRepository()
    const articleService = new ArticleServices(articleRepo);

    const articleController = new ArticleController(articleService);

    return articleController


}

export { articlesFactory };
