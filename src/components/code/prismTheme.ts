import { css } from "styled-components";

export const prismTheme = css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #f2f2f7;
    background: none;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #9294a3;
  }

  .token.punctuation {
    color: #9294a3;
  }

  .token.selector,
  .token.tag,
  .token.namespace,
  .token.deleted {
    color: #75f7a6;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.attr-name,
  .token.boolean,
  .token.number,
  .token.function {
    color: #0e9aa7;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #7f0000;
  }

  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #f6cd61;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7bc043;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #ff8d58;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }

  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre[class*="language-"].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #8c9cad;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #8c9cad;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
`;
