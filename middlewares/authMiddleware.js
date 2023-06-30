import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token não fornecido ou inválido' });
    }

    const authToken = token.split(' ')[1];

    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);

    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error('Erro durante a verificação do token:', error);
    res.status(401).json({ error: 'Token inválido' });
  }
};

export default authMiddleware;
