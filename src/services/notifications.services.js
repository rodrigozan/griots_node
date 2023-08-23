import Notification from '../models/notifications.model.js';

export const createNotification = async (notificationData) => {
  try {
    const notification = new Notification(notificationData);
    return await notification.save();
  } catch (error) {
    throw error;
  }
};

export const getUserNotifications = async (userId) => {
  try {
    return await Notification.find({ userId }).sort({ createdAt: -1 });
  } catch (error) {
    throw error;
  }
};
