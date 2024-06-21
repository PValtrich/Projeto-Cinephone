import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './database.js';
const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();

const router = express.Router()

router.post('/login', async (req, res)=>{
    try {
        const { email, senha } = req.body;
        if(email != null && email != "" && senha != null && senha != "")
        {
            const { recordset } = await pool.query`select id, nome from usuario where email = ${email} and senha = ${senha}`;
            console.log(recordset)
            if(recordset.length == 0)
            {
                return res.status(204).json('usuario ou senha incorreta')
            }

            return res.status(200).json(recordset)
        }
            return res.status(400).json("bad request")
    } 
    catch (error){
        console.log(error)
        return res.status(500).json('Error on server!')
    }
})

router.post('/user/novo', async(req, res)=>{
    try{
        const {nome, email, senha} = req.body;
        console.log(nome, email, senha)
        if(nome != null && nome != "" && email != null && email != "" &&
            senha != null && senha != "")
        {
            await pool.query`insert into Usuario values(${nome},${email},${senha})`
            return res.status(200).json('Cadastrado com sucesso')
        }
        else{
           return res.status(400).json("bad request") 
        }
         
    }
    catch(error){
        //2627 é o code number padrão no SQL Server para violação de
        //registro unico, nesse caso a pessoa esta tentando inserir um email ja cadastrado
        if(error.number == 2627)
        {
            return res.status(409).json('Email ja cadastrado!')
        }
        return res.status(500).json('Error on server!')
    }
})

router.get('/filme/:id', async (req, res)=>{
    const { id } = req.params;
    try {
        const {recordset} = await pool.query`select * from filmes where id = ${id}`
        console.log(recordset[0]);
        return res.status(200).json(recordset[0])
    } catch (error) {
        return res.status(500).json('error...')
    }
})

router.get('/filmes/cidade/:cidade', async (req, res)=>{
    const { cidade } = req.params;
    try {
        const {recordset} = await pool.query`select * from filmescinema where cidade = ${cidade}`
        return res.status(200).json(recordset)
    } catch (error) {
        return res.status(500).json('error...')
    }
})

router.get('/sessao/:idU', async (req, res)=>{
    const { idU } = req.params;
    try {
        const {recordset} = await pool.query`select f.nome, f.id, s.horario, us.id_sessao from usuario_sessao as us
        inner join sessoes as s
        on s.id = us.id_sessao
        inner join filmescinema as f
        on f.id = s.filmeid
        where us.id_usuario = ${idU}`
        console.log(recordset);
        return res.status(200).json(recordset)
    } catch (error) {
        return res.status(500).json('error...')
    }
})

router.post('/sessao/nova', async(req, res)=>{
    try{
        const {idu,ids} = req.body;
        console.log(idu,ids)
            await pool.query`insert into usuario_sessao values(${idu},${ids})`
            return res.status(200).json('Cadastrado com sucesso')
        
    }
    catch(error){
        return res.status(500).json('Error on server!')
    }
})

router.delete('/sessao/delete', async(req, res)=>{
    try {
        const {idu,ids} = req.body;
        console.log(idu,ids)
            await pool.query`delete from usuario_sessao where id_usuario = ${id} and id_sessao = ${ids}`
            return res.status(200).json('Cadastrado com sucesso')
    } catch (error) {
        
    }
})

export default router