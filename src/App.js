import './App.css';

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '50px'}}>
      <button onClick={()=>{alert()}}>Click me!</button>

      <input type="checkbox"/>

      <input type="radio"/>

      <select>
        <option>
          one
        </option>

        <option>
          two
        </option>

        <option>
          three
        </option>
      </select>

      <input></input>

      <textarea></textarea>
    </div>
  );
}

export default App;
