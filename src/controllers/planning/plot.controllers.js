import plotService from '../../services/planning/plot.services';

const plotController = {
  async createPlot(req, res) {
    try {
      const { title, description, book, serie } = req.body;
      const author = req.user._id;
      const plotData = { title, description, author, book, serie };
      const plot = await plotService.createPlot(plotData);
      res.status(201).json(plot);
    } catch (error) {
      console.error('Erro ao criar o Plot:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async getAllPlots(req, res) {
    try {
      const plots = await plotService.getAllPlots();
      res.json(plots);
    } catch (error) {
      console.error('Erro ao buscar os Plots:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async getPlotById(req, res) {
    try {
      const { id } = req.params;
      const plot = await plotService.getPlotById(id);
      if (!plot) {
        return res.status(404).json({ error: 'Plot não encontrado' });
      }
      res.json(plot);
    } catch (error) {
      console.error('Erro ao buscar o Plot:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async updatePlot(req, res) {
    try {
      const { id } = req.params;
      const { title, description, author, book, serie } = req.body;
      const plotData = { title, description, author, book, serie };
      const updatedPlot = await plotService.updatePlot(id, plotData);
      if (!updatedPlot) {
        return res.status(404).json({ error: 'Plot não encontrado' });
      }
      res.json(updatedPlot);
    } catch (error) {
      console.error('Erro ao atualizar o Plot:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async deletePlot(req, res) {
    try {
      const { id } = req.params;
      await plotService.deletePlot(id);
      res.json({ message: 'Plot excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir o Plot:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

export default plotController;
