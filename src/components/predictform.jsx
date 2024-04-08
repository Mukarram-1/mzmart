import React from "react";
import './predictform.css'
export default function Predictform() {
  return (
    <>
      <div className="form-container">
        <h2 style={{ textAlign: "center" }}>Enter Laptop Specifications</h2>
        <form>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <select id="brand" name="brand">
              <option value="acer">Acer</option>
              <option value="asus">Asus</option>
              <option value="dell">Dell</option>
              <option value="hp">HP</option>
              <option value="lenovo">Lenovo</option>
              <option value="msi">MSI</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type">
              <option value="gaming">Gaming</option>
              <option value="business">Business</option>
              <option value="ultrabook">Ultrabook</option>
              <option value="workstation">Workstation</option>
              <option value="convertible">Convertible</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ram">RAM (GB):</label>
            <select id="ram" name="ram">
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" name="weight" step="0.1" />
          </div>
          <div className="form-group">
            <label htmlFor="touchscreen">Touch Screen:</label>
            <input type="checkbox" id="touchscreen" name="touchscreen" />
          </div>
          <div className="form-group">
            <label htmlFor="ips">IPS:</label>
            <input type="checkbox" id="ips" name="ips" />
          </div>
          <div className="form-group">
            <label htmlFor="screenSize">Screen Size:</label>
            <select id="screenSize" name="screenSize">
              <option value="13">13"</option>
              <option value="15">15"</option>
              <option value="17">17"</option>
              <option value="18">18"</option>
              <option value="21">21"</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="resolution">Resolution:</label>
            <select id="resolution" name="resolution">
              <option value="1920x1080">1920x1080</option>
              <option value="1336x768">1336x768</option>
              <option value="2560x1440">2560x1440</option>
              <option value="3840x2160">3840x2160</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cpu">CPU:</label>
            <select id="cpu" name="cpu">
              <option value="intelCorei3">Intel Core i3</option>
              <option value="intelCorei5">Intel Core i5</option>
              <option value="intelCorei7">Intel Core i7</option>
              <option value="intelCorei9">Intel Core i9</option>
              <option value="amdRyzen3">AMD Ryzen 3</option>
              <option value="amdRyzen5">AMD Ryzen 5</option>
              <option value="amdRyzen7">AMD Ryzen 7</option>
              <option value="amdRyzen9">AMD Ryzen 9</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="hdd">HDD (GB):</label>
            <select id="hdd" name="hdd">
              <option value="0">0</option>
              <option value="128">128</option>
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
              <option value="2048">2048</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ssd">SSD (GB):</label>
            <select id="ssd" name="ssd">
              <option value="0">0</option>
              <option value="128">128</option>
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gpu">GPU:</label>
            <select id="gpu" name="gpu">
              <option value="nvidiaGTX1650">Nvidia GTX 1650</option>
              <option value="nvidiaGTX1660">Nvidia GTX 1660</option>
              <option value="nvidiaGTX1660Ti">Nvidia GTX 1660 Ti</option>
              <option value="nvidiaRTX2060">Nvidia RTX 2060</option>
              <option value="nvidiaRTX2070">Nvidia RTX 2070</option>
              <option value="nvidiaRTX2080">Nvidia RTX 2080</option>
              <option value="nvidiaRTX2080Ti">Nvidia RTX 2080 Ti</option>
              <option value="amdRadeonRX5700">AMD Radeon RX 5700</option>
              <option value="amdRadeonRX5700XT">AMD Radeon RX 5700 XT</option>
              <option value="amdRadeonRX6700XT">AMD Radeon RX 6700 XT</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="os">OS:</label>
            <select id="os" name="os">
              <option value="windows10">Windows 10</option>
              <option value="windows11">Windows 11</option>
              <option value="macOS">macOS</option>
              <option value="linux">Linux</option>
              {/* Add more options as needed */}
            </select>
          </div>
        
        </form>
      </div>
     <div> <button type="submit" className="predict-button">
            Predict Price
          </button></div>
    </>
  );
}
