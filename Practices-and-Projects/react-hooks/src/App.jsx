import Comp from './comps/Comp'
import Comp2 from "./useContext/Comp";
import Comp3 from "./useReducer/Comp";
import Comp4 from "./useS/Comps";
import Compon from "./Examples/Compon"
import Comp5 from "./Form-hook/Comp";
import Comp6 from "./ClassComp/Comp";
import { Route, Routes } from 'react-router-dom';
import All from './All';

function App() {


  return (
    <>
      <section className='main'>
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/useState' element={<Comp />} />
          <Route path='/useContext' element={<Comp2 />} />
          <Route path='/useReducer' element={<Comp3 />} />

          <Route path='/usesOther' element={<Comp4 />}>
            <Route index element={<Comp4 />} />
            <Route path='/usesOther/:id' element={<Comp4 />} />
          </Route>

          <Route path='/useExample' element={<Compon />} />
          <Route path='/react-hook' element={<Comp5 />} />
          <Route path='/class-comp' element={<Comp6 />} />

        </Routes>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
