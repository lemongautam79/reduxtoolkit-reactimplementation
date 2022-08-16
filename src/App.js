import CakeView from "./features/cake/CakeView";
import DonutView from "./features/donut/DonutView";
import IceCreamView from "./features/icecream/IceCreamView";
import SandWichView from "./features/sandwich/SandWichView";
import UserView from "./features/user/UserView";

const App = () => {
  return ( 
    <div>
      <CakeView/>
      <DonutView/>
      <IceCreamView/>
      <SandWichView/>
      <UserView/>
    </div>
   );
}
 
export default App;