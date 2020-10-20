import React from "react";

import MenuItem from "../menu-item/menu-item.component.jsx";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from "./directory.styles";
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
