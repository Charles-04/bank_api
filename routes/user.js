const Customer = require("../controllers/customer");
const express = require('express');
const router = express.Router();

router.post('/', Customer.create_customer);

module.exports = router;





















































// app.post("/auth/create_account", async (req, res) => {
//     const data = req.body
  
//     try {
//       const passwordHash = await bcrypt.hash(data.password, 10)
//       const user = await new User({
//         email: data.email,
//         password: passwordHash,
//         full_name: data.full_name
//       }).save()
  
//       const token = jwt.sign({ user_id: user._id }, JWT_SECRET_KEY, { expiresIn: 60 * 10 })
  
//       res.status(201).send({
//         message: "User created",
//         data: {
//           token,
//           user_id: user._id,
//           email: user.email,
//           full_name: user.full_name
//         }
//       })
//     } catch (error) {
//       res.status(400).send({ message: "User couldn't be created", error })
//     }
  
// })
  


// app.post('/user/:id',)