import Plot from '../../models/planning/plot.models';

const plotService = {
  async createPlot(plotData) {
    try {
      const new_plot = new Plot(data);
      const plot = await new_plot.save();
      return plot;
    } catch (error) {
      console.error('Erro ao criar o plot:', error);
    }
  },

  async getAllPlots() {
    try {
      const plots = await Plot.find();
      return plots;
    } catch (error) {
      throw new Error('Erro ao buscar os Plots');
    }
  },

  async getPlotById(id) {
    try {
      const plot = await Plot.findById(id);
      return plot;
    } catch (error) {
      throw new Error('Erro ao buscar o Plot');
    }
  },

  async updatePlot(id, plotData) {
    try {
      const plot = await Plot.findByIdAndUpdate(id, plotData, { new: true });
      return plot;
    } catch (error) {
      throw new Error('Erro ao atualizar o Plot');
    }
  },

  async deletePlot(id) {
    try {
      await Plot.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Erro ao excluir o Plot');
    }
  },
};

export default plotService;
