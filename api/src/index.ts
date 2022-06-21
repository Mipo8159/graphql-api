require('dotenv').config();
import app from './config/app.config';
import { AppDataSource } from './config/data.source';

const main = async () => {
  const port: number = Number(process.env.PORT);

  await AppDataSource.initialize()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));

  app.listen(port, () => console.log(`Server listening to port: ${port}`));
};
main();
