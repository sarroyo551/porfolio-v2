import React, {useState} from 'react'


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className='content'>
      <h1>Contact</h1>
         <form action='mailto:santi.arroyo551@gmail.com' method='post'>
            <div className='inputContainer'>
                <label for='name'>Name: </label>
                <input type='text' name='name' id='name' onChange={ (e) => setName(e.target.value)}/>
            </div>
            <div className='inputContainer'>
              <label for='email'>Email: </label>
              <input type='email' name='email' id='email' onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div className='inputContainer'>
              <label for='message'>Message: </label>
              <textarea name='message' id='message' rows='5' cols='30' onChange={ (e) => setMessage(e.target.value)}/>
            </div>
            <button type='submit'>Send</button>
         </form>
    </div>
  )
}

export default Contact