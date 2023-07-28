import Worldbuilding from '../../models/planning/worldbuilding.models';

const worldbuildingService = {
  async createWorldbuilding(data) {
    try {
      const new_worldbuilding = new Worldbuilding(data);
      const worldbuilding = await new_worldbuilding.save();
      return worldbuilding;
    } catch (error) {
      console.error('Erro ao criar o worldbuilding:', error);
    }
  },

  async getAllWorldbuildings() {
    try {
      const worldbuildings = await Worldbuilding.find();
      return worldbuildings;
    } catch (error) {
      throw new Error('Erro ao buscar os Worldbuildings');
    }
  },

  async getWorldbuildingById(id) {
    try {
      const worldbuilding = await Worldbuilding.findById(id);
      return worldbuilding;
    } catch (error) {
      throw new Error('Erro ao buscar o Worldbuilding');
    }
  },

  async updateWorldbuilding(id, data) {
    try {
      const worldbuilding = await Worldbuilding.findByIdAndUpdate(id, data, { new: true });
      return worldbuilding;
    } catch (error) {
      throw new Error('Erro ao atualizar o Worldbuilding');
    }
  },

  async deleteWorldbuilding(id) {
    try {
      await Worldbuilding.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Erro ao excluir o Worldbuilding');
    }
  },
};

export default worldbuildingService;
