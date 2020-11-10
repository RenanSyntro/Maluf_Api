const bcrypt = require('bcrypt')

module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const login = { ...req.body }
        
        if (req.params.id) login.id = req.params.id
        
        try {
            existsOrError(login.usuario, 'Nome de usuário não informado')
            existsOrError(login.senha, 'Senha não informada')
            
            const loginFromDB = await app.db('login')
            .where({ usuario: login.usuario })
            
            if (!login.id) {
                notExistsOrError(loginFromDB, 'Login ja cadastrado')
            }

        } catch (msg) {
            return res.status(400).send(msg)
        }


        login.senha = encryptPassword(login.senha)

        if (login.id) {
            app.db('login')
                .update(login)
                .where({ id: login.id })
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('login')
                .insert(login)
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('login')
            .select('id', 'usuario')
            .then(logins => res.json(logins))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}