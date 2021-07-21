
class ProfilService {
    #profil_repo;

    constructor(profil_repo) {
        this.#profil_repo = profil_repo;
    }

    async suppression({user}){
        const user_id = user.id;
        await this.#profil_repo.desactiver(user_id);
        return [];
    }

    async select_instance({user}) {
        const user_id = user.id;
        const profil = await this.#profil_repo.get_by_id(user_id);
        return profil.format_instance();
    }

    async modification({user, body}){
        const user_id = user.id;
        await this.#profil_repo.modifier(body, user_id);
        return await this.select_instance({user});
    }

}

module.exports = ProfilService;
