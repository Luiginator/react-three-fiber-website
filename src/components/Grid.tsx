import React from "react";
import cn from "classnames";

export function Column(props) {
  return <div className={props.className}>{props.children}</div>;
}

export function Container(props) {
  return (
    <div className={cn("container", props.className)}>{props.children}</div>
  );
}

export function Row(props) {
  return <div className={`${props.className} row`}>{props.children}</div>;
}
