import { useState } from "react";
import Menu from "../Menu/Menu";

interface IWrapperLayout {
  children: React.ReactNode;
}

const WrapperLayout: React.FC<IWrapperLayout> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="p-12 pb-0">
        <Menu close={menuOpen} handleClose={handleCloseMenu} />
      </div>
      <main className={`main ${menuOpen ? 'shifted' : ''} p-12`}>
        {children}
      </main>
    </>
  )
}

export default WrapperLayout;