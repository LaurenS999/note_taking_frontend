import "../../styles/colorPicker.css"

function ColorPicker({color, setColor})
{
    return (
    <div className='ColorPickerContainer'>
        <label htmlFor="categoryColor" className="colorLabel">Pilih Warna Kategori: </label>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)}

          className='ColorPicker'
        />   
    </div>
  );
} 
export default ColorPicker;