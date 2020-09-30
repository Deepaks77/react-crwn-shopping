import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import { withRouter } from "react-router-dom";
const CollectionPreview = ({ title, items, history, match, routerName }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.path}/${routerName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((f, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
