import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selector";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectHidden(state),
// });

//ALternate way createStructuredSelector will automatic pass upmost state to property
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
