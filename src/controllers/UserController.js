import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const { id, nome, email } = await User.create(req.body);

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, { attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

      const { id, email, nome } = await user.update(req.body);

      return res.json({ id, email, nome });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não enviado.'] });

      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });

      await user.destroy;
      return res.json({ msg: ['Usuário deletado com sucesso.'] });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UserController();
