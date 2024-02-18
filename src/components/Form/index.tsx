import React, { useState } from 'react'
import './styles.css'


const Index = ({onSubmit}) => {

    const [name, setName] = useState<string | null>(null)
    const [block, setBlock] = useState<number | null>(null)
    const [apartment, setApartment] = useState<number | null>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        }
    };


    const enviarInformacoes = () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        submitVariables()
      }, 1000);
    };

    const submitVariables = () => {
        onSubmit(name, block, apartment, selectedFile)
    }

    return (
        <div className='containerForm'>
            <h2>INFORMAÇÕES</h2>
            <input type="text" placeholder='Nome...' onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder='Bloco...' onChange={(e) => setBlock(Number(e.target.value))}/>
            <input type="text" placeholder='Apartamento...' onChange={(e) => setApartment(Number(e.target.value))}/>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={enviarInformacoes}>Criar</button>
            {isLoading && <div className="spinner"></div>}
        </div>
    )
}

export default Index