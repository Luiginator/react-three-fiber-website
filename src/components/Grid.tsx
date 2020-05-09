import React from "react";

export function Column(props) {
  return <div className={props.className}>{props.children}</div>;
}

export function Container(props) {
  return <div className="container">{props.children}</div>;
}

export function Row(props) {
  return <div className={`${props.className} row`}>{props.children}</div>;
}
