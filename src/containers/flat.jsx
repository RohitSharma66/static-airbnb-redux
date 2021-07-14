import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

const Flat = (props) => {
  const handleClick = () => {
    props.selectFlat(props.flat);
  };
  const style = {
    backgroundImage: `url(${props.flat.imageUrl})`
  };

  let classes = "flat card-product";
  if (props.flat === props.selectedFlat) {
    classes += " selected";
  }

  return (
    <div className={classes} style={style} onClick={handleClick}>
      <div className="card-product-infos">
        <h2>{props.flat.name}</h2>
        <p>{props.flat.price} {props.flat.priceCurrency}
        </p>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
