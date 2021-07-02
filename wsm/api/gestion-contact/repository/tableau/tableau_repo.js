
const temp = [
    {
        id: "1",
        user_id: "1",
    },
    {
        id: "2",
        user_id: "1",
    },
    {
        id: "3",
        user_id: "1",
    }
]

class TableauRepo {

    constructor(modele, nom_table) {
        this.modele = modele;
        this.nom_table = nom_table
    }

    #champs_reponse = {
        id: "gct_id",
        user_id: "user_id"
    };

    async get_by_id(id) {
        const [tableau] = [{id: id, user_id: 1}];
        return new this.modele(tableau);
    }
}

module.exports = TableauRepo;
