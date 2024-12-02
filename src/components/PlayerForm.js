import React, { useState } from "react";

function PlayerForm() {
  const [playerData, setPlayerData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    birthDate: "",
  });

  const handleChange = (event) => {
    setPlayerData({ ...playerData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(playerData);
  };

  return (
    <div className="registration-form">
      <h1>Masukan Informasi Pemain 1</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama Pemain 1</label>
          <input type="text" id="name" name="name" value={playerData.name} onChange={handleChange} placeholder="Masukin nama pemain 1" />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Nomor Telpon</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={playerData.phoneNumber} onChange={handleChange} placeholder="Masukin nomor telpon pemain 1" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={playerData.email} onChange={handleChange} placeholder="Masukin alamat email pemain 1" />
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">Tanggal Lahir</label>
          <input type="date" id="birthDate" name="birthDate" value={playerData.birthDate} onChange={handleChange} />
        </div>

        <div className="form-buttons">
          <button type="button">Kembali</button>
          <button type="submit">Lanjut</button>
        </div>
      </form>
    </div>
  );
}

export default PlayerForm;
