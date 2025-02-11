import { AtRule, Properties } from 'csstype';

type CSSVarFunction = `var(--${string})` | `var(--${string}, ${string | number})`;

declare const simplePseudoMap: {
    readonly ':-moz-any-link': true;
    readonly ':-moz-full-screen': true;
    readonly ':-moz-placeholder': true;
    readonly ':-moz-read-only': true;
    readonly ':-moz-read-write': true;
    readonly ':-ms-fullscreen': true;
    readonly ':-ms-input-placeholder': true;
    readonly ':-webkit-any-link': true;
    readonly ':-webkit-full-screen': true;
    readonly '::-moz-placeholder': true;
    readonly '::-moz-progress-bar': true;
    readonly '::-moz-range-progress': true;
    readonly '::-moz-range-thumb': true;
    readonly '::-moz-range-track': true;
    readonly '::-moz-selection': true;
    readonly '::-ms-backdrop': true;
    readonly '::-ms-browse': true;
    readonly '::-ms-check': true;
    readonly '::-ms-clear': true;
    readonly '::-ms-fill': true;
    readonly '::-ms-fill-lower': true;
    readonly '::-ms-fill-upper': true;
    readonly '::-ms-reveal': true;
    readonly '::-ms-thumb': true;
    readonly '::-ms-ticks-after': true;
    readonly '::-ms-ticks-before': true;
    readonly '::-ms-tooltip': true;
    readonly '::-ms-track': true;
    readonly '::-ms-value': true;
    readonly '::-webkit-backdrop': true;
    readonly '::-webkit-input-placeholder': true;
    readonly '::-webkit-progress-bar': true;
    readonly '::-webkit-progress-inner-value': true;
    readonly '::-webkit-progress-value': true;
    readonly '::-webkit-resizer': true;
    readonly '::-webkit-scrollbar-button': true;
    readonly '::-webkit-scrollbar-corner': true;
    readonly '::-webkit-scrollbar-thumb': true;
    readonly '::-webkit-scrollbar-track-piece': true;
    readonly '::-webkit-scrollbar-track': true;
    readonly '::-webkit-scrollbar': true;
    readonly '::-webkit-slider-runnable-track': true;
    readonly '::-webkit-slider-thumb': true;
    readonly '::after': true;
    readonly '::backdrop': true;
    readonly '::before': true;
    readonly '::cue': true;
    readonly '::first-letter': true;
    readonly '::first-line': true;
    readonly '::grammar-error': true;
    readonly '::placeholder': true;
    readonly '::selection': true;
    readonly '::spelling-error': true;
    readonly ':active': true;
    readonly ':after': true;
    readonly ':any-link': true;
    readonly ':before': true;
    readonly ':blank': true;
    readonly ':checked': true;
    readonly ':default': true;
    readonly ':defined': true;
    readonly ':disabled': true;
    readonly ':empty': true;
    readonly ':enabled': true;
    readonly ':first': true;
    readonly ':first-child': true;
    readonly ':first-letter': true;
    readonly ':first-line': true;
    readonly ':first-of-type': true;
    readonly ':focus': true;
    readonly ':focus-visible': true;
    readonly ':focus-within': true;
    readonly ':fullscreen': true;
    readonly ':hover': true;
    readonly ':in-range': true;
    readonly ':indeterminate': true;
    readonly ':invalid': true;
    readonly ':last-child': true;
    readonly ':last-of-type': true;
    readonly ':left': true;
    readonly ':link': true;
    readonly ':only-child': true;
    readonly ':only-of-type': true;
    readonly ':optional': true;
    readonly ':out-of-range': true;
    readonly ':placeholder-shown': true;
    readonly ':read-only': true;
    readonly ':read-write': true;
    readonly ':required': true;
    readonly ':right': true;
    readonly ':root': true;
    readonly ':scope': true;
    readonly ':target': true;
    readonly ':valid': true;
    readonly ':visited': true;
};
type SimplePseudos = keyof typeof simplePseudoMap;

