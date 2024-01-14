import Alert from "./components/Alert";
import Button from "./components/Button";
import GameGrid from "./components/GameGrid";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
    const items = ["New york", "Tokyo", "Dhaka"];
    const handleSelectedItem = (item: string) => {
        console.log(item);
    };
    const [showAlert, setShowAlert] = useState(false);
    return (
        <>
            <ListGroup
                items={items}
                heading="cities"
                onSelectItem={handleSelectedItem}
            />
            {showAlert && <Alert onClose={()=> setShowAlert(false)}/>}
            <Button onClick={() => setShowAlert(true)}>My button</Button>
            <GameGrid/>
        </>
    );
}

export default App;
