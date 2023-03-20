import React from 'react';
declare type Props = {
    /**
     * Whether the element should be visible initially or not.
     * Useful e.g. for always setting the first N items to visible.
     * Default: false
     */
    initialVisible?: boolean;
    /** An estimate of the element's height */
    defaultHeight?: number;
    /** How far outside the viewport in pixels should elements be considered visible?  */
    visibleOffset?: number;
    /** Should the element stay rendered after it becomes visible? */
    stayRendered?: boolean;
    root?: HTMLElement | null;
    /** E.g. 'span', 'tbody'. Default = 'div' */
    rootElement?: string;
    rootElementClass?: string;
    rootElementId?: string;
    /** E.g. 'span', 'tr'. Default = 'div' */
    placeholderElement?: string;
    placeholderElementClass?: string;
    children: React.ReactNode;
};
declare const RenderIfVisible: ({ initialVisible, defaultHeight, visibleOffset, stayRendered, root, rootElement, rootElementClass, rootElementId, placeholderElement, placeholderElementClass, children, }: Props) => React.DOMElement<{
    children: JSX.Element;
    ref: React.RefObject<HTMLDivElement>;
    className: string;
    id: string;
}, HTMLDivElement>;
export default RenderIfVisible;
