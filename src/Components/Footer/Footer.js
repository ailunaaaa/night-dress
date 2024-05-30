import Menu from '../Menu/Menu';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_in flex">
          <div className='footer_info'>
            <h4 className="footer_tit">HELP & INFORMATION</h4>
            <Menu />
          </div>
          <div className='footer_info'>
            <h4 className="footer_tit">TYPES OF DRESSES</h4>
            <ul className="footer_list">
              <li><a href="">Ball Gown</a></li>
              <li><a href="">Mermaid Dress</a></li>
              <li><a href="">Empire Waist Dress</a></li>
              <li><a href="">A-Line Dress</a></li>
            </ul>
          </div>
          <div className="footer_imgs">
            <div className="h4 footer_tit">
              follow us
            </div>
            <div className="footer_icons flex">
              <a href="" className="footer_ic footer_ic__tiktok">tiktok</a>
              <a href="" className="footer_ic footer_ic__inst">inst</a>
              <a href="" className="footer_ic footer_ic__fb">fb</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer