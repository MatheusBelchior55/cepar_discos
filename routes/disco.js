const express = require('express');
const router = express.Router();
const db = require('../utils/db.js');

// Página de detalhes do disco
router.get('/:disco_id', async (req, res) => {
  try {
    const discoId = req.params.disco_id; // Captura o disco_id da URL

    // Consulta para obter os detalhes do disco
    db.query('SELECT * FROM tbdisco WHERE disco_id = ?', [discoId], function(erro, resultados) {
      if (erro) {
        return res.send(erro);
      }

      // Verifica se o disco foi encontrado
      if (resultados.length === 0) {
        return res.status(404).send('Disco não encontrado');
      }

      const disco = resultados[0]; // Obtém o primeiro resultado

      // Renderiza a página com os detalhes do disco
      res.render('disco', { disco });
    });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao carregar os detalhes do disco');
  }
});

module.exports = router;