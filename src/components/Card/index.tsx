import React, { useRef, useEffect, useState } from 'react';

const Index = ({ variables }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [name, setName] = useState("");
  const [block, setBlock] = useState(0);
  const [apartment, setApartment] = useState(0);
  const [urlImg, setUrlImg] = useState<string | null>(null);

  useEffect(() => {
    const setVariable = () => {
      if (variables && variables.length >= 4) {
        setName(prevName => variables[0] || prevName);
        setBlock(prevBlock => variables[1] || prevBlock);
        setApartment(prevApartment => variables[2] || prevApartment);
        setUrlImg(prevUrlImg => variables[3] instanceof File ? URL.createObjectURL(variables[3]) : prevUrlImg);
      }
    };

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


    const logoX = (canvas.width - 200) / 2;
    const logoY = 50;
    const logo = new Image();
    logo.src = './vvn.png';
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
    ctx.fillText(`Nome: ${name}`, 300, 300);
    ctx.fillText(`Bloco: ${block}`, 300, 330);
    ctx.fillText(`Apartamento: ${apartment}`, 300, 360);

    ctx.beginPath();
    ctx.moveTo(50, 450);
    ctx.lineTo(750, 450);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillText('Assinatura', 400, 480);

  }, [name, block, apartment, urlImg]);

  return <canvas ref={canvasRef} width={800} height={500} />;
};

export default Index;
