import Aluno from '../models/Aluno';

class AlunoController {
  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = aluno;

      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não enviado.'] });

      const aluno = await Aluno.findByPk(
        id,
        {
          attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        },
      );

      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe.'] });

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não enviado.'] });

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe.'] });

      const alunoAtualizado = await aluno.update(req.body, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      });

      return res.json(alunoAtualizado);
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

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe.'] });

      await aluno.destroy();
      return res.json({ msg: ['Aluno deletado com sucesso.'] });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new AlunoController();
