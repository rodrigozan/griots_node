import characterService from '../../services/planning/character.services';

const characterController = {
  createCharacter: async (req, res) => {
    try {
      const characterData = req.body;
      const character = await characterService.createCharacter(characterData);
      res.status(201).json(character);
    } catch (error) {
      console.error('Erro ao criar personagem:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getAllCharacters: async (req, res) => {
    try {
      const characters = await characterService.getAllCharacters();
      res.json(characters);
    } catch (error) {
      console.error('Erro ao obter personagens:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  getCharacterById: async (req, res) => {
    try {
      const { id } = req.params;
      const character = await characterService.getCharacterById(id);

      if (!character) {
        return res.status(404).json({ error: 'Personagem não encontrado' });
      }

      res.json(character);
    } catch (error) {
      console.error('Erro ao obter personagem por ID:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  updateCharacter: async (req, res) => {
    try {
      const { id } = req.params;
      const characterData = req.body;
      const character = await characterService.updateCharacter(id, characterData);

      if (!character) {
        return res.status(404).json({ error: 'Personagem não encontrado' });
      }

      res.json(character);
    } catch (error) {
      console.error('Erro ao atualizar personagem:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  deleteCharacter: async (req, res) => {
    try {
      const { id } = req.params;
      await characterService.deleteCharacter(id);
      res.sendStatus(204);
    } catch (error) {
      console.error('Erro ao excluir personagem:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default characterController;

