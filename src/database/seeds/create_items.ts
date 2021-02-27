import Knex from 'knex';


export async function seed(knex: Knex){
    //aguarde, enquanto não concluir não seguirá o proximo passo
    await knex('items').insert([
        {title: "Papéis e papelão", image: "papel.png"},
        {title: "vidros e lampadas", image: "vidro.png"},
        {title: "Ólei de cozinha", image: "oleo.png"},
        {title: "Resíduos organicos", image: "organico.png"},
        {title: "Batérias e pilhas", image: "bateria.png"},
        {title: "Eletrônicos", image: "eletronico.png"}
    ]);
}