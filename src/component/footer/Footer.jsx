import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">Flight finder</li>
          <li className="fListItem">Restaurant reservation</li>
          <li className="fListItem">Bookings for travel</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest Houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">All destinations</li>
          <li className="fListItem">Discover</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">All flight destinations</li>
          <li className="fListItem">Unique places to stay</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">About Azbooking</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Partner help</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Investors relations</li>
          <li className="fListItem">Corporate contact</li>
        </ul>
      </div>
      <div className="fText">Copyright &copy; 2023 Azbooking.</div>
    </div>
  );
}; 

export default Footer;
