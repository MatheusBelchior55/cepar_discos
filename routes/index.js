const express = require('express');
const router = express.Router();
const db = require('../utils/db.js');

// Página de catálogo de discos
router.get('/', async (req, res) => {
  try {
    const artistaIdSelecionado = req.query.artista; // Captura o parâmetro "artista" da URL
    const bandaIdSelecionada = req.query.banda; // Captura o parâmetro "banda" da URL
    
    // Consultas separadas para discos, artistas e bandas
    db.query('SELECT * FROM tbdisco ORDER BY titulo ASC', [], function(erro, discos) {
      if (erro) {
        return res.send(erro);
      }

      db.query('SELECT * FROM tbartista ORDER BY nome ASC', [], function(erro, artistas) {
        if (erro) {
          return res.send(erro);
        }

        db.query('SELECT * FROM tbbanda ORDER BY nome ASC', [], function(erro, bandas) {
          if (erro) {
            return res.send(erro);
          }

          // Se o parâmetro "artista" estiver presente, filtra os discos por "artista_id"
          if (artistaIdSelecionado) {
            discos = discos.filter(disco => disco.artista_id == artistaIdSelecionado);
          }
          
          // Se o parâmetro "banda" estiver presente, filtra os discos por "banda_id"
          if (bandaIdSelecionada) {
            discos = discos.filter(disco => disco.banda_id == bandaIdSelecionada);
          }

          // Renderiza a página com os discos filtrados e outros dados
          res.render('index', { discos, artistas, bandas });
        });
      });
    });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao carregar o catálogo');
  }
});

module.exports = router;
