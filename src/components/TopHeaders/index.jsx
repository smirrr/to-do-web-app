import Heart from '../../assets/heart.jpg';
const tabs = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
  {
    name: "Join",
  }
];

function TopHeaders() {
  return (
    <>

    <div className="top-headers">
    <img className='heart-icons' width='34px' height='34px' float='left' src={Heart} alt='heart'/> 

      {tabs.map((tab) => {
        return (
            tab.name==='Join' ? <button className='join-tab'>{tab.name}</button> : <button className='tab' key={tab.name}>
              {tab.name}
            </button>
        );
      })}
    </div>
    </>
  );
}
export default TopHeaders;
