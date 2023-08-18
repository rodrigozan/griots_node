import * as notificationService from '../services/notifications.services.js';

export const createNotification = async (req, res) => {
  try {
    const { userId, type, details } = req.body;
    const notificationData = { userId, type, details };
    const notification = await notificationService.createNotification(notificationData);
    res.status(201).json(notification);
  } catch (error) {
    console.error('Erro ao criar a notificação:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await notificationService.getUserNotifications(userId);
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Erro ao obter as notificações do usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
