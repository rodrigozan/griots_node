import Character from '../../models/planning/character.models';

const characterService = {
  createCharacter: async (data) => {
    try {
      const new_character = new Character(data);
      const character = await new_character.save();
      return character;
    } catch (error) {
      console.error('Erro ao criar o personagem:', error);
    }
  },

  getAllCharacters: async () => {
    try {
      const characters = await Character.find();
      return characters;
    } catch (error) {
      throw new Error('Erro ao obter personagens');
    }
  },

  getCharacterById: async (id) => {
    try {
      const character = await Character.findById(id);
      return character;
    } catch (error) {
      throw new Error('Erro ao obter personagem por ID');
    }
  },

  updateCharacter: async (id, data) => {
    try {
      const character = await Character.findByIdAndUpdate(id, data, { new: true });
      return character;
    } catch (error) {
      throw new Error('Erro ao atualizar personagem');
    }
  },

  deleteCharacter: async (id) => {
    try {
      await Character.findByIdAndRemove(id);
      return;
    } catch (error) {
      throw new Error('Erro ao excluir personagem');
    }
  },
};

export default characterService;
