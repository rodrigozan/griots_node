import worldbuildingService from '../../services/planning/worldbuilding.services';

const worldbuildingController = {
  async createWorldbuilding(req, res) {
    try {
      const { name, description } = req.body;
      const author = req.user._id;
      const worldbuildingData = { name, description, author };
      const worldbuilding = await worldbuildingService.createWorldbuilding(worldbuildingData);
      res.status(201).json(worldbuilding);
    } catch (error) {
      console.error('Erro ao criar o Worldbuilding:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async getAllWorldbuildings(req, res) {
    try {
      const worldbuildings = await worldbuildingService.getAllWorldbuildings();
      res.json(worldbuildings);
    } catch (error) {
      console.error('Erro ao buscar os Worldbuildings:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async getWorldbuildingById(req, res) {
    try {
      const { id } = req.params;
      const worldbuilding = await worldbuildingService.getWorldbuildingById(id);
      if (!worldbuilding) {
        return res.status(404).json({ error: 'Worldbuilding não encontrado' });
      }
      res.json(worldbuilding);
    } catch (error) {
      console.error('Erro ao buscar o Worldbuilding:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async updateWorldbuilding(req, res) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const worldbuildingData = { name, description };
      const updatedWorldbuilding = await worldbuildingService.updateWorldbuilding(id, worldbuildingData);
      if (!updatedWorldbuilding) {
        return res.status(404).json({ error: 'Worldbuilding não encontrado' });
      }
      res.json(updatedWorldbuilding);
    } catch (error) {
      console.error('Erro ao atualizar o Worldbuilding:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async deleteWorldbuilding(req, res) {
    try {
      const { id } = req.params;
      await worldbuildingService.deleteWorldbuilding(id);
      res.json({ message: 'Worldbuilding excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir o Worldbuilding:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default worldbuildingController;
