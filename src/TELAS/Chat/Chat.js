<<<<<<< HEAD
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from 'react';
import './Chat.css';
import { Box } from '@mui/material/';
import TextField from '@mui/material/TextField';
import fotoPerfil from '../../assets/fotoPerfil.jpg';

function Chat() {
  return (
    <>
    <div className='fundo'>
        
      <div className="chat">CHAT</div>
        <div className="container">
          <Stack direction="row" spacing={2}> <Avatar img src={fotoPerfil} /><h3>Dra. Julia Pessetto</h3></Stack>

          <div className='text'>
            <Box component="caixa" sx={{ '& > :not(style)': { m: 1, width: '29ch' }, }}
              noValidate autoComplete="off"><TextField label="Digite aqui sua mensagem..." /></Box>
          </div>
        </div>
           <div className='footer'> Footer </div>
        </div>

    </>

  );
}

export default Chat;


=======

function Chat (){
    return(
        <>

        </>
    )
}

export default Chat;
>>>>>>> 10eaba776ab34084a661621861719b0539d1f35a
