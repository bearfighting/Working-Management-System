import Database from "./database";

export default async (query) => {

    const trx = Database.getConnexion();
    await trx.connect();
    let result;

    try{
        const res = await trx.query(query);
        result = res.rows;
        await trx.end();
    }catch(error){
        console.log(error);
    }

    return result;
}