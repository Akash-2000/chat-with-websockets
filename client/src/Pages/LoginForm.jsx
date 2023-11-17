import React from 'react'
import  Container  from '@mui/material/Container'
import Input from '../components/Input'
export default function LoginForm() {
  return (
   <Container maxWidth='sm'>
        <Input 
         label="name"
          type="text"
          id="name"
          placeholder="type your name..."
          />
           <Input
          label="password"
          type="password"
          id="password"
          placeholder="type your password..."
        />
   </Container>
  )
}
