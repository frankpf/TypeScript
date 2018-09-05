/// <reference path="fourslash.ts" />

// @jsx: preserve

// @Filename: /a.tsx
////declare namespace JSX {
////    interface Element {}
////    interface IntrinsicElements {
////        div: {
////            /** Doc */
////            foo: string
////        }
////    }
////}
////
////<div /**/></div>;

const exact: FourSlashInterface.ExpectedCompletionEntry = {
    name: "foo",
    text: "(JSX attribute) foo: string",
    documentation: "Doc",
    kind: "JSX attribute",
};
verify.completions({ marker: "", exact });
edit.insert("f");
verify.completions({ exact });
