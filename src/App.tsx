import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Title } from './components/Title';
import { QRCodeContainer } from './styled.app';

const App: React.FC = () => {
  const [link, setLink] = useState<string>('')

  function handleClickGenerateQRCode(){
    const img = document.querySelector('img') as HTMLImageElement
  
    img.src = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${link}`
  }

  return(
    <div>
      <Title text='Projeto Gerador de QRCode' />
      <Input value={link} onChange={(e) => {setLink(e.target.value)}} placeholder="Insira seu link aqui ..." />
      <Button onClick={handleClickGenerateQRCode} />
      
      <QRCodeContainer>
        <img src="" />
      </QRCodeContainer>
    </div>
  );
};

export default App;