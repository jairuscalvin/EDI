import { useState } from 'react';

export default function Form() {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  let handleTotal = (e) => {
    let total = e.target.total
    let hitung = e.target.harga - (e.target.diskon / 100) * e.target.harga
    setInputs(values => ({...values, [total]: hitung}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Nama Employee " + inputs.user + "  Nomor Barang " + inputs.no_barang + "  Nama Barang " + inputs.nama_barang + "  Nomor Barang " + inputs.no_barang + "  Harga Rp" + inputs.harga + "  Diskon " + inputs.diskon + "%   Total : " + inputs.total);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Employee / Users:
            <input 
                type="text" 
                name="user" 
                value={inputs.user || ""} 
                onChange={handleChange}
            />
        </label> 
        <br></br>
        <label>No Barang:
            <input 
            type="number" 
            name="no_barang" 
            value={inputs.no_barang || ""} 
            onChange={handleChange}
            />
        </label>
        <br></br>
        <label>Nama Barang:
            <input 
                type="text" 
                name="nama_barang" 
                value={inputs.nama_barang || ""} 
                onChange={handleChange}
            />
        </label> 
        <br></br>
        <label>Harga:
            <input 
            type="float" 
            name="harga" 
            value={inputs.harga || ""} 
            onChange={handleChange}
            />
        </label>
        <label>Diskon:
            <input 
            type="number" 
            name="diskon" 
            value={inputs.diskon || ""} 
            onChange={handleChange}
            />
        </label>
        <br></br>
        <label>Total:
            <input 
            type="float" 
            name="total" 
            value={handleTotal}
            readOnly
            />
        </label>
        <br></br>
        <input type="submit"/>
    </form>
  )
}