const user = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ messege: "Username and password are required" });
  try {
    if (typeof username != "number"){
      username = parseInt(username)
    }
    const foundUser = await user.findOne({ username: username }).exec();
    if (!foundUser) return res.sendStatus(401);

    const match = await bcrypt.compare(password, foundUser.password);

    if (match) {
      //JWT here
      const rol = foundUser.rol
      const accessToken = jwt.sign(
        { "UserInfo" : { username: foundUser.username, rol } },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30m" }
      );
      const refreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      //modificamos el usuario que hizo match agregandole la propiedad RefreshToken
      await user.updateOne(
        { username: username },
        { refreshToken: refreshToken }
      );
      //tocar cosas aqui

      //sending refreshtoken trough http only cokie and setting expiration date in ms
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
      });
      //in production add: secure: true to the cookie

      //sending the accessToken as json
      return res.json({ roles: rol, accessToken: accessToken, user: username });
    } else {
      return res.status(401).json({ message: "usuario o contraseña incorrectas" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { handleLogin };
