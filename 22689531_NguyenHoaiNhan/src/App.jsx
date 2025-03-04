import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
return (
<Router>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users/:id" element={<UserDetail/>}></Route>
    <Route path="*" element={<NotFound />} />
</Routes>
</Router>
);
}
export default App;