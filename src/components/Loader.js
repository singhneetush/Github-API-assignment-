const Loader = ({ text }) => {
  return (
    <div className='user-detail-wrapper'>
      <div className='loader'>{text ? text : 'Loading, Please Wait!'}</div>
    </div>
  );
};
export default Loader;
