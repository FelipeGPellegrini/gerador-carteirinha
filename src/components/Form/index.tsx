import React, { useState } from 'react'


const index = ({onSubmit}) => {


    const [name, setName] = useState<string | null>(null)
    const [block, setBlock] = useState<number | null>(null)
    const [apartment, setApartment] = useState<number | null>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        }
    };

    const submitVariables = () => {
        onSubmit(name, block, apartment)
    }

    return (
        <div>
            <input type="text" placeholder='Nome...' onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder='Bloco...' onChange={(e) => setBlock(Number(e.target.value))}/>
            <input type="text" placeholder='Apartamento...' onChange={(e) => setApartment(Number(e.target.value))}/>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {selectedFile && (
                <div>
                    <img src={URL.createObjectURL(selectedFile)} alt="Imagem carregada" style={{ maxWidth: '100%' }} />
                </div>
            )}
            <button onClick={submitVariables}>Exec</button>
        </div>
    )
}

export default index