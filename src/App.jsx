import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Surat, Doa, JadwalSholat, SharedLayout } from './pages/Main';
import { Landing, Error } from './pages';
import OpenSurat from './components/OpenSurat';
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-MB2XC1PZDH";
ReactGA.initialize(GA_MEASUREMENT_ID);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/*" element={<Error />} />

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Surat />} />
          <Route path="surat/:id" element={<OpenSurat />} />
          <Route path="doa" element={<Doa />} />
          <Route path="jadwal-sholat" element={<JadwalSholat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
