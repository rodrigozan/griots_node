import PasswordToken from '../models/passwordToken.models.js';

const passwordTokenService = {
  createToken: async (id, data) => {
    const password = new PasswordToken({
      user: id,
      data,
    });

    const token = await password.save();
    return token;
  },

  findByToken: async (data) => {
    const token = await PasswordToken.findOne({ data }).populate('user');
    return token;
  },

  deleteToken: async (data) => {
    const token = await PasswordToken.findOneAndDelete({ data });
    return token;
  },
};

export default passwordTokenService;
