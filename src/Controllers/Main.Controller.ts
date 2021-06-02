/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Client } from '@elastic/elasticsearch';
import { Request, Response } from 'express';
import { inspect } from 'util';

export class MainController {
    //=|Root Page Response/=>
    static root = (req: Request, res: Response) => {
        res.render('home');
    };
    //=|Simple Query/=>
    static elasticQuery = async (req: Request, res: Response) => {

        const client = new Client({ node: 'http://localhost:9200' });

        const searchResult = await client.search({
            index: 'posts',
            body: {}  
        });
         
        const resultQ = searchResult.body.hits.hits;
        console.log(inspect(resultQ, false, null, true));
        res.render('blog', {resultQ} );

    };


    //=|Not Found Page/=>
    static notFound = (req: Request, res: Response) => {
        // res.render('not-found');
        return res.status(404);
    };

    static listAbex = async (req: Request, res: Response) => {
        const client = new Client({ node: 'http://localhost:9200' });

        const searchResult = await client.search({
            index: 'member_index',
            body: {}  
        });

        const resultQ = searchResult.body.hits.hits;
        res.render('membersList', {resultQ} );
    }
}
