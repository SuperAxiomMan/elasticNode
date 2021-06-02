import { Router } from 'express';
import { MainController } from './Controllers/Main.Controller';

const appRouter = Router();

//=|Root Page/=>
appRouter.get('/', MainController.root);

//=|Not Found Page/=>
appRouter.get('/blog', MainController.elasticQuery);

appRouter.get('/members-list', MainController.listAbex);

//=|Not Found Page/=>
appRouter.get('/not-found', MainController.notFound);



export { appRouter };