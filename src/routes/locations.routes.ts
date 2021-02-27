import { Router } from 'express';
import Knex from 'knex';
import knex from '../database/connection'

const locationsRouter = Router();

locationsRouter.post('/',async (request, response) =>{
   const {
       name,
       email,
       whatsapp,
       latitude,
       longitude,
       city,
       uf,
       items
   } = request.body;

   const location = {
    image: "fake-image.jpg",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items
};
    const newIds = await knex('location').insert(location);
    const locationId =  newIds[0];

    const locationsItens = items.map((item_id: number) =>{
        return {
            item_id,
            location_id: locationId
        }
    });

    await knex('location_items').insert(locationsItens);

    return response.json({
        id: locationId,
        ...location
    })
});


export default locationsRouter;