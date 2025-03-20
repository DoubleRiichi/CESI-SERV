var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/users", (req, res) => {
  const {name, email} = req.body;
  res.json({message : 'Utilisateur crée avec succès', user : {name, email}});
});

router.get("/users/:id", (req, res) =>  {
});

routeur.put("/users/:id", (req, res) => {
  const {id} = req.params;
  const {name, email} = res.body;
  res.json({
    message: 'Utilisateur mis à jour avec succès!',
    user: {
      id, name, email
    }
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  // Supprimer l'utilisateur avec l'ID spécifié
  res.json({ message: 'Utilisateur supprimé avec succès', user: { id } });
});

module.exports = router;
