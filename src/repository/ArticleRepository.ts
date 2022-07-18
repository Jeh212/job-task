import { importArticles } from '../infra/api';
import { writeNewFileXml } from '../utils/tmp/writeXmlFile';
import { IRepository } from "./IRepository";

class ArticleRepository implements IRepository {


    async importArticle(): Promise<any> {

        const articles = await importArticles();

        const createNewXmlFile = writeNewFileXml(articles);

        return createNewXmlFile;

    }
}

export { ArticleRepository };
