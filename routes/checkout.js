const express = require('express');
const router = express.Router();
const db = require('../utils/db.js');

// Middleware para parsear JSON
router.use(express.json());

// Rota para exibir a página de checkout com os detalhes do disco
router.get('/:disco_id', (req, res) => {
    const { disco_id } = req.params;

    const sql = 'SELECT * FROM tbdisco WHERE disco_id = ?';
    
    db.query(sql, [disco_id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar disco:', err);
            return res.status(500).send('Erro ao carregar a página de checkout');
        }

        if (results.length === 0) {
            return res.status(404).send('Disco não encontrado');
        }

        res.render('checkout', { disco: results[0] });
    });
});

// Rota para processar o pedido do checkout
router.post('/:disco_id', (req, res) => {
    const { disco_id } = req.params;
    const { email, telefone, logradouro, numero, complemento, bairro, cidade, estado, precoTotal } = req.body;

    if (!email || !telefone || !logradouro || !numero || !bairro || !cidade || !estado) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    const dataPedido = new Date();

    const sqlInsertPedido = `
        INSERT INTO tbpedido 
        (email_cliente, telefone_cliente, data_pedido, logradouro, numero, complemento, bairro, cidade, estado, preco_total, disco_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sqlInsertPedido, [email, telefone, dataPedido, logradouro, numero, complemento, bairro, cidade, estado, precoTotal, disco_id], (err, result) => {
        if (err) {
            console.error('Erro ao inserir pedido:', err);
            return res.status(500).json({ error: 'Erro ao processar o pedido' });
        }

        const sqlUpdateDisco = `
            UPDATE tbdisco 
            SET vendas = vendas + 1, estoque = GREATEST(estoque - 1, 0) 
            WHERE disco_id = ? AND estoque > 0
        `;

        db.query(sqlUpdateDisco, [disco_id], (err, updateResult) => {
            if (err) {
                console.error('Erro ao atualizar disco:', err);
                return res.status(500).json({ error: 'Erro ao atualizar o estoque' });
            }

            res.json({ success: true, message: 'Pedido realizado com sucesso!' });
        });
    });
});

module.exports = router;
