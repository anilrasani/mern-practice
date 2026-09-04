
import './App.css'

function App() {
    return (
        <div>
            <h2>Employee App</h2>

            <form>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Phone</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Address</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Interests</label>
                    <input type="text" />
                </div>

                <div>
                    <label>App Used</label>
                    <input type="text" />
                </div>

                <button type="submit">
                    Save Employee
                </button>
            </form>
        </div>
    );
}


export default App
