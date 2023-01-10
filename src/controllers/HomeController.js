import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Favacho',
      email: 'ana@ana.com',
      idade: 22,
      peso: 46.5,
      altura: 1.70,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
