import { XMLParser } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import { ArticleRepository } from "../repository/ArticleRepository";


class ArticleServices {


    constructor(
        private readonly articleRepository: ArticleRepository
    ) { };



    async importArticles(): Promise<any> {


        const article = await this.articleRepository.importArticle();
        const articleInJson: any = []

        const readXML = fs.readFile(`${path.resolve('./src/utils/tmp') + '/' + article}`, (err: any, data: any) => {

            if (err) console.log(err);

            if (data) {

                const parser = new XMLParser();

                const { rss } = parser.parse(data)
                console.log(rss);


                articleInJson.push(rss)
                return rss
            }
        });
        console.log(articleInJson);

        return articleInJson;
    }


}

export { ArticleServices };