interface ContainerProperties {
    container?: string;
    containerType?: 'size' | 'inline-size' | (string & {});
    containerName?: string;
}
type CSSTypeProperties = Properties<number | (string & {})> & ContainerProperties;
type CSSProperties = {
    [Property in keyof CSSTypeProperties]: CSSTypeProperties[Property] | CSSVarFunction | Array<CSSVarFunction | CSSTypeProperties[Property]>;
};
interface CSSKeyframes {
    [time: string]: CSSProperties;
}
type CSSPropertiesWithVars = CSSProperties & {
    vars?: {
        [key: string]: string;
    };
};
type PseudoProperties = {
    [key in SimplePseudos]?: CSSPropertiesWithVars;
};
type CSSPropertiesAndPseudos = CSSPropertiesWithVars & PseudoProperties;
type Query<Key extends string, StyleType> = {
    [key in Key]?: {
        [query: string]: Omit<StyleType, Key>;
    };
};
type MediaQueries<StyleType> = Query<'@media', StyleType>;
type FeatureQueries<StyleType> = Query<'@supports', StyleType>;
type ContainerQueries<StyleType> = Query<'@container', StyleType>;
type Layers<StyleType> = Query<'@layer', StyleType>;
interface AllQueries<StyleType> extends MediaQueries<StyleType & AllQueries<StyleType>>, FeatureQueries<StyleType & AllQueries<StyleType>>, ContainerQueries<StyleType & AllQueries<StyleType>>, Layers<StyleType & AllQueries<StyleType>> {
}
type WithQueries<StyleType> = StyleType & AllQueries<StyleType>;
interface SelectorMap {
    [selector: string]: CSSPropertiesWithVars & WithQueries<CSSPropertiesWithVars>;
}
interface StyleWithSelectors extends CSSPropertiesAndPseudos {
    selectors?: SelectorMap;
}
type StyleRule = StyleWithSelectors & WithQueries<StyleWithSelectors>;
type GlobalStyleRule = CSSPropertiesWithVars & WithQueries<CSSPropertiesWithVars>;
type GlobalFontFaceRule = Omit<AtRule.FontFaceFallback, 'src'> & Required<Pick<AtRule.FontFaceFallback, 'src'>>;
type CSSStyleBlock = {
    type: 'local';
    selector: string;
    rule: StyleRule;
};
type CSSFontFaceBlock = {
    type: 'fontFace';
    rule: GlobalFontFaceRule;
};
type CSSKeyframesBlock = {
    type: 'keyframes';
    name: string;
    rule: CSSKeyframes;
};
type CSSSelectorBlock = {
    type: 'selector' | 'global';
    selector: string;
    rule: GlobalStyleRule;
};
type CSSLayerDeclaration = {
    type: 'layer';
    name: string;
};
type CSS = CSSStyleBlock | CSSFontFaceBlock | CSSKeyframesBlock | CSSSelectorBlock | CSSLayerDeclaration;
type FileScope = {
    packageName?: string;
    filePath: string;
};
interface Composition {
    identifier: string;
    classList: string;
}
type CustomIdentFunction = (params: {
    hash: string;
    filePath: string;
    debugId?: string;
    packageName?: string;
}) => string;
type IdentOption = 'short' | 'debug' | CustomIdentFunction;
interface Adapter {
    appendCss: (css: CSS, fileScope: FileScope) => void;
    registerClassName: (className: string, fileScope: FileScope) => void;
    registerComposition: (composition: Composition, fileScope: FileScope) => void;
    markCompositionUsed: (identifier: string) => void;
    onBeginFileScope?: (fileScope: FileScope) => void;
    onEndFileScope: (fileScope: FileScope) => void;
    getIdentOption: () => IdentOption;
}

declare const mockAdapter: Adapter;
declare const setAdapterIfNotSet: (newAdapter: Adapter) => void;
declare const setAdapter: (newAdapter: Adapter) => void;
declare const removeAdapter: () => void;
declare const appendCss: Adapter['appendCss'];
declare const registerClassName: Adapter['registerClassName'];
declare const registerComposition: Adapter['registerComposition'];
declare const markCompositionUsed: Adapter['markCompositionUsed'];
declare const onBeginFileScope: NonNullable<Adapter['onBeginFileScope']>;
declare const onEndFileScope: Adapter['onEndFileScope'];
declare const getIdentOption: Adapter['getIdentOption'];

export { appendCss, getIdentOption, markCompositionUsed, mockAdapter, onBeginFileScope, onEndFileScope, registerClassName, registerComposition, removeAdapter, setAdapter, setAdapterIfNotSet };
