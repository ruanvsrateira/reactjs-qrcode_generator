import  axios from 'axios';
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Title } from './components/Title'; 
import { ToolBar } from './components/ToolBar';
import { QRCodeContainer } from './styled.app';

const App: React.FC = () => {
  const [link, setLink] = useState<string>('');
  const [showQRCode, setShowQRCode] = useState<boolean>(false); 

  const img = document.querySelector('img') as HTMLImageElement;

  function handleClickGenerateQRCode(){
    img.src = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${link}`
    setShowQRCode(true);
  };

  function handleClickDownloadQRCode() {
    axios({
      url: `${img.src}`,
      method: 'GET',
      responseType: 'blob'
    })
      .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');

            link.href = url;
            link.setAttribute('download', 'QRcode.jpg');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      })
  };

  return(
    <div>
      <Title text='Projeto Gerador de QRCode' />
      <Input value={link} onChange={(e) => {setLink(e.target.value)}} placeholder="Insira seu link aqui ..." />
      <Button onClick={handleClickGenerateQRCode} />
      <QRCodeContainer>
        <img src="" />
        {showQRCode ? (<ToolBar onClick={handleClickDownloadQRCode} />) : ""}
      </QRCodeContainer>
    </div>
  );
};

export default App;