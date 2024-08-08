import PropTypes from 'prop-types';

const Card = (props) => {
  console.log(props);
    return (
      <div className="w-[300px] h-[300px] bg-indigo-200 rounded m-5 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold">{props.user.name}</h2>
          <p className="mt-2">{props.user.mobile}</p>
        </div>
      </div>
    );
  };

  // Define PropTypes for the component
Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired
  }).isRequired
};
  
  export default Card;
  
