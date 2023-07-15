import "./propertyList.css"
import Room from "../../images/room.jpg";
const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src={Room} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Room} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>2333 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Room} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>2313 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Room} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>2332 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Room} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>2313 hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
