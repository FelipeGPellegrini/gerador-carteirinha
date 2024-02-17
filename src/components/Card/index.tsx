import React, { useRef, useEffect } from 'react';

const index = ({variables}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

   
    ctx.fillStyle = '#f0f8f7'; 
    ctx.fillRect(0, 0, 800, 500); 

    // Desenhar imagem
    const img = new Image();
    img.src = './vite.svg'; 
    img.onload = () => {
      
      ctx.fillStyle = '#fff';
      ctx.drawImage(img, 50, 50, 200, 200);
    };

    
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';

    
    ctx.fillText('Nome: ', 300, 100);
    ctx.fillText('Bloco:', 300, 150);
    ctx.fillText('Apartamento:', 300, 200);

    
    ctx.beginPath();
    ctx.moveTo(50, 350); 
    ctx.lineTo(750, 350); 
    ctx.stroke();

    ctx.fillText('Assinatura', 400, 300);
  }, []);

  return <canvas ref={canvasRef} width={800} height={500} />;
};

export default index;
