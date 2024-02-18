import React, { useRef, useEffect, useState } from 'react';
import './styles.css'

const Index = ({ variables }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [name, setName] = useState("");
  const [block, setBlock] = useState(0);
  const [apartment, setApartment] = useState(0);
  const [urlImg, setUrlImg] = useState<string | null>(null);
  const [expirationDate, setExpirationDate] = useState<string>('');


  useEffect(() => {
    const setVariable = () => {
      if (variables && variables.length >= 4) {
        setName(prevName => variables[0] || prevName);
        setBlock(prevBlock => variables[1] || prevBlock);
        setApartment(prevApartment => variables[2] || prevApartment);
        setUrlImg(prevUrlImg => variables[3] instanceof File ? URL.createObjectURL(variables[3]) : prevUrlImg);
      }
    };

    const currentDate = new Date();
    const futureYear = currentDate.getFullYear() + 1;
    const futureDate = new Date(futureYear, currentDate.getMonth(), currentDate.getDate());

    const formattedFutureDate = futureDate.toLocaleDateString('pt-BR');

    setExpirationDate(formattedFutureDate)

    setVariable();
  }, [variables]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#84fe98'; 
    ctx.fillRect(0, 0, 800, 500);


    const logoX = 0;
    const logoY = 5;
    const logo = new Image();
    logo.src = './LOGO.png';
    logo.onload = () => {
      ctx.fillStyle = '#fff';
      ctx.drawImage(logo, logoX, logoY);
    }

    if (urlImg) {
      const img = new Image();
      img.src = urlImg;
      img.onload = () => {
        ctx.fillStyle = '#fff';
        ctx.drawImage(img, 50, 200, 200, 200);
      };
    }

    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';

    ctx.textAlign = 'left';
    ctx.fillText(`Nome: ${name}`, 300, 230);
    ctx.fillText(`Bloco: ${block}`, 300, 270);
    ctx.fillText(`Apartamento: ${apartment}`, 300, 310);
    ctx.fillText(`Valido até: ${expirationDate}`, 300, 350);


    ctx.beginPath();
    ctx.moveTo(50, 450);
    ctx.lineTo(750, 450);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillText('Assinatura', 400, 480);

  }, [name, block, apartment, urlImg]);

  return <div className='carteirinha'>
    <canvas ref={canvasRef} width={800} height={500} />
  </div>;
};

export default Index;
