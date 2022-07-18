import { Request, Response } from "express";
import { ArticleServices } from "../services/ArticleServices";





class ArticleController {


    constructor(private articleService: ArticleServices) { }



    async handlerListingArticles(request: Request, response: Response) {

        const articles = await this.articleService.importArticles();
        console.log(articles);

        return response.json(articles)


    }

}

export { ArticleController };

