import { red } from "colors";
import Dice from "./Dice";
function App(){
return(
  <>
<Dice dice={[3, 6, 1]} />
<Dice dice={[4, 3, 7]} color="blue"/>
<Dice dice={[9, 1, 3]} color="red"/>
  </>
);
}

export default App;