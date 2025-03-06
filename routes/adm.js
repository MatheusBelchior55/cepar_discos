const express = require('express');
const router = express.Router();
const db = require('../utils/db.js');

// Página de administração
router.get('/', async (req, res) => {
  try {
    // Consultas separadas para obter dados de todas as tabelas
    db.query('SELECT * FROM tbartista ORDER BY nome ASC', [], function(erro, artistas) {
      if (erro) {
        return res.send(erro);
      }

      db.query('SELECT * FROM tbbanda ORDER BY nome ASC', [], function(erro, bandas) {
        if (erro) {
          return res.send(erro);
        }

        db.query('SELECT * FROM tbgenero ORDER BY nome ASC', [], function(erro, generos) {
          if (erro) {
            return res.send(erro);
          }

          db.query('SELECT * FROM tbdisco ORDER BY titulo ASC', [], function(erro, discos) {
            if (erro) {
              return res.send(erro);
            }

            db.query('SELECT * FROM tbpedido ORDER BY data_pedido DESC', [], function(erro, pedidos) {
              if (erro) {
                return res.send(erro);
              }

              // Renderiza a página de administração com os dados
              res.render('adm', { artistas, bandas, generos, discos, pedidos });
            });
          });
        });
      });
    });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao carregar a página de administração');
  }
});

// Adicionar artista
router.post('/artista', (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO tbartista (nome) VALUES (?)', [nome], (erro) => {
    if (erro) {
      return res.send(erro);
    }
    res.redirect('/adm');
  });
});

// Adicionar banda
router.post('/banda', (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO tbbanda (nome) VALUES (?)', [nome], (erro) => {
    if (erro) {
      return res.send(erro);
    }
    res.redirect('/adm');
  });
});

// Adicionar disco
router.post('/disco', (req, res) => {
  const { titulo, ano_lancamento, genero_id, banda_id, artista_id, tmp_duracao, estoque, imagem } = req.body;
  db.query('INSERT INTO tbdisco (titulo, ano_lancamento, genero_id, banda_id, artista_id, tmp_duracao, estoque, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [titulo, ano_lancamento, genero_id, banda_id, artista_id, tmp_duracao, estoque, imagem], (erro) => {
    if (erro) {
      return res.send(erro);
    }
    res.redirect('/adm');
  });
});

// Atualizar estoque do disco
router.post('/disco/atualizar', (req, res) => {
    const { disco_id, estoque } = req.body;
    db.query('UPDATE tbdisco SET estoque = ? WHERE disco_id = ?', [estoque, disco_id], (erro) => {
      if (erro) {
        return res.send(erro);
      }
      res.redirect('/adm'); // Redireciona de volta à página de administração
    });
  });
  

// Deletar artista
router.post('/artista/delete', (req, res) => {
  const { artista_id } = req.body;
  db.query('DELETE FROM tbartista WHERE artista_id = ?', [artista_id], (erro) => {
    if (erro) {
      return res.send(erro);
    }
    res.redirect('/adm');
  });
});

// Deletar banda
router.post('/banda/delete', (req, res) => {
  const { banda_id } = req.body;
  db.query('DELETE FROM tbbanda WHERE banda_id = ?', [banda_id], (erro) => {
    if (erro) {
      return res.send(erro);
    }
    res.redirect('/adm');
  });
});

// Deletar disco
router.post('/disco/delete', (req, res) => {
  const { disco_id } = req.body;
  db.query('DELETE FROM tbdisco WHERE disco_id = ?', [disco_id], (erro) => {
    if (erro) {
      return res.send(erro);
    }
    res.redirect('/adm');
  });
});

// Deletar pedido
router.post('/pedido/delete', (req, res) => {
  const { id_pedido } = req.body;
  db.query('DELETE FROM tbpedido WHERE id_pedido = ?', [id_pedido], (erro) => {
    if (erro) {
      return res.send(erro);
    }
    res.redirect('/adm');
  });
});

module.exports = router;